import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import type { SubstackArticle } from "@shared/schema";

interface WritingProps {
  articles: SubstackArticle[];
  substackUrl: string;
}

export function Writing({ articles, substackUrl }: WritingProps) {
  return (
    <section id="writing" className="py-16 md:py-24 bg-card">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Writing</h2>
        
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          Long-form essays and reflections on research, technology, and ideas
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="p-6 hover-elevate flex flex-col"
              data-testid={`card-article-${article.id}`}
            >
              <h3 className="text-xl font-semibold mb-3 leading-snug">
                {article.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {article.publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
              </div>

              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full"
                data-testid={`link-article-${article.id}`}
              >
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read on Substack
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
            asChild 
            data-testid="link-substack"
          >
            <a href={substackUrl} target="_blank" rel="noopener noreferrer">
              View All Articles
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
