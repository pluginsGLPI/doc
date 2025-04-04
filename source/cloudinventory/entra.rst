Entra
~~~~~

Create credentials
^^^^^^^^^^^^^^^^^^

How to get your ``Tenant ID`` and ``Client ID``

* Go to your Tenant and register a new application

.. figure:: images/entra_add_application.png
   :alt: Entra - create a new application
   :scale: 45 %

* Go to Overview to get ``Tenant ID`` and ``Client ID``

.. figure:: images/entra_overview_application.png
   :alt: Entra - Application overview
   :scale: 46 %


* Go to ``Certificates and secrets``
* Add ``New client secret``
* Define ``expires``
* Then saved

.. figure:: images/entra_secret.png
   :alt: Entra - create seccret and certificate
   :scale: 20 %

The ``Secret`` value will be displayed (4)


.. warning:: Client secret value cannot be viewed, except for immediately after creation. Be sure to save the secret when created before leaving the page


* Go to ``subscription`` > ``Access Control (IAM)`` > ``Add Role Assignment``

.. figure:: images/entra_add_roles.png
   :alt: Entra - add roles assignement
   :scale: 28 %

* Search for ``Microsoft.ClassicCompute``
* select ``Reader``
* then ``next``

.. figure:: images/entra_add_reader.png
   :alt: Entra - add reader assignement
   :scale: 29%

* Select ``cloudinventory`` (application) previously created
* Then click on ``Review + assign``

.. figure:: images/entra_overview.png
   :alt: Entra - overview
   :scale: 29%

Setup GLPI
^^^^^^^^^^

Go to ``Adminsitration`` > ``Cloud inventory`` > ``+Add``

.. figure:: images/provider_entra.png
   :alt: setup cloudinventory  with Entra
   :scale: 29%