      
      window.addEventListener("load", () => {
        const intro = document.getElementById("intro");

        // Wait 2 1/2 second before starting the exit animation
        setTimeout(() => {
          intro.classList.add("hidden");
        }, 2500);
      });


      // Navigation Menu Toggle Logic
      const menuIcon = document.querySelector('#menu-icon');
      const navbar = document.querySelector('.navbar');

      menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      };

      // --- Projects Dynamic Setup with Unsplash Placeholders & 4 Buttons ---
      const projectsData = [];
      for (let i = 1; i <= 9; i++) {
        projectsData.push({
          id: i,
          title: `Project ${i}`,
          description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ipsam error consequuntur est ut eaque.`,
          // Unsplash placeholder images via Picsum/Unsplash API
          image: `https://picsum.photos/seed/project${i}/500/300`,
          githubLink: "#",
          liveLink: "#",
          videoLink: "#",
          docsLink: "#"
        });
      }

      const projectsPerPage = 3;
      const totalPages = 2;
      let currentPage = 1;

      const paginationNav = document.getElementById("pagination-nav");
      const projectsBox = document.getElementById("projects-box");

      // Render Pagination Buttons
      function renderPagination() {
        paginationNav.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
          const btn = document.createElement("button");
          btn.className = `page-btn ${i === currentPage ? "active" : ""}`;
          btn.innerText = `Set ${i}`;
          btn.onclick = () => changePage(i);
          paginationNav.appendChild(btn);
        }
      }

      // Render 4 Project Cards with 4 Action Buttons each
      function renderProjects() {
        projectsBox.innerHTML = "";
        
        const startIndex = (currentPage - 1) * projectsPerPage;
        const currentProjects = projectsData.slice(startIndex, startIndex + projectsPerPage);

        currentProjects.forEach(project => {
          const card = document.createElement("div");
          card.className = "project-card";
          card.innerHTML = `
            <img src="${project.image}" alt="${project.title} Preview" />
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="card-buttons">
              <a href="${project.githubLink}" class="btn"><i class='bx bxl-github'></i> GitHub</a>
              <a href="${project.liveLink}" class="btn btn-secondary"><i class='bx bx-link-external'></i> Live</a>
              <a href="${project.videoLink}" class="btn btn-secondary"><i class='bx bx-play-circle'></i> Video</a>
              <a href="${project.docsLink}" class="btn"><i class='bx bx-file'></i> Docs</a>
            </div>
          `;
          projectsBox.appendChild(card);
        });
      }

      function changePage(pageNumber) {
        currentPage = pageNumber;
        renderPagination();
        renderProjects();
      }

      const scrollToTop = document.getElementById("scrollToTop");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          scrollToTop.classList.add("show");
        } else {
          scrollToTop.classList.remove("show");
        }
      });

      scrollToTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });


      // Initial Call
      renderPagination();
      renderProjects();




/* ============================================================
   BLOG DATA
============================================================ */

const blogsData = [
  {
    id: 1,
    title: "How I Built My Developer Portfolio",
    description:
      "A look at the design decisions, animations, and architecture behind my personal portfolio.",
    category: "Development",
    date: "Oct 02, 2026",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/blog-portfolio/900/600",
    link: "#"
  },

  {
    id: 2,
    title: "Building Better CSS Animations",
    description:
      "A practical look at creating smooth animations without making a website feel distracting.",
    category: "CSS",
    date: "Sep 25, 2026",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/blog-css/900/600",
    link: "#"
  },

  {
    id: 3,
    title: "My Favorite JavaScript Patterns",
    description:
      "A collection of JavaScript patterns I frequently use when building interactive websites.",
    category: "JavaScript",
    date: "Sep 18, 2026",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/blog-javascript/900/600",
    link: "#"
  },

  {
    id: 4,
    title: "Designing a Better Developer Experience",
    description:
      "Small design decisions that can make developer tools and interfaces feel significantly better.",
    category: "Design",
    date: "Sep 10, 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/blog-design/900/600",
    link: "#"
  },

  {
    id: 5,
    title: "Understanding Modern Web Performance",
    description:
      "The techniques I use to keep websites fast while still maintaining rich visual experiences.",
    category: "Performance",
    date: "Sep 03, 2026",
    readTime: "9 min read",
    image: "https://picsum.photos/seed/blog-performance/900/600",
    link: "#"
  },

  {
    id: 6,
    title: "Things I Learned Building Projects",
    description:
      "A collection of lessons, mistakes, and discoveries from building projects outside of tutorials.",
    category: "Lessons",
    date: "Aug 27, 2026",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/blog-lessons/900/600",
    link: "#"
  },

  {
    id: 7,
    title: "Making Interfaces Feel Premium",
    description:
      "Exploring spacing, typography, motion, contrast, and other details that elevate a UI.",
    category: "UI/UX",
    date: "Aug 20, 2026",
    readTime: "10 min read",
    image: "https://picsum.photos/seed/blog-ui/900/600",
    link: "#"
  },

  {
    id: 8,
    title: "What I Would Do Differently",
    description:
      "Looking back at older projects and the engineering decisions I would make differently today.",
    category: "Reflection",
    date: "Aug 12, 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/blog-reflection/900/600",
    link: "#"
  }
];


/* ============================================================
   GET CAROUSEL ELEMENT
============================================================ */

const blogCarouselTrack =
  document.getElementById("blog-carousel-track");


/* ============================================================
   CREATE BLOG CARD
============================================================ */

