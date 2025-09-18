Methodology
===========

Embodied impacts
----------------

Depending on the enabled engine, the methodology of embodied impact may vary.


Boaviztapi
^^^^^^^^^^

Boaviztapi is a tool produced by Boavizta, an association helping organizations to assess, manage and reduce the environmental impact of their digital assets in a simple, fast and reliable way.

The Carbon plugin sends queries to this tool to get metrics which are locally saved and agregated.

Usage impacts
----------------

The plugin internally calculates the emissions of carbon dioxide equivalent, using the carbon intensity of the local electricity supplier of each asset. Other impacts are calculated by external tools.

Greenhouse gas emissions
^^^^^^^^^^^^^^^^^^^^^^^^

The Carbon plugin identifies the location of an asset, the average power consumption and theoretical power-on and power-off times to approximate the amount of greenhouse gas emitted by the asset's usage.

The carbon intensity of electricity is collected from local providers and down-sampled to 1 hour time slots. For each asset where there is enough data, the plugin evaluates when it is powered on and calculates the average energy consumed then the carbon emissions of this energy consumption.

The results are then aggregated by day, and are used to calculate the total carbon emission on a larger time frame, like a month or a year.