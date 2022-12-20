import React, { useState } from 'react'
import BCRail from '../public/images/BC_Rail_logo.png'
import BCCDC from '../public/images/BCCDC.png'
import BCPS from '../public/images/BCPS.jpg'
import HBT from '../public/images/HBT.jpg'
import HMI from '../public/images/HMI.png'
import KCMS from '../public/images/KCMS.png'
import LifeMark from '../public/images/LifeMark.png'
import Mendays from '../public/images/Mendays.png'
import RCMP from '../public/images/RCMP_logo.png'
import SP from '../public/images/SPLogo.png'
import VP from '../public/images/viewpoint-logo.svg'

import { ExperienceData } from '../data/portfoiloCredentials'
import useWindowDimensions from '../hooks/windowWidth'
import { useTransition, animated } from '@react-spring/web'

function Experience({scrollPosition}) {
  const scrollHeight = document.body.scrollHeight

  const { width } = useWindowDimensions()
console.log(document.body.scrollHeight, scrollPosition, )
  const experienceBanner = useTransition(scrollPosition > 300,{
    from: {x: width/2},
    enter: {x: 0},
    leave: {x: width/2, delay: 100}
  })

  const [experienceData, setExperienceData] = useState(ExperienceData)

  return (
    <div className='Experience-Container'>
      {
        experienceBanner((style, item) =>
        item &&
        <animated.div>
          <h1 className='Section-Title'>Experience</h1>
        </animated.div>)
      }
    </div>
  )
}

export default Experience