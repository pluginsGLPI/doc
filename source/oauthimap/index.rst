OAuth IMAP
==========

.. note::
   “TLS Protocol” Microsoft is gradually removing the TLS 1.0 and 1.1 protocols for all Microsoft 365 applications. In order to keep your collector running, you need to add an **Oauth IMAP** plugin available in the marketplace.

.. tip::
   “OAuth IMAP and MFA” The Oauth tokens for the collector, retrieved during authentication with Azure by the OauthIMAP plugin, are “offline” tokens that delegate authorisation to a third-party application (GLPI). These tokens provide a renewal code that will be used by the application to renew them automatically without user intervention. You will therefore not be asked to re-authenticate after the 1st authorisation request (unless you change your password at a later date).

Requirements (on-premise)
-------------------------

============ =========== ===========
GLPI Version Minimum PHP Recommended
============ =========== ===========
10.0.x       8.1         8.2
============ =========== ===========

Here are the configuration steps including configuration phases on the Entra side.

Install the plugin
------------------

.. note::
   This plugin is community and does not need a license. It is also available in Cloud.

-  See you in the marketplace. Download Oauth IMAP and enable it

.. figure:: Pics/oauth-imap-1.png
   :alt:

-  Meet now on your `Azure tenant <https://portal.azure.com/#home>`__
-  In the search box type **registration** then select
   **app registrations**

.. figure:: Pics/oauth-imap-2.png
   :alt:

Register your Entra application
-------------------------------

Create the application
~~~~~~~~~~~~~~~~~~~~~~

-  Click on **new registration**
-  Indicate the desired name, select the type of account supported then indicate the redirection URL (present in the configuration of the plugin from your GLPI interface:
   https://XXXXXXXXXXXXXX/marketplace/oauthimap/front/authorization.callback.php) specifying the **Web** option
-  Then click on **register**.

.. figure:: Pics/oauth-imap-3.png
   :alt:

Add a secret
~~~~~~~~~~~~

-  In the **Certificates and secrets** tab
-  Click on **Client secrets**
-  Then **New client secret**

.. figure:: Pics/oauth-imap-4.png
   :alt:

-  Enter a description and then an expiration date
-  A secret **value** is then generated. Keep this value well because once you have left this page, it will no longer be recoverable

.. figure:: Pics/oauth-imap-5.png
   :alt:

-  Return to the **Overview** tab and **copy** the following values ​​and the secret seen above

.. figure:: Pics/oauth-imap-6.png
   :alt:

setup GLPI
----------

-  Now go back to your GLPI interface **configuration > Application Aouth IMAP** and indicate the information collected previously :

.. figure:: Pics/oauth-imap-7.png
   :alt:

-  Click :ti-plus:**add**
-  Now in the **Oauth authorization** tab , we will **create an authorization**

.. figure:: Pics/oauth-imap-8.png
   :alt:

-  When you click on :ti-add:**create authorization**, you will be redirected to the Microsoft services sign-in page
-  Enter the email address and password of the account that will be used for the collector
-  You will also need to accept the necessary permissions related to the plugin.

.. figure:: Pics/oauth-imap-9.png
   :alt:

.. figure:: Pics/oauth-imap-10.png
   :alt:
