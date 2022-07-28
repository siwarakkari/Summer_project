const Navbar = require('../components/Navbar');

import { Card } from '../components/JobCard';
//import {HeroImg2 }from "../components/HeroImg2";
const HeroImg2 = require('../components/HeroImg2');


export default function Home() {
  return (
    <div className="font-lato bg-light">
     
      <Navbar />
      <HeroImg2 heading="JOBS OFFERS" text=" 'GET THE OPPORTUNITY' " />

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
        <div className="p-10 md:p-10 col-span-4 grid gap-4 grid-cols-1 md:grid-cols-2">
          {data.map((d, idx) => (
            < Card key={idx} {...d} />

          ))} 
        </div>
        <div className="hidden xl:block p-10">
          <div className="text-white bg-dark-2 p-3 rounded-md ">
            Somme Adds maybee
          </div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  title: string
  company: string
  location: string
  date: string
  tasks: string[]
  about: string
  requirements: string[]
  applied: number
  type: string
}

const data = [
  {
    title: 'Backend Software Engineer',
    company: 'Yassir',
    location: 'Tunis, Tunisia',
    date: '6 months ago',
    tasks: [    ],
    about:"",
        requirements: [
      ],
    applied: 162,
    type: 'Full-time'
 
  },
  {
    title: 'Machine learning Engineer',
    company: 'InstaDeep LtdstaDeep',
    location: 'Paris, French',
    date: '6 months ago',
    tasks: [
    ],
    about:
        'Hey',
    requirements: [
      ],
    applied: 98,
    type: 'Full-time',
    
  },
  {
    title: 'Front-End Engineer',
    company: 'cognira',
    location: 'Ariana, Tunisia',
    date: '6 months ago',
    tasks: [
    ],

    requirements: [
     
    ],
    applied: 80,
    type: 'Full-time',
    
  },
  {
    title: 'MlOps Engineer',
    company: 'InstaDeep',
    location: 'Paris, French',
    date: '2 months ago',
    tasks: [    ],
    about:
    "heyy",
    requirements: [
   
    ],
    applied: 162,
    type: 'Full-time',
    
  },
  {
    title: 'Deep learning Engineer',
    company: 'Open NLP',
    location: 'Paris, French',
    date: '1 months ago',
    tasks: [

    ],
    about:"",
    requirements: []
    ,
    applied: 5,
    type: 'Full-time',

  },
  {
    title: 'Cloud Engineer',
    company: 'Google ',
    location: 'Paris, French',
    date: '6 months ago',
    tasks: [

    ],
    about: "",
    requirements: [],
    applied: 14,
    type: 'Full-time',
    
  },
  {
    title: 'Designer',
    company: 'Value',
    location: 'U.K ',
    date: '3 months ago',
    tasks: [],
    about:""
    ,
    requirements: [
       ],
    applied: 66,
    type: 'Full-time',
    
  },
  {
    title: 'Front-End Engineer',
    company: 'cognira',
    location: 'Ariana, Tunisia',
    date: '6 months ago',
    tasks: [
    ],

    requirements: [
     
    ],
    applied: 80,
    type: 'Full-time',
    
  },
  {
    title: 'MlOps Engineer',
    company: 'InstaDeep',
    location: 'Paris, French',
    date: '2 months ago',
    tasks: [    ],
    about:
    "heyy",
    requirements: [
   
    ],
    applied: 162,
    type: 'Full-time',
    
  },
  {
    title: 'Deep learning Engineer',
    company: 'Open NLP',
    location: 'Paris, French',
    date: '1 months ago',
    tasks: [

    ],
    about:"",
    requirements: []
    ,
    applied: 5,
    type: 'Full-time',

  },
  {
    title: 'Cloud Engineer',
    company: 'Google ',
    location: 'Paris, French',
    date: '6 months ago',
    tasks: [

    ],
    about: "",
    requirements: [],
    applied: 14,
    type: 'Full-time',
    
  },
  {
    title: 'Designer',
    company: 'Value',
    location: 'U.K ',
    date: '3 months ago',
    tasks: [],
    about:""
    ,
    requirements: [
       ],
    applied: 66,
    type: 'Full-time',
    
  },
]
