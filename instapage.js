const urlParams = new URLSearchParams(window.location.search);
const isFirstPage = false;
const utm_source = "";
const step_count = "";
const page_id = "";
const version_id = "";
const order_uuid = "";

const params = { exemple: "exempleValue" };
for (let key in params) {
  urlParams.set(key, params[key]);
}

const buttonIds = [];
const noButtonIds = [];
const redirectUrl = `https://.com?${urlParams}`;
const noThanksRedirect = `https://.com?${urlParams}`;

//stop here.
const origin = window.location.pathname.replace("/", "").replace("/", "");
document.cookie = `offer_id=${origin}; path=/; domain=.buckedup.com;max-age=3600`;
document.cookie = `page_id=${page_id}; path=/; domain=.buckedup.com;max-age=3600`;
if (isFirstPage) localStorage.setItem("first_page", origin);
