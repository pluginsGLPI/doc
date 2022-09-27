Generic Object
==============

* Sources link: https://github.com/pluginsGLPI/genericobject
* Download: https://github.com/pluginsGLPI/genericobject/releases

This user manual applies to version 2.14 of the GLPI Generic Object Plugin.

Requirements
------------

Please refer to `plugin page <https://plugins.glpi-project.org/#/plugin/genericobject>`.

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

.. _install_plugin:

Install the Plugin
------------------

* Uncompress the archive.
* Move the ``genericobject`` directory to the ``<GLPI_ROOT>/plugins`` directory
* Navigate to the *Configuration > Plugins* page
* Install and activate the plugin

Usage
-----

.. _create_new_object:

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

.. _edit_labels:

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

You can also define labels globally in ``<GLPI_ROOT>/files/_plugins/genericobject/locales/fields.<lang>.php`` files:

.. code-block:: php

   <?php
   // <GLPI_ROOT>/files/_plugins/genericobject/locales/<itemtype>/<itemtype>.en_GB.php
   $LANG['genericobject']['fields']['<itemtype>'] = "<type's label>";

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

Use case of Generic Object as a CMMS
------------------------------------

Purpose of this documentation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Showing a complete usage of Generic Object as a CMMS (Computerized
Maintenance Management System) in biomedical environment.

At the end of this use case, you will have :

* a dedicated *Biomed* entity (under *Root entity*)
* containing *Biomedical* objects (in *Assets* menu)
* with built-in and user-defined fields
* manages by users with *Admin_biomed* profile

Steps
^^^^^

Following steps assume you have a Super-Admin authorization :

* Installing Generic Object on GLPI (validated with genericobject >= 0.85-1.0 and GLPI >= 0.90)
* Generic Object configuration
* GLPI configuration
* Start using Generic Object and GLPI

Installing Generic Object on GLPI
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

See :ref:`install_plugin` section.

Generic Object configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create your type of object
++++++++++++++++++++++++++

See :ref:`create_new_object` section and use *biomedical* as internal identifier. Label
will be set automatically to *Biomedical* (with an uppercase *B*).

After a logoff/login, you will see *Biomedical* menu in Assets.

.. _biomedical_new_fields:

Define Biomedical's new fields
++++++++++++++++++++++++++++++

These fields will be usable only by Biomedical's objects :

* Create a new file named : ``<GLPI_ROOT>/files/_plugins/genericobject/fields/biomedical.constant.php``
* Add following content :
  
.. code-block:: php

   <?php
   global $GO_FIELDS, $LANG;

   // CODE CNEH
   $GO_FIELDS['plugin_genericobject_cnehcodes_id']['name']       = $LANG['genericobject']['PluginGenericobjectBiomedical'][1];
   $GO_FIELDS['plugin_genericobject_cnehcodes_id']['field']      = 'cnehcode';
   $GO_FIELDS['plugin_genericobject_cnehcodes_id']['input_type'] = 'dropdown';
   
   //  REFORME (yes or no)
   $GO_FIELDS['reformed']['name']       = $LANG['genericobject']['PluginGenericobjectBiomedical'][2];
   $GO_FIELDS['reformed']['input_type'] = 'bool';
   
   // CLASSE CE (3 choix possibles 1,2a ou 2b)
   $GO_FIELDS['plugin_genericobject_classeces_id']['name']       = $LANG['genericobject']['PluginGenericobjectBiomedical'][3];
   $GO_FIELDS['plugin_genericobject_classeces_id']['field']      = 'classce';
   $GO_FIELDS['plugin_genericobject_classeces_id']['input_type'] = 'dropdown';
   
   // UF (Unité Fonctionnelle)
   $GO_FIELDS['plugin_genericobject_ufs_id']['name']       = $LANG['genericobject']['PluginGenericobjectBiomedical'][4];
   $GO_FIELDS['plugin_genericobject_ufs_id']['field']       = 'uf';
   $GO_FIELDS['plugin_genericobject_ufs_id']['input_type'] = 'dropdown';
   
   // PRESTATAIRE BIOMED
   $GO_FIELDS['plugin_genericobject_prestataires_id']['name']       = $LANG['genericobject']['PluginGenericobjectBiomedical'][5];
   $GO_FIELDS['plugin_genericobject_prestataires_id']['field']       = 'prestataire biomed';
   $GO_FIELDS['plugin_genericobject_prestataires_id']['input_type'] = 'dropdown';

   // TYPE D'EQUIPEMENT BIOMED
   $GO_FIELDS['plugin_genericobject_typedequipementbiomeds_id']['name']       = $LANG['genericobject']['PluginGenericobjectBiomedical'][6];
   $GO_FIELDS['plugin_genericobject_typedequipementbiomeds_id']['field']       = "type d 'equipement biomed";
   $GO_FIELDS['plugin_genericobject_typedequipementbiomeds_id']['input_type'] = 'dropdown';

   // Criticite
   $GO_FIELDS['plugin_genericobject_criticites_id']['name']       = $LANG['genericobject']['PluginGenericobjectBiomedical'][7];
   $GO_FIELDS['plugin_genericobject_criticites_id']['field']      = 'criticite';
   $GO_FIELDS['plugin_genericobject_criticites_id']['input_type'] = 'dropdown';

   // Numéro marquage CE
   $GO_FIELDS['plugin_genericobject_marquageces_id']['name']       = $LANG['genericobject']['PluginGenericobjectBiomedical'][8];
   $GO_FIELDS['plugin_genericobject_marquageces_id']['field']      = 'marquagece';
   $GO_FIELDS['plugin_genericobject_marquageces_id']['input_type'] = 'dropdown';

   // Classe électrique
   $GO_FIELDS['plugin_genericobject_classeelecs_id']['name']       = $LANG['genericobject']['PluginGenericobjectBiomedical'][9];
   $GO_FIELDS['plugin_genericobject_classeelecs_id']['field']      = 'classeelec';
   $GO_FIELDS['plugin_genericobject_classeelecs_id']['input_type'] = 'dropdown';
   ?>
   
