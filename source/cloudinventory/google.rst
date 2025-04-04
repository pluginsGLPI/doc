Google
~~~~~~

Create credentials
^^^^^^^^^^^^^^^^^^

Check the documentation on identifier management : `How to manage your key <https://cloud.google.com/anthos/run/docs/securing/service-accounts?hl=fr>`_

Or simply follow these instructions:

* Go to the `Service Accounts <https://console.cloud.google.com/iam-admin/serviceaccounts?hl=fr&_ga=2.193077034.605580056.1710501828-763263516.1710237390>`_ page in **Google Cloud Console**
* Select the **Project** on which your **Virtual machine** was created
* Create a new **Service Account**

.. figure:: images/google_service_account.png
   :alt: create a new service account
   :scale: 47 %


* Fill in the required information, then click on ``Done``

.. figure:: images/google_service_account_details.png
   :alt: fill in the information for creating the service account
   :scale: 80 %

* Select your account on the list

.. figure:: images/google_account_list.png
   :alt: Choose the service account
   :scale: 43 %

* Choose JSON type

.. figure:: images/google_create_key.png
   :alt: Creating key
   :scale: 38 %

Now your key file has been downloaded to your computer


Setup GLPI
^^^^^^^^^^

Go to ``Adminsitration`` > ``Cloud inventory`` > ``+Add``

.. figure:: images/provider_google.png
   :alt: setup cloudinventory  with google
   :scale: 52 %