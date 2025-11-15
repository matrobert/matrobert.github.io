import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, PenTool, Download, Github } from "lucide-react";
import { SiX, SiOrcid } from "react-icons/si";
import dnaBackground from "@assets/DNA_1763203774084.png";

export default function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen bg-background relative overflow-hidden">
      {/* DNA Background - positioned on the left */}
      <div 
        className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-no-repeat bg-left bg-contain lg:bg-cover opacity-[0.12]"
        style={{
          backgroundImage: `url(${dnaBackground})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full overflow-y-auto">
        <div className="max-w-3xl mx-auto lg:ml-auto lg:mr-12 px-6 lg:px-10 py-8 md:py-10 lg:py-12">
          {/* Header */}
          <header className="mb-8 lg:mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal mb-4" data-testid="text-name">
              Matius Robert
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-2 font-serif" data-testid="text-position">
              Metabolic Research & PhD Candidate
            </p>

            <p className="text-base md:text-lg text-muted-foreground font-serif" data-testid="text-institution">
              Duke-NUS Medical School, Singapore
            </p>

            <div className="flex gap-2 mt-5">
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
                  <Github className="h-4 w-4" />
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
                  <SiX className="h-3.5 w-3.5" />
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
                  <SiOrcid className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </header>

          {/* Main Cards */}
          <div className="space-y-4">
            <Card className="hover-elevate" data-testid="card-publications">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif font-normal">Publications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  variant="default"
                  asChild
                  data-testid="button-google-scholar"
                >
                  <a
                    href="https://scholar.google.com/citations?user=zDHqheEAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Visit Google Scholar
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-writing">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-md">
                    <PenTool className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-serif font-normal">Writing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  variant="secondary"
                  asChild
                  data-testid="button-substack"
                >
                  <a
                    href="https://yoursubstack.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PenTool className="mr-2 h-4 w-4" />
                    Visit Substack
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-cv">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-md">
                    <Download className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-serif font-normal">CV</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  variant="default"
                  onClick={handleDownloadCV}
                  data-testid="button-download-cv"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <footer className="mt-10 pt-6 border-t text-xs text-muted-foreground font-serif">
            <p>© {new Date().getFullYear()} Matius Robert. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
