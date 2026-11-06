(function () {
  var l = (navigator.language || "de").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  try { var s = localStorage.getItem("tl-lang"); if (s === "de" || s === "en") l = s; } catch (e) {}
  location.replace("/" + l + "/");
})();
