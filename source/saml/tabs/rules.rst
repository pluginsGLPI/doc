Rules for assigning authorisations
----------------------------------


It will be necessary to establish rules for assigning authorisations to your users (to give them a profile, for example).

To do this, go to **Administration** > **Rules** > **GLPI SAML - Saml import rules** or
by the button **JIT Rules** directly in the plugin

   .. image:: images/add-rule.png
      :alt: add rule
      :scale: 80%

A hard limitation in the current plugin is that the rules can only be bound to the 'email' condition.
We are planning to allow binding it to additional SamlClaims, currently it only allows the value
communicated via the nameId property or emailaddress claim.

For example, you want your users with SAML authentication to obtain the Self-Service profile.

You would set your criteria and action as shown here:


   .. image:: images/rules.png
      :alt: manage cable type
      :scale: 45%
