Configuration
=============

Automatic actions
-----------------

The plugin requires a working configuration of `automatic actions with CLI mode <https://glpi-user-documentation.readthedocs.io/fr/master/modules/configuration/crontasks.html>`_.
Check carefully that GLPI scheduler is running every minute.

Downloading carbon intensitiy data
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The plugin implements an automatic action for each data provider. Supported sources are :

* **RTE** for France (free, data back to 2012-01-01)
* **Electricity Map** for most countries and regions in the world (free access limited to last 24 hours)

When an automatic action runs for the first time it setups supported regions in database. Once done, you may activate downloads for regions of interest.

Enable / disable carbon intensity data download
-----------------------------------------------

* Navigate in GLPI to **Setup > Dropdowns > box GLPI Carbon > Carbon intensity sources**

.. image:: images/plugin_dropdowns_intensity.png
    :alt: select carbon in dropdown tab
    :scale: 38%

* Select a data provider
* Open the tab **Carbon intensity zones**
* Find the country you want to check or set

.. image:: images/choose_country.png
    :alt: select the country
    :scale: 44%


* Toggle the flag **Download enabled** by clicking on its status

.. image:: images/enable_download.png
    :alt: enable download of the country
    :scale: 44%

.. note::
    If the list of regions or countries is empty then you need to run the automatic action of this source first.




Inventory requirements
----------------------

All assets
^^^^^^^^^^

1. To calculate the emission of greenhouse gas related to energy consumed during use of your assets, the plugin needs to know when an asset is used for the first time and when its services is stopped.

To do so, the plugin seearches for the following dates on order of decreasing precedence:

* **startup date** (Financial and administrative informations) : **this information is mandatory**
* **delivery date** (Financial and administrative informations)
* **date of purchase** (Financial and administrative informations)
* **creation date in inventory**
* **modification date in inventory**

.. image:: images/financial_information.png
    :alt: view financial information
    :scale: 36%

.. note:: Monitors rely on the location of the computer it is connected to, so there is no need to add it manually

2. The plugin needs to know where is an asset to determine which carbon intensity is applied to its energy consumption. The associated location mist have the field **Country** filled

3. Each asset must be associated with a model so that the plugin can estimate CO2 emissions as closely as possible. This information can be pre-filled from a `template <https://glpi-user-documentation.readthedocs.io/fr/latest/modules/overview/templates.html>`_

.. image:: images/computer_model.png
    :alt: Asset's model
    :scale: 45%


4. It is preferable that the machines be inventoried by an agent so that the **components** tab is filled in as accurately as possible.
It is possible to do this manually but the automatic inventory seems more reliable.

.. image:: images/computer_components.png
    :alt: Asset's components
    :scale: 43%

Computers
^^^^^^^^^
Computers are usually powered on depending on working days and hours. You msut tell when computers are turned on in their tab **Environnemental impact**. In this place you can assign a usege profile which describes how the computers are powered on.

To create an usage profile, go in **Setup > Dropdowns > box GLPI Carbon > Computer usage profiles**.

.. image:: images/plugin_dropdowns.png
    :alt: select carbon in dropdown tab
    :scale: 38%

.. image:: images/usage_profile.png
    :alt: select carbon in dropdown tab
    :scale: 38%

.. note:: It is considered that the network equipment is on 24/7 and therefore does not have an associated profile