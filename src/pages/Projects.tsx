import React from 'react';
import {useState, useRef, RefObject, useEffect, createRef} from 'react';
import '../styles/projects.css';
import ProjectCard from '../components/ProjectCard';
import ImageProjectCard from '../components/ImageProjectCard';
import Popup from '../components/Popup';
import { Box } from '@mui/material';

// interface Info {
//   id : number;
//   img : String;
//   lName : String;
//   name : String;
//   members : String;
//   desc : String;
//   git : String;
//   gantt : String;
// }


function Projects() {
  const [showPopup, setShowPopup] = useState(false);
  // const [cardInfo, setCardInfo] = useState<{
  //   id: number;
  //   img: string;
  //   name: string;
  //   lName: string;
  //   members: string;
  //   desc: string;
  //   git: string;
  //   gantt: string;
  // } | null>(null);
  const [cardInfo, setCardInfo] = useState<{
    id: number;
    img: string;
    name: string;
    lName: string;
    members: string;
    desc: string;
    git: string;
    gantt: string;
    rect?: DOMRect;
  }>({
    id: 0,
    img: "",
    name: "Dummy Name",
    lName: "Dummy Last Name",
    members: "Dummy Members",
    desc: "Dummy Description",
    git: "https://github.com/dummy",
    gantt: "https://dummy.com/gantt",
    rect: new DOMRect(10, 20, 30, 40)
  });

  const cardLocation: RefObject<HTMLDivElement> = useRef(null);
  const cardLocation0: RefObject<HTMLDivElement> = useRef(null);
  const cardLocation1: RefObject<HTMLDivElement> = useRef(null);
  const cardLocation2: RefObject<HTMLDivElement> = useRef(null);
  const cardLocation3: RefObject<HTMLDivElement> = useRef(null);
  const cardLocation4: RefObject<HTMLDivElement> = useRef(null);
  const cardLocation5: RefObject<HTMLDivElement> = useRef(null);
  const cardLocation6: RefObject<HTMLDivElement> = useRef(null);

  

  const handleOpenPopup = (info : {
    id: number;
    img: string;
    name: string;
    lName: string;
    members: string;
    desc: string;
    git: string;
    gantt: string;
    }, ClientRect : DOMRect | undefined) => {
    setCardInfo({...info, rect: ClientRect});
    setShowPopup(true);
    console.log(ClientRect);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const cardData =[
    {
      id: 0,
      img :"https://drive.google.com/uc?export=view&id=1ojkTwww4f-TAXY3-BtJfe7nlULWY4vE6" ,
      name:'PCR', 
      lName:"Sahil Jain, Conrad the Condad", 
      members:"Pranav, David, Oscar, Nicky, Sarah, Angelica Shawarma, Anjali Agrawal, Emerald, Namila",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 1,
      img :"https://drive.google.com/uc?export=view&id=1ViLB3YkHlQ2iQRTtHs7KU5Doxln0jLie" ,
      name:'Chess Teacher', 
      lName:"Vishal Kantharaju", 
      members:"Alan Tran, Hursh Jha, Savvy Chezhian, Siddharth Kolukuluri, Tanay Garg, Zach Li",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 2,
      img :"https://drive.google.com/uc?export=view&id=1tUeRQorUFeg53gdXJBONz_j4ZDJ8b7Yf" ,
      name:'Autonomous Drone', 
      lName:"Carson", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 3,
      img :"https://drive.google.com/uc?export=view&id=1O8Yc-Tdzh5RZK1Nydo2iRyje76NVpS66" ,
      name:'Music Mood', 
      lName:"Sahana Ganapathy", 
      members:"Mehul Murali, Seungwon Lee, Nikhil Kalidasu, Nidhi Thippana, Jason Ren, Sarah Wang-Zhou",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 4,
      img :"https://drive.google.com/uc?export=view&id=1PtCjDrhR-OSC-A-SYzJsvkjie_redgZI" ,
      name:'Robotic Arm', 
      lName:"Sahil Jain", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 5,
      img :"https://drive.google.com/uc?export=view&id=1vkVR4KX7UvAiZ8ql0-3IWdPGacsSAsEq" ,
      name:'Fitness Tracker', 
      lName:"Kyrylo", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    },
    {
      id: 6,
      img :"https://drive.google.com/uc?export=view&id=18k4112Of06u9Yb42pT8NL_o8Nk-GgEny" ,
      name:'Smart Mirror', 
      lName:"Sahil Jain", 
      members:"Elon Musk, Bill Gates, Michael Dell, Greg Tanyk, Shawarma Anjelika, Vi Herma",
      desc: 'By utilizing how cracked each of these individuals are, this project is a simple three step plan. The first step is curing cancer. The second is bringing about world peace. And the last is creating a new world order in which AI rules supreme.',
      git:"apple.com", 
      gantt:"costco.com",
    }
  ];
  // const refs = Array.from({ length: cardData.length }, () => useRef<HTMLDivElement>(null));
  // const refs = Array.from({ length: cardData.length }, () => useRef<HTMLDivElement>(null));
  // const cardLocations
  // const cardLocation: RefObject<HTMLDivElement> = useRef(null);
  // const cardLocations: Array<RefObject<HTMLDivElement>> = []
  const cardLocations = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    cardLocations.current = cardLocations.current.slice(0, cardData.length);
 }, [cardData]);

  // for (let i = 0; i < cardData.length; i++) {
  //   cardLocations.push(useRef(null));
  // }

  return (
    <div className='everything'>
      <h1 className = 'projectsTitle'>Projects</h1>
      <div className='gridContainer'>
        <div className='projectCards'>
          {cardData.map((card, index) => (
            <ImageProjectCard
              key = {card.id}
              name = {card.name}
              img = {card.img}
              lName  ={card.lName}
              members = {card.members}
              desc = {card.desc}
              git = {card.git}
              gantt = {card.gantt}
              // ref={cardLocation}
              ref={el => cardLocations.current[index] = el}
              onOpenPopup={() => handleOpenPopup(card, cardLocations.current[index]?.getBoundingClientRect())}
            />
          ))}
          {/* <ImageProjectCard 
            key= {cardData[0].id}
            name = {cardData[0].name}
            img = {cardData[0].img}
            lName  ={cardData[0].lName}
            members = {cardData[0].members}
            desc = {cardData[0].desc}
            git = {cardData[0].git}
            gantt = {cardData[0].gantt}
            ref={cardLocation0}
            onOpenPopup={() => handleOpenPopup(cardData[0], cardLocation0.current?.getBoundingClientRect())}
            />
            <ImageProjectCard 
            key= {cardData[1].id}
            name = {cardData[1].name}
            img = {cardData[1].img}
            lName  ={cardData[1].lName}
            members = {cardData[1].members}
            desc = {cardData[1].desc}
            git = {cardData[1].git}
            gantt = {cardData[1].gantt}
            ref={cardLocation1}
            onOpenPopup={() => handleOpenPopup(cardData[1], cardLocation1.current?.getBoundingClientRect())}
            />
            <ImageProjectCard 
            key= {cardData[2].id}
            name = {cardData[2].name}
            img = {cardData[2].img}
            lName  ={cardData[2].lName}
            members = {cardData[2].members}
            desc = {cardData[2].desc}
            git = {cardData[2].git}
            gantt = {cardData[2].gantt}
            ref={cardLocation2}
            onOpenPopup={() => handleOpenPopup(cardData[2], cardLocation2.current?.getBoundingClientRect())}
            />
            <ImageProjectCard 
            key= {cardData[3].id}
            name = {cardData[3].name}
            img = {cardData[3].img}
            lName  ={cardData[3].lName}
            members = {cardData[3].members}
            desc = {cardData[3].desc}
            git = {cardData[3].git}
            gantt = {cardData[3].gantt}
            ref={cardLocation3}
            onOpenPopup={() => handleOpenPopup(cardData[3], cardLocation3.current?.getBoundingClientRect())}
            />
            <ImageProjectCard 
            key= {cardData[4].id}
            name = {cardData[4].name}
            img = {cardData[4].img}
            lName  ={cardData[4].lName}
            members = {cardData[4].members}
            desc = {cardData[4].desc}
            git = {cardData[4].git}
            gantt = {cardData[4].gantt}
            ref={cardLocation4}
            onOpenPopup={() => handleOpenPopup(cardData[4], cardLocation4.current?.getBoundingClientRect())}
            />
            <ImageProjectCard 
            key= {cardData[5].id}
            name = {cardData[5].name}
            img = {cardData[5].img}
            lName  ={cardData[5].lName}
            members = {cardData[5].members}
            desc = {cardData[5].desc}
            git = {cardData[5].git}
            gantt = {cardData[5].gantt}
            ref={cardLocation5}
            onOpenPopup={() => handleOpenPopup(cardData[5], cardLocation5.current?.getBoundingClientRect())}
            />
            <ImageProjectCard 
            key= {cardData[6].id}
            name = {cardData[6].name}
            img = {cardData[6].img}
            lName  ={cardData[6].lName}
            members = {cardData[6].members}
            desc = {cardData[6].desc}
            git = {cardData[6].git}
            gantt = {cardData[6].gantt}
            ref={cardLocation6}
            onOpenPopup={() => handleOpenPopup(cardData[6], cardLocation6.current?.getBoundingClientRect())}
            /> */}
        </div>
      </div>
      <Popup vis ={showPopup} onClose={handleClosePopup} cardInfo={cardInfo} />
      <Box sx = {{paddingBottom:"10%"}}></Box>
    </div>
  )
}

export default Projects
