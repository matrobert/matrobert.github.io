import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, PenTool, Download, Moon, Sun, Github } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { SiX, SiOrcid } from "react-icons/si";

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="absolute top-4 right-4 z-10">
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

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-6">
            <AvatarImage src="/prof_pic.JPG" alt="Profile" />
            <AvatarFallback className="text-2xl md:text-3xl font-semibold">
              MR
            </AvatarFallback>
          </Avatar>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" data-testid="text-name">
            Matius Robert
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-2" data-testid="text-position">
            Metabolic Research & PhD Candidate
          </p>

          <p className="text-base md:text-lg text-muted-foreground" data-testid="text-institution">
            Duke-NUS Medical School, Singapore
          </p>

          <div className="flex gap-3 mt-6">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="hover-elevate backdrop-blur-sm bg-card/80 border-card-border/50" data-testid="card-publications">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-md">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <CardTitle className="text-2xl">Publications</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  View my publications on Google Scholar
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full"
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
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate backdrop-blur-sm bg-card/80 border-card-border/50" data-testid="card-writing">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-md">
                  <PenTool className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-left">
                  <CardTitle className="text-2xl">Writing</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Long-form essays on biotech, research, and life
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
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
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate backdrop-blur-sm bg-card/80 border-card-border/50" data-testid="card-cv">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-md">
                  <Download className="h-6 w-6 text-accent" />
                </div>
                <div className="text-left">
                  <CardTitle className="text-2xl">CV</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Download and view my curriculum vitae
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full"
                  onClick={handleDownloadCV}
                  data-testid="button-download-cv"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Matius Robert. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
