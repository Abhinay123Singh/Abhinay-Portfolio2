// Typed.js effect
new Typed('#element', {
  strings: ['FULL STACK WEB DEVELOPMENT', 'MERN Stack Enthusiast', 'Open Source Contributor'],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true
});

// ===== Dark Mode Toggle =====
const toggleBtn = document.getElementById('toggle-theme');
const icon = toggleBtn.querySelector('i');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});
```

---