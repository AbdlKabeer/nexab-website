'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.main`
  padding-top: 8rem;
  background: var(--Background);
  min-height: 100vh;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 8rem;
`;

export const Content = styled.article`
  color: var(--white);
  line-height: 1.8;

  header {
    margin-bottom: 4rem;
    text-align: center;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      color: var(--brand-primary);
    }

    p {
      color: var(--link-color);
      font-size: 1.125rem;
    }
  }

  section {
    margin-bottom: 3rem;

    h2 {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
      color: var(--brand-primary);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 0.5rem;
    }

    p {
      margin-bottom: 1rem;
      color: var(--link-color);
    }

    ul {
      margin-left: 1.5rem;
      margin-bottom: 1.5rem;
      list-style-type: disc;

      li {
        margin-bottom: 0.5rem;
        color: var(--link-color);
      }
    }

    strong {
      color: var(--white);
    }
  }

  footer {
    margin-top: 6rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--link-color);
    font-size: 0.875rem;

    p {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    header h1 {
      font-size: 2.25rem;
    }
    section h2 {
      font-size: 1.5rem;
    }
  }
`;
