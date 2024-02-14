Escalade
========

.. list-table::
   :header-rows: 1

   * - Download
     - Sources
   * - `<https://github.com/pluginsGLPI/escalade/releases>`_
     - `<https://github.com/pluginsGLPI/escalade>`_

Requirements (on-premise)
-------------------------

============ =========== ===========
GLPI Version Minimum PHP Recommended
============ =========== ===========
10.0.x       8.1         8.2
============ =========== ===========

.. Note::
   This plugin is available without a GLPI-Network subscription. It is also available in `Cloud <https://glpi-network.cloud/>`__

Install the plugin
------------------

-  Go to the marketplace. Download and install the plugin **Escalade**.

.. figure:: images/Escalade-1.png
   :alt:
   :scale: 100 %


Assign a ticket
---------------

.. Tip::
   Escalade vs business rules We advise you **to use business rules** to allocate tickets or escalations. This allows you to manage
   more flexibly when changing category, urgency, etc.

.. Note::
   **Escalade** allows tickets **to be escalated only to groups**, and not to live users.

When the plugin is activated, a new option is available from the ticket interface :

.. figure:: images/Escalade-2.png
   :alt:
   :scale: 100 %


Set plugin parameters
---------------------

-  From the plugin, click on the spanner and choose the various options that interest you:

+-----------------------------------+-----------------------------------+
| Action                            | Effect                            |
+===================================+===================================+
| **Remove old assign group on new  | Deletes or not the existing       |
| group assign**                    | groups when you assign a new one  |
|                                   |                                   |
+-----------------------------------+-----------------------------------+
| **show group assign history       | (*valid only if previous option   |
| visually**                        | is set to* **yes**) Previous      |
|                                   | groups will be visible when a new |
|                                   | group is escalated                |
|                                   |                                   |
|                                   |.. figure:: images/Escalade-3.png  |
+-----------------------------------+-----------------------------------+
| **Assign ticket to initial group  | (*valid only if previous option   |
| on solve ticket**                 | is set to* **yes**) Reassigns     |
|                                   | ticket to initial group if a      |
|                                   | group is deleted                  |
+-----------------------------------+-----------------------------------+
| **Escalation history in tasks**   | Keep or not the history of        |
|                                   | escalations in the tasks          |
+-----------------------------------+-----------------------------------+
| **Remove technician(s) on         | Technician(s) will be deleted     |
| escalation**                      | when a new technician is added to |
|                                   | the ticket                        |
+-----------------------------------+-----------------------------------+
| **Ticket status can be changed    | Modify the status of the ticket   |
| after escalation**                | after the escalation. A “do not   |
|                                   | modify” option is also available. |
+-----------------------------------+-----------------------------------+
| **Assign the technical manager on | If a technical manager is         |
| ticket category change**          | declared in an ITIL category,     |
|                                   | they will be automatically        |
|                                   | assigned and will receive a       |
|                                   | notification.                     |
+-----------------------------------+-----------------------------------+
| **Assign the technical group on   | If a technical group is declared  |
| ticket category change**          | for an ITIL category, it will be  |
|                                   | automatically assigned and the    |
|                                   | members of the group will receive |
|                                   | a notification                    |
+-----------------------------------+-----------------------------------+
| **Clone tickets**                 | Possibility of cloning tickets    |
|                                   | from the helpdesk interface       |
|                                   | .. figure:: images/Escalade-4.png |
+-----------------------------------+-----------------------------------+
| **Close cloned tickets at the     | Close all cloned tickets when one |
| same time**                       | of them is closed                 |
+-----------------------------------+-----------------------------------+
| **Use the technician’s group**    | If a technician is assigned,      |
|                                   | their group will also be          |
|                                   | assigned. You can choose to take  |
|                                   | account of the assignment when    |
|                                   | the ticket is created and/or      |
|                                   | modified. You can also choose to  |
|                                   | select the first or last group to |
|                                   | which the user is assigned        |
+-----------------------------------+-----------------------------------+
| **Remove requester(s) on          | Remove requester(s) in the event  |
| escalation**                      | of an escalation. Please note     |
|                                   | that no history is kept, as is    |
|                                   | the case for assigning a group    |
+-----------------------------------+-----------------------------------+
| **Display delete button**         | Displays the option of deleting   |
|                                   | actors from the ticket (ability   |
|                                   | to refine which                   |
|                                   | user/group/supplier by            |
|                                   | requestor/watcher/technician)     |
|                                   |                                   |
|                                   |.. figure:: images/Escalade-5.png  |
+-----------------------------------+-----------------------------------+
| **Activate filtering on           | Enables filtering and whether or  |
| allocation groups**               | not escalation to other groups is |
|                                   | possible. *See next chapter for   |
|                                   | more information*                 |
+-----------------------------------+-----------------------------------+

Setting up filtering
~~~~~~~~~~~~~~~~~~~~

Filtering allows you to define which group is able to escalate tickets to other groups. For example, we don’t want N1 support to be able to
escalate to N3 directly. The escalation to N2 must be mandatory.

-  From **Administration > Groups**, select one of the groups
-  In **Escalade**, add the groups to which this one will be able to escalate tickets.

.. Warning::
   This option can be useful, but it requires all groups to be set up. If, for example, the **technician N1** group can escalate
   tickets to the **technician N2** group, you need to ensure that the **technician N2** group can escalate tickets to the **technician N3** group and
   also to the **N1** group, so that a ticket can be escalated if necessary.


Example :

   * **Joe** user is **added** to group **Groupe 1**

   .. image:: images/filter_group.png
      :alt:
      :scale: 50 %

   * **Groupe 1** is configured to allow ticket escalation only to **Groupe 2**

   .. image:: images/group_escalation.png
      :alt:
      :scale: 60 %

   * **Joe** user can **only reassign** ticket to **Groupe 2** because it's assign to Groupe 1

   .. image:: images/ticket_filter_group.png
      :alt:
      :scale: 45 %

   * For other users not assign to **Groupe 1**, they can't reassign group to ticket (groups are not proposed in the list of assignation)

   .. image:: images/ticket_filter_group_empty.png
      :alt:
      :scale: 40 %

   * You can **bypass** this behavior per user

   .. image:: images/bypass_user.png
      :alt:
      :scale: 65 %


Ticket's search engine
----------------------

Plugin add three new search option

.. image:: images/searchoption.png
   :alt:
   :scale: 100 %


* Group concerning by escalation

Ex : get all tickets actually escalated to group **Groupe 1**

* Number of escalation

Ex : get all tickets with more than ten escalation

* Number of escalation between two groups

Ex : get all tickets with more than 2 escalations between two groups


Central page
------------

New dashlet to display ticket solved to close and assign to you group

.. image:: images/central_closed.png
   :alt:
   :scale: 90 %


New dashlet to display not solved ticket where your groups was not actually assign but was in the past

.. image:: images/central_follow.png
   :alt:
   :scale: 90 %

FAQ
---

If you have any questions about using the plugin, please consult `our FAQ <https://faq.teclib.com/04_Plugins/Escalade/>`__
