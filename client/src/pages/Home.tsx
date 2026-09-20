import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import "./home.css";

const scholarUrl = "https://scholar.google.com/citations?user=zDHqheEAAAAJ&hl=en";
const writingUrl = "https://publish.obsidian.md/mtrob/About";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [email, setEmail] = useState<string | null>(null);

  const revealEmail = () => {
    // Obfuscation discourages basic scrapers; it is not a privacy guarantee.
    setEmail(atob("bS5yb2JlcnRAdS5kdWtlLm51cy5lZHU="));
  };

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="portfolio-shell">
        <header className="masthead">
          <a href="#main" className="wordmark" aria-label="Matius Robert home">
            <span>mtrob</span>
          </a>
          <div className="theme-control">
            <Button variant="ghost" size="icon" className="theme-button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} data-testid="button-theme-toggle">
              {theme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
            </Button>
          </div>
        </header>

        <main id="main">
          <section className="intro" aria-labelledby="name">
            <div className="intro-copy">
              <h1 id="name" data-testid="text-name">Matius Robert</h1>
              <div className="intro-description">
                <p className="bio" data-testid="text-position">Hello! I’m a PhD candidate at <span data-testid="text-institution">Duke-NUS Medical School in Singapore</span>, working in metabolic research.</p>
              </div>
            </div>
          </section>

          <section className="explore" id="explore" aria-labelledby="explore-heading">
            <h2 id="explore-heading" className="sr-only">Research, writing, CV, and contact</h2>
            <ul className="work-links">
              <li>
                <a href={scholarUrl} target="_blank" rel="noopener noreferrer" data-testid="card-publications">Publications</a>
                <span>Google Scholar</span>
              </li>
              <li>
                <a href={writingUrl} target="_blank" rel="noopener noreferrer" data-testid="card-writing">Writing</a>
                <span>Personal notes</span>
              </li>
              <li>
                <a href={`${import.meta.env.BASE_URL}cv.pdf`} download="Matius-Robert-CV.pdf" data-testid="button-download-cv">Curriculum vitae</a>
                <span>PDF</span>
              </li>
              <li className="contact-row">
                <Button
                  type="button"
                  variant="ghost"
                  className="contact-button no-default-hover-elevate no-default-active-elevate"
                  onClick={revealEmail}
                  aria-expanded={email !== null}
                  aria-controls="contact-email"
                  aria-label="Reveal contact email"
                  data-testid="button-reveal-email"
                >
                  Contact
                </Button>
                <span id="contact-email" className="contact-email" aria-live="polite" aria-atomic="true">
                  {email ? <a href={`mailto:${email}`}>{email}</a> : "Show email"}
                </span>
              </li>
            </ul>
          </section>
        </main>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Matius Robert</p>
          <nav className="social-links" aria-label="Social profiles">
            <a href="https://github.com/matrobert" target="_blank" rel="noopener noreferrer" data-testid="link-github">GitHub</a>
            <a href="https://orcid.org/0000-0002-2958-5415" target="_blank" rel="noopener noreferrer" data-testid="link-orcid">ORCID</a>
            <a href="https://x.com/matrobert_" target="_blank" rel="noopener noreferrer" data-testid="link-x">X</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
