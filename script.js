const obj = {
  step_count: step_count,
  page_id: page_id,
  version_id: version_id,
};

const setDataLayer = ({ event, action, value, currency }) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...obj,
    event: event,
    action: action,
    value: value,
    currency: currency,
    transaction_id: orderId,
  });
};

const setKlaviyo = (name, item) => {
  const currentTime = new Date();
  try {
    klaviyo.push([
      "track",
      name,
      { ...obj, ...item, pagepath: window.location.pathname, pageurl: window.location.href, time: currentTime.getTime() },
    ]);
  } catch (err) {
    console.log("failed klaviyo\n", err);
  }
};

const dataLayerStart = () => {
  const item = { event: "pageview", action: "load", value: 0 };
  setDataLayer(item);
  setKlaviyo("Page View", item);
};

const dataLayerNoThanks = () => {
  const item = { event: "interaction", action: "click", value: 0 };
  setDataLayer(item);
  setKlaviyo("User Refused", item);
};

const dataLayerRedirect = () => {
  const item = { event: "offerview", action: "viewaction", value: 0 };
  setDataLayer(item);
  setKlaviyo("User Redirect Engagement", item);
};

buttonIds.forEach((id) => {
  const btn = document.getElementById(id);
  btn.addEventListener("click", () => {
    dataLayerRedirect();
    window.location.href = redirectUrl;
  });
});

noButtonIds.forEach((id) => {
  const btn = document.getElementById(id);
  btn.addEventListener("click", () => {
    dataLayerNoThanks();
    window.location.href = noThanksRedirect;
  });
});

dataLayerStart();