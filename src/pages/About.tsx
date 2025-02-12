import React, {useState, useRef, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Loader from '../components/Loader'
import OfficerCards from '../components/OfficerCards'
import '../styles/about.css'
import aboutUsBackground from '../static/vectors/about-us-background.svg'
import foundersBackground from '../static/vectors/founders-background.svg'
import foundersBackground2 from '../static/vectors/founders-background-2.svg'
import tanayImg from '../static/images/officer/tanay.png'
import angelicaImg from '../static/images/officer/angelica.jpg'
import vishalImg from '../static/images/officer/vishal.png'
import conradImg from '../static/images/officer/conrad.jpg'
import sahilImg from '../static/images/officer/sahil.jpg'
import eclairLogo from '../static/images/logo/ECLAIR_logo3.png'
import sahanaImg from '../static/images/officer/sahana.jpeg'
import carsonImg from '../static/images/officer/carson.jpg'
import kyryloImg from '../static/images/officer/kyrylo.png'
import anjaliImg from '../static/images/officer/anjali.png'
import henryImg from '../static/images/officer/henry.jpg'
function About() {
  const [aBGLoaded, setABGLoaded] = useState(false);
  const aBGDivRef = useRef<HTMLDivElement>(null);
  const aElementRef = useRef<HTMLImageElement>(null);
  
  const[resize, isResized] = useState(false);

  useEffect(() => {
    if (aBGDivRef.current && aElementRef.current) {
      const divHeight = aBGDivRef.current.clientHeight;
      aElementRef.current.style.height = `${divHeight}px`;
    }
  }, [resize]);

  
  function handleResize() {
    // setABGLoaded(false);
    isResized(!resize);
  }
  window.addEventListener('resize', handleResize);
 
  function wrapperFunction() {
    setABGLoaded(true);
  }

  async function handleLoad() {
    setTimeout(wrapperFunction, 0)
    
  }
  return (
    <>
      <section className="aboutSectionHeader">
        <div>About Us </div>
        <div className="custom-shape-divider-bottom-1684440846">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section className='aboutContainer' style={{
        background: `url(${aboutUsBackground})  center center no-repeat `,
        backgroundSize: 'cover',
        marginTop: '-1px'
      }} >
        <img className='contactBackground' ref={aElementRef}  src={aboutUsBackground} onLoad={handleLoad}></img>
        <div className="officerGridHolder">
          <Grid container rowSpacing={10} columnSpacing={0} sx={{ paddingTop: '8em', paddingBottom: '8em' }}>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Tanay Garg'
                position='President'
                img={tanayImg} bio="Hi! I am Tanay, and I am a CS major at UT Austin. I love Formula 1, soccer, and playing the guitar! I want to use AI to revolutionize educational technology! "
                linkedIn='https://www.linkedin.com/in/tanay-garg-89004b184/'
                email='tanay.garg@utexas.edu' topAlignImage={false}/>
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Angelica Sharma'
                position='President'
                img={angelicaImg} bio="
                Hi!! I’m a computer science & pre-medical student at UT. In my free time, I love to play the violin & piano, run, hike, and skateboard - I am also really passionate about edtech & biotech! "
                linkedIn='https://www.linkedin.com/in/angelica-s-sharma/'
                email='angelicasharma@utexas.edu' topAlignImage={false}/>
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Vishal Kantharaju'
                position='Vice President'
                img={vishalImg} bio="Hi! I'm a computer science major at UT Austin, and some of my hobbies include playing the violin, running, and reading. I look forward to exploring innovative applications of AI and robotics."
                linkedIn='https://www.linkedin.com/in/vishal-kantharaju/'
                email='vishal.kantharaju@utexas.edu' topAlignImage={false}/>
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Sahana Ganapaty'
                position='Historian'
                img={sahanaImg} bio="I’m Sahana and I’m majoring in computer science. I’m interested in cybersecurity and AI. My hobbies outside of school include reading, visual arts, and journaling."
                linkedIn='linkedin.com/in/sahana-ganapathy/'
                email='sahanagana@utexas.edu' topAlignImage={false}/>
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Henry Castillo'
                position='AI/ML Officer'
                img={henryImg} bio="Hey! I'm Henry, a CS/Math major researching AI and deep learning. Outside of school, I like climbing, gaming, and working out!"
                linkedIn='https://www.linkedin.com/in/henryandrecastillo/'
                email='henryandrecastillo@gmail.com' topAlignImage={false}/>
            </Grid>

            <Grid className="cardContainer" item xs={12} sm={6} md={4}>
              <OfficerCards
                name='Sarvesh Chezhian'
                position='Freshman Representative'
                img={"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*c-dqFshaooL-sAB1lg9bnQ.jpeg"} bio=""
                linkedIn=''
                email='' topAlignImage={true} />
            </Grid>

          </Grid>
          <div className="custom-shape-divider-bottom-1684603760">
            <svg id="dividerVisual" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path id="wave1" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path id="wave2" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,95.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path id="wave3" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>

      </section >



      <section className='aboutUsFoundersSection' style={{
        background: `url(${foundersBackground})  center center no-repeat `,
        backgroundSize: 'cover',
        marginTop: '-1rem'
      }}>
        <div style={{paddingTop:"1em", paddingBottom:"1em"}}>
          <Grid container rowGap={10} spacing={2}>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Sahana Ganapaty'
                position='Tech Lead, Mood detector'
                img={sahanaImg} bio="I’m Sahana and I’m majoring in computer science. I’m interested in cybersecurity and AI. My hobbies outside of school include reading, visual arts, and journaling."
                linkedIn='linkedin.com/in/sahana-ganapathy/'
                email='sahanagana@utexas.edu' topAlignImage={false}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Kyrylo Boiko'
                position='Tech Lead, Fitness Tracker'
                img={kyryloImg} bio="I graduated with a BSc in Computer Science in May '23. Most of my hobbies are active, such as hiking, playing soccer, and karate, but I also enjoy board & video games."
                linkedIn='https://www.linkedin.com/in/kyryloboiko/'
                email='kyrylo.boiko@gmail.com' topAlignImage={false}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={4}>
              <OfficerCards
                name='Sarvesh Chezhian'
                position='Tech Lead, Chess Teacher'
                img={"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*c-dqFshaooL-sAB1lg9bnQ.jpeg"} bio="Hi! I'm a computer science major at UT Austin, and some of my hobbies include playing the violin, running, and reading. I look forward to exploring innovative applications of AI and robotics."
                linkedIn='https://www.linkedin.com/in/sarvesh-chezhian-4a598b217/'
                email='schezhian@utexas.edu' topAlignImage={false}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={6}>
              <OfficerCards
                name='Hursh Jha'
                position='Tech Lead, Chess Teacher'
                img={"https://miro.medium.com/v2/resize:fit:1400/0*EWwJ0VRPSaJGmP0F"} bio="I am studying computer science and business. I have always had a passion for technology, and I've been experimenting with game development, AI, and robotics for many years."
                linkedIn='https://www.linkedin.com/in/hursh-jha-713820220/'
                email='hursh.jha@gmail.com' topAlignImage={true}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={6}>
              <OfficerCards
                name='Carson Stark'
                position='Tech Lead, Autonomous Drone'
                img={carsonImg} bio="I am studying computer science and business. I have always had a passion for technology, and I've been experimenting with game development, AI, and robotics for many years."
                linkedIn='https://www.linkedin.com/in/carson-s-869a531a7/'
                email='carsonstark@ymail.com' topAlignImage={true}/>
            </Grid>
            <Grid className="cardContainerFounder conrad" item xs={12} sm={12} md={6}>
              <OfficerCards
                name='Conrad Li'
                position='Tech Lead, PCR'
                img={conradImg} bio="I am a recently graduated computer science, neuroscience, and chemistry major from UT Austin. I aspire to be a physician working at this intersection of medicine and technology."
                linkedIn='https://www.linkedin.com/in/conradfli/'
                email='conradliste@utexas.edu' topAlignImage={true}/>
            </Grid>
            
          </Grid>
        </div>
        <div className="custom-shape-divider-bottom-1684840350">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <section className='aboutUsFoundersSection foundersSectionOverride ' style={{
        background: `url(${foundersBackground2})  center center no-repeat `,
        backgroundSize: 'cover',
      }}>
        <div>
          <Grid container spacing={2}>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={6}>
              <OfficerCards
                name='Sahil Jain'
                position='Founder'
                img={sahilImg} bio="Alo, I'm Sahil! I'm a software developer interested in robotics, creative writing, and pandas (especially those that know kung fu) "
                linkedIn='https://www.linkedin.com/in/sahil-jain-ab012614b/'
                email='sahil.jain.1@outlook.com' topAlignImage={false}/>
            </Grid>
            <Grid className="cardContainerFounder" item xs={12} sm={12} md={6}>
              <OfficerCards
                name='Conrad Li'
                position='Founder'
                img={conradImg} bio="I am a recently graduated computer science, neuroscience, and chemistry major from UT Austin. I aspire to be a physician working at this intersection of medicine and technology."
                linkedIn='https://www.linkedin.com/in/conradfli/'
                email='conradliste@utexas.edu' topAlignImage={true}/>
            </Grid>
          </Grid>

        </div>

      </section>

      <section className='box2 box2-override' style={{ marginTop: '-1px' }}>
        <div className='box1_5-textLeft' id="aboutus-howtoJoin"> How to join us! </div>
        <div className='joinInstructions'>
          <div>Feel free to drop in on one of our meetings!</div>
          <div>
            Or join our discord server to and reach out to one of our officers to get more information!
          </div>
          <div>
            <a href='https://discord.gg/tgbvpCjNgV' target={'_blank'}>
              {/* <img className='discordLogo' src={discordPng} /> */}
              <svg className='discordSVG'>
                <defs>
                  <style>{`.cls-1{fill:#fff;}`}</style>
                </defs>
                <path className="cls-1"
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
            </a>
          </div>
        </div>

      </section>

      <section className='box2 box2-override2'>
        <div className='box1_5-textRight' id="embeddedMapHolder">
          <iframe className="embeddedGoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1347.6239260786679!2d-97.73857918622161!3d30.288576376509805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b583399f9331%3A0x4c1b35a5244fc3a7!2sAnna%20Hiss%20Gymnasium!5e0!3m2!1sen!2sin!4v1684598907576!5m2!1sen!2sin" ></iframe>
        </div>
        <div className="joiningInstructionsEncloser">
          <div className='locationInstructionsTitle' id='boldText'>
            Where to find us!
          </div>
          <div className='locationInstructions' id="informationText">
            We meet in the Anna Hiss Gymnasium, home of Texas Robotics!
          </div>

        </div>
      </section>
      <Loader bGLoaded={aBGLoaded}/>

    </>
  )
}

export default About
