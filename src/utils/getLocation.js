export default function getLocation(cb) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(cb);
  } else {
    return "Geolocation is not supported by this browser.";
  }
}
