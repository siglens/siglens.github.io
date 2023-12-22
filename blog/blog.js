$(document).ready(() => {
  $(".section-nav-link").on("click", function(e) {
    e.preventDefault();
    $(".section-nav-link").removeClass("active");
    $(this).addClass("active");
    const href = $(this).attr("href");
    const offsetTop = $(href).offset().top;
    $("html, body").animate({ scrollTop: offsetTop - 100 }, "fast");
  });

  $(window).scroll(function() {
    const scrollPos = $(window).scrollTop();
    $(".section").each(function() {
      const sectionTop = $(this).offset().top;
      const sectionId = $(this).attr("id");
      const navLink = $(`.section-nav-link[href="#${sectionId}"]`);

      if (scrollPos >= sectionTop - 110) {
        $(".section-nav-link").removeClass("active");
        navLink.addClass("active");
      }
    });
  });

});



