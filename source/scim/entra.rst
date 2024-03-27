Entra
-----

References:
~~~~~~~~~~

-  `Use SCIM to provision users and groups <https://learn.microsoft.com/en-us/entra/identity/app-provisioning/use-scim-to-provision-users-and-groups#integrate-your-scim-endpoint-with-the-azure-ad-provisioning-service>`_

Setup
~~~~~

Create application
~~~~~~~~~~~~~~~~~~

- Connect to your `Azure portal <https://aad.portal.azure.com/>`_
- Click on **Add**
- then **Enterprise application**.

.. figure:: images/scim-4.png
   :alt: add application
   :scale: 65 %

- Click on **Create your application**.
- In the section that appears on the right, enter the name of your application and choose the 3rd option **`integrate any other application don't find in the gallery`**.

.. figure:: images/scim-5.png
   :alt: create application
   :scale: 43 %


Setup the application
~~~~~~~~~~~~~~~~~~~~~

- Once you've created your application, go to **Provisioning**.

.. figure:: images/scim-6.png
   :alt: add provisionning
   :scale: 100 %

- Select **Automatic**.
- Specify the **URL** `generated earlier <setup_plugin.html>`_ from GLPI and paste the **token**.

.. Warning:: Make sure you **paste the token (JWT token)** to ensure your application works properly.

.. figure:: images/scim-7.png
   :alt: setup provisionning
   :scale: 75 %

- Click on Test connection. A message will appear informing you of the successful connection.

.. figure:: images/scim-8.png
   :alt: setup provisionning
   :scale: 100 %

- On the same page, you can also configure an email address and a number in case of failure or accidental deletions.

.. figure:: images/scim-9.png
   :alt: check provisionning
   :scale: 100 %


- Click on **save**


Synchronising all users
~~~~~~~~~~~~~~~~~~~~~~~

- You can choose to synchronise your entire directory.
- Go to the **settings > scope** tab and select **sync all users and groups**.

.. figure:: images/scim-10.png
   :alt: sync all
   :scale: 67 %

Synchronising selected groups and users (default option)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- You can choose to synchronise only certain groups and/or users. When refreshing the **`provisionning`** page
- Go to the **parameters > scope** tab
- Select **synchronise assigned users and groups only**

.. figure:: images/scim-11.png
   :alt: sync selection
   :scale: 100 %

- Then go to **Users and groups**
- Click on **add a user/group**
- Click on **no selection**
- Select the groups and users you want in the box on the right
- Then **select** and **assign**.

.. figure:: images/scim-12.png
   :alt: select users/groupes
   :scale: 43 %

Activate provisioning
~~~~~~~~~~~~~~~~~~~~~

- In the **provisionning** section
- Change the status from **disabled** to **enabled**

.. figure:: images/scim-13.gif
   :alt: enable sync
   :scale: 100 %


Check synchronisation status
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- In the **overview** section, you can check that synchronisation has been successful.

.. figure:: images/scim-14.png
   :alt: check provisionning
   :scale: 82 %

- On the GLPI side, Go to the **request log** section of your SCIM plugin **configuration** > **SCIM identity servers** to check that the accounts are correctly synchronised.

.. figure:: images/scim-15.png
   :alt: check provisionning
   :scale: 43 %

.. Important::
   See the procedure for setting up the `OAuth SSO <https://glpi-plugins.readthedocs.io/en/latest/oauthsso/entra.html>`_ plugin to authenticate users on GLPI  to authenticate your user.