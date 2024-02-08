Tag
===

Requirements (on-premise)
-------------------------

============ =========== ===========
GLPI Version Minimum PHP Recommended
============ =========== ===========
10.0.x       8.1         8.2
============ =========== ===========


.. note::
   This plugin is available without a GLPI-Network subscription. It is also available in Cloud.


Sources
-------

- Sources link: https://github.com/pluginsGLPI/tag
- Download: https://github.com/pluginsGLPI/tag/releases



Install the plugin
------------------

-  Go to the marketplace. Download and install the plugin “**Tag**”.

.. figure:: images/Tags-1.png
   :alt:


Setting up the plugin
---------------------

-  From **Setup > Dropdowns**
-  Click on **Tag management**
-  Then **Tags**

.. figure:: images/Tags-2.png
   :alt:


-  Enter a name that will be visible when tags are added
-  Enter a description (optional)
-  Add a colour
-  Associate one or more elements. If nothing is ticked, it will not be
   visible in any element by default.

.. figure:: images/Tags-3.png
   :alt:


Choose where to find the tag
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can indicate whether the tag should be at the top or bottom of the
list.

-  From **Setup > General > Tag management**, specify the tag location.

Bottom :

.. figure:: images/Tags-7.png
   :alt:


Top:

.. figure:: images/Tags-8.png
   :alt:


Adding rules
------------

You can add business rules (tickets, computers, etc.) to add tags to particular items.

Example : Assign a VIP tag when a member of the management group writes a ticket.

-  Here are the criteria to be implemented from **Administration > Rules > Business rules for tickets**

.. figure:: images/Tags-4.png
   :alt:


.. figure:: images/Tags-5.png
   :alt:


-  After creating a ticket :

.. figure:: images/Tags-6.png
   :alt:


.. note::
    Tags can, of course, be added manually if they have been set to be visible in the specified item.


