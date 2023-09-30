export interface Root {
  data: Data;
}

export interface Data {
  user: User;
}

export interface User {
  publication: Publication;
}

export interface Publication {
  posts: IBlogPost[];
}

export interface IBlogPost {
  slug: string;
  title: string;
  brief: string;
  dateUpdated: string;
}
