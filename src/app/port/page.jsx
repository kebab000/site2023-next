"use client";
import ContTitle from '@/components/title/ContTitle'
import React from 'react'
import PortCont from './PortCont'

const PortPage = () => {
  return (
    <>
      <ContTitle title='Portfolio'/>
      {/* <PortSlider/> */}
      <PortCont/>
    </>
  )
}

export default PortPage