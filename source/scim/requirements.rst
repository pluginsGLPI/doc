Requirements (on-premise)
-------------------------

============ =========== ===========
GLPI Version Minimum PHP Recommended
============ =========== ===========
10.0.x       8.1         8.2
============ =========== ===========

.. include:: ../include/basic_subscription.rst


.. important::
   The SCIM API endpoint provided by the plugin must be accessible from the identity provider. If we talk about Azure or Okta, this particular URL should be available from the internet. We suggest strongly to limit the IP addresses that can access this URL (in addition of adding a strong authentication method).

