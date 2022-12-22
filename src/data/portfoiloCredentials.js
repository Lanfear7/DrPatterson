import AUS from '../public/images/AUS.png'
import HMI from '../public/images/HMI.png'
import HMS from '../public/images/HMS.jpg'
import JHPH from '../public/images/JHPH.png'
import UOA from '../public/images/UOA.png'
import UOC from '../public/images/UOC.png'
import UOAmsterdam from '../public/images/UOAmsterdam.png'

import BC_Rail from '../public/images/BC_Rail_logo.png'
import BCCDC from '../public/images/BCCDC.png'
import BCPS from '../public/images/BCPS.jpg'
import HBT from '../public/images/HBT.jpg'
import KCMS from '../public/images/KCMS.png'
import LifeMark from '../public/images/LifeMark.png'
import Medisys from '../public/images/Medisys.png'
import RCMP_logo from '../public/images/RCMP_logo.png'
import SPLogo from '../public/images/SPLogo.png'
import VP from '../public/images/viewpoint-logo.svg'

const timer = 350

export const ExperienceData = [{
      Title: 'CME Program Director',
      Employer: 'Harvard Medical School',
      Duration: '2008 - Present · 15 yrs',
      Logo: HMS,
      Delay: timer * 2
    },
    {
      Title: 'Occupational Health Physician',
      Employer: 'Khatsalano Corporate Medical Services',
      Duration: 'Feb 2005 - Present · 17 yrs 11 mos',
      Logo: KCMS,
      Delay: timer * 2
    },
    {
      Title: 'MD',
      Employer: 'Khatsalano Corporate Medical Services',
      Duration: 'Oct 2004 - Present · 18 yrs 3 mos',
      Logo: KCMS,
      Delay: timer * 3
    },
    {
      Title: 'Claims Review Committee Examiner',
      TitleExtention: '(Consultant)',
      Employer: 'HealthCare Benefit Trust',
      Duration: '2002 - Present · 21 yrs',
      Logo: HBT,
      Delay: timer * 3
    },
    {
      Title: 'Occupational Medicine & Disability Evaluation Consultant',
      Employer: 'Viewpoint Medical Assessment Services Inc.',
      Duration: '2003 - 2014 · 11 yrs',
      Logo: VP,
      Delay: timer * 4
    },
    {
      Title: 'Independent Medical Examiner',
      TitleExtention: '(Consultant in Occupational Health)',
      Employer: 'Medisys',
      Duration: '2008 - 2011 · 3 yrs',
      Logo: Medisys,
      Delay: timer * 4
    },
    {
      Title: 'Occupational Medicine',
      Employer: 'BC Public Service',
      Duration: '1999 - 2010 · 11 yrs',
      Logo: BCPS,
      Delay: timer * 5
    },
    {
      Title: 'Chief Medical Officer',
      Employer: 'BC Rail',
      Duration: '2002 - 2004 · 2 yrs',
      Logo: BC_Rail,
      Delay: timer * 5
    },
    {
      Title: 'Medical Consultant, Comprehensive Chronic Pain Program',
      Employer: 'Lifemark Health Centre',
      Duration: '2002 - 2004 · 2 yrs',
      Logo: LifeMark,
      Delay: timer * 6
    },
    {
      Title: 'General Practice Physician & President',
      TitleExtention: '(93-99)',
      Employer: 'Khatsalano Medical Clinics Ltd.',
      Duration: '1993 - 2004 · 11 yrs',
      Logo: KCMS,
      Delay: timer * 6
    },
    {
      Title: 'Occupational Medicine',
      TitleExtention: '(RCMP Health Services)',
      Employer: 'RCMP',
      Duration: '2003 · Less than a year',
      Logo: RCMP_logo,
      Delay: timer * 7
      
    },
    {
      Title: 'Emergency Medicine',
      Employer: "St. Paul's Hospital",
      Duration: '1998 - 2002 · 4 yrs',
      Logo: SPLogo,
      Delay: timer * 7
    },
    {
      Title: 'Primary Care - Street Involved Youth & Homeless',
      Employer: 'BC Centre for Disease Control',
      Duration: '1996 - 1999 · 3 yrs',
      Logo: BCCDC,
      Delay: timer * 8
    },
    {
      Title: 'Medical Consultant - Executive & Occupational Health',
      Employer: 'Medisys',
      Duration: '1992 - 1997 · 5 yrs',
      Logo: Medisys,
      Delay: timer * 8
    },]

export const EducationData = [
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
    },]