import { GetStaticProps, GetStaticPropsContext } from "next";

import { client, server } from "../config/apollo";

import { Header } from "../components/Header";
import { Feature } from "../components/Feature";
import { Galery } from "../components/Galery";
import { Book } from "../components/Book";
import { Footer } from "../components/Footer";
import { GET_PAGE_CONTENT, PageContent } from "../lib/graphql/queries/page";
import { ApolloClient, InMemoryCache } from "@apollo/client";

interface HomeProps {
  header: {
    title: string;
    navigation: { id: number; href: string; name: string }[];
  };
}

const Home = ({ header }: HomeProps) => {
  return (
    <div>
      <Header content={header} />
      <Feature />
      <Galery />
      <Book />
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { page },
  } = await client.query<PageContent>({
    query: GET_PAGE_CONTENT,
  });

  const header = page.content.at(0);

  console.log(header);
  return {
    props: {
      header,
    },
  };
};
