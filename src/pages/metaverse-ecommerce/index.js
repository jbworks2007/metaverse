import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Content from "./content";
import GameFooter from "@layout/Footer/GameFooter";
import TopSection from "./TopSection";

const ecommerce = () => {
    return (
    <Layout
      title="Metaverse E-Commerce - Reshape E-commerce Experience"
      desc="Metaverse E-commerce is a virtual world with immersive and interactive customer shopping experiences."
    >
      <Navbar navDark />
      <TopSection />
      <Content />
      <GameFooter />
    </Layout>
  );
}
export default ecommerce;
