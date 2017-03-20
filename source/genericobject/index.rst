Generic Object
==============

* Sources link: https://github.com/pluginsGLPI/genericobject
* Download: https://github.com/pluginsGLPI/genericobject/releases

This user manuel applies to version 2.0 of the GLPI Generic Object Plugin.

Requirements
------------

This plugin requires :

* PHP 5.3 or higher
* GLPI >= 0.83.x

Features
--------

This plugin allows you to add new inventory objects types, integrated into GLPI framework. 

It supports following GLPI features:

* entity and sub-entities management;
* search;
* templates;
* history;
* helpdesk integration;
* CSV file injection plugin integration;
* Item uninstallation plugin integration;
* order management plugin integration.

Example of usage
----------------

**Objective:** Manage your car fleet like the rest of your IT Assets.

*  Create a new type of inventory object *car*.
*  Add the accurate fields for a *car*, like: *name*, *serial number*, *inventory number*, *type*, *model*, *color*, *state*, etc.
*  Describe the behaviour of a *car*: visible in subentity, retain history, etc.
*  Adjust the rights on *cars*.
*  Activate the *cars* object.
*  Manage your collection of *cars* in GLPI.

Install the plugin
------------------

* Uncompress the archive.
* Move the ``genericobject`` directory to the ``<GLPI_ROOT>/plugins`` directory
* Navigate to the *Configuration > Plugins* page,
* Install and activate the plugin.

Update the plugin
-----------------

In order to get the plugin fully working; you will have to take some precautions trying to upgrade.

First of all, do a backup of your database and your files!

Make sure the old generated files are present in their original emplacement (should be in ``glpi/files/_plugins/genericobject`` directory). If you have moved your instance, you may have to copy them from the old one. Also remember to copy ``glpi_plugin_genericobject_*`` tables from the original database to the new one, if any.

.. warning::

   In older versions of the plugin; generated files were stored in the plugin directory itself (into the ``inc``, ``front`` and ``locales`` directories). In that case, you must copy them to their original location.

Once this is done, you should be ready to process. Go to the plugin administration page, and click ``Upgrade``, then ``Enable``.

On some instances, even if the class files are generated during upgrade, you may have to :ref:`manualy generate them again <genericobject_generatefiles>`.

Finally; disable and enable again the plugin; and logout from GLPI to be sure all menus and links are up to date.

Usage
-----

Create a new object type
^^^^^^^^^^^^^^^^^^^^^^^^

This is the first step.

* Click on the *+* button in  the plugin configuration form.
* Create the new type of inventory object:

  * *name*: mandatory, lowercase, and must be composed of letters only;
  * *label*: by default, the same as the name.

* Validate.
* Activate the new item type to use it.

**Example:** Create a new type of inventory object *car*.

Edit labels
^^^^^^^^^^^

For each type, a language file is available in ``<GLPI_ROOT>/files/_plugins/genericobject/locales/itemtype/``

The plugin creates :

* a language file for the current language
* a language file for the default GLPI language

.. note::

   If the current and default languages are the same, only one file is created.

To change the label of the itemtype, for the english language, edit the file:

.. code-block:: php

   <?php
   // <GLPI_ROOT>/files/_plugins/genericobject/locales/<itemtype>/<itemtype>.en_GB.php
   $LANG['genericobject']['<itemtype>'][1] = "<type's label>";

Setup behaviour
^^^^^^^^^^^^^^^

**Example:** Describe the behaviour of a *car*: visible in subentity, retain history, etc.

The new type will be managed the same way as the usual GLPI types (computer, monitor, network device, etc.)

.. note::

   All objects are at least assigned to an *entity*

The Behaviour tab allows you to define:

* *child-entities:* allows the type to be recursive;
* *Helpdesk:* allows an object to be associated to a ticket;
* *Trash:* use GLPI's trash functionnality;
* *Notes:* use GLPI's note functionnality;
* *History:* allow history for this type;
* *Templates:* allows template management;
* *Documents:* allows documents to be attached to an object of this type;
* *Loans:* allows objects to be loaned;
* *Contracts:* link an object to one or more contracts;
* *Network connections:* allow ports to be used and management for this type;
* *CSV file injection plugin:* allows this type to be available for use in the plugin;
* *Item uninstallation plugin:* allows this type to be uninstalled;
* *Order management plugin:* allows this type to be linked to an order;

Add Fields
^^^^^^^^^^

**Example:** Add the accurate fields for a *car*, like: *name*, *serial number*, *inventory number*, *type*, *model*, *color*, *state*, etc.

Navigate to the *Fields* tab.

The plugin comes with several ready to use fields:

* Name
* Type
* Model
* Serial number
* Inventory number
* Item's user
* Group
* Status
* Comments
* Notes
* Location
* Other
* Manufacturer
* URL
* Creation date
* Expiration date
* Category
* Visible in Helpdesk
* Technician in charge of the hardware
* Domain
* Contact
* Contact number

.. note::

   Using some behaviour will automatically add some fields to the object:

* network connection => location
* loans => location
* helpdesk => is visible in Helpdesk
* notes => notepad

Helpdesk integration
++++++++++++++++++++

To use an object in the helpdesk, use following setup:

* In *Behaviour* tab : *use helpdesk* must be set to **Yes**.
* if the *User* field is defined, it allows item to be visible in the *My Items* list (as item whose owner is the user).
* if the *Group* field is defined, it allows item to be visible in the *My Items* list too (as item belonging to a group in which the user belongs to).
* if *Helpdesk visible* field is set and if the value is set to **No** in the object, then the object won't be visible at all in the helpdesk.

Add new fields
^^^^^^^^^^^^^^

.. note::

   New fields will be available for all object's types.

