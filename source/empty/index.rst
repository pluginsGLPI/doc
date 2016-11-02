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

In the ``tools`` directory, you'll find a ``extract_template.sh`` script. This is designed to extract translatable strings from your sourcedoe (see first point above).

Once it has been ran, a ``locale/mygreatplugin.pot`` file will be created/updated.

For the second and third step, you'll have to make a choice. You can use gettext tools to update your ``PO`` files and translate them using a dedicated tool, like `poedit <https://poedit.net/>`_; or you can use an online translation system like `Transifex <http://transifex.com/>`_ or `Zanata <http://zanata.org/>`_. GLPi core and many of existing plugins are translated using Transifex right now.

Once you get your updated ``PO`` files, you'll have to compile them to ``MO`` files:

.. todo::

   Add and document a tool to update MO files

This last step will be automaticcally run using the :ref:`release_script`.

.. _release_script:

Release script
^^^^^^^^^^^^^^

A release script is provided in ``tools/release``. This is a "simple" `Python <http://python.org>`_ script; you should just have Python installed on your system (this is instaleld by defautl on most linux distributions).

Using just the defaults, the script will try to retrieve the latest tag in your git repository, and will propose you to release it.

Process
+++++++

The release process will achieve the following tasks for you:

* check if the version constant is the same as the tag you've requested;
* check if a release already exists, locally, and remotely (assuming your project is hosted in the *pluginsGLPI* oarganization and the release is public);
* make a `git archive` of the paths that are not excluded (``.git``, ``tools``, ``tests``, ...);
* if any, install composer dependencies;
* if any; compile you ``MO`` files;
* create a release archive with all that; that will be available in the ``dist`` directory;
* use GPG to sign the archive.

.. todo::

   * a word about possible arguments
   * a word about signing
