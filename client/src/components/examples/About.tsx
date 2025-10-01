import { About } from '../About'

export default function AboutExample() {
  return (
    <About
      biography={[
        "I am a PhD student at the University of Technology, where I work on developing novel approaches to machine learning and natural language processing. My research focuses on creating AI systems that can better understand and generate human language.",
        "Before starting my PhD, I completed my master's degree in Computer Science with a thesis on neural machine translation. I've published papers at top-tier conferences including NeurIPS, ICML, and ACL.",
        "Beyond my research, I'm passionate about making AI more accessible and ethical. I write regularly on my Substack about the intersection of technology, society, and artificial intelligence."
      ]}
      email="jane.smith@university.edu"
      scholarUrl="https://scholar.google.com"
      linkedinUrl="https://linkedin.com"
      twitterUrl="https://twitter.com"
    />
  )
}
