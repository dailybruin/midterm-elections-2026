import fb from '../images/socials/fb.svg'
import insta from '../images/socials/insta.svg'
import twitter from '../images/socials/twitter.svg'
import tiktok from '../images/socials/tiktok.svg'
import email from '../images/socials/email.svg'

import styled from 'styled-components'
import { mediaQueries } from '../shared/config';


const Container = styled.div`
  background-color: black;
  height: auto;
  color: white;
  padding: 24px 0 28px 0;
  text-align: center;
  margin-top: auto;   /* pushes the footer to the bottom */

  h1 {
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
  }
`

const Socials = styled.div`
  position: relative;
  margin-top: 12px;       

  img {
    position: relative;
    margin: 0 20px;
    display: block;       
  }

  a {
    display: inline-block;   
  }

  p {
    position: relative;
    margin: 16px 20px 0;   
    font-size: 14px;
    ${mediaQueries.mobile} {
      margin: 12px 20px 0;  
    }
  }
`

const Footer = () => {
    return (
        <Container>
        <h1>DAILY BRUIN</h1>
        <Socials>
          <a href="https://www.instagram.com/dailybruin" target="_blank" rel="noreferrer"><img src={insta} alt=""/></a>
          <a href="https://www.facebook.com/dailybruin" target="_blank" rel="noreferrer"><img src={fb} alt=""/></a>
          <a href="https://www.twitter.com/dailybruin" target="_blank" rel="noreferrer"><img src={twitter} alt=""/></a>
          <a href="https://www.tiktok.com/@dailybruin" target="_blank" rel="noreferrer"><img src={tiktok} alt=""/></a>
          <a href="http://eepurl.com/cFEiZX" target="_blank" rel="noreferrer"><img src={email} alt=""/></a>
        </Socials>
        <p> Reporting by Amanda Velasco, Alexis Muchnik and Julian Duaybis. Built by Shayla Kumaresan, Sri Sharma and Jessica Yep. Designed by Patrick Wu. Illustrated by Lauren Trautenberg.</p>
    </Container>
    )
  }
  
export default Footer;