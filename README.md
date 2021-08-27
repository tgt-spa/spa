### Site published at:

Vercel: https://spa-six.vercel.app/#/

If you're deploying somewhere else, you need to change cookieDomain from /public/index.html:
```
window.targetGlobalSettings = {
        cookieDomain: "spa-six.vercel.app",
      };
```
If you want to test on a tenant other than taasqa1, you need to replace the at.js script from /public/index.html and replace the new script in /public/scripts:
 ```
 <script src="%PUBLIC_URL%/scripts/at-taasqa1-spa.js"></script>
 ```
