$(document).ready(function () {
  $(".nav-item.dropdown").hover(
    function () {
      var dropdownMenu = $(this).find(".dropdown-menu");
      dropdownMenu.removeClass("fade-down").addClass("fade-up");
      dropdownMenu.stop(true, true).delay(200).fadeIn(300);
    },
    function () {
      var dropdownMenu = $(this).find(".dropdown-menu");
      dropdownMenu.removeClass("fade-up").addClass("fade-down");
      dropdownMenu.stop(true, true).delay(200).fadeOut(300);
    }
  );
});
