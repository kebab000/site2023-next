import React from 'react'
import Intro from '@/components/intro/Intro'
import Member from '@/components/member/Member'
import Portfolio from '@/components/portfolio/Portfolio'
import Slider from '@/components/slider/Slider'
import Youtube from '@/components/youtube/Youtube'
import Movie from '@/components/movie/Movie'
import Unsplash from '@/components/unsplash/Unsplash'

const Home = () => {
  return (
    <>
      <Slider/>
      <Intro/>
      <Member/>
      <Portfolio/>
      <Youtube/>
      <Movie/>
      <Unsplash/>
    </>
  )
}

export default Home