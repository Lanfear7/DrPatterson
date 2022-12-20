import { animated, useTransition, useSpring } from '@react-spring/web'
import React, { useEffect, useState } from 'react'
import {EducationData}  from '../data/portfoiloCredentials'

function Education({scrollPosition}) {

    const [educationData, setEducationData] = useState(EducationData)

    const titleCardAnimation = useTransition(scrollPosition>550,{
        from: {x: -200, y: 50},
        enter: {x: 0, y: 50},
        leave: {x: -200, y: 50}
    })

    const educationCardAnimation = useTransition(scrollPosition>650 && educationData  ,{
        from: {y: 1000, opacity: 0},
        enter: item => (next) => (
            next({y:0, delay: item.Delay, opacity: 1})
        ),
        leave: item => (next) => (
            next({opacity: 0, delay: item.Delay/2})
        )
    })

  return (
    <div className='Education-Container'>
        {
            titleCardAnimation((style, item)=>
            item ?
            <animated.div className='Section-Title-Container' style={style}>
                <h1 className='Section-Title'>Education</h1>
            </animated.div>: ''
            )
        }
        <div className='Education-Card-Container'>
        {
           educationCardAnimation((style,item)=>
                item ?
                <animated.div className='Education-Card' style={style}>
                    <a href={item.Link} className='School-Link' >
                        <figure>
                            <img src={item.Logo}></img>
                        </figure>
                        <h3>{item.School}</h3>
                        <h4>{item.Course}</h4>
                        <h4>{item.Duration}</h4>
                    </a>
                </animated.div>
                : ''
            )
        }
        </div>
    </div>
  )
}

export default Education