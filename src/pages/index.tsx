import { GetStaticProps } from "next";

import { client } from "../config/apollo";

import { GET_PAGE_CONTENT, PageContent } from "../lib/graphql/queries/page";

import { HeaderContent } from "../types/header";
import { SubheaderContent } from "../types/subheader";

import { Header } from "../components/home/Header";
import { Feature } from "../components/home/Feature";
import { Galery } from "../components/home/Galery";
import { Book } from "../components/home/Book";
import { Footer } from "../components/home/Footer";

interface HomeProps {
  header: HeaderContent;
  feature: SubheaderContent;
}

const Home = ({ header, feature }: HomeProps) => {
  return (
    <div>
      <Header content={header} />
      <Feature content={feature} />
      <Galery />
      <Book />
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<PageContent>({
    query: GET_PAGE_CONTENT,
  });

  if (!data) {
    return {
      props: {},
    };
  }

  const header = data.page.content.at(0);
  const feature = data.page.content.at(1);

  return {
    props: {
      header,
      feature,
    },
    revalidate: 60,
  };
};
