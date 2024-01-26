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

Update existing plugin
----------------------

There is no automated way to update an existing plugin, because there would be too many cases to handle. But don't worry, procedure is quite simple ;)

Using empty features is as simple as creating a few files:

* ``composer.json``,
* ``.travis.yml``,
* ``Robofile.php``,
* ``.gitignore``.

If you do not have yet any composer or travis configuration file, you can just copy the ones from empty plugin. Otherwise; in you ``composer.json``, just add:

.. code-block:: json

   {
     "minimum-stability": "dev",
     "prefer-stable": true
   }

And then run ``composer require glpi-project/tools``.

In the travis configuration file, just add the CS call:

.. code-block:: yaml

   script:
     - vendor/bin/robo --no-interaction code:cs

In the ``.gitignore`` file, add the following:

::

   dist/
   vendor/
   .gh_token
   *.min.*


As for the Robo.li configuration file, note that the one embed in the empty plugin is a bit specific, you'll have to edit it in order to get things working. See below for more informations.

Finally, as the ``tools`` project will provide you some features, you can remove duplicated tools scripts (files such as ``release``, ``extract_template.sh``, ...) that would be present in your plugin.

Features
--------

Coding standards
^^^^^^^^^^^^^^^^

The GLPI `PHPCodeSniffer <http://pear.php.net/package/PHP_CodeSniffer>`_ rulesets are provided as ``vendor/glpi-project/coding-standard/GlpiStandard/``.

To check coding standards, just use the Robo.li task ``code:cs``:

.. code-block:: bash

   $ ./vendor/bin/robo code:cs

.. note::

   The above command will ignore ``vendor`` and run on the current directory.

   If you want to adapt ignore list or checked directories, you can just override ``$csignore`` and/or ``$csfiles`` in the ``RoboFile.php`` of the plugin:

   .. code-block:: php

      <?php

      class RoboFile extends Glpi\Tools\RoboFile
      {
         protected $csignore = ['/vendor/', '/lib/'];
         protected $csfiles  = ['./', 'setup.php.tpl']
         [...]
      }

.. _empty_travis:

Automated checks
^^^^^^^^^^^^^^^^

For convenience; a ``.travis.yml`` file is also provided, that is setup to:

* check coding standards,
* run on a bunch on different configuration

You still have to enable travis-ci builds from the website in order to activate automated tests.

Of course, the ``.travis.yml`` file can be pimped; you can run unit tests, create/update a database, activate notifications, and so on. Refer to the `Travis-CI documentation <https://docs.travis-ci.com/>`_ to know more.

Minifying CSS and JS
^^^^^^^^^^^^^^^^^^^^

.. warning::

    Disabled as of 0.1.13, because libs used from Robo are out of date and connot be replaced.

A convenient script, using `Robo.li <http://robo.li>`_ is provided. The ``RoboFile.php`` file is an empty class that extends ``Glpi\Tools\RoboFile`` (provided by ``glpi-project/tools`` dependency) in which you can set your own stuff.

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

   As of GLPI 9.2; you do not have to care about loading minified files when using ``add_css`` and ``add_javascript`` hooks! You just need to call not minified script; and GLPI will use the minified version if it exists and if not in `DEBUG` mode.

Translations
^^^^^^^^^^^^

GLPI and its plugins use gettext for internationnalization. Several steps are required before that can work:

1 translatable strings must be extracted from source files, a ``POT`` file will be created or updated accordingly,
2 ``PO`` files must be created or updated from the ``POT`` file,
3 ``PO`` files must be translated,
4 ``MO`` files must be compiled from the latest ``PO``.

In the ``vendor/bin`` directory, you'll find a ``extract_template.sh`` script. This is designed to extract translatable strings from your source code (see first point above).

Once it has been ran, a ``locale/mygreatplugin.pot`` file will be created/updated.

For the second and third step, you'll have to make a choice. You can use gettext tools to update your ``PO`` files and translate them using a dedicated tool, like `poedit <https://poedit.net/>`_; or you can use an online translation system like `Transifex <http://transifex.com/>`_ or `Zanata <http://zanata.org/>`_. GLPI core and many of existing plugins are translated using Transifex right now.

Once you get your updated ``PO`` files, you'll have to compile them to ``MO`` files. You can run it manually, the release script will compile them again anywways; see the :ref:`compiling MO files section <compile_mo>`.

.. _release_script:

Release script
^^^^^^^^^^^^^^

A release script is provided in ``vendor/bin/plugin-release``. This is a "simple" `Python <http://python.org>`_ script; you should just have Python installed on your system (this is installed by default on most linux distributions).

.. warning::

   Note that the release script is only compatible if you use semantic versionning!

Using just the defaults, the script will try to retrieve the latest tag in your git repository, add third party dependencies and create a `Release` on the github project:

.. code-block:: bash

   $ ./vendor/bin/plugin-release
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

If you want to get help on the script, try to run ``./vendor/bin/plugin-release -h``.

Process
+++++++

The release process will achieve the following tasks for you:

* check if the version constant is the same as the tag you've requested;
* check if the version in the website XML file is the same as the tag you've requested;
* check if a release already exists, locally, and remotely (assuming your project is hosted in the *pluginsGLPI* organization and the release is public);
* make a `git archive` of the paths that are not excluded (``.git``, ``tools``, ``tests``, ...);
* if any, install composer dependencies;
* if any, compile you ``MO`` files;
* if any, compile you CSS stylesheets and your Javascript files (using `Robo.li <http://robo.li>`_);
* create a release archive with all that; that will be available in the ``dist`` directory;
* use GPG to sign the archive.

.. note::

   The standard release process will not work on your files directly, it will make a copy in the ``dist/src`` directory before. The only exception is the :ref:`MO compiling option <compile_mo>`.

In order to check if all is OK before doing real release; create your tag and run ``./vendor/bin/plugin-release -C`` **before pushing your tag**. That way, you'll be able to fix potential issues and re-create your tag locally (remember published tags should **never** be removed).

.. _compile_mo:

Compiling MO files
++++++++++++++++++

The release process will automatically compile every ``PO`` file it will found in your ``locales`` directory. But you probably want the sources to contain the latests ``MO`` files, for testing purposes. The release script provide the ``--compile-mo`` (or ``-m``) to achieve that:

.. code-block:: bash

   $ ./vendor/bin/plugin-release --compile-mo

.. warning::

   The above command will work on your plugins files directly; not on a copy as does other commands.

Pre-releases
++++++++++++

Per default, the release script will work only on existing tags. Any pre-release should have its own tag; but you may want to create a release archive without any tags in some circumstances.

In order to tell the release script what it should archive, you'll have to specify several parameters:

* ``--commit`` (or ``-c``) giving the commit hash,
* ``--release`` (or ``-r``) giving the release version (usually, it will be the next release version),
* ``--extra`` (or ``-e``) to specify an extra string (such as *alpha*, *beta*, *rc1*, etc...)

As an example with the *order* plugin:

.. code-block:: bash

   $ ./vendor/bin/plugin-release --commit 632d515d4ac0 --release 1.9.5 --extra alpha1
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

Excluding files
+++++++++++++++

You can create a ``.ignore-release`` file at the root of your plugin and list here files and directories you want to explicitely exclude from the release archive. Write one `expression <https://docs.python.org/2/library/re.html>`_ per line

::

   .+\.png
   screenshots/

Some files will automatically be excluded:

* .git*,
* .gh_token
* .tx/
* tools/
* tests/
* .atoum.php
* .travis.yml
* .circleci/
* .ignore-release
* composer.lock
* Robofile.php
