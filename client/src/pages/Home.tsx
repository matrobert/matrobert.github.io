import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, PenTool, Download, Moon, Sun, Github } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { SiX, SiOrcid } from "react-icons/si";
import dnaBackground from "@assets/DNA_1763204843876.png";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - DNA Background */}
      <div 
        className="hidden lg:block lg:w-5/12 xl:w-1/2 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${dnaBackground})`,
        }}
      />
      
      {/* Right side - Content */}
      <div className="flex-1 relative">
        <div className="absolute top-6 right-6 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-32">
          {/* Header */}
          <header className="mb-16 lg:mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-6" data-testid="text-name">
              Matius Robert
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 mb-3 font-serif" data-testid="text-position">
              Metabolic Research & PhD Candidate
            </p>

            <p className="text-lg md:text-xl text-muted-foreground font-serif" data-testid="text-institution">
              Duke-NUS Medical School, Singapore
            </p>

            <div className="flex gap-3 mt-8">
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="link-github"
              >
                <a
                  href="https://github.com/matrobert"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="link-x"
              >
                <a
                  href="https://x.com/matrobert_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <SiX className="h-4 w-4" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="link-orcid"
              >
                <a
                  href="https://orcid.org/0000-0002-2958-5415"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ORCID"
                >
                  <SiOrcid className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </header>

          {/* Main Cards */}
          <div className="space-y-6">
            <Card className="hover-elevate" data-testid="card-publications">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-serif font-normal">Publications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-5 font-serif leading-relaxed">
                  View my publications on Google Scholar
                </p>
                <Button
                  variant="default"
                  size="lg"
                  asChild
                  data-testid="button-google-scholar"
                >
                  <a
                    href="https://scholar.google.com/citations?user=zDHqheEAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Visit Google Scholar
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-writing">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/10 rounded-md">
                    <PenTool className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-3xl font-serif font-normal">Writing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-5 font-serif leading-relaxed">
                  Long-form essays on biotech, research, and life
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  data-testid="button-substack"
                >
                  <a
                    href="https://yoursubstack.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PenTool className="mr-2 h-5 w-5" />
                    Visit Substack
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-cv">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-md">
                    <Download className="h-7 w-7 text-accent" />
                  </div>
                  <CardTitle className="text-3xl font-serif font-normal">CV</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-5 font-serif leading-relaxed">
                  Download and view my curriculum vitae
                </p>
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleDownloadCV}
                  data-testid="button-download-cv"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <footer className="mt-16 lg:mt-20 pt-8 border-t text-sm text-muted-foreground font-serif">
            <p>© {new Date().getFullYear()} Matius Robert. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
