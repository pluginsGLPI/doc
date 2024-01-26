GRDP Tools
==========

Requirements (on-premise)
-------------------------

============ =========== ===========
GLPI Version Minimum PHP Recommanded
============ =========== ===========
10.0.x       8.1         8.2
============ =========== ===========

.. note::
   A `basic license <https://services.glpi-network.com/#offers>`__ (or higher) is required. This plugin is also available from the `Cloud <https://glpi-network.cloud/fr/>`__.

-  Go to the marketplace. Download and install the **GRDP Tools** plugin.

.. figure:: images/GDRP-1.png
   :alt:

Configure the plugin
--------------------

-  From **configuration > general > RGPD tools**

Cleaning up inactive users
~~~~~~~~~~~~~~~~~~~~~~~~~~

There are two possible ways of managing inactive users:

-  Clearing the user’s data
-  Deleting the user

Cleaning up user data
~~~~~~~~~~~~~~~~~~~~~

When the plugin is configured in **Clean** mode, the following
actions will be performed:

-  delete all references to the user from the GLPI history
-  Delete all associated emails
-  Reset all user fields and profiles
-  Move the user to the recycle bin

Delete the user
~~~~~~~~~~~~~~~

When the plugin is configured in “Delete” mode, the following actions
will be performed:

-  Delete all references to the user from the GLPI history
-  Delete all associated emails
-  Delete the user

.. warning::
   Deletion is permanent, the user cannot be recovered

Scope restriction
~~~~~~~~~~~~~~~~~

The automated deletion process can be restricted to the following
scopes:

-  All inactive users
-  Inactive users with no current tickets
-  Inactive users without tickets

.. figure:: images/GDRP-2.png
   :alt:

Automated action
~~~~~~~~~~~~~~~~

Deletion will take place via a standard GLPI automated action that can
be configured to run as often as you like.

-  Go to **setup > automatic actions**, and select the **cleaninactiveuser** action then configure it according to your needs.

.. figure:: images/GDRP-3.png
   :alt:


