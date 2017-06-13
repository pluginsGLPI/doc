Install the Plugin
------------------

* Uncompress the archive.
* Move the ``formcreator`` directory to the ``<GLPI_ROOT>/plugins`` directory
* Navigate to the *Setup > Plugins* page,
* Install and activate the plugin.

.. warning::

   The plugin's directory must have the same name as the plugin:

     * **Good**: `glpi/plugins/formcreator`
     * **Bad**: `glpi/plugins/formcreator-master`
     * **Bad**: `glpi/plugins/formcreator-0.90-1.3.2`

   Only one directory must contains the plugin's files of a single plugin in the GLPI plugins directory. **Don't rename the plugin's directory for backup, move it!**
