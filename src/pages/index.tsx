import { GetStaticProps } from "next";

import { GET_PAGE_CONTENT, PageContent } from "../lib/graphql/queries/page";

import { HeaderContent, SubheaderContent, GalleryContent } from "../types";

import { Header } from "../components/home/Header";
import { Feature } from "../components/home/Feature";
import { Gallery } from "../components/home/Gallery";
import { Book } from "../components/home/Book";
import { Footer } from "../components/home/Footer";
import { apolloClient } from "../config/apollo";

interface HomeProps {
  header: HeaderContent;
  feature: SubheaderContent;
  gallery: GalleryContent;
}

const Home = ({ header, feature, gallery }: HomeProps) => {
  if (!header) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header content={header} />
      <Feature content={feature} />
      <Gallery content={gallery} />
      <Book />
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query<PageContent>({
    query: GET_PAGE_CONTENT,
  });

  if (!data) {
    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
    };
  }

  const header = data.page.content.at(0);
  const feature = data.page.content.at(1);
  const gallery = data.page.content.at(2);

  console.log(gallery);

  return {
    props: {
      header,
      feature,
      gallery,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
