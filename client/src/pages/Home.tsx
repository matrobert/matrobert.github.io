import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Publications } from "@/components/Publications";
import { Writing } from "@/components/Writing";
import { CVDownload } from "@/components/CVDownload";
import { Footer } from "@/components/Footer";
import type { Publication, SubstackArticle } from "@shared/schema";

export default function Home() {
  const mockPublications: Publication[] = [
    {
      id: "1",
      title: "Advances in Neural Machine Translation: A Comprehensive Survey",
      authors: "Jane Smith, John Doe, Alice Johnson",
      venue: "Proceedings of NeurIPS 2024",
      year: 2024,
      citations: 45,
      pdfUrl: "#",
      scholarUrl: "#",
    },
    {
      id: "2",
      title: "Ethical Considerations in Large Language Models",
      authors: "Jane Smith, Bob Wilson",
      venue: "ACL 2024",
      year: 2024,
      citations: 32,
      pdfUrl: "#",
      scholarUrl: "#",
    },
    {
      id: "3",
      title: "Improving Context Understanding in Transformer Architectures",
      authors: "Jane Smith, Carol Davis, Eve Martinez",
      venue: "ICML 2023",
      year: 2023,
      citations: 78,
      pdfUrl: "#",
      scholarUrl: "#",
    },
    {
      id: "4",
      title: "Zero-Shot Learning for Cross-Lingual Transfer",
      authors: "Jane Smith, Frank Brown",
      venue: "EMNLP 2023",
      year: 2023,
      citations: 56,
      pdfUrl: "#",
      scholarUrl: "#",
    },
    {
      id: "5",
      title: "Attention Mechanisms for Long-Form Text Generation",
      authors: "Jane Smith",
      venue: "ICLR 2022",
      year: 2022,
      citations: 123,
      pdfUrl: "#",
      scholarUrl: "#",
    },
  ];

  const mockArticles: SubstackArticle[] = [
    {
      id: "1",
      title: "The Future of AI Research: Where Are We Heading?",
      excerpt:
        "Exploring the current state of artificial intelligence research and what the next decade might bring for the field.",
      url: "#",
      publishedDate: "March 15, 2024",
      readTime: "8 min read",
    },
    {
      id: "2",
      title: "On Academic Publishing and Open Science",
      excerpt:
        "Reflections on the challenges and opportunities in modern academic publishing, and why open science matters now more than ever.",
      url: "#",
      publishedDate: "February 8, 2024",
      readTime: "12 min read",
    },
    {
      id: "3",
      title: "Building Better AI: Lessons from Nature",
      excerpt:
        "What biological intelligence can teach us about creating more robust and efficient artificial intelligence systems.",
      url: "#",
      publishedDate: "January 22, 2024",
      readTime: "10 min read",
    },
    {
      id: "4",
      title: "The PhD Journey: Reflections After Three Years",
      excerpt:
        "Personal insights and lessons learned from navigating the challenges and rewards of doctoral research.",
      url: "#",
      publishedDate: "December 10, 2023",
      readTime: "15 min read",
    },
  ];

  const handleViewPublications = () => {
    document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    console.log("Download CV clicked");
  };

  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        name="Dr. Jane Smith"
        position="PhD Student in Computer Science"
        institution="University of Technology"
        bio="I research machine learning and artificial intelligence, with a focus on natural language processing and computational linguistics. My work aims to bridge the gap between human understanding and machine intelligence."
        researchInterests={[
          "Machine Learning",
          "Natural Language Processing",
          "AI Ethics",
          "Computational Linguistics",
        ]}
        onViewPublications={handleViewPublications}
        onDownloadCV={handleDownloadCV}
      />

      <About
        biography={[
          "I am a PhD student at the University of Technology, where I work on developing novel approaches to machine learning and natural language processing. My research focuses on creating AI systems that can better understand and generate human language.",
          "Before starting my PhD, I completed my master's degree in Computer Science with a thesis on neural machine translation. I've published papers at top-tier conferences including NeurIPS, ICML, and ACL.",
          "Beyond my research, I'm passionate about making AI more accessible and ethical. I write regularly on my Substack about the intersection of technology, society, and artificial intelligence.",
        ]}
        email="jane.smith@university.edu"
        scholarUrl="https://scholar.google.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />

      <Publications publications={mockPublications} />

      <Writing articles={mockArticles} substackUrl="https://substack.com" />

      <CVDownload
        lastUpdated="March 2024"
        fileSize="245 KB"
        onDownload={handleDownloadCV}
      />

      <Footer />
    </div>
  );
}
