Teams
-----

-  From a Teams administrator account, go to the channel that will receive GLPI notifications
-  Click on the channel menu
-  Then **Manage channel**

.. figure:: images/Webhook-10.png
   :alt: manage channel
   :scale: 100 %

-  In the **Connectors** section,
-  click on **Modify**

.. figure:: images/Webhook-11.png
   :alt: edit connector
   :scale: 75 %

-  From the **incoming Webhook connector**
-  click on **Configure**

.. figure:: images/Webhook-12.png
   :alt: add webhook
   :scale: 100 %

-  Enter a name for your webhook and an image (optional)
-  Click on **Create**

.. figure:: images/Webhook-13.png
   :alt: setup webhook
   :scale: 100 %

-  You will then be sent the URL of your webhook

.. figure:: images/Webhook-14.png
   :alt: copy URL
   :scale: 100 %



.. Warning:: Following the end of O365 connectors, Microsoft is imposing a new method of setting up your webhooks using workflows.
   This procedure must be implemented before 15 August. After this date, your webhooks will no longer be able to function.
   Your webhooks used by incoming Webhooks (old method) will no longer be available

.. Note:: The channel used must be public. Microsoft does not currently allow webhooks with Workflows from a private channel.

- From **Teams**, go to **Apps**
- In the search box, enter **Workflows**
- In the list of applications, click on **Add**

.. figure:: images/Webhook-21.png
   :alt: copy URL
   :scale: 58 %


.. Note:: Some information may take a while to appear, so please be patient between each step and wait for the information
   to appear on the screen before moving on to the next step.


- From the desired Teams channel, click on the **···** menu

.. figure:: images/Webhook-22.png
   :alt: copy URL
   :scale: 100 %

- Click on **Workflows**
- Choose "**Post to a channel when a webhook request is received**"
- In the new window, make sure that the current account has a sufficient licence to send webhooks

.. figure:: images/Webhook-23.png
   :alt: copy URL
   :scale: 88 %

- Teams will give you a summary of the selected channel. If you've got it right, click on Add Workflows


.. figure:: images/Webhook-24.png
   :alt: copy URL
   :scale: 90 %

- The URL of your workflow appears. Copy it and keep it, it will be used to configure GLPI.

.. figure:: images/Webhook-25.png
   :alt: copy URL
   :scale: 85 %


- Go to :doc:`setup the webhook in GLPI <setup_glpi>`




