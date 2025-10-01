import { Mail } from "lucide-react";
import { SiGooglescholar, SiLinkedin, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";

interface AboutProps {
  biography: string[];
  email: string;
  scholarUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export function About({
  biography,
  email,
  scholarUrl,
  linkedinUrl,
  twitterUrl,
}: AboutProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">About</h2>

        <div className="space-y-6 mb-8">
          {biography.map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg leading-relaxed"
              data-testid={`text-bio-${index}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="outline" asChild data-testid="link-email">
            <a href={`mailto:${email}`}>
              <Mail className="mr-2 h-4 w-4" />
              {email}
            </a>
          </Button>

          {scholarUrl && (
            <Button variant="ghost" size="icon" asChild data-testid="link-scholar">
              <a href={scholarUrl} target="_blank" rel="noopener noreferrer">
                <SiGooglescholar className="h-5 w-5" />
              </a>
            </Button>
          )}

          {linkedinUrl && (
            <Button variant="ghost" size="icon" asChild data-testid="link-linkedin">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="h-5 w-5" />
              </a>
            </Button>
          )}

          {twitterUrl && (
            <Button variant="ghost" size="icon" asChild data-testid="link-twitter">
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <SiX className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
