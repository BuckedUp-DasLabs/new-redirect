# Script for redirecting and handling dataLayer

```
<scrip>
  const urlParams = new URLSearchParams(window.location.search);
  const utm_source = "";
  const step_count = "";
  const page_id = "";
  const version_id = "";

  const params = { exemple: "exempleValue", };
  for (let key in params) {
    urlParams.set(key, params[key]);
  }

  const buttonIds = [];
  const noButtonIds = [];
  const redirectUrl = `https://.com?${urlParams}`;
  const noThanksRedirect = `https://.com?${urlParams}`;
</script>
<script src="https://cdn.jsdelivr.net/gh/BuckedUp-DasLabs/new-redirect@latest/script.min.js"></script>
```
