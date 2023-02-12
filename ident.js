
function codeAddress() {
if ((/Android/i.test(navigator.userAgent))) {
          alert('android');

    // go to Google Play Store

}
if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
          alert('apple');

<!-- 	location.replace("https://www.w3schools.com")-->
    // go to App Store

}
else {
  alert('pc');
<!--location.replace("https://www.google.com")-->
    // go to another website
}        }
window.onload = codeAddress;
