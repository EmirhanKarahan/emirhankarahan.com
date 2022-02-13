import { createClient } from "contentful";
import { GetStaticPropsContext, NextPage } from "next";
import Layout from "../components/layout";
import PortfolioItem from "../components/portfolioItem";
import { IPortfolioItem } from "../types/IPortfolioItem";

const PortfolioPage: NextPage<{
  portfolioItems: IPortfolioItem[];
}> = ({ portfolioItems }) => {
  return (
    <Layout>
      <section className="site-container space-y-4">
        {portfolioItems.map((portfolioItem) => (
          <PortfolioItem
            key={portfolioItem.sys.id}
            portfolioItem={portfolioItem}
          />
        ))}
      </section>
    </Layout>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const res = await client.getEntries({
    content_type: "portfolioItem",
    locale: context.locale,
  });

  return {
    props: {
      portfolioItems: res.items,
    },
    revalidate: 600,
  };
}
export default PortfolioPage;
