Password/SSO
------------

Although it’s mentioned in the `SCIM specifications <https://datatracker.ietf.org/doc/html/rfc7643#section-9.2>`_, password sync is not always available depending on the provider:

-  Azure: `not available <https://learn.microsoft.com/en-us/answers/questions/1113754/azure-ad-scim-provisioning-how-to-sync-passwords>`_
-  Okta: `available <https://developer.okta.com/docs/concepts/scim/#sync-passwords>`_

.. Attention::
   Instead of pushing passwords, we strongly recommend that you use `OAuth SSO <https://glpi-plugins.readthedocs.io/en/latest/oauthsso/index.html>`_ to connect your users to GLPI