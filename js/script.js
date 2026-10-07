/* ===== Theme ===== */
:root {
  --bg: #f9f8f6;
  --panel: rgba(255, 255, 255, 0.82);
  --card: #ffffff;
  --ink: #0b1d3a;
  --muted: #5f6d80;
  --line: rgba(11, 29, 58, 0.09);
  --shadow: 0 18px 40px rgba(11, 29, 58, 0.07);
  --radius: 20px;
  --container: 1120px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: "Inter", sans-serif;
  line-height: 1.6;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.container {
  width: min(var(--container), calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(249, 248, 246, 0.84);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(11, 29, 58, 0.04);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 78px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
}

.brand-name {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.4rem, 1.1rem + 0.7vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.03em;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.main-nav a {
  padding: 10px 12px;
  border-radius: 12px;
  color: var(--ink);
  font-weight: 600;
  transition: background 0.2s ease, transform 0.2s ease;
}

.main-nav a:hover,
.main-nav a.active {
  background: rgba(11, 29, 58, 0.06);
  transform: translateY(-1px);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 0;
  width: 44px;
  height: 44px;
  padding: 0;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  margin: 5px auto;
  background: var(--ink);
  border-radius: 999px;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px 18px;
  background: rgba(249, 248, 246, 0.96);
}

.mobile-menu a {
  padding: 10px 12px;
  border-radius: 10px;
  color: var(--ink);
  font-weight: 600;
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 42px;
  padding-top: 64px;
  padding-bottom: 48px;
  min-height: 72vh;
}

.eyebrow {
  margin: 0 0 14px;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 700;
}

.hero h1,
.section-header h2,
.site-footer p,
.content-card h2,
.project-card h3,
.info-card h3 {
  font-family: "Cormorant Garamond", serif;
}

.hero h1 {
  margin: 0;
  font-size: clamp(3rem, 1.6rem + 3vw, 6rem);
  line-height: 0.96;
  letter-spacing: -0.04em;
}

.lead {
  max-width: 620px;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 1.08rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border-radius: 14px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--ink);
  color: white;
  box-shadow: 0 18px 30px rgba(11, 29, 58, 0.16);
}

.btn-secondary {
  background: rgba(11, 29, 58, 0.04);
  border: 1px solid var(--line);
  color: var(--ink);
}

.hero-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.mini-card {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px;
  box-shadow: var(--shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.mini-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 40px rgba(11, 29, 58, 0.08);
}

.mini-label {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
  color: var(--ink);
}

.mini-card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.highlight-box {
  margin-top: 14px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 28px 30px;
}

.highlight-box p {
  margin: 0;
  color: var(--muted);
  font-size: 1.04rem;
}

.page-shell {
  padding-top: 42px;
  padding-bottom: 40px;
}

.content-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  border-radius: 26px;
  box-shadow: var(--shadow);
  padding: 28px;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(2.2rem, 1.2rem + 2.2vw, 3.2rem);
  letter-spacing: -0.03em;
  line-height: 1;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr;
  gap: 26px;
  margin-top: 26px;
  align-items: center;
}

.about-copy p {
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 1rem;
}

.profile-box {
  display: grid;
  place-items: center;
  gap: 14px;
}

.profile-box p {
  margin: 0;
  color: var(--muted);
  font-size: 0.86rem;
  text-align: center;
}

.portrait-placeholder {
  width: 180px;
  height: 180px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(11, 29, 58, 0.06), rgba(255, 255, 255, 0.8));
  border: 1px solid var(--line);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--ink);
}

.hobby-grid,
.project-grid,
.connect-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 28px;
}

.info-card,
.project-card,
.connect-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 14px 26px rgba(11, 29, 58, 0.04);
}

.info-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 16px;
}

.info-icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(11, 29, 58, 0.05);
  font-size: 1.5rem;
}

.info-card h3,
.project-card h3 {
  margin: 0 0 6px;
  font-size: clamp(1.5rem, 1.1rem + 0.6vw, 2rem);
  line-height: 1.1;
}

.info-card p,
.project-card p {
  margin: 0;
  color: var(--muted);
}

.project-card {
  padding: 20px 18px;
}

.project-tag {
  display: inline-block;
  margin-bottom: 12px;
  background: rgba(11, 29, 58, 0.05);
  color: var(--ink);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.text-link {
  display: inline-block;
  margin-top: 18px;
  color: var(--ink);
  font-weight: 700;
}

.connect-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.connect-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 30px rgba(11, 29, 58, 0.06);
}

.connect-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(11, 29, 58, 0.05);
  font-size: 1.3rem;
}

.connect-card small {
  display: block;
  color: var(--muted);
  margin-bottom: 4px;
}

.connect-card strong {
  font-size: 1rem;
}

.site-footer {
  padding: 28px 0 48px;
  text-align: center;
  color: var(--muted);
}

.site-footer p {
  margin: 0;
  font-size: clamp(1.25rem, 1.1rem + 0.5vw, 1.8rem);
}

.reveal {
  opacity: 0;
  transform: translateY(16px);
  animation: reveal 0.8s ease forwards;
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 820px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 26px;
    padding-top: 38px;
  }

  .about-grid,
  .hobby-grid,
  .project-grid,
  .connect-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .main-nav {
    display: none;
  }

  .nav-toggle {
    display: block;
  }

  .mobile-menu.open {
    display: flex;
  }

  .brand-name {
    display: none;
  }

  .content-card {
    padding: 18px;
  }
}

@media (max-width: 480px) {
  .hero-cards {
    grid-template-columns: 1fr;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }
}
