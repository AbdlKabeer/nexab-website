'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(7, 6, 6, 0.85);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

export const ModalContainer = styled(motion.div)`
  width: 100%;
  max-width: 32rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2rem;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(72, 214, 76, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--white);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(90deg);
  }
`;

export const Content = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--white);
    line-height: 1.2;
  }

  p {
    color: var(--link-color);
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.75rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const SuccessOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--Background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  padding: 2rem;
  text-align: center;

  svg {
    width: 4rem;
    height: 4rem;
    color: var(--emerald);
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--link-color);
  }
`;

export const DoneButton = styled.button`
  margin-top: 2rem;
  padding: 0.875rem 3rem;
  border-radius: 6.25rem;
  border: none;
  background: var(--green);
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--emerald);
    box-shadow: 0 5px 15px rgba(72, 214, 76, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
