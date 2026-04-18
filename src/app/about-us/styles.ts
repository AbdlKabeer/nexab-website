'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.main`
  padding-top: 8rem;
  background: var(--Background);
  min-height: 100vh;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 8rem;
`;

export const Hero = styled.section`
  text-align: center;
  margin-bottom: 10rem;
  max-width: 70rem;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 2rem;
    line-height: 1.1;
  }

  p {
    font-size: 1.5rem;
    color: var(--link-color);
    line-height: 1.6;
    max-width: 50rem;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.75rem;
    }
    p {
      font-size: 1.125rem;
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContentSide = styled.div`
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: var(--brand-primary);
  }

  p {
    font-size: 1.25rem;
    color: var(--link-color);
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.125rem;
    }
  }
`;

export const ImageSide = styled.div`
  position: relative;
  height: 35rem;
  width: 100%;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 25rem;
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2rem;
  padding: 4rem 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--brand-primary);
    transform: translateY(-10px);
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: var(--white);
  }

  p {
    color: var(--link-color);
    line-height: 1.6;
    font-size: 1.125rem;
  }
`;

export const IconBox = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  background: rgba(234, 88, 12, 0.1);
  border-radius: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2.5rem;

  svg {
    width: 2.25rem;
    height: 2.25rem;
    color: var(--brand-primary);
  }
`;

export const MissionVision = styled.section`
  padding: 8rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 10rem;
`;

export const FullWidthCTA = styled.section`
  background: linear-gradient(135deg, var(--brand-primary) 0%, #c2410c 100%);
  border-radius: 3rem;
  padding: 6rem;
  text-align: center;
  color: var(--Background);

  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 3.5rem;
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.95;
  }

  button {
    background: var(--Background);
    color: var(--white);
    font-size: 1.25rem;
    padding: 1.5rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    h2 {
      font-size: 2.25rem;
    }
    p {
      font-size: 1.125rem;
    }
  }
`;
