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

   $(".service_sec").waypoint(function (direction) {
     if (direction == "down") {
       $(".navigation").addClass("fixed-top pure-dark");
     } else {
       $(".navigation").removeClass("fixed-top pure-dark");
     }
   });


});
