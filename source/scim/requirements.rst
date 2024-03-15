Requirements (on-premise)
-------------------------

============ =========== ===========
GLPI Version Minimum PHP Recommended
============ =========== ===========
10.0.x       8.1         8.2
============ =========== ===========

.. note::
   A `basic licence <https://services.glpi-network.com/#offers>`_ (or higher) is required. This plugin is also available from the `Cloud <https://glpi-network.cloud/fr/>`_.


.. important::
   The SCIM API endpoint provided by the plugin must be accessible from the identity provider. If we talk about Azure or Okta, this particular url should be available from the internet. We suggest strongly to limit the ip addresses that can access this url (in addition of adding a strong authentication method).

A Note about passwords sync
---------------------------

Although it’s mentioned in the `SCIM specifications <https://datatracker.ietf.org/doc/html/rfc7643#section-9.2>`_, password sync is not always available depending on the provider:

-  Azure: `not available <https://learn.microsoft.com/en-us/answers/questions/1113754/azure-ad-scim-provisioning-how-to-sync-passwords>`_
-  Okta: `available <https://developer.okta.com/docs/concepts/scim/#sync-passwords>`_

.. Attention::
   Instead pushing passwords, we strongly recommend that you use `OAuth SSO <https://glpi-plugins.readthedocs.io/en/latest/oauthsso/index.html>`_ to connect your users to GLPI