news
========

* Sources link: https://github.com/pluginsGLPI/news
* Download: https://github.com/pluginsGLPI/news/releases

Requirements for latest version
-------------------------------

This plugin requires :

* PHP 7.2 or higher
* GLPI >= 9.4


Features
--------

This plugin allows to display alerts messages on GLPI homepage and / or login page.

* Create alert with rich text as for notes.
* Choice of begin/end publication date.
* Manage alerts by entity.
* Target : display alerts by profile / group / user.


Install the Plugin
------------------
* Uncompress the archive.
* Move the ``news`` directory to the ``<GLPI_ROOT>/plugins`` directory
* Navigate to the *Configuration > Plugins* page,
* Install and activate the plugin.

Usage
-----

The plugin will create required tables in the database  automatically. Those tables will be updated along with the plugin.

Plugin usage is quite simple:

* configure alerts

You will access the plugin configuration from the *Tools* > *Alerts*.


Create alerts
-------------

* Name : display as talert title
* Active : is active or not
* Description : content of alert
* Visibility start / end : period of Visibility
* Type : type of alert (General, Information, Warning, Problem)
* Can close alert : User can close alert ?
* Show on login page : display or not alert on login page
* Show on helpdesk page : display or not alert on helpdesk page
* Sub-entity : display or not on sub-entity

.. image:: images/create.png

Targets
-------

You can define target by type

* Group : for all users of group
* Profil : for all users with profile
* User : for specifi user

.. image:: images/target.png


Display on login page
---------------------

.. image:: images/login_page.png


Display on helpdesk page
------------------------

.. image:: images/helpdesk-page.png
