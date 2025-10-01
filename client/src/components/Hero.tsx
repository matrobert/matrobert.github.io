import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, BookOpen } from "lucide-react";

interface HeroProps {
  name: string;
  position: string;
  institution: string;
  bio: string;
  researchInterests: string[];
  profileImage?: string;
  onViewPublications: () => void;
  onDownloadCV: () => void;
}

export function Hero({
  name,
  position,
  institution,
  bio,
  researchInterests,
  profileImage,
  onViewPublications,
  onDownloadCV,
}: HeroProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10" />
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-6">
            <AvatarImage src={profileImage} alt={name} />
            <AvatarFallback className="text-2xl md:text-3xl font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" data-testid="text-name">
            {name}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-2" data-testid="text-position">
            {position}
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-6" data-testid="text-institution">
            {institution}
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            {bio}
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {researchInterests.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm"
                data-testid={`badge-interest-${index}`}
              >
                {interest}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              onClick={onViewPublications}
              data-testid="button-view-publications"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              View Publications
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onDownloadCV}
              data-testid="button-download-cv"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
