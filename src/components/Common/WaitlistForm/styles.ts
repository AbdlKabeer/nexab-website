'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border-radius: 6.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--link-color);
  }

  &:focus {
    border-color: var(--emerald);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 15px rgba(72, 214, 76, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not_allowed;
  }
`;

export const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1.25rem;
  border-radius: 6.25rem;
  border: none;
  background: var(--green);
  color: var(--white);
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: var(--emerald);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(72, 214, 76, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Message = styled(motion.p)<{ $isError?: boolean }>`
  font-size: 0.875rem;
  text-align: center;
  color: ${props => (props.$isError ? '#ff4d4d' : 'var(--emerald)')};
  margin-top: 0.5rem;
`;
