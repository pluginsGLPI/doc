Features
========

* Collect carbon intensity of electricity from various sources
  * RTE (France)
  * Electricity Map (most countries and regions of the whole world)
* Supports constant carbon intensity for the following regions
  * Quebec
* Fallbacks to yearly world carbon intensity if no data is available for the region of an asset
* Estimate consumed energy and carbon emission of assets
* Show results as charts

Supported assets
----------------

the table below describes how assets are supported by the plugin.

+-------------------+---------------+-----------+-----------+
|                   | Manufacturing |   Usage   | Recycling |
+===================+===============+===========+===========+
| Computer          |      Yes      |    Yes    |    No     |
+-------------------+---------------+-----------+-----------+
| Monitor           |      Yes      |    Yes    |    No     |
+-------------------+---------------+-----------+-----------+
| Network equipment |      No       |    Yes    |    No     |
+-------------------+---------------+-----------+-----------+
| Smartphone        |      Yes      |    Yes    |    No     |
+-------------------+---------------+-----------+-----------+

.. note:: RTE is free and ElectricityMaps but is very limitative in free version