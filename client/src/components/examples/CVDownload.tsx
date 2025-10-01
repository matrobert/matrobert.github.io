import { CVDownload } from '../CVDownload'

export default function CVDownloadExample() {
  return (
    <CVDownload
      lastUpdated="March 2024"
      fileSize="245 KB"
      onDownload={() => console.log('Download CV clicked')}
    />
  )
}
