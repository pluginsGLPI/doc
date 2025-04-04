Tag
===

.. list-table::
   :header-rows: 1

   * - Download
     - Sources
   * - `<https://github.com/pluginsGLPI/tag/releases>`_
     - `<https://github.com/pluginsGLPI/tag>`_

Requirements (on-premise)
-------------------------

============ =========== ===========
GLPI Version Minimum PHP Recommended
============ =========== ===========
10.0.x       8.1         8.2
============ =========== ===========


.. include:: ../include/no_subscription.rst

Install the plugin
------------------

-  Go to the marketplace. Download and install the plugin “**Tag**”.

.. figure:: images/Tags-1.png
   :alt: install the plugin
   :scale: 100 %

Setting up the plugin
---------------------

-  From **Setup > Dropdowns**
-  Click on **Tag management**
-  Then **Tags**

.. figure:: images/Tags-2.png
   :alt: setup tags
   :scale: 100 %

-  Enter a name that will be visible when tags are added
-  Enter a description (optional)
-  Add a colour
-  Associate one or more elements. If nothing is ticked, it will not be
   visible in any element by default.

.. figure:: images/Tags-3.png
   :alt: add new tag
   :scale: 43 %

Choose where to find the tag
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can indicate whether the tag should be at the top or bottom of the
list.

-  From **Setup > General > Tag management**, specify the tag location.

Bottom :

.. figure:: images/Tags-7.png
   :alt: tag on bottom
   :scale: 100 %

Top:

.. figure:: images/Tags-8.png
   :alt: tag on top
   :scale: 100 %

Adding rules
------------

You can add business rules (tickets, computers, etc.) to add tags to particular items.

Example : Assign a VIP tag when a member of the management group writes a ticket.

-  Here are the criteria to be implemented from **Administration > Rules > Business rules for tickets**

.. figure:: images/Tags-4.png
   :alt: add new rule
   :scale: 50 %

.. figure:: images/Tags-5.png
   :alt: criterion and action
   :scale: 50 %

-  After creating a ticket :

.. figure:: images/Tags-6.png
   :alt: result
   :scale: 100 %

.. note::
    Tags can, of course, be added manually if they have been set to be visible in the specified item.


FAQ
---

If you have any questions about using the plugin, please consult `our FAQ <https://faq.teclib.com/04_Plugins/Tags/>`_
