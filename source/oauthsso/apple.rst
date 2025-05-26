Apple
-----

Create a new identifier
~~~~~~~~~~~~~~~~~~~~

* Go to this page to configure the `Apple provider <https://developer.apple.com/account/resources/certificates/list>`_
* Create a new "Identifier" in the ``Identifiers`` tab.


.. figure:: images/apple_identifier.png
    :alt: add Apple identifier
    :scale: 55 %

* Select ``Apps IDs``

.. figure:: images/apple_apps_id.png
    :alt: Select ``App IDs``.

    :scale: 57 %


* Then continue
* Select ``type`` => ``App``

.. figure:: images/apple_app_type.png
    :alt: Select the app's type
    :scale: 57 %

* Then continue
* Select ``Sign in with Apple`` capability

.. figure:: images/apple_sign_in.png
    :alt: Select sign in Apple
    :scale: 55 %

* ``Team ID`` can be found here (1).
* ``Client ID`` can be found here (2).

.. figure:: images/apple_edit_conf.png
    :alt: Edit configuration Apple
    :scale: 57 %

Key File and Key ID
~~~~~~~~~~~~~~~~~~~

* Go here to create `Key file <https://developer.apple.com/account/resources/authkeys/list>`_

.. figure:: images/apple_key.png
    :alt: Add apple key
    :scale: 57 %

* Enter a name and description (1).

.. figure:: images/apple_sign_in_key.png
    :alt: Edit your sign in key
    :scale: 57 %

* Select ``Sign in with Apple``
* Click on ``Configure`` (2) to select ``Apps ID`` previously created

.. figure:: images/apple_conf_key.png
    :alt: Setup your key
    :scale: 57 %


After registering your app, you will be able to retrieve:


* ``Key File`` (1)

* ``Key ID`` (2)

.. figure:: images/apple_download_key.png
    :alt: download your key
    :scale: 57 %

You now have all the necessary information to configure your provider in the OauthSSO plugin.


.. warning:: **Please note**: Processing of the Apple identifier and key may take some time on Apple's side, potentially up to 48 hours.


Warning about fetching user information

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


.. note:: User information retrieved from the identity provider is currently limited in terms of data richness and completeness.
    For now, only the ``email``, ``subject identifier`` (sub), ``firstname``, and ``lastname`` can be retrieved from the identity provider.


.. warning:: Concerning ``firstname`` / ``lastname`` fetching.
    Please note that this information is only available **during the user's first login**, provided that the user **consents to sharing their information**.
    For subsequent logins, **only the user identifier** will be retrieved.


