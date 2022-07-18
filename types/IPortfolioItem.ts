export interface Sys {
  type: string;
  linkType: string;
  id: string;
}

export interface Tag {
  sys: Sys;
}

export interface Metadata {
  tags: Tag[];
}

export interface Sys3 {
  type: string;
  linkType: string;
  id: string;
}

export interface Space {
  sys: Sys3;
}

export interface Sys4 {
  id: string;
  type: string;
  linkType: string;
}

export interface Environment {
  sys: Sys4;
}

export interface Sys5 {
  type: string;
  linkType: string;
  id: string;
}

export interface ContentType {
  sys: Sys5;
}

export interface Sys2 {
  space: Space;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: Environment;
  revision: number;
  contentType: ContentType;
  locale: string;
}

export interface Fields {
  name: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
}

export interface IPortfolioItem {
  metadata: Metadata;
  sys: Sys2;
  fields: Fields;
}
