
Providers credentials
---------------------

Each provider can be configured individually via the plugin interface. Configuration typically includes:

* API access credentials (keys, secrets)
* Region, project, or subscription settings

.. toctree::
   :maxdepth: 2


   ovh
   amazon
   scaleway
   google
   alibaba
   entra



.. note:: In some cases, ``global Endoints`` are available.

 If you have more than one zone, or if you don't know where your machines are located, ``global Endoints`` are available:

 * ``Test all endpoints`` groups all the ``endpoints``
 * ``Only Europe endpoints`` groups ``endpoints`` located in ``Europe``
 * etc.

 This means that synchronisation will take longer.

