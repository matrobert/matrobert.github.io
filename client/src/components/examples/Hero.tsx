import { Hero } from '../Hero'

export default function HeroExample() {
  return (
    <Hero
      name="Dr. Jane Smith"
      position="PhD Student in Computer Science"
      institution="University of Technology"
      bio="I research machine learning and artificial intelligence, with a focus on natural language processing and computational linguistics. My work aims to bridge the gap between human understanding and machine intelligence."
      researchInterests={[
        "Machine Learning",
        "Natural Language Processing",
        "AI Ethics",
        "Computational Linguistics"
      ]}
      onViewPublications={() => console.log('View publications clicked')}
      onDownloadCV={() => console.log('Download CV clicked')}
    />
  )
}
