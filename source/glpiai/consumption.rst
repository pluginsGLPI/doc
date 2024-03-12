Consumption
-----------

It is possible to limit the use of the API by specifying a limit that must not be exceeded.
This plugin tracks usage based on each response from OpenAI. Therefore, you may need to utilize the "Custom usage" field in the configuration to account for usage outside of the plugin if you want the plugin to account for that in its usage limitation.

.. figure:: images/glpiai-8.png
   :alt: see the usage
   :scale: 100 %

1.  To limit usage and avoid overruns, specify a value that must not be exceeded. If this limit is exceeded, the plugin will no longer function until this value is increased.
2.  Enter the custom usage if you want to account for previous usage outside of the plugin.

.. figure:: images/glpiai-9.png
   :alt: real usage
   :scale: 100 %