.. warning::

      Trailing ``s_id`` is mandatory in ``[plugin_genericobject_field*s_id*]`` because the GLPI framework requires
      foreign key fields to end with ``s_id``. In database, ``glpi_plugin_genericobject_fields`` is table name and ``id``, its foreign key.
      See `GLPI developer documentation <http://glpi-developer-documentation.readthedocs.io/en/master/devapi/database/dbmodel.html#fields>`_.

      
Define fields labels
++++++++++++++++++++

See :ref:`edit_labels` section.

* Edit your locales file, for example : ``<GLPI_ROOT>/files/_plugins/genericobject/locales/biomedical/biomedical.fr_FR.php``
* Add following content at the end of file :

.. code-block:: php

     <?php
     // Fields
     $LANG['genericobject']['PluginGenericobjectBiomedical'][1]="Code CNEH";
     $LANG['genericobject']['PluginGenericobjectBiomedical'][2]="Réformé";
     $LANG['genericobject']['PluginGenericobjectBiomedical'][3]="Classe CE";
     $LANG['genericobject']['PluginGenericobjectBiomedical'][4]="UF";
     $LANG['genericobject']['PluginGenericobjectBiomedical'][5]="Prestataire Biomed";
     $LANG['genericobject']['PluginGenericobjectBiomedical'][6]="Type d'équipement biomed";
     $LANG['genericobject']['PluginGenericobjectBiomedical'][7]="Criticité";
     $LANG['genericobject']['PluginGenericobjectBiomedical'][8]="Marquage CE";
     $LANG['genericobject']['PluginGenericobjectBiomedical'][9]="Classe électrique";

Define behaviours
+++++++++++++++++

In *Plugins > Objects management* menu, on *Main* tab, select :

* *Item in the dustbin*
* *Historical*
* *Financial and administratives information*
* *Documents*
* *Global search*
* *Assistance*
* *Templates*
* *Contracts*
* *Global search*

This will add ready to use fields to your type of object.

Add fields to your type of object
+++++++++++++++++++++++++++++++++

In *Plugins > Objects management* menu, on *Fields* tab, you can now
add fields to Biomedical type of object :

* ready to use fields (GLPI's built-in fields)
* new fields (defined in :ref:`biomedical_new_fields` section)

GLPI configuration
^^^^^^^^^^^^^^^^^^

Define Admin_biomed profile
+++++++++++++++++++++++++++

1. Clone *Admin* profile
2. Set following rights in *Admin_biomed* profile :
   
   * *Administration > Profiles > Admin_biomed > Assets tab > Unselect all*
   * *Administration > Profiles > Admin_biomed > Assistance tab > Association > Associable items to a ticket > Biomedical*
   * *Administration > Profiles > Admin_biomed > Management tab > Select all*
   * *Administration > Profiles > Admin_biomed > Objects management tab > Biomedical > Select all*

.. note::

   With these settings, *Admin_biomed* users only see *Biomedical* in Assets menu.

Define Biomed entity and authorizations rules
+++++++++++++++++++++++++++++++++++++++++++++

1. Create *Biomed* entity under *Root entity* in *Administration > Entities*
2. Configure authorizations rules to assign *Admin_biomed* profile to *Biomed* entity users.


Start using Generic Object and GLPI
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

As *Admin_biomed* user, you can create your first object in *Assets > Biomedical*.

In order to gain time, define values in *Setup > Dropdowns > Objects management* for new fields.
