import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, GraduationCap } from "lucide-react";
import type { Publication } from "@shared/schema";
import { useState } from "react";

interface PublicationsProps {
  publications: Publication[];
}

export function Publications({ publications }: PublicationsProps) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = Array.from(new Set(publications.map((p) => p.year))).sort(
    (a, b) => b - a
  );

  const filteredPublications = selectedYear
    ? publications.filter((p) => p.year === selectedYear)
    : publications;

  const groupedByYear = filteredPublications.reduce(
    (acc, pub) => {
      if (!acc[pub.year]) acc[pub.year] = [];
      acc[pub.year].push(pub);
      return acc;
    },
    {} as Record<number, Publication[]>
  );

  return (
    <section id="publications" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Publications</h2>
        
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          Research papers and publications from Google Scholar
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedYear === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedYear(null)}
            data-testid="button-filter-all"
          >
            All Years
          </Button>
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedYear(year)}
              data-testid={`button-filter-${year}`}
            >
              {year}
            </Button>
          ))}
        </div>

        <div className="space-y-12">
          {Object.entries(groupedByYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, pubs]) => (
              <div key={year}>
                <h3 className="text-2xl font-semibold mb-6 text-muted-foreground">
                  {year}
                </h3>
                <div className="space-y-6">
                  {pubs.map((pub) => (
                    <Card
                      key={pub.id}
                      className="p-6 hover-elevate"
                      data-testid={`card-publication-${pub.id}`}
                    >
                      <div className="space-y-3">
                        <h4 className="text-lg font-medium leading-snug font-serif">
                          {pub.title}
                        </h4>

                        <p className="text-sm text-muted-foreground">
                          {pub.authors}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-sm text-muted-foreground">
                            {pub.venue}
                          </p>
                          {pub.citations !== null && pub.citations > 0 && (
                            <Badge variant="secondary" className="text-xs">
                              {pub.citations} citations
                            </Badge>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {pub.pdfUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              data-testid={`link-pdf-${pub.id}`}
                            >
                              <a
                                href={pub.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FileText className="mr-2 h-4 w-4" />
                                PDF
                              </a>
                            </Button>
                          )}
                          {pub.scholarUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              data-testid={`link-scholar-${pub.id}`}
                            >
                              <a
                                href={pub.scholarUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <GraduationCap className="mr-2 h-4 w-4" />
                                Google Scholar
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
