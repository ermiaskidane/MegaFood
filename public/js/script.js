// $(document).ready(function() {
//   /* for the sticky nav  */

//   $(".purchase").waypoint(
//     function(direction) {
//       if (direction == "down") {
//         $("header").addClass("sticky");
//       } else {
//         $("header").removeClass("sticky");
//       }
//     },
//     {
//       offset: "80px;"
//     }
//   );
// });

let map;
let marker;
const london = { lat: 52.626903, lng: -1.150521 };

document.addEventListener("DOMContentLoaded", () => {
  let s = document.createElement("script");
  document.head.appendChild(s);

  s.addEventListener("load", () => {
    console.log("script has loaded");

    map = new google.maps.Map(document.getElementById("map"), {
      center: london,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    marker = new google.maps.Marker({ position: london, map: map });
  });
  // s.src = `https://maps.googleapis.com/maps/api/js?key=${APIKEY}`;
  s.src = "https://maps.googleapis.com/maps/api/js";
});
