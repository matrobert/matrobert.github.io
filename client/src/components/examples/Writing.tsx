import { Writing } from '../Writing'
import type { SubstackArticle } from '@shared/schema'

export default function WritingExample() {
  const mockArticles: SubstackArticle[] = [
    {
      id: "1",
      title: "The Future of AI Research: Where Are We Heading?",
      excerpt: "Exploring the current state of artificial intelligence research and what the next decade might bring for the field.",
      url: "#",
      publishedDate: "March 15, 2024",
      readTime: "8 min read"
    },
    {
      id: "2",
      title: "On Academic Publishing and Open Science",
      excerpt: "Reflections on the challenges and opportunities in modern academic publishing, and why open science matters now more than ever.",
      url: "#",
      publishedDate: "February 8, 2024",
      readTime: "12 min read"
    },
    {
      id: "3",
      title: "Building Better AI: Lessons from Nature",
      excerpt: "What biological intelligence can teach us about creating more robust and efficient artificial intelligence systems.",
      url: "#",
      publishedDate: "January 22, 2024",
      readTime: "10 min read"
    },
    {
      id: "4",
      title: "The PhD Journey: Reflections After Three Years",
      excerpt: "Personal insights and lessons learned from navigating the challenges and rewards of doctoral research.",
      url: "#",
      publishedDate: "December 10, 2023",
      readTime: "15 min read"
    }
  ]

  return (
    <Writing
      articles={mockArticles}
      substackUrl="https://substack.com"
    />
  )
}
