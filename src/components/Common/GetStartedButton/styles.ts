'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: var(--brand-primary);
  color: var(--white);
  border: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;
