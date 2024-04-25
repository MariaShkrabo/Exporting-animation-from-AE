let spinner = bodymovin.loadAnimation({
  container: document.getElementById("spinner"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/data.json",
});
