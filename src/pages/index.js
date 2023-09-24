import React from 'react'
import GameCounter from '@components/counter/GameCounter'
import GameFaq from '@components/faq/GameFaq'
import GameFeatures from '@components/features/GameFeaures'
import HeroTwelve from '@components/hero-section/HeroTwelve'
import GamePrice from '@components/pricing/GamePrice'
import GameReview from '@components/review/GameReview'
import GameServer from '@components/server/GameServer'
import GameServices from '@components/services/GameServices'
import GameFooter from '@layout/Footer/GameFooter'
import Navbar from '@layout/Header/Navbar'
import Layout from '@layout/Layout'
import Videotest from '@components/common/Videotest'


const GameSolution = () => {
  return (
    <Layout title='Metaverse Solutions' classOpt='bg-black'>
      <Navbar navDark />
      <HeroTwelve />
      <Videotest />
      <GameServer />
      <GameServices />
      {/* <GameFeatures />
      <GameCounter />
      <GameReview />
      <GameFaq /> */}
      <GamePrice />
      <GameFooter />
    </Layout>)
}

export default GameSolution