* Create a new file named ``<GLPI_ROOT>/files/_plugins/genericobject/fields/<type>.constant.php``

For example, for a *car* type the constant file will be ``<GLPI_ROOT>/files/_plugins/genericobject/fields/car.constant.php``.

Please note that the file's first line must be the following, otherwise the new fields won't appear in the list:

.. code-block:: php

   <?php
   global $GO_FIELDS, $LANG;

* Add the new fields definitions.

Add a simple dropdown field
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: php

   <?php
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['name']       = $LANG['genericobject']["<type's name>"][2];
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['field']      = 'color';
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['input_type'] = 'dropdown';

.. note::

   The language variable must be defined in the language file (see explaination above).

* Add a dropdown field that is assigned to an entity:

.. code-block:: php

   <?php
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['name']         = $LANG['genericobject']["<type's name>"][2];
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['field']        = 'color';
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['input_type']   = 'dropdown';
   //Does the dropdown take care of entities ? (true/false)
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['entities_id']  = true;
   //Can values be recursive ? (true/false, only taking in account if entities_id is set to true)
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['is_recursive'] = true;

Add a tree dropdown field
^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: php

   <?php
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['name']       = $LANG['genericobject']["<type's name>"][2];
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['field']      = 'color';
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['input_type'] = 'dropdown';
   //Is it a tree-dropdown, or a simple one ? (true/false)
   $GO_FIELDS['plugin_genericobject_mytypecolors_id']['is_tree']    = true;

.. note::

   You can use at the same time the following parameters : *entities_id*, *is_recursive*, *is_tree*.

Add a dropdown field that is based on a GLPI-core object (user, location...)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: php

   <?php
   $GO_FIELDS['users_id_passengers_id']['name']       = 'Passenger';
   $GO_FIELDS['users_id_passengers_id']['input_type'] = 'dropdown';

.. note::

   Name between brackets (``[]``) **MUST** begin with ``users_id`` in order to be recognized as a field based on GLPI users' list.

   See file ``<GLPI_ROOT>/files/_plugins/genericobject/fields/field.constant.php`` to get a complete list of available fields.

Add a global dropdown
^^^^^^^^^^^^^^^^^^^^^

A global dropdown can be used in all itemtypes. A good example would be :

.. code-block:: php

   <?php
   $GO_FIELDS['categories_id']['name']          = $LANG['common'][36];
   $GO_FIELDS['categories_id']['input_type']    = 'dropdown';
   $GO_FIELDS['categories_id']['dropdown_type'] = 'global';

A specific category table will be created for each itemtype. The table name and field name will the computed this way:

* table : ``glpi_plugin_genericobject_<itemtypename>_category``
* field name : ``plugin_genericobject_<itemtype>categories_id``

Add an integer field
^^^^^^^^^^^^^^^^^^^^

.. code-block:: php

   <?php
   $GO_FIELDS['testinteger']['name']       = 'testinteger';
   $GO_FIELDS['testinteger']['input_type'] = 'integer';
   $GO_FIELDS['testinteger']['min']        = 10; //not mandatory, by default 0
   $GO_FIELDS['testinteger']['max']        = 40; //not mandatory, by default 100
   $GO_FIELDS['testinteger']['step']       = 3; //not mandatory, by default 1

Add a text field
^^^^^^^^^^^^^^^^

.. code-block:: php

   <?php
   $GO_FIELDS['mytextfield']['name']       = 'My text field';
   $GO_FIELDS['mytextfield']['input_type'] = 'text';

.. versionchanged:: 2.1.2

   By adding the following argument, you can tell the plugin that this field can be automatically generated when using a template:

   .. code-block:: php

       <?php
       $GO_FIELDS['mytextfield']['autoname'] = true;

Add a Yes/No field
^^^^^^^^^^^^^^^^^^

.. code-block:: php

   <?php
   $GO_FIELDS['mybooleanfield']['name']       = 'My boolean field';
   $GO_FIELDS['mybooleanfield']['input_type'] = 'bool';

Add a date field
^^^^^^^^^^^^^^^^

.. code-block:: php

   <?php
   $GO_FIELDS['creationdate']['name']       = $LANG['genericobject']['fields'][30];
   $GO_FIELDS['creationdate']['input_type'] = 'date';

Add a date & time field
^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: php

   <?php
   $GO_FIELDS['creationdate']['name']       = $LANG['genericobject']['fields'][30];
   $GO_FIELDS['creationdate']['input_type'] = 'datetime';

.. note::

   If you don't want a field to be modified using massive actions, add the following line to its definition:

   .. code-block:: php

      <?php
      $GO_FIELDS['myfield']['massiveaction'] = false;

Add global fields
-----------------

To make your fields accessible to all itemtypes:

* Create a file named ``<GLPI_ROOT>/files/_plugins/genericobject/fields/field.constant.php``
* Put your definitions in this file.

Setup Rights
------------

You can define access rights for each object's type, for each profile. Available options are:

* *right on the type*: *no access*, *read*, *write*.
* *right to associate this type of object to tickets*: *yes*, *no*.

To associate the rights you can either:

* Use the *Rights* tab in the *itemtype* form.
* Navigate to *Administration > Profiles* and administer the rights for each profile.

Use the new field
-----------------

Activate the new type, it's now ready to be used.

The new type is available for users in the *Plugins > Objects management* menu.

.. _genericobject_generatefiles:

Regenerate files
----------------

Some files are automatically generated when you add a new type, or when you upgrade your plugin... But in some cases; it may be usefull to generate them again.

In order to achieve that; you will have to enable debug mode from your GLPI user profile; that will make a `Debug` tab appear on your object configuration. Just click the `Regenerate files` button, and you're done!
