Approbal by mail
================

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
   `standard license <https://services.glpi-network.com/#offers>`__ (or higher) is required. This plugin is also available from the `Cloud <https://glpi-network.cloud/>`__.

-  Go to the marketplace. Download and install the plugin **Approbal by mail**.

.. figure:: images/Approval_mail-1.png
   :alt:

Using the plugin
----------------

Once activated, there are no specific settings to be made (apart from the notification layout, if you wish, via **setup > notifications > notification templates**. The template is **tickets validation**)

-  In a new ticket, enter the name of the person or group receiving the
   approval request.

.. figure:: images/Approval_mail-2.png
   :alt:

An email will be received with the option of **validating** or **refusing** the request. This contains 3 links (if no changes have been made to the model).

-  the ticket reminder,
-  the acceptance link,
-  the refusal link

.. figure:: images/Approval_mail-3.png
   :alt:

-  When the form is validated, you are redirected to GLPI with a
   notification of acceptance:

.. figure:: images/Approval_mail-4.png
   :alt:

-  If the form is refused, a comment will be requested to validate the
   refusal:

.. figure:: images/Approval_mail-5.png
   :alt:

-  It is not possible to reply 2 times to the validation, an error
   message will be displayed:

.. figure:: images/Approval_mail-6.png
   :alt:
