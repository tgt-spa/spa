### Site published at:

Vercel: https://spa-six.vercel.app/#/

If you're deploying somewhere else, you need to change cookieDomain from /public/index.html:
```
window.targetGlobalSettings = {
        cookieDomain: "spa-six.vercel.app",
      };
```
