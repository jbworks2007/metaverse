import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import TopSection from "./TopSection";
import Content from "./content";
import GameFooter from "@layout/Footer/GameFooter";
import GameServer from '@components/server/GameServer'

const realestate = () => {
  return (
    <Layout
      title="Metaverse for Real Estate"
      desc="Metaverse Real estate allows transforming your property in the virtual worlds allowing users to experience the property virtually sitting at home."
    >
      <Navbar navDark />
      <TopSection />
      <Content />
      <GameFooter />
    </Layout>
  );
};
export default realestate;
