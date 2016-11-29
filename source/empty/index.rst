Empty
=====

* Sources link: https://github.com/pluginsGLPI/empty
* Download: *not relevant*

This plugins does... nothing. Really!

This is designed to be a start point for writing plugins, with very minimal defaults usefull scripts, and some advices. If you're looking for plugins possibilities, take a look at :doc:`the example plugin <../example/index>`.

Create a new plugin
-------------------

An utility script to create a new plugin - ``plugin.sh`` is provided. You will call it with a plugin name, a version, an optionally the path where your want it to be created:

.. code-block:: bash

   $ ./plugin.sh MyGreatPlugin 0.0.1

The script will sanityze and lowercase the name you provided, copy the templates files into the new directory, and then make some replacements.

Using the script without destination parameter, it will create you directory plugin, ``mygreatplugin`` just beside its own directory. Otherwise, it would create the new directory in the specified path:

.. code-block:: bash

   $ ./plugin.sh MyGreatPlugin 0.0.1 /path/to/glpi/plugins/

Features
--------

Coding standards
^^^^^^^^^^^^^^^^

A `PHPCodeSniffer <http://pear.php.net/package/PHP_CodeSniffer>`_ ruleset, based on core's GLPi is provided as ``tools/phpcs-rules.xml``.

To check coding standards, just run:

.. code-block:: bash

   $ phpcs -p --ignore=vendor --standard=tools/phpcs-rules.xml .

.. note::

   The above command will ignore ``vendor`` directory for wich we do not want to check standards. If there are other directories you want to exclude, adapt the command.

   Remember to also adapt the :ref:`automated checks configuration file <empty_travis>` if you do so.

.. _empty_travis:

Automated checks
^^^^^^^^^^^^^^^^

For convenience; a ``.travis.yml`` file is also provided, that is setup to:

* check coding standards,
* run on a bunch on different configuration

You still have to enable travis-ci builds from the website in order to activate automated tests.

Of course, the ``.travis.yml`` file can be pimped; you can run unit tests, create/update a database, activate notifications, and so on. Refer to the `Travis-CI documentation <https://docs.travis-ci.com/>`_ to know more.

Minifying CSS ans JS
^^^^^^^^^^^^^^^^^^^^

A convenient script, using `Robo.li <http://robo.li>`_ is provided. You'll find two files related:

* ``RoboFilePlugin.php`` in which are declared common usefull methods you may want to use (see below);
* ``RoboFile.php`` an empty class, which extends ``RoboFilePlugin`` in which you can set you own stuff.

That way, you can quite easily update the common file and get your own tasks remaining the same.

To get the required libs installed, you'll have to `get composer installed <http://getcomposer.org>`_ and then run:

.. code-block:: bash

   $ composer install -o

There are three available targets:

* ``minify`` that will minify all CSS and JS files (see below),
* ``minify:css`` that will minify all css  stylesheets files in the ``css`` directory of your plugin, creating a ``.min.css`` version along with the original file,
* ``minify:js`` that will minify all javascript files in the ``js`` directory of your plugin, creating a ``.min.js`` version along with the original file.

Just choose a target, and run something like:

.. code-block:: bash

   $ ./vendor/bin/robo minify:css

.. note::

   Remember compiled files should not be commited on your repository sources. It is a release process to minify files.

   Also remember to adapt your scripts so they load your minified versions if available, and the original one otherwise :)

Translations
^^^^^^^^^^^^

GLPi and its plugins use gettext for internationnalization. Several steps are required before that can work:

1 translatable strings must be extracted from source files, a ``POT`` file will be created or updated accordingly,
2 ``PO`` files must be created or updated from the ``POT`` file,
3 ``PO`` files must be translated,
4 ``MO`` files must be compiled from the latest ``PO``.

In the ``tools`` directory, you'll find a ``extract_template.sh`` script. This is designed to extract translatable strings from your source code (see first point above).

Once it has been ran, a ``locale/mygreatplugin.pot`` file will be created/updated.

For the second and third step, you'll have to make a choice. You can use gettext tools to update your ``PO`` files and translate them using a dedicated tool, like `poedit <https://poedit.net/>`_; or you can use an online translation system like `Transifex <http://transifex.com/>`_ or `Zanata <http://zanata.org/>`_. GLPi core and many of existing plugins are translated using Transifex right now.

Once you get your updated ``PO`` files, you'll have to compile them to ``MO`` files. You can run it manually, the release script will compile them again anywways; see the :ref:`compiling MO files section <compile_mo>`.

.. _release_script:

Release script
^^^^^^^^^^^^^^

