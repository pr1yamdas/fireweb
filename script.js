
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }

        function openSafetyTipsPage() {
            window.location.href = 'safetytips.html';
        }

        function openAboutPage() {
            window.location.href = 'about_us.html';
        }

        function openHomePage() {
            window.location.href = 'index.html';
        }
        function openNotificationPage() {
            window.location.href = 'notification.html';
        }
        function openContactPage() {
            window.location.href = 'contact.html';
        }