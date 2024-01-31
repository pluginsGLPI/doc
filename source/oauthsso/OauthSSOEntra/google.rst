Google
------

Creating a project
~~~~~~~~~~~~~~~~~~

-  From your `Google console <https://console.cloud.google.com/>`__ (administrator access is required)
-  Go to your organisation then new project
-  Enter the name of your project
-  Click on **Create**

   .. figure:: images/oauth-sso-google-2.png
      :alt:

-  Return to your organisation,
-  Select your project

   .. figure:: images/oauth-sso-google-3.png
      :alt:

Setup Oauth access
~~~~~~~~~~~~~~~~~~~~~~~

-  From the menu, click on **APIs & Services**
-  Then **OAuth consent screen**

   .. figure:: images/oauth-sso-google-4.png
      :alt:

-  Select the type of access that will be granted to the application (internal or external users)
-  Then click on **Create**.

   .. figure:: images/oauth-sso-google-5.png
      :alt:

-  Enter (as a minimum) a name for the application, an email address for application support and the developer’s email address (this information is compulsory).
-  Click on **Save and continue**.

-  In the **Scope** section
-  Click on **Add or remove application fields**
-  Add **auth/userinfo.email** **auth/userinfo.profile** and **openid**

   .. figure:: images/oauth-sso-google-6.png
      :alt:

-  Click on **Update**
-  Then **Save and continue**

ID settings
~~~~~~~~~~~

-  From the **Credentials** menu
-  Click on **Create credentials**
-  Then **Oauth client ID**.

   .. figure:: images/oauth-sso-google-7.png
      :alt:

-  Select the type of application **Web application**
-  Enter an application name
-  In the **Authorized redirect URIs** section
-  Enter the GLPI **Callback URL**

.. tip::
   Where can I find my callback URL?
   .. figure:: images/oauth-Entra-8.gif
   :alt:

-  Click on **Create**
-  A page appears with the identifier values. **Keep this information** as it will be requested in GLPI.

   .. figure:: images/oauth-sso-google-9.png
      :alt:

Setup GLPI
~~~~~~~~~~

-  From **Setup > Oauth SSO applications**
-  Click on **Add**
-  Select **Google** in the **Oauth provider** field
-  Select the icon that will be visible on the home page
-  Enter the **Client ID** (number 1 on the previous screenshot)
-  Enter the **Client secret** (numbered 2 on the previous screenshot)
-  Enter the **field user ID**  [1]_

   .. figure:: images/oauth-sso-google-10.png
      :alt:

-  Click on **Add**

From the home page, the new Oauth SSO login option will be visible:

.. figure:: images/oauth-sso-google-11.png
   :alt:

.. note::
   The first time a user logs on, they will be asked to accept access authorisations for their profile

.. [1]
   the identifier field will be the user’s login. **Google user Id** represents the unique value for each user generated when the user is created.
