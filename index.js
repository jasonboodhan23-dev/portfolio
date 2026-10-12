      
      window.addEventListener("load", () => {
        const intro = document.getElementById("intro");

        // Wait 2 second before starting the exit animation
        setTimeout(() => {
          intro.classList.add("hidden");
        }, 2000);
      });


      // Navigation Menu Toggle Logic
      const menuIcon = document.querySelector('#menu-icon');
      const navbar = document.querySelector('.navbar');

      menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      };

    /* ==========================================
       CATEGORY 1: WEB DEVELOPMENT
       ========================================== */

    const category1Projects = [
      {
        id: 1,
        title: "Personal Portfolio",
        description: "A responsive portfolio showcasing skills, projects, and experience.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 2,
        title: "Business Website",
        description: "A professional website with responsive layouts and clear calls to action.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 3,
        title: "Agency Landing Page",
        description: "A modern landing page featuring services, testimonials, and contact details.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      }
    ];


    /* ==========================================
       CATEGORY 2: JAVASCRIPT PROJECTS
       ========================================== */

    const category2Projects = [
      {
        id: 4,
        title: "Task Manager",
        description: "Organize tasks, track completion, and manage daily productivity.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 5,
        title: "Interactive Quiz",
        description: "A browser quiz with multiple-choice questions and score tracking.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 6,
        title: "Expense Tracker",
        description: "Track spending and organize expenses in a simple interface.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      }
    ];


    /* ==========================================
       CATEGORY 3: REACT PROJECTS
       ========================================== */

    const category3Projects = [
      {
        id: 7,
        title: "React Dashboard",
        description: "A reusable component-based dashboard with responsive layouts.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 8,
        title: "Recipe Finder",
        description: "Explore recipes through a searchable collection of meals.",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 9,
        title: "Movie Explorer",
        description: "Browse movies through an organized interface with searchable titles.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      }
    ];


    /* ==========================================
       CATEGORY 4: PYTHON PROJECTS
       ========================================== */

    const category4Projects = [
      {
        id: 10,
        title: "Python Data Analyzer",
        description: "Analyze datasets and summarize useful information with Python.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 11,
        title: "File Organizer",
        description: "Automate file organization by sorting files into appropriate folders.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 12,
        title: "Python Web Scraper",
        description: "Collect and organize publicly available web data for analysis.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      }
    ];


    /* ==========================================
       CATEGORY 5: UI/UX DESIGN
       ========================================== */

    const category5Projects = [
      {
        id: 13,
        title: "Mobile App Design",
        description: "A mobile-first interface designed around intuitive navigation.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 14,
        title: "Dashboard Wireframe",
        description: "A clean dashboard layout with clear visual hierarchy and reusable components.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 15,
        title: "Shopping App Concept",
        description: "A shopping experience designed around product discovery and usability.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      }
    ];


    /* ==========================================
       CATEGORY 6: E-COMMERCE
       ========================================== */

    const category6Projects = [
      {
        id: 16,
        title: "Online Store",
        description: "A storefront with product listings, categories, and shopping actions.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 17,
        title: "Sneaker Shop",
        description: "A footwear store concept featuring product photography and product cards.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 18,
        title: "Fashion Boutique",
        description: "An elegant online boutique with editorial imagery and a responsive layout.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      }
    ];


    /* ==========================================
       CATEGORY 7: GAME DEVELOPMENT
       ========================================== */

    const category7Projects = [
      {
        id: 19,
        title: "Memory Card Game",
        description: "Find matching pairs in an interactive browser-based memory game.",
        image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 20,
        title: "Retro Arcade",
        description: "A retro-inspired game concept featuring classic arcade visuals.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 21,
        title: "Puzzle Challenge",
        description: "A puzzle game concept focused on logic and progressive challenges.",
        image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      }
    ];


    /* ==========================================
       CATEGORY 8: API & DATA PROJECTS
       ========================================== */

    const category8Projects = [
      {
        id: 22,
        title: "Weather Dashboard",
        description: "A weather interface for presenting forecasts and conditions.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 23,
        title: "Country Explorer",
        description: "Explore countries through searchable geographical information.",
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 24,
        title: "Data Visualization",
        description: "Present statistics and trends through an easy-to-understand interface.",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      }
    ];


    /* ==========================================
       CATEGORY 9: AUTOMATION TOOLS
       ========================================== */

    const category9Projects = [
      {
        id: 25,
        title: "Markdown Editor",
        description: "Write and preview formatted Markdown content in one interface.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 26,
        title: "Productivity Timer",
        description: "A focus timer concept for managing work sessions and breaks.",
        image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 27,
        title: "Password Generator",
        description: "A utility for generating random passwords with configurable options.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      }
    ];


    /* ==========================================
       CATEGORY 10: CREATIVE PROJECTS
       ========================================== */

    const category10Projects = [
      {
        id: 28,
        title: "Photography Gallery",
        description: "A responsive photography portfolio highlighting images and composition.",
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 29,
        title: "Digital Art Showcase",
        description: "A visual gallery for presenting digital artwork and creative experiments.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      },
      {
        id: 30,
        title: "Music Player Concept",
        description: "A music player interface with track information and playback controls.",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
        codeLink: "#",
        liveLink: "#",
        docsLink: "#",
        videoLink: "#"
      }
    ];


    /* ==========================================
       CATEGORY NAMES AND ARRAYS
       ========================================== */

    const projectCategories = [
      { name: "Web Development", projects: category1Projects },
      { name: "JavaScript Projects", projects: category2Projects },
      { name: "React Projects", projects: category3Projects },
      { name: "Python Projects", projects: category4Projects },
      { name: "UI/UX Design", projects: category5Projects },
      { name: "E-commerce", projects: category6Projects },
      { name: "Game Development", projects: category7Projects },
      { name: "API & Data Projects", projects: category8Projects },
      { name: "Automation Tools", projects: category9Projects },
      { name: "Creative Projects", projects: category10Projects }
    ];

    const projectsPerPage = 6;
    let currentPage = 1;

    const paginationNav = document.getElementById("pagination-nav");
    const projectsBox = document.getElementById("projects-box");


    /* ==========================================
       RENDER CATEGORY BUTTONS
       ========================================== */

    function renderPagination() {
      paginationNav.innerHTML = "";

      projectCategories.forEach((category, index) => {
        const pageNumber = index + 1;
        const btn = document.createElement("button");

        btn.type = "button";
        btn.className = `page-btn ${pageNumber === currentPage ? "active" : ""}`;
        btn.textContent = category.name;
        btn.setAttribute("aria-label", `Show ${category.name}`);
        
        if (pageNumber === currentPage) {
          btn.setAttribute("aria-current", "page");
        }

        btn.addEventListener("click", () => {
          changePage(pageNumber);
        });

        paginationNav.appendChild(btn);
      });
    }


    /* ==========================================
       RENDER PROJECT CARDS
       ========================================== */

    function renderProjects() {
      projectsBox.innerHTML = "";

      const selectedCategory = projectCategories[currentPage - 1];

      if (!selectedCategory) {
        return;
      }

      selectedCategory.projects.slice(0, projectsPerPage).forEach((project) => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
          <img
            src="${project.image}"
            alt="${project.title} Preview"
            loading="lazy"
          />

          <h3>${project.title}</h3>

          <p>${project.description}</p>

          <div class="card-buttons">
            <a href="${project.codeLink}" class="btn">
              <i class="bx bx-code-alt"></i> Code
            </a>

            <a href="${project.liveLink}" class="btn">
              <i class="bx bx-link-external"></i> Live
            </a>

            <a href="${project.docsLink}" class="btn btn-secondary">
              <i class="bx bx-edit"></i> Article
            </a>

            <a
              href="${project.videoLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary"
            >
              <i class="bx bx-play-circle"></i> Video
            </a>
          </div>
        `;

        projectsBox.appendChild(card);
      });
    }


    /* ==========================================
       CHANGE CATEGORY
       ========================================== */

    function changePage(pageNumber) {
      if (pageNumber < 1 || pageNumber > projectCategories.length) {
        return;
      }

      currentPage = pageNumber;

      renderPagination();
      renderProjects();
    }


/* ==========================================
   SCROLL-TO-TOP BUTTON
   ========================================== */

const scrollToTop = document.getElementById("scrollToTop");

if (scrollToTop) {
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
}


/* ==========================================
   INITIALIZE
   ========================================== */

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
    link: "./blog/posts/posts-1.html"
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
    link: "./blog/posts/posts-2.html"
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
    link: "./blog/posts/posts-3.html"
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
    link: "./blog/posts/posts-4.html"
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
    link: "./blog/posts/posts-5.html"
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
    link: "./blog/posts/posts-6.html"
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
    link: "./blog/posts/posts-7.html"
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
    link: "./blog/posts/posts-8.html"
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
      >

        <i class='bx bx-book'></i> Read article

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

// html
const elements = document.querySelectorAll(".linked-hover-html");

elements.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elements.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elements.forEach(el => el.classList.remove("active"));
  });
});

// css
const elementsTwo = document.querySelectorAll(".linked-hover-css");

elementsTwo.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsTwo.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsTwo.forEach(el => el.classList.remove("active"));
  });
});


/* HTML
CSS
JavaScript
Tailwind CSS
React.js
MongoDB
Node.js
Express.js
TypeScript
PostgreSQL
Git
Docker
GitHub
Next.js

*/

// JavaScript
const elementsThree = document.querySelectorAll(".linked-hover-javascript");

elementsThree.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsThree.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsThree.forEach(el => el.classList.remove("active"));
  });
});

// Tailwind CSS
const elementsFour = document.querySelectorAll(".linked-hover-tailwind");

elementsFour.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsFour.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsFour.forEach(el => el.classList.remove("active"));
  });
});

// React.js
const elementsFive = document.querySelectorAll(".linked-hover-react");

elementsFive.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsFive.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsFive.forEach(el => el.classList.remove("active"));
  });
});

// MongoDB
const elementsSix = document.querySelectorAll(".linked-hover-mongodb");

elementsSix.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsSix.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsSix.forEach(el => el.classList.remove("active"));
  });
});

// Node.js
const elementsSeven = document.querySelectorAll(".linked-hover-nodejs");

elementsSeven.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsSeven.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsSeven.forEach(el => el.classList.remove("active"));
  });
});

// Express.js
const elementsEight = document.querySelectorAll(".linked-hover-express");

elementsEight.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsEight.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsEight.forEach(el => el.classList.remove("active"));
  });
});

// TypeScript
const elementsNine = document.querySelectorAll(".linked-hover-typescript");

elementsNine.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsNine.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsNine.forEach(el => el.classList.remove("active"));
  });
});

// PostgreSQL
const elementsTen = document.querySelectorAll(".linked-hover-postgresql");

elementsTen.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsTen.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsTen.forEach(el => el.classList.remove("active"));
  });
});

// Git
const elementsEleven = document.querySelectorAll(".linked-hover-git");

elementsEleven.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsEleven.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsEleven.forEach(el => el.classList.remove("active"));
  });
});

// Docker
const elementsTwelve = document.querySelectorAll(".linked-hover-docker");

elementsTwelve.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsTwelve.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsTwelve.forEach(el => el.classList.remove("active"));
  });
});

// GitHub
const elementsThirteen = document.querySelectorAll(".linked-hover-github");

elementsThirteen.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsThirteen.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsThirteen.forEach(el => el.classList.remove("active"));
  });
});

// Next.js
const elementsFourteen = document.querySelectorAll(".linked-hover-nextjs");

elementsFourteen.forEach(element => {
  element.addEventListener("mouseenter", () => {
    elementsFourteen.forEach(el => el.classList.add("active"));
  });

  element.addEventListener("mouseleave", () => {
    elementsFourteen.forEach(el => el.classList.remove("active"));
  });
});

/*
.linked-hover-javascript
.linked-hover-tailwind
.linked-hover-react
.linked-hover-mongodb
.linked-hover-nodejs
.linked-hover-express
.linked-hover-typescript
.linked-hover-postgresql
.linked-hover-git
.linked-hover-docker
.linked-hover-github
.linked-hover-nextjs
*/



















































