/* NEXORA site settings — update the email below before publishing. */
const NEXORA_EMAIL = "YOUR_EMAIL@example.com";

const header = document.querySelector("[data-header]");
if (header) {
  const current = location.pathname.split("/").pop() || "index.html";
  const links = [
    ["Home", "index.html"], ["Services", "services.html"], ["About", "about.html"],
    ["Case Studies", "case-studies.html"], ["Contact", "contact.html"]
  ];
  header.innerHTML = `<header class="site-header"><div class="wrap nav-wrap">
    <a class="brand" href="index.html" aria-label="NEXORA home"><span class="brand-mark">N</span><span>NEXORA</span></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
    <nav class="main-nav">${links.map(([label,url]) => `<a href="${url}" class="${current===url?'active':''}">${label}</a>`).join("")}<a class="nav-cta" href="contact.html">Let's talk <span>↗</span></a></nav>
  </div></header>`;
  const toggle = header.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => {
    const open = header.querySelector(".main-nav").classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
const footer = document.querySelector("[data-footer]");
if (footer) footer.innerHTML = `<footer class="site-footer"><div class="wrap"><div class="footer-main"><div><a class="brand brand-light" href="index.html"><span class="brand-mark">N</span><span>NEXORA</span></a><p>Beyond Digital.<br><span>Towards Growth.</span></p></div><div class="footer-nav"><span>EXPLORE</span><a href="services.html">Services</a><a href="about.html">About</a><a href="case-studies.html">Case Studies</a><a href="contact.html">Contact</a></div><div class="footer-contact"><span>HAVE A GOAL IN MIND?</span><a href="contact.html">Let's make a plan <b>↗</b></a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} NEXORA. All rights reserved.</span><span>Independent digital growth agency</span></div></div></footer>`;
document.querySelectorAll("[data-email]").forEach(el => { el.textContent = NEXORA_EMAIL; el.href = "mailto:" + NEXORA_EMAIL; });
const form = document.getElementById("contactForm");
if (form) form.addEventListener("submit", event => {
  event.preventDefault();
  if (NEXORA_EMAIL.includes("YOUR_EMAIL")) {
    document.getElementById("formNote").textContent = "Please update NEXORA_EMAIL in assets/js/site.js with your real email address before using this form.";
    return;
  }
  const data = new FormData(form);
  const subject = encodeURIComponent("NEXORA enquiry — " + data.get("name"));
  const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany / Website: ${data.get("company")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`);
  location.href = `mailto:${NEXORA_EMAIL}?subject=${subject}&body=${body}`;
});