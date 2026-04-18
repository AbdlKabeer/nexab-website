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

export const Header = styled.header`
  text-align: center;
  margin-bottom: 6rem;
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 4.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: var(--white);
  }

  p {
    font-size: 1.25rem;
    color: var(--link-color);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2rem;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--brand-primary);
    transform: translateY(-10px);
  }
`;

export const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background: rgba(234, 88, 12, 0.1);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--brand-primary);
  }
`;

export const ServiceTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: var(--white);
`;

export const ServiceDescription = styled.p`
  font-size: 1.125rem;
  color: var(--link-color);
  line-height: 1.6;
`;

export const FeatureList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--white);
  font-size: 1rem;

  &::before {
    content: '✓';
    color: var(--brand-primary);
    font-weight: bold;
  }
`;

export const CTASection = styled.section`
  text-align: center;
  background: var(--brand-primary);
  border-radius: 2.5rem;
  padding: 6rem 2rem;
  margin-top: 4rem;
  color: var(--Background);

  h2 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 3rem;
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.9;
  }

  button {
    background: var(--Background);
    color: var(--white);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
