/**
 * type 0 is unordered list, 1 is ordered list
 */
const cookies = [
  {
    label: 'General',
    id: 'general',
    desc: 'ToNote Technologies Limited (<strong>“ToNote”, “we”, “us” or “our”</strong>) may use cookies, web beacons, tracking pixels, and other tracking technologies when you visit our website (<a href="http://www.gettonote.com" style="font-family: Karla, sans-serif;color: #003BB3;">http://www.gettonote.com</a>) including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the <strong>“Platform”</strong>) to help customize the Platform and improve your experience. This Cookie Policy provides the types of cookies we use, why we use them, and how you can exercise your choices.'
  },
  {
    label: 'What Are Cookies?',
    id: 'what_is_cookies',
    desc: 'A cookie is a small file containing an identifier placed on your computer\'s hard drive. It enables our Platform to identify your computer as you view different pages on our Platform. Cookies allow websites and applications to store your preferences in order to present content, options or functions that are specific to you. They also enable us to see information like how many people use the Platform and what pages they tend to visit. Cookies set by us are called "first-party cookies." Cookies set by parties other than us are called "third-party cookies".'
  },
  {
    label: 'What Type Of Cookies Do We Use?',
    id: 'cookie_type',
    desc: 'We use the following cookies:<br/><strong>Session Cookies:</strong> This is operational during your visit and expires when you close the browser. This will allow the Platform to provide a better user experience when navigating the Platform, its services, and features. This will be used for storing your info, as well as your token, emails, plans and verification status. Session cookies do not collect information from your computer. They will typically store information in the form of a session identification that does not personally identify the user.<br/> <strong>Third Party Cookies:</strong> In some cases, the Platform may use cookies from third party service providers. '
  },
  {
    label: 'How We Use Cookies',
    id: 'use_cookies',
    desc: 'Cookies are essential for our Platform to function optimally and enhance performance for a better user experience. Cookies are needed to remember and identify the Platform\'s visitors and remember their actions and online behaviour.<br/> The cookies on the Platform will be used for storage of users\' names, email addresses, tokens, subscription plans and users\' verification status. <br/><br/>The information collected by the cookies will be used for the following purposes:',
    lists: {
      type: 0,
      data: [
        'To authenticate users;',
        'To redirect users based on verification status; and',
        'To redirect users based on transaction type.'
      ]
    },
    footer: 'Note kindly that cookie-related information is not used to identify you personally as cookies do not provide us with access to your computer or any information about you, other than that which you choose to share with us.'
  },
  {
    label: 'Managing Cookies',
    id: 'manage_cookies',
    desc: 'You have the right to accept or refuse cookies. You can use your web browser\'s cookie settings to determine how our Platform uses cookies. If you do not want our Platform to store cookies on your computer or device, you should set your web browser to refuse cookies.<br>Kindly note that cookies are an important part of how our services work, as such if you choose to refuse or remove cookies, this could affect the availability and functionality of our services on the Platform. Unless you have set your browser to refuse cookies, our Platform will issue cookies when you visit it.<br><br>For more information on managing cookies, check your browser or device’s settings, or visit the following links:',
    lists: {
      type: 0,
      data: [
        'Apple Safari',
        'Google Chrome',
        'Microsoft Edge',
        'Microsoft Internet Explorer',
        'Mozilla Firefox',
        'Opera',
        'Android (Chrome)',
        'Iphone or Ipad (Chrome)',
        'Iphone or Ipad (Safari)'
      ]
    }
  },
  {
    label: 'Changes To This Policy',
    id: 'policy_changes',
    desc: 'We reserve the right to make changes to this Cookie Policy at any time and for any reason. We will alert you about any changes by updating the <em style="font-family: Karla, sans-serif;">“Last Updated”</em> date of this Cookie Policy. Any changes or modifications will be effective immediately upon posting the updated Cookie Policy on the Site. You are encouraged to periodically review this Cookie Policy to stay informed of updates.'
  },
  {
    label: 'Privacy Policy',
    id: 'privacy_policy',
    desc: 'For more information on how we use information collected by cookies or other similar technologies, please refer to our <a href="/privacy-policy" style="font-family: Karla, sans-serif;text-decoration: underline; color: #003BB3;">Privacy Policy</a>.'
  },
  {
    label: 'Contact Us',
    id: 'contact_us',
    desc: 'If you have any questions, comments, complaints and other requests regarding this Cookies Policy, kindly speak to us on +234 814 650 7035, or leave us a note at <a href="mailto:ask@gettonote.com" style="font-family: Karla, sans-serif;text-decoration: underline; color: #003BB3;">ask@gettonote.com</a>.'
  }
]
export default {
  data () {
    return {
      cookies
    }
  }
}
