function applyLang(lang) {
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll('[data-kaz][data-rus]').forEach(el => {
    el.innerHTML = lang === 'kaz' ? el.dataset.kaz : el.dataset.rus;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyLang(lang);
  closeSidebar();
}

function initLang() {
  applyLang(localStorage.getItem('lang') || 'kaz');
}

function toggleSidebar() {
  document.body.classList.toggle('sidebar-open');
}

function closeSidebar() {
  document.body.classList.remove('sidebar-open');
}
