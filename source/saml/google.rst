Google
======

.. include:: tabs/add-app.rst

Add an app in Google
--------------------

* Connect to your `Google portal <https://accounts.google.com/>`_
* Click on **Apps**
* Cick on **Web and mobile apps**
* Then, click on **Add app**
* And **Add custom SAML app**

.. image:: images/add_custom_app.png
    :alt: create app Google
    :scale: 43%

* Name your application
* Click on **Continue**

.. image:: images/app_name.png
    :alt: give a name to your app
    :scale: 49%

- Click on **Save** on GLPI.

Setup the Identity Provider
---------------------------

* Enter the values as shown in the 2 screenshots below

.. image:: images/idp_infos.png
    :alt: IDP info Google
    :scale: 49%

.. image:: images/idp_infos_glpi.png
    :alt: report the values in GLPI
    :scale: 44%

.. tip:: Copy/paste the content of the certificate in GLPI with the tags *---BEGIN CERTIFICATE--- ---END CERTIFICATE---*

Setup the Service Provider
---------------------------

* In Service provider details, report the values from GLPI to Google :

.. image:: images/sp_infos_glpi.png
    :alt: Service provider info GLPI
    :scale: 44%

.. image:: images/sp_infos.png
    :alt: Report the values form GLPI
    :scale: 49%

* From Google, select **EMAIL** in **Name ID format**
* In **Name ID**, select **Basic information > Primary email**
* From GLPI, select **Email Address** in **NAMEID FORMAT**

In **SP certificate** and **SP Private Key**, copy/paste your certificate in place of those already present.
There are no strict requirements for these certificates, other than that they are valid X509 certificates.

.. image:: images/certificates-service-provider.png
    :alt: setup the values
    :scale: 80%

* Click on **Continue**
* Then **Finish**

Your app is now created

.. image:: images/app_created.png
    :alt: Your app is now created
    :scale: 44%

Add users allowed to use SAML
-----------------------------

SAML needs users/groups to be added so that they are authorised to use authentication.

* On your appl, click on **Viex details** tab in **User access**
* Click on **On for everyone**
* Click on **Save**

.. image:: images/service_state.png
    :alt: Allow users to use app
    :scale: 53%


Mapping
-------

If you wish to add additional information to your profile, you can use Attributes.
Your profile will be populated with the information entered in Entra.

* In you app, click on **Configure SAML attribute mapping** in **SAML attribute mapping**
* Copy the URL of the one of the other claim
* Add informations that you want
* Click on **Save**

.. image:: images/add_mapping_google.png
    :alt: add attributes for Google
    :scale: 45%

.. image:: images/see_attributes.png
    :alt: Allow users to use app
    :scale: 60%

.. include:: tabs/rules.rst

.. include:: tabs/source.rst