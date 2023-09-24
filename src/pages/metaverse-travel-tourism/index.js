import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Content from "./content";
import GameFooter from "@layout/Footer/GameFooter";
import TopSection from "./TopSection";

const travelntourism = () => {
    return (
    <Layout
      title="	Metaverse Tourism- Experience the Virtual Tourism"
      desc="Metaverse has the potential to revolutionize the travel industry by providing new and innovative ways for businesses to attract and engage customers."
    >
      <Navbar navDark />
      <TopSection />
      <Content />
      <GameFooter />
    </Layout>
  );
}
export default travelntourism;
