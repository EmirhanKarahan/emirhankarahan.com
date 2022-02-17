the repository of my website - 
tech stack; nextjs, typescript, contentful, auth0, redis

#### Getting Started

1.  Create a upstash redis database
2.  Create a auth0 regular web application for nextjs and follow the quick start
3.  Create a contentful space with the given content types below
4.  Create a .env.local file, copy .env.example to it and fill the lines
5.  Finally, you are good to go

**yarn**

```sh
yarn install
yarn dev
```

#### Contentful Content Types

|BlogPost| | | | 
|--|--|--|--|
| Title | Short text | localized | required |
| Subtitle | Short text | localized | required
| Content | Rich text |  localized | required

-----
|PortfolioItem| | | | 
|--|--|--|--|--|
| Name | Short text | localized | required 
| Description | Short text | localized | required
| Github URL | Short text | match as URL | required
| Demo URL | Short text | match as URL  | required
