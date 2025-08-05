document.addEventListener('DOMContentLoaded', function () {
  // Translations for CTA
  const translations = {
    en: {
      title: "Join our community of cocktail lovers",
      button: "Join Now"
    },
    es: {
      title: "Únete a nuestra comunidad de amantes de los cócteles",
      button: "Únete ahora"
    },
    ca: {
      title: "Uneix-te a la nostra comunitat d’amants dels còctels",
      button: "Uneix-t'hi ara"
    }
  };

  // Detect language
  const lang = document.documentElement.lang || 'en';
  const currentLang = lang.startsWith('es') ? 'es' : lang.startsWith('ca') ? 'ca' : 'en';

  // Apply translations
  document.getElementById('popup-title').textContent = translations[currentLang].title;
  document.getElementById('popup-btn').textContent = translations[currentLang].button;

  // Show popup only on blog pages
  if (window.location.href.includes('/blogs/')) {
    let hasScrolled = false;

    window.addEventListener('scroll', function () {
      if (!hasScrolled && window.scrollY > 300) {
        hasScrolled = true;

        // Check cookie to prevent repeat popup
        if (!document.cookie.includes('popupShown=true')) {
          setTimeout(function () {
            let popup = document.getElementById('instagram-popup');
            if (popup) {
              popup.style.display = 'block';
              popup.classList.add('fade-in');
            }

            // Set cookie for 1 day
            document.cookie = "popupShown=true; max-age=" + 60 * 60 * 24 + "; path=/";
          }, 1500);
        }
      }
    });

    // Close button
    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('close-popup')) {
        document.getElementById('instagram-popup').style.display = 'none';
      }
    });
  }
});
