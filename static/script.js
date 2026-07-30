// --- 1. SYSTÈME DE TRADUCTION BILINGUE (FR / EN) ---
const translations = {
    "fr": {
        "nav_home": "Accueil", "nav_categories": "Catégories", "nav_upload": "Contribuer", "nav_about": "À propos", "nav_login": "Connexion",
        "welcome_title": "Bienvenue",
        "welcome_subtitle": "L'excellence est une réussite collective. Trouvez, révisez et partagez les meilleures ressources éducatives du lycée.",
        "search_placeholder": "Rechercher une épreuve, une matière...",
        "btn_explore": "Explorer les épreuves <i class='fas fa-arrow-right'></i>", "btn_share": "Partager un document",
        "filter_title": "Matières :",
        "cat_bac": "Examens Officiels (BAC I & II)", "cat_bac_desc": "Épreuves de 2000 à 2026",
        "cat_national": "Épreuves Nationales", "cat_national_desc": "Togo & Lycée Scientifique de Lomé",
        "cat_school": "Épreuves d'Établissement", "cat_school_desc": "Notre Dame de la Trinité",
        "cat_optional": "Matières Facultatives", "cat_optional_desc": "Allemand, Musique, etc.",
        "cat_library": "Bibliothèque", "cat_library_desc": "Livres et annales de révision",
        "cat_others": "Autres Épreuves", "cat_others_desc": "Ressources diverses",
        "about_title": "Pourquoi j'ai créé ce site ?",
        "about_text": "J'ai conçu cette plateforme avec une conviction forte : l'accès aux ressources éducatives ne devrait pas être un obstacle. En tant qu'élève, j'ai réalisé à quel point il est souvent difficile de rassembler les anciennes épreuves, les compositions et les annales nécessaires pour s'entraîner correctement. Ce site est né d'un profond désir d'entraide et de la volonté de tirer tout le monde vers le haut. Il est pensé par un élève, pour les élèves. Mon but est de permettre à chacun de s'élever au-delà des difficultés, de viser l'excellence absolue à ses examens, et de bâtir un avenir solide. L'excellence est une réussite collective.",
        "footer_contrib": "Contribuez via WhatsApp", "footer_whatsapp": "Envoyez vos épreuves et documents directement sur WhatsApp pour enrichir la plateforme :",
        "upload_title": "Partager une épreuve", "upload_subtitle": "Glissez-déposez votre fichier PDF ici ou cliquez pour parcourir."
    },
    "en": {
        "nav_home": "Home", "nav_categories": "Categories", "nav_upload": "Contribute", "nav_about": "About us", "nav_login": "Login",
        "welcome_title": "Welcome",
        "welcome_subtitle": "Excellence is a collective achievement. Find, review, and share the best high school educational resources.",
        "search_placeholder": "Search for an exam, a subject...",
        "btn_explore": "Explore Exams <i class='fas fa-arrow-right'></i>", "btn_share": "Share a document",
        "filter_title": "Subjects:",
        "cat_bac": "Official Exams (BAC I & II)", "cat_bac_desc": "Exams from 2000 to 2026",
        "cat_national": "National Exams", "cat_national_desc": "Togo & Lycée Scientifique de Lomé",
        "cat_school": "School Exams", "cat_school_desc": "Notre Dame de la Trinité",
        "cat_optional": "Optional Subjects", "cat_optional_desc": "German, Music, etc.",
        "cat_library": "Library", "cat_library_desc": "Books and revision materials",
        "cat_others": "Other Exams", "cat_others_desc": "Miscellaneous resources",
        "about_title": "Why did I create this site?",
        "about_text": "I designed this platform with a strong conviction: access to educational resources should not be an obstacle. As a student, I realized how difficult it often is to gather past exams, essays, and annals needed to train properly. This site was born from a deep desire for mutual aid and the will to pull everyone up. It is designed by a student, for students. My goal is to allow everyone to rise above difficulties, aim for absolute excellence in their exams, and build a solid future. Excellence is a collective success.",
        "footer_contrib": "Contribute via WhatsApp", "footer_whatsapp": "Send your exams and documents directly on WhatsApp to enrich the platform:",
        "upload_title": "Share an exam", "upload_subtitle": "Drag and drop your PDF file here or click to browse."
    }
};

let currentLang = "fr";
const toggleBtn = document.getElementById("lang-toggle");

toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // innerHTML utilisé pour garder les balises comme <i>
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
}

// --- 2. DRAG AND DROP (PAGE UPLOAD) ---
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const fileNameDisplay = document.getElementById('file-name');

if (dropZone && fileInput) {
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            updateFileName();
        }
    });

    fileInput.addEventListener('change', updateFileName);

    function updateFileName() {
        if (fileInput.files.length > 0) {
            fileNameDisplay.textContent = fileInput.files[0].name;
            fileNameDisplay.style.color = "var(--primary-color)";
            fileNameDisplay.style.fontWeight = "bold";
        }
    }
}