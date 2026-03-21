// Set Current Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Language Toggle Logic
let isEnglish = false;
const langToggleBtns = document.querySelectorAll('.lang-toggle-btn');

function toggleLanguage() {
    isEnglish = !isEnglish;
    
    document.querySelectorAll('.lang-el').forEach(el => el.classList.toggle('hidden', isEnglish));
    document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('hidden', !isEnglish));

    langToggleBtns.forEach(btn => {
        btn.innerHTML = isEnglish ? '🇬🇷 Greek' : '🇬🇧 English';
    });

    document.documentElement.lang = isEnglish ? 'en' : 'el';
    document.getElementById('page-title').textContent = isEnglish 
        ? 'Vasileios Barmpagiannos | Personal Website' 
        : 'Βασίλειος Μπαρμπαγιάννος | Προσωπικό Website';
}

langToggleBtns.forEach(btn => btn.addEventListener('click', toggleLanguage));
