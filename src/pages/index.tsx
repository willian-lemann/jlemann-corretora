import { Header } from "../components/Header";
import { Feature } from "../components/Feature";
import { Galery } from "../components/Galery";
import { Book } from "../components/Book";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Feature />
      <Galery />
      <Book />
      <Footer />
    </div>
  );
};

export default Home;
