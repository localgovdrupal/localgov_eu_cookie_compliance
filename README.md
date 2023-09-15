# Cookie settings block

## What is it?
- Extends the functionality of the [EU Cookie compliance contrib module](https://www.drupal.org/project/eu_cookie_compliance).
- Provides a block containing the same content as the EU Cookie popup.  When this block is added to a page, we get a dedicated Cookie settings page.  At the time of writing in early 2023, many sites including the [BBC](https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/) use such a dedicated Cookie settings page.  This is the primary feature of this module.
- Only relevant when you want users to have greater control over site cookies by enabling them to accept or reject certain types of cookies e.g. accept Functional cookies, reject Analytics cookies and so on.
- Adds an embed management feature, to allow oembed videos to be restricted by domain according to cookie consent settings
- <a name="secondary-feature"></a>The EU Cookie compliance module's cookie functionality actually doesn't stop any cookie being set prior to consent, rather it removes unauthorised cookies. On its own, this isn't sufficient for GDPR compliance, we need to use the Javascript blocking functionality also. Any modules that add their scripts directly to the head need to be customised to remove the scripts and have them replaced with a new loader script. This module includes pre-built loaders for Google Analytics and HotJar, as well as an integration to automatically remove them and make the HTML available to the loader. This makes it easier to create compliant sites using Google Analytics and Hotjar by including an integration to load those in a way compatible with the JS blocking function.

## How to configure
- Create a content page (e.g. /foo) explaining your site Cookies.
- Turn on this module.
- Add the "EU Cookie settings block" provided by this module to the **Content** region.  This happens automatically when the *localgov_scarfolk* theme is in use, as is the case in the default LocalGov Drupal distribution.
- Restrict the above block to the cookie explanation page (i.e. /foo) mentioned earlier.
- Configure the EU Cookie compliance module:
  - Select **Opt-in with categories** as the consent method.
  - Add all your cookie categories to the **Cookie categories with separate consent** textbox.
  - Enter the cookie settings page path (e.g. /foo) to the **Cookie settings page path** textfield.  The default path is */cookies*.  Without this path, this module would not provide the category-wise Cookie settings form.
  - If you are using the Google Analytics module, specify the consent options to load its scripts in **Disable Javascripts**. For example, `analytics:modules/contrib/localgov_eu_cookie_compliance/js/deferred-ga-script-runner.js||localgov_eu_cookie_compliance/deferred-scripts`
  - If you are using the HotJar module, specify the consent options to load its scripts in **Disable Javascripts**. For example, `analytics:modules/contrib/localgov_eu_cookie_compliance/js/deferred-hotjar-script-runner.js||localgov_eu_cookie_compliance/deferred-scripts`
  - Consider updating the following textfields:
    - "Save preferences" button label
    - "Accept all categories" button label
    - Cookie policy button label

## What to expect
- When you hit a random page of the site, you should see a EU cookie popup asking you to either accept all the cookies or check the cookie policy.
- If you click the cookie policy link, you should land in the Cookie settings page.
- The Cookie settings page should provide a Cookie settings form for accepting or rejecting cookie categories.

## Todo
The secondary feature mentioned [above](#secondary-feature) works for the [Google analytics](https://www.drupal.org/project/google_analytics) and [Hotjar](https://www.drupal.org/project/hotjar) modules only.  This needs to be more generic.

## See also
- [Privacy score measurement](https://rethinkingprivacy.com/).

## Maintainers 

This project is maintained by: 

 - Adnan Muhammad https://github.com/Adnan-cds
 - Finn Leiws https://github.com/finnlewis


