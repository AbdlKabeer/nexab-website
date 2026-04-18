'use client';
import Image from 'next/image';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 7.5rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 7.38rem;

  h3 {
    color: var(--brand-primary);
    font-size: 1.125rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const HeaderMainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 7.77rem;
  width: 100%;
`;

export const LeftImage = styled(Image)`
  position: absolute;
  top: 40px;
  left: 10%;
  transform: rotate(-10deg) scale(0.9);
  transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  filter: blur(1px);
  opacity: 0.8;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);

  &.active {
    transform: rotate(0deg) scale(1) translateX(-20%);
    filter: blur(0);
    opacity: 1;
    z-index: 4;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MiddleImage = styled(Image)`
  position: relative;
  z-index: 3;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const RightImage = styled(Image)`
  position: absolute;
  top: 40px;
  right: 10%;
  transform: rotate(10deg) scale(0.9);
  transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  filter: blur(1px);
  opacity: 0.8;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);

  &.active {
    transform: rotate(0deg) scale(1) translateX(20%);
    filter: blur(0);
    opacity: 1;
    z-index: 4;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
