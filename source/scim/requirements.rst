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
   The SCIM API endpoint provided by the plugin must be accessible from the identity provider. If we talk about Azure or Okta, this particular URL should be available from the internet. We suggest strongly to limit the IP addresses that can access this URL (in addition of adding a strong authentication method).

