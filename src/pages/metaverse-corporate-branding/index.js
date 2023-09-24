import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Content from "./content";
import GameFooter from "@layout/Footer/GameFooter";
import TopSection from "./TopSection";


const corporatebranding = () => {
    return (
    <Layout
      title="Effective Corporate Branding in Metaverse"
      desc="Corporate Branding in Metaverse allows tapping into a niche audience, expanding the brand's reach and selling products in a new arena."
    >
      <Navbar navDark />
      <TopSection />
      <Content />
      <GameFooter />
    </Layout>
  );
}
export default corporatebranding;