function createBlogCard(blog) {

  const card =
    document.createElement("article");

  card.className =
    "blog-carousel-card";

  card.innerHTML = `

    <div class="blog-carousel-image-container">

      <img
        class="blog-carousel-image"
        src="${blog.image}"
        alt="${blog.title}"
        loading="lazy"
      >

      <div class="blog-carousel-category">
        ${blog.category}
      </div>

    </div>


    <div class="blog-carousel-content">

      <div class="blog-carousel-meta">

        <span>
          ${blog.date}
        </span>

        

        <span>
          ${blog.readTime}
        </span>

      </div>


      <h3 class="blog-carousel-card-title">
        ${blog.title}
      </h3>


      <p class="blog-carousel-card-description">
        ${blog.description}
      </p>


      <a
        href="${blog.link}"
        class="blog-carousel-read btn btn-secondary"
        target="_blank"
      >

        Read article

        <span class="blog-carousel-read-arrow">
          →
        </span>

      </a>

    </div>

  `;

  return card;
}


/* ============================================================
   CREATE / UPDATE INFINITE ANIMATION
============================================================ */

function setupBlogAnimation() {

  const cards =
    blogCarouselTrack.children;

  /*
    We need at least one complete set
    before calculating the distance.
  */

  if (!cards.length) {
    return;
  }


  /*
    Get the first card's actual width.
  */

  const cardWidth =
    cards[0].getBoundingClientRect().width;


  /*
    Get the actual gap from the CSS.

    Your CSS currently uses:

        gap: 24px;

    But we calculate it dynamically so
    you don't have to hard-code it here.
  */

  const trackStyles =
    window.getComputedStyle(
      blogCarouselTrack
    );

  const gap =
    parseFloat(trackStyles.columnGap) ||
    parseFloat(trackStyles.gap) ||
    0;


  /*
    Calculate the exact width of the
    ORIGINAL blog collection.

    Example:

      card 390px
      gap 24px
      8 blogs

      (390 + 24) * 8
      = 3312px
  */

  const firstSetWidth =
    (cardWidth + gap) *
    blogsData.length;


  /*
    Remove an animation we previously
    generated, if one exists.
  */

  const existingStyle =
    document.getElementById(
      "blog-carousel-generated-animation"
    );

  if (existingStyle) {
    existingStyle.remove();
  }


  /*
    Generate a CSS animation using the
    EXACT measured width.

    This is the important part.

    We do NOT use -50%.

    We move exactly the width of the
    first collection of cards.
  */

  const style =
    document.createElement("style");

  style.id =
    "blog-carousel-generated-animation";

  style.textContent = `

    @keyframes blogCarouselInfinite {

      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-${firstSetWidth}px);
      }

    }

    .blog-carousel-track {

      animation-name:
        blogCarouselInfinite !important;

      animation-timing-function:
        linear !important;

      animation-iteration-count:
        infinite !important;

    }

  `;

  document.head.appendChild(style);


  /*
    Scrolling speed.

    Higher number = faster.

    Lower number = slower.
  */

  const pixelsPerSecond = 80;


  /*
    Calculate the animation duration
    based on the actual width.

    This keeps the speed consistent
    regardless of how many blogs you have.
  */

  const duration =
    firstSetWidth /
    pixelsPerSecond;


  blogCarouselTrack.style.animationDuration =
    `${duration}s`;
}


/* ============================================================
   RENDER BLOG CAROUSEL
============================================================ */

function renderBlogCarousel() {

  /*
    Clear the current carousel.
  */

  blogCarouselTrack.innerHTML = "";


  /*
    If there are no blogs, stop.
  */

  if (!blogsData.length) {
    return;
  }


  /* ----------------------------------------------------------
     FIRST SET
  ---------------------------------------------------------- */

  blogsData.forEach(blog => {

    const card =
      createBlogCard(blog);

    blogCarouselTrack.appendChild(card);

  });


  /* ----------------------------------------------------------
     DUPLICATE SET
     
     This second set is identical to the
     first set and sits directly after it.
  ---------------------------------------------------------- */

  blogsData.forEach(blog => {

    const duplicate =
      createBlogCard(blog);


    /*
      Accessibility:

      Screen readers don't need to read
      the duplicated cards.
    */

    duplicate.setAttribute(
      "aria-hidden",
      "true"
    );


    blogCarouselTrack.appendChild(
      duplicate
    );

  });


  /*
    Wait for the browser to finish laying
    out the cards before measuring them.

    This is important because images and
    responsive CSS can affect dimensions.
  */

  requestAnimationFrame(() => {

    setupBlogAnimation();

  });

}


/* ============================================================
   INITIALIZE
============================================================ */

renderBlogCarousel();


/* ============================================================
   HANDLE WINDOW RESIZING
============================================================ */

let blogResizeTimer;


window.addEventListener(
  "resize",
  () => {

    clearTimeout(
      blogResizeTimer
    );


    blogResizeTimer =
      setTimeout(() => {

        /*
          Recalculate card widths and
          animation distance after the
          viewport changes.
        */

        setupBlogAnimation();

      }, 250);

  }
);


/* ============================================================
   HANDLE IMAGE LOADING
============================================================ */

/*
  Images can change the card's layout after
  the initial render.

  Recalculate once all images have loaded.
*/

const blogImages =
  blogCarouselTrack.querySelectorAll(
    ".blog-carousel-image"
  );


blogImages.forEach(image => {

  if (image.complete) {
    return;
  }


  image.addEventListener(
    "load",
    () => {

      setupBlogAnimation();

    },
    {
      once: true
    }
  );

});


/* ============================================================
   OPTIONAL: PAUSE WHEN TAB IS NOT VISIBLE
============================================================ */

document.addEventListener(
  "visibilitychange",
  () => {

    if (
      document.hidden
    ) {

      blogCarouselTrack.style.animationPlayState =
        "paused";

    } else {

      blogCarouselTrack.style.animationPlayState =
        "running";

    }

  }
);
