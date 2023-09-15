
/**
 * @file
 * oembed_cookies.js
 *
 * Defines the output of the oembed html field based on the consent of marketing cookies.
 */
(function ($, Drupal) {

    Drupal.behaviors.cookiesVideoDisplay = {
      attach: function(context, settings) {
        // If this behaviour runs before eu_cookie_compliance is fully loaded, the
        // internal _euccSelectedCategories and _euccCurrentStatus variables may not
        // have been set yet. This caches the accepted cookies and mode. To ensure it
        // is, we set that manually using the asymmetric getter/setter methods, which
        // read the correct value but set it into the cache.
        Drupal.eu_cookie_compliance.setAcceptedCategories(Drupal.eu_cookie_compliance.getAcceptedCategories());
        Drupal.eu_cookie_compliance.updateCurrentStatus(Drupal.eu_cookie_compliance.getCurrentStatus());

        $.each(settings.ecc_cookie_oembed, function(key, val) {
          if (val.video && Drupal.eu_cookie_compliance.hasAgreed(val.category)) {
            $('.media-oembed-'+key).html(val.video)
          }
        })
  
      }
    }
  
  }) (jQuery, Drupal)