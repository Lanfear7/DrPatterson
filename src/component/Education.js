import { animated, useTransition, useSpring } from '@react-spring/web'
import React, { useEffect, useState } from 'react'
import AUS from '../public/images/AUS.png'
import HMI from '../public/images/HMI.png'
import HMS from '../public/images/HMS.jpg'
import JHPH from '../public/images/JHPH.png'
import UOA from '../public/images/UOA.png'
import UOC from '../public/images/UOC.png'
import UOAmsterdam from '../public/images/UOAmsterdam.png'

function Education({scrollPosition}) {
    const timer = 350
    const [educationData, setEducationData] = useState([
        {
            School: 'Harvard Macy Institute',
            Course: 'Program for Educators, Medical Education',
            Duration: '2013-2014',
            Logo: HMI,
            Link: 'https://harvardmacy.org/',
            Delay: timer * 2
        },
        {
            School: 'University of Amsterdam',
            Course: 'Graduate Course in Culture Psychiatry',
            Duration: '2009-2009',
            Logo: UOAmsterdam,
            Link: 'https://www.uva.nl/en',
            Delay: timer * 3
        },
        {
            School: 'Johns Hopkins School of Public Health',
            Course: 'Graduate course work in Epidemiology',
            Duration: '2006-2006',
            Logo: JHPH,
            Link: 'https://www.jhu.edu/',
            Delay: timer * 4
        },
        {
            School: 'Harvard Medical School',
            Course: 'Graduate course work in Epidemiology',
            Duration: '2005-2005',
            Logo: HMS,
            Link: 'https://hms.harvard.edu/',
            Delay: timer * 5
        },
        {
            School: 'University of Alberta',
            Course: 'Occupational Medicine Distance Learning',
            Duration: '2002-2004',
            Logo: UOA,
            Link: 'https://www.ualberta.ca/index.html',
            Delay: timer * 6
        },
        {
            School: 'University of Calgary',
            Course: 'MD, Medicine',
            Duration: '1985-1988',
            Logo: UOC,
            Link: 'https://conted.ucalgary.ca/',
            Delay: timer * 7
        },
        {
            School: 'Antioch University Seattle',
            Course: 'BA, Psychology',
            Duration: '1979-1981',
            Logo: AUS,
            Link: 'https://www.antioch.edu/seattle/',
            Delay: timer * 8
        },
    ])

    const titleCardAnimation = useTransition(scrollPosition>550,{
        from: {x: -200, y: 50},
        enter: {x: 0, y: 50},
        leave: {x: -200, y: 50}
    })

    const educationCardAnimation = useTransition(scrollPosition>550 && educationData  ,{
        from: {y: 1000},
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
                <animated.a href={item.Link} className='School-Link' style={style}>
                    <div className='Education-Card'>
                        <figure>
                            <img src={item.Logo}></img>
                        </figure>
                        <h3>{item.School}</h3>
                        <h4>{item.Course}</h4>
                        <h4>{item.Duration}</h4>
                    </div>
                </animated.a>: ''
            )
        }
        </div>
    </div>
  )
}

export default Education