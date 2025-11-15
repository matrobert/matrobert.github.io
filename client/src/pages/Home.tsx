import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, PenTool, Download, Github } from "lucide-react";
import { SiX, SiOrcid } from "react-icons/si";
import dnaBackground from "@assets/Bird_DNA_1763217406416.png";

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
      {/* DNA Background - hidden on mobile, left on desktop */}
      <div 
        className="hidden lg:block absolute lg:inset-y-0 lg:left-0 lg:w-[100%] bg-no-repeat lg:bg-left lg:bg-cover"
        style={{
          backgroundImage: `url(${dnaBackground})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto lg:ml-auto lg:mr-44 px-6 lg:px-12 xl:px-16 py-10 md:py-12 lg:py-16 xl:py-20">
          {/* Header */}
          <header className="mb-10 lg:mb-12 xl:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal mb-5 xl:mb-6" data-testid="text-name">
              Matius Robert
            </h1>

            <p className="text-xl md:text-2xl xl:text-3xl text-foreground/80 mb-3 xl:mb-4 font-serif" data-testid="text-position">
              Metabolic Research & PhD Candidate
            </p>

            <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground font-serif" data-testid="text-institution">
              Duke-NUS Medical School, Singapore
            </p>

            <div className="flex gap-3 mt-6 xl:mt-8">
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
                  <Github className="h-5 w-5 xl:h-6 xl:w-6" />
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
                  <SiX className="h-4 w-4 xl:h-5 xl:w-5" />
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
                  <SiOrcid className="h-5 w-5 xl:h-6 xl:w-6" />
                </a>
              </Button>
            </div>
          </header>

          {/* Main Cards */}
          <div className="space-y-5 xl:space-y-6">
            <Card className="hover-elevate bg-card/50" data-testid="card-publications">
              <CardHeader className="pb-4 xl:pb-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 xl:p-4 bg-primary/80 rounded-md">
                    <BookOpen className="h-6 w-6 xl:h-8 xl:w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl xl:text-3xl font-serif font-normal">Publications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
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
                    <BookOpen className="mr-2 h-5 w-5 xl:h-6 xl:w-6" />
                    Visit Google Scholar
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate bg-card/50" data-testid="card-writing">
              <CardHeader className="pb-4 xl:pb-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 xl:p-4 bg-secondary/80 rounded-md">
                    <PenTool className="h-6 w-6 xl:h-8 xl:w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl xl:text-3xl font-serif font-normal">Writing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
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
                    <PenTool className="mr-2 h-5 w-5 xl:h-6 xl:w-6" />
                    Visit Substack
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate bg-card/50" data-testid="card-cv">
              <CardHeader className="pb-4 xl:pb-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 xl:p-4 bg-accent/80 rounded-md">
                    <Download className="h-6 w-6 xl:h-8 xl:w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-2xl xl:text-3xl font-serif font-normal">CV</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleDownloadCV}
                  data-testid="button-download-cv"
                >
                  <Download className="mr-2 h-5 w-5 xl:h-6 xl:w-6" />
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <footer className="mt-12 xl:mt-16 pt-8 xl:pt-10 border-t text-sm xl:text-base text-muted-foreground font-serif">
            <p>© {new Date().getFullYear()} Matius Robert. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
