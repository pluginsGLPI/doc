Unread messages
===============

Requirements (on-premise)
-------------------------

============ =========== ===========
GLPI Version Minimum PHP Recommended
============ =========== ===========
10.0.x       8.1         8.2
============ =========== ===========

.. note::
   A `basic licence <https://services.glpi-network.com/#offers>`__ (or higher) is required. This plugin is also available on `Cloud <https://glpi-network.cloud/fr/>`__.

Install the plugin
------------------

-  Go to the marketplace. Download and install the plugin **Unread messages**.

.. figure:: images/Unread-1.png
   :alt:
   :scale: 100 %

Setting up the plugin
---------------------

-  Go to **Administration > Entities**, **unread messages** tab

There are 3 possible settings:

+----------------------------------------+-----------------------------+
| Operation                              | Effect                      |
+========================================+=============================+
| **Disabled**                           | The plugin will remain      |
|                                        | inactive                    |
+----------------------------------------+-----------------------------+
| **Per user helpdesk;share central**    | Users with the self-service |
|                                        | profile will be notified of |
|                                        | tickets for which they are  |
|                                        | the requestor. Technicians, |
|                                        | for their part, will share  |
|                                        | the notifications. If a     |
|                                        | notification is read, it    |
|                                        | will be marked as read for  |
|                                        | all other technicians       |
+----------------------------------------+-----------------------------+
| **Per user**                           | Each user will have access  |
|                                        | to their own queue of       |
|                                        | notifications, including    |
|                                        | those for their group and   |
|                                        | their individual            |
|                                        | assignments                 |
+----------------------------------------+-----------------------------+

Display notifications
---------------------

Header
~~~~~~

When a new activity has not yet been viewed, a :bell::point-filled: icon appears:

.. figure:: images/Unread-2.png
   :alt:
   :scale: 100 %

Listed
~~~~~~

Unread messages on a ticket highlight the ticket concerned and a red
indicator :

.. figure:: images/Unread-3.png
   :alt:
   :scale: 100 %

Ticket timeline
~~~~~~~~~~~~~~~

New messages will be identified by a banner **New messages**.

.. figure:: images/Unread-4.png
   :alt:
   :scale: 100 %

Management by entity
~~~~~~~~~~~~~~~~~~~~

Management by entity is possible to manage the counting of notifications by entity.

- Go to **Administration > Entities**, and select the desired entity.
- In the **Unread messages** tab, select the option that suits you so that unread messages behave differently to the parent entity.

.. figure:: images/Unread-5.png
   :alt:
   :scale: 100 %

