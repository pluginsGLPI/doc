Teams
-----

.. Warning:: Following the end of O365 connectors, Microsoft is imposing a new method of setting up your webhooks using workflows.
   This procedure must be implemented before August 15th. After this date, your webhooks will no longer function.
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




