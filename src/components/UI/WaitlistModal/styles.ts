'use client';
import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(7, 6, 6, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2.5rem;
  width: 90%;
  max-width: 450px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: transparent;
  border: none;
  color: var(--link-color);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--white);
  }
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 0.95rem;
  color: var(--link-color);
  line-height: 1.5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--light-gray);
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.875rem 1rem;
  color: var(--white);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--brand-primary);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const Select = styled.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.875rem 1rem;
  color: var(--white);
  font-family: inherit;
  font-size: 1rem;
  appearance: none;
  transition: border-color 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--brand-primary);
  }
  
  option {
    background: #111;
    color: var(--white);
  }
`;

export const SubmitButton = styled.button`
  background: var(--brand-primary);
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.2s ease;
  margin-top: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

export const SuccessMessage = styled.div`
  background: rgba(34, 197, 94, 0.1);
  color: #4ade80;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  text-align: center;
  border: 1px solid rgba(34, 197, 94, 0.2);
`;
