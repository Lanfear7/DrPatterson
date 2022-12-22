import React from 'react'
import PortfolioImage from '../public/images/chrisPortfolio.png'
import { animated, useTransition } from '@react-spring/web'
import useWindowDimensions from '../hooks/windowWidth'

function About({scrollPosition}) {

    
    const { width } = useWindowDimensions()


    const titleCardAnimation1800 = useTransition(scrollPosition>3300,{
        from: {x: -200, y: 50},
        enter: {x: 0, y: 50},
        leave: {x: -200, y: 50}
    })

    const titleCardAnimation1375 = useTransition(scrollPosition>3950,{
        from: {x: -200, y: 50},
        enter: {x: 0, y: 50},
        leave: {x: -200, y: 50}
    })

    const titleCardAnimation1200 = useTransition(scrollPosition>4500,{
        from: {x: -200, y: 50},
        enter: {x: 0, y: 50},
        leave: {x: -200, y: 50}
    })

    const titleCardAnimation900 = useTransition(scrollPosition>6000,{
        from: {x: -200, y: 50},
        enter: {x: 0, y: 50},
        leave: {x: -200, y: 50}
    })

    const titleCardAnimation0 = useTransition(scrollPosition>7800,{
        from: {x: -200, y: 50},
        enter: {x: 0, y: 50},
        leave: {x: -200, y: 50}
    })

    const imageCard1800 = useTransition(scrollPosition > 3800,{
        from: {x: -400, opacity: 0},
        enter: item => (next) => (
            next({x:100, delay: item.Delay, opacity: 1})
        ),
        leave: item => (next) => (
            next({x: -500,opacity: 0, delay: item.Delay/2})
        )
      })
    const textCard1800 = useTransition(scrollPosition > 3800,{
        from: {x: width/2 + 200},
        enter: {x: 100},
        leave: {x: width/2 + 200, delay: 100}
      })

    const imageCard1375 = useTransition(scrollPosition > 4300,{
        from: {x: -400, opacity: 0},
        enter: item => (next) => (
            next({x:100, delay: item.Delay, opacity: 1})
        ),
        leave: item => (next) => (
            next({x: -500,opacity: 0, delay: item.Delay/2})
        )
      })
    const textCard1375 = useTransition(scrollPosition > 4300,{
        from: {x: width/2 + 200},
        enter: {x: 100},
        leave: {x: width/2 + 200, delay: 100}
      })


    const imageCard1200 = useTransition(scrollPosition > 5000,{
        from: {x: -400, opacity: 0},
        enter: item => (next) => (
            next({x:100, delay: item.Delay, opacity: 1})
        ),
        leave: item => (next) => (
            next({x: -500,opacity: 0, delay: item.Delay/2})
        )
      })
    const textCard1200 = useTransition(scrollPosition > 5000,{
        from: {x: width/2 + 200},
        enter: {x: 100},
        leave: {x: width/2 + 200, delay: 100}
      })

    const imageCard900 = useTransition(scrollPosition > 6200,{
      from: {x: -400, opacity: 0},
      enter: item => (next) => (
          next({x:100, delay: item.Delay, opacity: 1})
      ),
      leave: item => (next) => (
          next({x: -500,opacity: 0, delay: item.Delay/2})
      )
    })
    const textCard900 = useTransition(scrollPosition > 6200,{
        from: {x: width/2 + 200},
        enter: {x: 100},
        leave: {x: width/2 + 200, delay: 100}
      })

      const imageCard0 = useTransition(scrollPosition > 8000,{
        from: {x: -400, opacity: 0},
        enter: item => (next) => (
            next({x:100, delay: item.Delay, opacity: 1})
        ),
        leave: item => (next) => (
            next({x: -500,opacity: 0, delay: item.Delay/2})
        )
      })
      const textCard0 = useTransition(scrollPosition > 8000,{
          from: {x: -800},
          enter: {x: 50},
          leave: {x: -800, delay: 100}
        })

  return (
        
        <div className='About-Container'>
            {   
                width > 1800 ?
                    titleCardAnimation1800((style, item)=>
                    item ?
                    <animated.div className='About-Title-Container' style={style}>
                        <h1 className='About-Title'>About</h1>
                    </animated.div>: ''
                    )
                    : width > 1375 ?
                        titleCardAnimation1375((style, item)=>
                        item ?
                        <animated.div className='About-Title-Container' style={style}>
                            <h1 className='About-Title'>About</h1>
                        </animated.div>: ''
                        )
                        : width > 1200 ?
                            titleCardAnimation1200((style, item)=>
                            item ?
                            <animated.div className='About-Title-Container' style={style}>
                                <h1 className='About-Title'>About</h1>
                            </animated.div>: ''
                            )
                            : width > 900 ?
                                titleCardAnimation900((style, item)=>
                                item ?
                                <animated.div className='About-Title-Container' style={style}>
                                    <h1 className='About-Title'>About</h1>
                                </animated.div>: ''
                                )
                                :
                                    titleCardAnimation0((style, item)=>
                                    item ?
                                    <animated.div className='About-Title-Container' style={style}>
                                        <h1 className='About-Title'>About</h1>
                                    </animated.div>: ''
                                    )
            }

            <div className='About-Content-Container'>
                {   
                    width > 1800 ?
                    imageCard1800((style, item) =>
                    item?
                    <animated.figure className='Photo-Container' style={style}>
                        <img src={PortfolioImage}></img>
                    </animated.figure>
                    :''
                    )
                    :width > 1375 ?
                        imageCard1375((style, item)=>
                        item ?
                        <animated.figure className='Photo-Container' style={style}>
                            <img src={PortfolioImage}></img>
                        </animated.figure>
                        :''
                        )
                        : width > 1200 ?
                            imageCard1200((style, item)=>
                            item ?
                            <animated.figure className='Photo-Container' style={style}>
                                <img src={PortfolioImage}></img>
                            </animated.figure>
                            :''
                            )
                            : width > 900 ?
                                imageCard900((style, item)=>
                                item ?
                                <animated.figure className='Photo-Container' style={style}>
                                    <img src={PortfolioImage}></img>
                                </animated.figure>
                                :''
                                )
                                :
                                    imageCard0((style, item)=>
                                    item ?
                                    <animated.figure className='Photo-Container' style={style}>
                                        <img src={PortfolioImage}></img>
                                    </animated.figure>
                                    :''
                                    )
                }
                {
                    width > 1800 ?
                    textCard1800((style, item) =>
                    item?
                    <animated.div className='About-Content' style={style}>
                        <p>
                            Dr. Stewart-Patterson has practiced Occupational Medicine since 1989. He has provided occupational medical services to the City of Vancouver, BC Government Occupational Health Programs, Health Canada's Workplace Health, RCMP, BC Rail and Canadian Armed Forces among other organizations. He has testified as an Occupational Medicine expert witness in the Supreme Court of British Columbia.
                        </p>
                        <p>
                            His clinical practice includes frequently providing fitness to work assessments. He specializes in fitness to work evaluations for safety critical/sensitive occupations such as police, correction officers, sheriffs and railway personnel. He frequently lectures both locally and internationally on medical and psychiatric disability evaluation including a series of lectures at Harvard Medical School. He has instructed for the American College of Occupational and Environmental Medicine lecturing on assessment of disability in workers. He has clinical experience in general practice, emergency medicine, psychiatry and multidisciplinary pain programs. Dr. Stewart-Patterson is a clinical instructor in the Faculty of Medicine, University of British Columbia and is currently a course director at Harvard Medical School. 
                        </p>
                        <p>
                            Dr. Stewart-Patterson received his MD from the University of Calgary in 1988. He completed a rotating internship at Lion's Gate Hospital in 1989 where he received the Psychiatry prize. He has been licensed by the College of Physicians and Surgeons of British Columbia since 1989. He completed his studies in Occupational Medicine through University of Alberta in 1994.
                        </p>
                        <p>
                            Specialties: Expert in occupational medicine & disability evaluation.
                        </p>
                    </animated.div>:''
                    ):width > 1375 ?
                    textCard1375((style, item)=>
                    item ?
                    <animated.div className='About-Content' style={style}>
                        <p>
                            Dr. Stewart-Patterson has practiced Occupational Medicine since 1989. He has provided occupational medical services to the City of Vancouver, BC Government Occupational Health Programs, Health Canada's Workplace Health, RCMP, BC Rail and Canadian Armed Forces among other organizations. He has testified as an Occupational Medicine expert witness in the Supreme Court of British Columbia.
                        </p>
                        <p>
                            His clinical practice includes frequently providing fitness to work assessments. He specializes in fitness to work evaluations for safety critical/sensitive occupations such as police, correction officers, sheriffs and railway personnel. He frequently lectures both locally and internationally on medical and psychiatric disability evaluation including a series of lectures at Harvard Medical School. He has instructed for the American College of Occupational and Environmental Medicine lecturing on assessment of disability in workers. He has clinical experience in general practice, emergency medicine, psychiatry and multidisciplinary pain programs. Dr. Stewart-Patterson is a clinical instructor in the Faculty of Medicine, University of British Columbia and is currently a course director at Harvard Medical School. 
                        </p>
                        <p>
                            Dr. Stewart-Patterson received his MD from the University of Calgary in 1988. He completed a rotating internship at Lion's Gate Hospital in 1989 where he received the Psychiatry prize. He has been licensed by the College of Physicians and Surgeons of British Columbia since 1989. He completed his studies in Occupational Medicine through University of Alberta in 1994.
                        </p>
                        <p>
                            Specialties: Expert in occupational medicine & disability evaluation.
                        </p>
                    </animated.div>
                    :''
                    )
                    : width > 1200 ?
                        textCard1200((style, item)=>
                        item ?
                        <animated.div className='About-Content' style={style}>
                            <p>
                                Dr. Stewart-Patterson has practiced Occupational Medicine since 1989. He has provided occupational medical services to the City of Vancouver, BC Government Occupational Health Programs, Health Canada's Workplace Health, RCMP, BC Rail and Canadian Armed Forces among other organizations. He has testified as an Occupational Medicine expert witness in the Supreme Court of British Columbia.
                            </p>
                            <p>
                                His clinical practice includes frequently providing fitness to work assessments. He specializes in fitness to work evaluations for safety critical/sensitive occupations such as police, correction officers, sheriffs and railway personnel. He frequently lectures both locally and internationally on medical and psychiatric disability evaluation including a series of lectures at Harvard Medical School. He has instructed for the American College of Occupational and Environmental Medicine lecturing on assessment of disability in workers. He has clinical experience in general practice, emergency medicine, psychiatry and multidisciplinary pain programs. Dr. Stewart-Patterson is a clinical instructor in the Faculty of Medicine, University of British Columbia and is currently a course director at Harvard Medical School. 
                            </p>
                            <p>
                                Dr. Stewart-Patterson received his MD from the University of Calgary in 1988. He completed a rotating internship at Lion's Gate Hospital in 1989 where he received the Psychiatry prize. He has been licensed by the College of Physicians and Surgeons of British Columbia since 1989. He completed his studies in Occupational Medicine through University of Alberta in 1994.
                            </p>
                            <p>
                                Specialties: Expert in occupational medicine & disability evaluation.
                            </p>
                        </animated.div>
                        :''
                        )
                        : width > 900 ?
                            textCard900((style, item)=>
                            item ?
                            <animated.div className='About-Content' style={style}>
                                <p>
                                    Dr. Stewart-Patterson has practiced Occupational Medicine since 1989. He has provided occupational medical services to the City of Vancouver, BC Government Occupational Health Programs, Health Canada's Workplace Health, RCMP, BC Rail and Canadian Armed Forces among other organizations. He has testified as an Occupational Medicine expert witness in the Supreme Court of British Columbia.
                                </p>
                                <p>
                                    His clinical practice includes frequently providing fitness to work assessments. He specializes in fitness to work evaluations for safety critical/sensitive occupations such as police, correction officers, sheriffs and railway personnel. He frequently lectures both locally and internationally on medical and psychiatric disability evaluation including a series of lectures at Harvard Medical School. He has instructed for the American College of Occupational and Environmental Medicine lecturing on assessment of disability in workers. He has clinical experience in general practice, emergency medicine, psychiatry and multidisciplinary pain programs. Dr. Stewart-Patterson is a clinical instructor in the Faculty of Medicine, University of British Columbia and is currently a course director at Harvard Medical School. 
                                </p>
                                <p>
                                    Dr. Stewart-Patterson received his MD from the University of Calgary in 1988. He completed a rotating internship at Lion's Gate Hospital in 1989 where he received the Psychiatry prize. He has been licensed by the College of Physicians and Surgeons of British Columbia since 1989. He completed his studies in Occupational Medicine through University of Alberta in 1994.
                                </p>
                                <p>
                                    Specialties: Expert in occupational medicine & disability evaluation.
                                </p>
                            </animated.div>
                            :''
                            )
                            :
                                textCard0((style, item)=>
                                item ?
                                <animated.div className='About-Content' style={style}>
                                    <p>
                                        Dr. Stewart-Patterson has practiced Occupational Medicine since 1989. He has provided occupational medical services to the City of Vancouver, BC Government Occupational Health Programs, Health Canada's Workplace Health, RCMP, BC Rail and Canadian Armed Forces among other organizations. He has testified as an Occupational Medicine expert witness in the Supreme Court of British Columbia.
                                    </p>
                                    <p>
                                        His clinical practice includes frequently providing fitness to work assessments. He specializes in fitness to work evaluations for safety critical/sensitive occupations such as police, correction officers, sheriffs and railway personnel. He frequently lectures both locally and internationally on medical and psychiatric disability evaluation including a series of lectures at Harvard Medical School. He has instructed for the American College of Occupational and Environmental Medicine lecturing on assessment of disability in workers. He has clinical experience in general practice, emergency medicine, psychiatry and multidisciplinary pain programs. Dr. Stewart-Patterson is a clinical instructor in the Faculty of Medicine, University of British Columbia and is currently a course director at Harvard Medical School. 
                                    </p>
                                    <p>
                                        Dr. Stewart-Patterson received his MD from the University of Calgary in 1988. He completed a rotating internship at Lion's Gate Hospital in 1989 where he received the Psychiatry prize. He has been licensed by the College of Physicians and Surgeons of British Columbia since 1989. He completed his studies in Occupational Medicine through University of Alberta in 1994.
                                    </p>
                                    <p>
                                        Specialties: Expert in occupational medicine & disability evaluation.
                                    </p>
                                </animated.div>
                                :''
                                )
                }
                
                
            </div>
        </div>
  )
}

export default About