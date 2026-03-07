export interface Member {
  name: string
  role: string
  description: string
  image: string
  social?: {
    instagram?: string
    github?: string
    linkedin?: string
  }
}

export interface Project {
  title: string
  description: string
  images: [string, string]
}

export interface BlogPost {
  title: string
  description: string
  date: string
  tags: string[]
  image: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}
