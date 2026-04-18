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

export const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: 6rem;

  h1 {
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: var(--white);
  }

  p {
    font-size: 1.25rem;
    color: var(--link-color);
    max-width: 40rem;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

export const FormSide = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2.5rem;
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }

  input, textarea {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    padding: 1.25rem;
    color: var(--white);
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--brand-primary);
      background: rgba(255, 255, 255, 0.08);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }

  textarea {
    resize: none;
    min-height: 12rem;
  }
`;

export const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const InfoCard = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--white);
  }

  p {
    color: var(--link-color);
    font-size: 1.125rem;
    line-height: 1.6;
  }
`;

export const IconBox = styled.div`
  width: 4rem;
  height: 4rem;
  background: rgba(234, 88, 12, 0.1);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--brand-primary);
  }
`;

export const SubmitButton = styled.button`
  background: var(--brand-primary);
  color: var(--white);
  padding: 1.25rem;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
