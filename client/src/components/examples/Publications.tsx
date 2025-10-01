import { Publications } from '../Publications'
import type { Publication } from '@shared/schema'

export default function PublicationsExample() {
  const mockPublications: Publication[] = [
    {
      id: "1",
      title: "Advances in Neural Machine Translation: A Comprehensive Survey",
      authors: "Jane Smith, John Doe, Alice Johnson",
      venue: "Proceedings of NeurIPS 2024",
      year: 2024,
      citations: 45,
      pdfUrl: "#",
      scholarUrl: "#"
    },
    {
      id: "2",
      title: "Ethical Considerations in Large Language Models",
      authors: "Jane Smith, Bob Wilson",
      venue: "ACL 2024",
      year: 2024,
      citations: 32,
      pdfUrl: "#",
      scholarUrl: "#"
    },
    {
      id: "3",
      title: "Improving Context Understanding in Transformer Architectures",
      authors: "Jane Smith, Carol Davis, Eve Martinez",
      venue: "ICML 2023",
      year: 2023,
      citations: 78,
      pdfUrl: "#",
      scholarUrl: "#"
    },
    {
      id: "4",
      title: "Zero-Shot Learning for Cross-Lingual Transfer",
      authors: "Jane Smith, Frank Brown",
      venue: "EMNLP 2023",
      year: 2023,
      citations: 56,
      pdfUrl: "#",
      scholarUrl: "#"
    },
    {
      id: "5",
      title: "Attention Mechanisms for Long-Form Text Generation",
      authors: "Jane Smith",
      venue: "ICLR 2022",
      year: 2022,
      citations: 123,
      pdfUrl: "#",
      scholarUrl: "#"
    }
  ]

  return <Publications publications={mockPublications} />
}
