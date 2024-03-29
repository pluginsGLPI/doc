OKTA
----

Create application
~~~~~~~~~~~~~~~~~~

-  First, go to GLPI and download the Oauthsso plugin
-  Navigate to the **Setup > Oauth SSO applications**
-  Click on **Add**

.. figure:: images/okta-2.png
   :alt: add SSO GLPI
   :scale: 100 %


-  Keep this window active and retain the callback URL :

.. figure:: images/okta-3.png
   :alt: copy callback URL
   :scale: 43 %


-  In your OKTA interface, go to **Applications**
-  **Create App Integration**

.. figure:: images/okta-4.png
   :alt: create app
   :scale: 80 %


-  Select option **OIDC – OpenID Connect** in the 1st insert and **Web Application** in the second
-  Click on **Next**

.. figure:: images/okta-5.png
   :alt: select sign-in
   :scale: 80 %


-  Enter an application name and check the box **Client credentials**

.. figure:: images/okta-6.png
   :alt: web integration
   :scale: 100 %


-  Enter the return URL, retrieved above, in Sign-in redirect URIs.

.. figure:: images/okta-7.png
   :alt: paste URL callback
   :scale: 90 %


Assignments
~~~~~~~~~~~

-  In the last box, select the option that suits you best (here we authorize all users present in OKTA)
-  Finally, click on **Save**

.. figure:: images/okta-8.png
   :alt: assignments
   :scale: 90 %


Setup GLPI
~~~~~~~~~~

-  In GLPI, go back to the Oauth SSO plugin configuration window and enter your OKTA tenant information :

.. figure:: images/okta-9.png
   :alt: setup GLPI
   :scale: 40 %


1. Give your provider a name, which will appear on the login page.

2. Indicate this as active

3. Enter OKTA as provider Oauth

4. Enter the application ID found in the application previously created in OKTA

.. figure:: images/okta-10.png
   :alt: client ID
   :scale: 100 %


1. Specify the ID field to be mapped with OKTA

2. Specify the customer secret available in OKTA in the previously created application

.. figure:: images/okta-11.png
   :alt: add secret
   :scale: 100 %


7. Enter the name of your OKTA instance (https://XXXXXXXXX.okta.com), available in the account creation confirmation e-mail.

- Click on **Add**
- In the plugin, you will see the approval message:

.. figure:: images/okta-12.png
   :alt: test connexion
   :scale: 100 %


Now that the configuration is complete, you can test it with a user.

.. figure:: images/okta-13.png
   :alt: login page
   :scale: 90 %


.. figure:: images/okta-14.png
   :alt: home page
   :scale: 90 %

