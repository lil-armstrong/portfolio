export interface ISingleWorkExperience {
  index: number
  data: {
    org: string
    roles: string[]
    location: string
    timeline: string
    description: string
    image_url: string
    highlights: string[]
  }
}

export interface IHighlightListProps {
  highlights: string[]
  show?: boolean
}
