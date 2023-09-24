import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import TopSection from "./TopSection";
import Content from "./content";
import GameFooter from "@layout/Footer/GameFooter";
import GameServer from '@components/server/GameServer'



const realestate = () => {
    return (
      <Layout
        title="Metaverse for Government & NGOs"
        desc="Metaverse "
      >
        <Navbar navDark />
        <TopSection />
        <Content />
        <GameFooter />
      </Layout>
    );
  };
  export default realestate;