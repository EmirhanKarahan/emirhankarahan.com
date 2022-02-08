import { ContentfulCollection, ContentTypeCollection } from "contentful";

export interface Metadata {
  tags: any[];
}

export interface Sys2 {
  type: string;
  linkType: string;
  id: string;
}

export interface Space {
  sys: Sys2;
}

export interface Sys3 {
  id: string;
  type: string;
  linkType: string;
}

export interface Environment {
  sys: Sys3;
}

export interface Sys4 {
  type: string;
  linkType: string;
  id: string;
}

export interface ContentType {
  sys: Sys4;
}

export interface Sys {
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
  title: string;
  subtitle: string;
  content: any;
}

export interface IBlogPost {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}
