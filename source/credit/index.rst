Credit
======

Requirements (on-premise)
-------------------------

============ =========== ===========
GLPI Version Minimum PHP Recommanded
============ =========== ===========
10.0.x       8.1         8.2
============ =========== ===========

Install the plugin
------------------

.. note::
   This plugin is community and does not need a license. It is also available in Cloud.

-  Go to the marketplace. Download and install the plugin “**Credit**”.

.. figure:: iamges/Credit-1.png
   :alt:

Setting up the plugin
---------------------

Creating a credit type
~~~~~~~~~~~~~~~~~~~~~~

-  From **setup > dropdowns**,
-  - click on **credits** then **credit types**.

.. figure:: iamges/Credit-2.png
   :alt:

-  Click on **add**.
-  Enter a name representing the type of credit granted

.. figure:: iamges/Credit-3.png
   :alt:

Add credit to customer entity(ies)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Example : “Case study for this article” We will create 3 types of credit:

   - For a new follow-up
   - For a new task
   - For a new solution

   You can create a single type of credit which will group together the 3, it depends on the management of each case.

-  In **administration > entities**, select the entity that will receive the credits.
-  Go to the **credit** section
-  In the section **add a credit**, enter a name for the new credit
-  Define the type of credit created earlier
-  The start and end dates of the credit
-  Activate it,
-  Make it available or not in the child entities (note that if you are in the parent entity, it will be accessible to all entities)
-  The quantity of credit sold
-  The authorisation to overconsume or not
-  Click on **add**

.. figure:: iamges/Credit-4.png
   :alt:

Here, we’ll do the same for the 3 types of credit (followup, task and solution)

It is therefore possible to enter different values (number of credits, validity, overconsumption, etc.) for each credit:

.. figure:: iamges/Credit-5.png
   :alt:

Define default values
~~~~~~~~~~~~~~~~~~~~~

-  In **administration > entities**, select the entity that will receive the credits
-  Go to the **credit** section
-  In the **default options for entity** section
-  Select the type of credit by action
  .. figure:: iamges/Credit-6.png
   :alt:

-  Click on **update**

.. warning::
   "Caution Indicating credit types does not allow automatic settlement. It pre-selects the credit but it must be settled by the technician.

Counting credits
----------------

When a ticket is created, you can choose whether or not to deduct the
corresponding credits.

In our example, we have chosen to deduct each action.

-  If we are doing a **follow-up**, we can deduct the credit assigned by default:
.. figure:: iamges/Credit-7.png
   :alt:

-  The same for a **task**:
.. figure:: iamges/Credit-8.png
   :alt:

-  And for a **solution** :
.. figure:: iamges/Credit-9.png
   :alt:

In the **credit** section of the tikcet you can see a summary of
credits spent and remaining

.. figure:: iamges/Credit-10.png
   :alt:

Modify a credit on a ticket
---------------------------

Increase or decrease a granted credit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can modify credits on a ticket if a readjustment is necessary.

-  From the ticket in question, go to the **credit** section
-  Select the credit you wish to adjust
-  Click on **actions**
-  Click on **modify**
-  Click on **quantity consumed** then add the desired quantity
-  Click on **send**.

.. note::
   See how to proceed”
   .. figure:: iamges/Credit-11.gif
      :alt:

Delete deducted credits
~~~~~~~~~~~~~~~~~~~~~~~

-  From the ticket in question, go to the **credit** section
-  Select the credit you wish to delete
-  Click on **actions**
-  Click on **delete permanently**.
-  Click on **send**.

.. note::
   See how to proceed”
      .. figure:: iamges/Credit-12.gif
      :alt:

Credits will be automatically reallocated in the credit bank

Including an expired credit
---------------------------

If the credit has expired, it will not be proposed in the list of available credits. You will not be able to deduct it. You will need to change the end date of the credit to be able to use it again.

Notification of expired credits
-------------------------------

An automatic action is available to notify you when a credit has expired.

-  From **setup > automatic actions**, modify the **creditexpired** action to suit your needs.
-  Click on **save**
.. figure:: iamges/Credit-13.png
   :alt:

You can of course customise the notification to suit your needs (**setup> notifications > notifications > credit expired**)



