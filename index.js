      
      window.addEventListener("load", () => {
        const intro = document.getElementById("intro");

        // Wait 1 second before starting the exit animation
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