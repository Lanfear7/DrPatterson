import React, { useState } from 'react'

import { ExperienceData } from '../data/portfoiloCredentials'
import useWindowDimensions from '../hooks/windowWidth'
import { useTransition, animated } from '@react-spring/web'

function Experience({scrollPosition}) {
  const { width } = useWindowDimensions()
  
  const [experienceData, setExperienceData] = useState(ExperienceData)


  const experienceBanner1800 = useTransition(scrollPosition > 2000,{
    from: {x: width/2},
    enter: {x: 0},
    leave: {x: width/2, delay: 100}
  })

  const experienceBanner1375 = useTransition(scrollPosition > 2400,{
    from: {x: width/2},
    enter: {x: 0},
    leave: {x: width/2, delay: 100}
  })

  const experienceBanner920 = useTransition(scrollPosition > 3000,{
    from: {x: width/2},
    enter: {x: 0},
    leave: {x: width/2, delay: 100}
  })

  const experienceBanner0 = useTransition(scrollPosition > 4800,{
    from: {x: width/2},
    enter: {x: 0},
    leave: {x: width/2, delay: 100}
  })

  const experienceCards = useTransition(scrollPosition,{})

  const educationCardAnimation1800 = useTransition(scrollPosition > 2200 && experienceData,{
    from: {y: 700, opacity: 0},
    enter: item => (next) => (
        next({y:0, delay: item.Delay, opacity: 1})
    ),
    leave: item => (next) => (
        next({opacity: 0, delay: item.Delay/2})
    )
  })

  const educationCardAnimation1375 = useTransition(scrollPosition > 2600 && experienceData,{
    from: {y: 700, opacity: 0},
    enter: item => (next) => (
        next({y:0, delay: item.Delay, opacity: 1})
    ),
    leave: item => (next) => (
        next({opacity: 0, delay: item.Delay/2})
    )
  })

  const educationCardAnimation920 = useTransition(scrollPosition > 3200 && experienceData,{
    from: {y: 700, opacity: 0},
    enter: item => (next) => (
        next({y:0, delay: item.Delay, opacity: 1})
    ),
    leave: item => (next) => (
        next({opacity: 0, delay: item.Delay/2})
    )
  })

  const educationCardAnimation0 = useTransition(scrollPosition > 5000 && experienceData,{
    from: {y: 700, opacity: 0},
    enter: item => (next) => (
        next({y:0, delay: item.Delay, opacity: 1})
    ),
    leave: item => (next) => (
        next({opacity: 0, delay: item.Delay/2})
    )
  })

  return (
    <div className='Experience-Container'>
      { width > 1800 ?
        experienceBanner1800((style, item) =>
        item &&
        <animated.div className='Section-Title' style={style}>
          <h1 >Experience</h1>
        </animated.div>)
        :
          width > 1375 ?
          experienceBanner1375((style, item) =>
            item &&
            <animated.div className='Section-Title' style={style}>
              <h1>Experience</h1>
            </animated.div>)
          :
            width > 920 ?
            experienceBanner920((style, item) =>
            item &&
            <animated.div className='Section-Title' style={style}>
              <h1>Experience</h1>
            </animated.div>)
            :
              experienceBanner0((style, item) =>
              item &&
              <animated.div className='Section-Title' style={style}>
                <h1>Experience</h1>
              </animated.div>)
      }
      <div className='Experience-Card-Container'>
        {
          width > 1800 ?
          educationCardAnimation1800((style, item) => 
          item?
            <animated.div style={style} className='Experience-Card'>
              <figure>
                <img src={item.Logo}></img>
              </figure>
              <div className='Experience-Details'>
                <h1>{item.Title}</h1>
                {
                  item.TitleExtention &&
                  <h1>{item.TitleExtention}</h1>
                }
                <h2>{item.Employer}</h2>
                <h2>{item.Duration}</h2>
              </div>
            </animated.div>
            :''
          )
          :
            width > 1375 ?
            educationCardAnimation1375((style, item) => 
            item?
              <animated.div style={style} className='Experience-Card'>
                <figure>
                  <img src={item.Logo}></img>
                </figure>
                <div className='Experience-Details'>
                  <h1>{item.Title}</h1>
                  {
                    item.TitleExtention &&
                    <h1>{item.TitleExtention}</h1>
                  }
                  <h2>{item.Employer}</h2>
                  <h2>{item.Duration}</h2>
                </div>
              </animated.div>
              :''
            )
            :
              width > 920 ? 
              educationCardAnimation920((style, item) => 
              item?
                <animated.div style={style} className='Experience-Card'>
                  <figure>
                    <img src={item.Logo}></img>
                  </figure>
                  <div className='Experience-Details'>
                    <h1>{item.Title}</h1>
                    {
                      item.TitleExtention &&
                      <h1>{item.TitleExtention}</h1>
                    }
                    <h2>{item.Employer}</h2>
                    <h2>{item.Duration}</h2>
                  </div>
                </animated.div>
                :''
              )
              :
              educationCardAnimation0((style, item) => 
              item?
                <animated.div style={style} className='Experience-Card'>
                  <figure>
                    <img src={item.Logo}></img>
                  </figure>
                  <div className='Experience-Details'>
                    <h1>{item.Title}</h1>
                    {
                      item.TitleExtention &&
                      <h1>{item.TitleExtention}</h1>
                    }
                    <h2>{item.Employer}</h2>
                    <h2>{item.Duration}</h2>
                  </div>
                </animated.div>
                :''
              )
        }
      </div>
    </div>
  )
}

export default Experience