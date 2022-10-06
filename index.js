let hamburger = document.querySelector(".hamburger");
            let navItems = document.querySelector(".navitems");
            let navLink = document.querySelector("#navlink");

            hamburger.addEventListener("click",mobileMenu);
            navLink.forEach(n => n.addEventListener("click",closeMenu));

            function mobileMenu() {
                hamburger.classList.toggle("active");
                navItems.classList.toggle("active");
            }

            function closeMenu() {
                hamburger.classList.remove("active");
                navItems.classList.remove("active");
            }