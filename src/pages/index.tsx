import { GetStaticProps, GetStaticPropsContext } from "next";

import { client } from "../config/apollo";

import { GET_PAGE_CONTENT, PageContent } from "../lib/graphql/queries/page";

import { HeaderContent } from "../types/header";
import { SubheaderContent } from "../types/subheader";

import { Header } from "../components/Header";
import { Feature } from "../components/Feature";
import { Galery } from "../components/Galery";
import { Book } from "../components/Book";
import { Footer } from "../components/Footer";

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
  const response = await client.query<PageContent>({
    query: GET_PAGE_CONTENT,
  });

  const data = response.data;

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
  };
};
