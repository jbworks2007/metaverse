import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Content from "./content";
import GameFooter from "@layout/Footer/GameFooter";
import TopSection from "./TopSection";

const banking = () => {
    return (
    <Layout
      title="Metaverse Banking- Transforming the Future of Banks"
      desc="Through metaverse in banking, customers could interact with avatars representing bank employees to get assistance with financial products and services."
    >
      <Navbar navDark />
      <TopSection />
      <Content />
      <GameFooter />
    </Layout>
  );
}
export default banking;
