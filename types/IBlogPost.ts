export interface Root {
  data: Data
}

export interface Data {
  publication: Publication
}

export interface Publication {
  posts: Posts
}

export interface Posts {
  edges: Edge[]
}

export interface Edge {
  node: IBlogPost
}

export interface IBlogPost {
  title: string
  brief: string
  url: string
  slug: string
  publishedAt: string
}
