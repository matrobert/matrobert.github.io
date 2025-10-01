import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar } from "lucide-react";

interface CVDownloadProps {
  lastUpdated: string;
  fileSize: string;
  onDownload: () => void;
}

export function CVDownload({ lastUpdated, fileSize, onDownload }: CVDownloadProps) {
  return (
    <section id="cv" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Curriculum Vitae
        </h2>

        <Card className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-md bg-primary/10 flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary" />
              </div>
            </div>

            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Academic CV</h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Updated {lastUpdated}
                </span>
                <span>•</span>
                <span>{fileSize}</span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Button
                size="lg"
                onClick={onDownload}
                data-testid="button-download-cv-main"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
