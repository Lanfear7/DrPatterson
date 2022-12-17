import React, { useEffect, useState } from 'react'
import VPD from '../public/images/vpdLogo.png'
import Train from '../public/images/trainLogo.png'
import { useSpring,animated } from '@react-spring/web'
import useWindowDimensions from '../hooks/windowWidth'


function Clients() {
    const { height , width } = useWindowDimensions()

    const rightTag = useSpring({
        from: { x: width },
        to: { x: 0 },
    })

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className='Client-Container'>
        {   
            scrollPosition > 170 &&
            <animated.div className='Container-Tag' style={{...rightTag}}>
                <h1>Clients</h1>
            </animated.div>
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