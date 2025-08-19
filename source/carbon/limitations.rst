Limitations
============

Carbon intensity of electricity
-------------------------------------

The plugin can collect carbon intensity from several sources. The accuracy if these datas varies :

- Data from RTE which represents the carbon intensity of electricity production
- Data from Electricity Map represents the carbon intensity oc electricity consumption (which is more accurate)

.. warning:: Electrcitymaps license keys. Some limitations may apply to free keys. With the free version, electricitymaps only provides intensity history for the last 24 hours.

Dates handling
--------------

The plugin heavily relies on dates manipulation. Dates stored in its tables are set on time zone configured in general configuration of GLPI (**Setup > General > tab Personnalization**).

Dates are manipulated in the context of automatic actions, this means that changing the above setting **will** impact the timezone of dates manipulates after this change. This may will have an effect charts and reports. It is advised to carefully check the configuration of time zone before starting to use the plugin and avoid any change after it began to download data from external sources.

Daylight saving time
--------------------

Handling timezones with daylight saving time (DST) is challenging because it is not possible to reliably convert dates from / to UTC.

**Example** :
France switches from GMT +01:00 to GMT+02:00 in last sunday of march and switches back to GMT+01:00 in last sunday of october. This event occurs at 02:00AM.

Therefore the time 2024-03-01 02:00:00 is not visible in the table of carbon intensities if its date is displayed with time zine Europe/Paris and 2 rows have the same date. However if the timezone is UTC the 2 rows show an interval of 1H.

The reverse occurs on 2023-10-29 02:00:00 where there are two rows with the same date (visible when the table displayed with timezone Europe/Paris) but internally, there is an interval of 1H between them (visible when the table is displayed with UTC)

Not used assets
---------------

computer
^^^^^^^^

When a computer is not used it is recommended to remove its usage profile.

Monitor
^^^^^^^

If there are laptops in the inventory, their internal display may be inventoried. In this case, ensure that it has a model and a type without any power consumption set, or no type or model at all.

Deleted asset
-------------

GLPI usually handles a trash for assets. A deleted asset will be ignored. When an asset enters or exists the trash then it will be respectively excluded or included in the environmental impact history calculation.
