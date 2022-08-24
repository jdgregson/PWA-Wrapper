# PWA Wrapper
PWA Wrapper is a utility for wrapping websites and web applications in an iOS PWA. It is designed to be hosted as a free Cloudflare Worker.

PWA Wrapper does not turn arbitrary websites into PWAs. Rather, it allows you to install it as a PWA and access pre-configured websites inside the in-app browser using PINs.

## Why is this useful?
PWA Wrapper provides a way to access websites and web apps inside a PWA. When opened, the PWA presents an iOS-style PIN screen. This screen can be configured to accept multiple PINs which open one of many websites inside the in-app browser.

Due to the way Apple implements PWAs, these websites do not show up in the user's Safari history, and data and cookies saved by websites inside the PWA are not accessible through Safari. This means that a user can stay logged into a website inside PWA Wrapper without any indication to an unsuspecting user.

Suppose somebody is in an abusive relationship, and they've started using a domestic violence support forum for help. Their partner knows their phone's passcode, so they have to use Private Browsing/Incognito Mode when accessing this forum. Rather than logging into the forum several times a day, this person can deploy a PWA Wrapper instance to stay logged in while posing as another app.

From the abusive partner's point of view, they can open the app and access it using the passcode that they already know. When doing so, a benign application is presented. For instance, the victim may have configured the known PIN to open a period tracking app, and set its icon to that of the period tracker. However, when the victim enters an alternate PIN, they are redirected to the domestic violence abuse forum inside the in-app browser, where they are already logged in.

## Does PWA Wrapper work with Android?
PWA Wrapper's basic functionality works in Android, including wrapping arbitrary websites, persisting data, and using multiple PINs for multiple apps/websites. However, websites and web apps accessed through PWAs in Android still appear in Chrome's history, and any website a user logs into inside a PWA is also accessible through Chrome.

This means that while PWA Wrapper may be useful to Android users, no level of privacy should be expected, and users should assume that all activity is still recorded in browser histories.
