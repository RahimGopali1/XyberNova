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

// counter
// Function to animate the counters
function animateCounter($counter) {
  const target = parseInt($counter.attr("data-target"));
  const speed = 10000; // Adjust speed for smoother animation
  const increment = target / speed;

  const updateCount = () => {
    const current = parseInt($counter.text());
    if (current < target) {
      $counter.text(Math.ceil(current + increment));
      setTimeout(updateCount, 10);
    } else {
      $counter.text(target);
    }
  };

  updateCount();
}

// jQuery Scroll Event to trigger the counter when in view
$(window).on("scroll", function () {
  $(".counter").each(function () {
    const $this = $(this);
    const counterTop = $this.offset().top - window.innerHeight;

    // Trigger animation when the counter is visible
    if ($(window).scrollTop() > counterTop) {
      if (!$this.hasClass("counted")) {
        // Ensure the counter runs only once
        animateCounter($this);
        $this.addClass("counted"); // Prevent repeated counting
      }
    }
  });
});
// counter end

//tool js
// Declare a variable to store the last active index
let lastActiveIndex = 0;

document.querySelectorAll(".tools-item").forEach(function (item, index) {
  item.addEventListener("mouseenter", function () {
    // Remove active class from all items and images
    document.querySelectorAll(".tools-item").forEach(function (el) {
      el.classList.remove("active");
    });
    document.querySelectorAll(".tools-img-icon").forEach(function (el) {
      el.classList.remove("active");
    });

    // Add active class to the current hovered item and corresponding image
    this.classList.add("active");
    document.querySelectorAll(".tools-img-icon")[index].classList.add("active");

    // Update the last active index
    lastActiveIndex = index;
  });

  // On mouse leave, keep showing the last hovered tools-img-icon and keep tools-item active
  item.addEventListener("mouseleave", function () {
    // Keep the last active item and its corresponding icon
    document
      .querySelectorAll(".tools-item")
      [lastActiveIndex].classList.add("active");
    document
      .querySelectorAll(".tools-img-icon")
      [lastActiveIndex].classList.add("active");
  });
});

//tool js end

var swiper = new Swiper(".serviceSlider", {
  loop: true,
  speed: 1500,
  grabCursor: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
      const activeSlide = this.slides[this.activeIndex];
      const prevSlide = this.slides[this.previousIndex];

      // Handle fade-up animation for the current active slide
      const activeDesc = activeSlide.querySelector(".slider-desc");
      if (activeDesc) {
        activeDesc.classList.add("animate-fadeUp");
        activeDesc.classList.remove("animate-fadeDown");
      }

      // Handle fade-down animation for the previous slide
      const prevDesc = prevSlide.querySelector(".slider-desc");
      if (prevDesc) {
        prevDesc.classList.add("animate-fadeDown");
        prevDesc.classList.remove("animate-fadeUp");
      }

      // Remove animation classes for other slides
      this.slides.forEach((slide, index) => {
        if (index !== this.activeIndex && index !== this.previousIndex) {
          const desc = slide.querySelector(".slider-desc");
          if (desc) {
            desc.classList.remove("animate-fadeUp", "animate-fadeDown");
          }
        }
      });
    },
  },
});

var swiper = new Swiper(".testiSlider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".partnerSlider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  freeMode: true,
  speed: 3000,
  freeModeMomentum: false,
  grabCursor: true,
  // allowTouchMove: false,
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.getElementById('input-file').addEventListener('change', function(event) {
  const fileLabel = document.getElementById('file-label');
  const successIcon = document.querySelector('.file .success');
  const cloudIcon = document.querySelector('.file .cloud-icon');
  
  if (this.files.length > 0) {
      // Hide the cloud icon and show the success icon
      successIcon.classList.remove('d-none');
      cloudIcon.classList.add('d-none');

      // Replace the span text with 'Uploaded'
      fileLabel.textContent = 'Uploaded';
  }
});
