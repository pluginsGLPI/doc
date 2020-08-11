Exporting and importing forms
-----------------------------

Abstract
^^^^^^^^

Formcreator allows exporting and importing forms between instances of GLPI.

This feature is designed to let administrators develop forms on a testing environment and copy them on a production environment.

Limitations
^^^^^^^^^^^

A form may contain relations to objects of GLPI itself (mostly users, groups, categories, entities). There is currently no reliable way to maintain relations between forms and GLPI's objects or assets accross instances. It is therefore highly recommended to develop forms on a testing environemnt with a reasonably recent copy of the production database.

The export / import feature does not support importing forms accros different versions of Formcreator. The version 2.10 shows a warning if it detects a attempt of importing forms from a previous version. In version 2.11 such imports are not allowed.

Exporting forms
^^^^^^^^^^^^^^^

1. Navigate to **Administration > Forms**

2. Use massive actions to export one or more forms. Clicking on  the **Post** button will start the download of a JSON formated file. This file contains all forms selected for the export.

.. image:: images/export_forms.png

Importing forms
^^^^^^^^^^^^^^^

1. Navigate to **Administration > Forms**

2. Use the toolbar to import forms.

.. image:: images/import_forms.png

3. Select one or more JSON files created with the same version of Formcreator and validate.

.. image:: images/import_forms_2.png

4. Depending on the complexity and the quantity of forms the process may be slow. Please be patient.

5. Carefully check the messages when the import completes. You may get warnings and errors.