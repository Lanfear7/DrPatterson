import React, { useEffect, useState } from 'react'
import VPD from '../public/images/vpdLogo.png'
import Train from '../public/images/trainLogo.png'
import { useTransition, animated } from '@react-spring/web'
import useWindowDimensions from '../hooks/windowWidth'

function Clients({scrollPosition}) {
    const { width } = useWindowDimensions()

    const transition = useTransition(scrollPosition>170,{
        from: {x: width},
        enter: {x: 0},
        leave: {x: width, delay: 100}
    })

  return (
    <div className='Client-Container'>
        {
            transition((style,item) =>
                item && <animated.div style={style} className='Container-Tag'>
                            <h1 className='Section-Title'>Clients</h1>
                        </animated.div>
            )
        }
        
        <div className='Clients-Logos'>
            <div className='Client'>
                <figure>
                    <img src={VPD}></img>
                </figure>
                <h2>Law Enforcement</h2>
            </div>
            <div className='Client'>
                <figure>
                    <img src={Train}></img>
                </figure>
                <h2>Rail Personnel</h2>
            </div>
        </div>
    </div>
  )
}

export default Clients