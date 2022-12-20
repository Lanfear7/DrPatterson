import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import useWindowDimensions from '../hooks/windowWidth'

function Landing() {

    const { height , width } = useWindowDimensions()


    const springLeft = useSpring({
        delay: 600,
        config: {duration: 1000},
        from: { x: -width / 2 - 9 },
        to: { x: 0 },
        
    })
    const springRight = useSpring({
        delay: 600,
        config: {duration: 1000},
        from: { x: width },
        to: { x: 0 },
    })
    const sprintTitle = useSpring({
        delay: 1800,
        config: {duration:1000},
        from: {y: 100},
        to:{y: -height+height/2+100}
    })

  return (
    <div className='Landing-Banner'>
        <div className='Box-Left'>
            <animated.div
                className='Box-Left-Top'
                style={{
                  width: '100%',
                  height: '55vh',
                  ...springLeft,
                }}
            />
            <animated.div
                className='Box-Left-Bottom'
                style={{
                  width: '100%',
                  height: '35vh',
                  ...springLeft,
                }}
            />
        </div>
        <div className='Box-Right'>
            <animated.div
                className='Box-Right-Top'
                style={{
                  width: '100%',
                  height: '55vh',
                  background: '#ffffff',
                  ...springRight,
                }}
            />
            <animated.div
                className='Box-Right-Bottom'
                style={{
                  width: '100%',
                  height: '35vh',
                  background: '#ffffff',
                  ...springRight,
                }}
            />
        </div>
        <animated.div
            className='Landing-Title'
            style={{
                position: 'absolute',
                top: '67%',
                left: '48%',
                transform: 'translate(-55%, -45%)',
                ...sprintTitle
            }}
        >
            <h2>Hello, I'm</h2>
            <h1>Dr. Stewart-Patterson</h1>
            {
                height > 900 && width > 600 &&
                    <h2>Specializing In Occupation Medicine</h2>
            }
            
        </animated.div>
    </div>
  )
}

export default Landing