A release script is provided in ``tools/release``. This is a "simple" `Python <http://python.org>`_ script; you should just have Python installed on your system (this is instaleld by defautl on most linux distributions).

Using just the defaults, the script will try to retrieve the latest tag in your git repository, and will propose you to release it:

.. code-block:: bash

   $ ./tools/release
   Do you want to build version 1.9.5? [Yes/no] y
   Building glpi-order-1.9.5...
   Archiving GIT tag 1.9.5
   Adding vendor libraries
   $ ls dist
   glpi-order-1.9.5.tar.bz2  glpi-order-1.9.5.tar.bz2.asc

Requirements
++++++++++++

You will need a python interpreter installed as well as the following modules:

* `termcolor <https://pypi.python.org/pypi/termcolor>`_,
* `gitdb <https://github.com/gitpython-developers/gitdb>`_,
* `github <https://github.com/PyGithub/PyGithub>`_ (to check for existing versions in also in drafts, and to create github releases), unless you use the ``--nogithub`` option

If you want to get help on the script, try to run ``./tools/release -h``.

Process
+++++++

The release process will achieve the following tasks for you:

* check if the version constant is the same as the tag you've requested;
* check if a release already exists, locally, and remotely (assuming your project is hosted in the *pluginsGLPI* organization and the release is public);
* make a `git archive` of the paths that are not excluded (``.git``, ``tools``, ``tests``, ...);
* if any, install composer dependencies;
* if any, compile you ``MO`` files;
* if any, compile you CSS stylesheets and your Javascript files (using `Robo.li <http://robo.li>`_);
* create a release archive with all that; that will be available in the ``dist`` directory;
* use GPG to sign the archive.

.. note::

   The standard release process will not work on your files directly, it will make a copy in the ``dist/src`` directory before. The only exception are the :ref:`MO compiling option <compile_mo>` and the :ref:`minify option <minify>`.

.. _compile_mo:

Compiling MO files
++++++++++++++++++

The release process will automatically compile every ``PO`` file it will found in your ``locales`` directory. But you probably want the sources to contain the latests ``MO`` files, for testing purposes. The release script provide the ``--compile-mo`` (or ``-m``) to achieve that:

.. code-block:: bash

   $ ./tools/release --compile-mo

.. warning::

   The above command will work on your plugins files directly; not on a copy as does other commands but :ref:`minify <minify>`.

.. _minify:

Minifying
+++++++++

The release process will automatically minify every CSS stylesheet found into your ``css`` directory, and every javascript file found under your ``js`` directory; but for testing purposes, you may want to get them minified. The release script provide the ``--minify`` (or ``-M``) to achieve that:

.. code-block:: bash

   $ ./tools/release --minify

.. warning::

   The above command will work on your plugins files directly; not on a copy as does other commands but :ref:`compiling mo <compile_mo>`.


Pre-releases
++++++++++++

Per default, the release script will work only on existing tags. Any pre-release should have its own tag; but you may want to create a release archive without any tags in some circumstances.

In order to tell the release script what it should archive, you'll have to specify several parameters:

* ``--commit`` (or ``-c``) giving the commit hash,
* ``--version`` (or ``-v``) giving the version (usually, it will be the next release version),
* ``--extra`` (or ``-e``) to specify an extra string (such as *alpha*, *beta*, *rc1*, etc...)

As an example with the *order* plugin:

.. code-block:: bash

   $ ./tools/release --commit 632d515d4ac0 --version 1.9.5 --extra alpha1
   $ ls dist
   glpi-order-1.9.5-alpha1-20161103-632d515d4a.tar.bz2

Signing releases
++++++++++++++++

Signing releases with a GPG key would permit users to check download integrity before installing. You'll need a GPG key publically available to users; the sign option is activated per default, you can deactivate using the ``--nosign`` (or ``-S``) option.

A file containing the signature with the same name as the archive with a ``.asc`` extension will be created in the ``dist`` directory.

GitHub release
+++++++++++++++

The release script will create a release on your GitHub repository, as a draft, unless you use ``--nogithub`` (or ``-g``) option.

.. note::

   Unfortunately, I was not able to get the newly created archive uploaded to this new release... Maybe that could be fixed in the future.

In order to use this feature, you will need the `github <https://github.com/PyGithub/PyGithub>`_ installed; and you will need an access token. Access token is valid per user, and gives accesss to all his repositories.

You'll have to go to your `github account settings page, in the personnal access token tab <https://github.com/settings/tokens>`_. Click on *generate new token*, give the description you want, and make sure you'll check the *public_repo* box only (no need to check anything else, you can create several access token if you need).

The token will be displayed only once; store it in the ``.gh_token`` file in your plugin directory; and that's all!
