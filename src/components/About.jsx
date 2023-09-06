import React from 'react';
import styled from "styled-components";
import s1 from "assets/s1.png";
import s2 from "assets/s2.png";
import s3 from "assets/s3.png";
import play from "assets/play.png";
import Title from './Title';
import { useScroll } from "components/useScroll";
import { motion } from "framer-motion";
import { aboutsAnimations } from "animation";

function About() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "React",
      text: "Transforming your ideas into market-ready software products. Stand out online with a professional website, We integrate, Design Website, IOS and Android mobile apps with custom management service.",
      image: s1,
    },
    {
      type: "React",
      text: "Transforming your ideas into market-ready software products. Stand out online with a professional website, We integrate, Design Website, IOS and Android mobile apps with custom management service.",
      image: s2,
    },
    {
      type: "React",
      text: "Transforming your ideas into market-ready software products. Stand out online with a professional website, We integrate, Design Website, IOS and Android mobile apps with custom management service.",
      image: s3,
    },
  ];
  return <Section id="abouts" ref={element}>
    <Title value="About" />
    <div className="abouts">
        {data.map(({type,text,image},index) => {
            return (
              <motion.div className="abouts__service"
              variants={aboutsAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              >
                  <div className="abouts__service__image">
                    <img src={image} alt="Service" />  
                  </div>
                  <div className="abouts__service__title">
                    <span>0{index + 1}</span>  
                    <h2>{type}</h2>
                  </div>
                  <p className="abouts__service__description">{text}</p>
                  <img src={play} alt="Readmore" />
              </motion.div>
            )
          })}
    </div>
  </Section>
}

const Section = styled.section`
min-height: 100vh;
.abouts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
  margin: 0 14rem;
  margin-top: 10rem;
  gap: 5rem;
  &__service {
    padding: 2rem;
    &:nth-of-type(2) {
      background-color: var(--primary-color);
      .abouts__service__title {
        span {
          color: #fff;
        }
      }
      .abouts__service__description {
        color: #fff;
      }
    }
    &__image {
      margin-bottom: 3rem;
    }
    &__title {
      span {
        color: var(--primary-color);
        font-weight: bolder;
      }
      h2 {
        font-size: 3rem;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        color: var(--secondary-color);
      }
    }
    &__description {
      color: var(--primary-color);
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  .abouts {
    margin: 2rem 0;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }
}
`;

export default About