
function codeAddress() {
if ((/Android/i.test(navigator.userAgent))) {
          location.replace("https://www.royalroad.com/fiction/63864/")
          alert('Website not mobile compatible yet!');

    // go to Google Play Store

}
if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
          location.replace("https://www.royalroad.com/fiction/63864/")
          alert('Website not mobile compatible yet!');

//<!-- 	location.replace("https://www.w3schools.com")-->
    // go to App Store

}
else {
 // alert('pc');
 // location.replace("https://www.google.com")-->
    // go to another website
}        }
window.onload = codeAddress;
