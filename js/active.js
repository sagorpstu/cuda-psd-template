$(document).ready(function () {
  var mixer = mixitup(".mix_container");
  // SideBar

  $("#sideBarNavOpen").click(function () {
    $("#sideBarNav").addClass("active");
    $("#sideBarNavClose").show();
    $(this).hide();
  });
  $("#sideBarNavClose").click(function () {
    $("#sideBarNav").removeClass("active");
    $("#sideBarNavOpen").show();
    $(this).hide();
  });

  $(".team_sec").waypoint(function (direction) {
    if (direction == "down") {
      $("#sideBarNavOpen").addClass("text-dark");
    } else {
      $("#sideBarNavOpen").removeClass("text-dark");
    }
  });
   $(".port_sec").waypoint(function (direction) {
     if (direction == "up") {
       $("#sideBarNavOpen").addClass("text-dark");
     } else {
       $("#sideBarNavOpen").removeClass("text-dark");
     }
   });
});
