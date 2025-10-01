export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t bg-card">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Research Portfolio. All rights reserved.
          </p>

          <nav className="flex gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-about"
            >
              About
            </a>
            <a
              href="#publications"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-publications"
            >
              Publications
            </a>
            <a
              href="#writing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-writing"
            >
              Writing
            </a>
            <a
              href="#cv"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-cv"
            >
              CV
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
