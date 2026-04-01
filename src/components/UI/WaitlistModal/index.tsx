'use client';
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Content,
  SuccessOverlay,
  DoneButton,
} from './styles';
import WaitlistForm from '../../Common/WaitlistForm';

const WaitlistModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const hasShownRef = useRef(false);

  useEffect(() => {
    // 1. Scroll trigger logic
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // Calculate scroll percentage
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

      // Trigger at 30% scroll
      if (scrollPercent > 30 && !hasShownRef.current) {
        setIsOpen(true);
        hasShownRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 2. Event listener for manual trigger
    const handleManualOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener('open-waitlist', handleManualOpen);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-waitlist', handleManualOpen);
    };
  }, []);

  const closePortal = () => {
    setIsOpen(false);
    // Reset success state after closing animation
    setTimeout(() => setIsSuccess(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePortal}
        >
          <ModalContainer
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={closePortal}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1L1 13M1 1L13 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CloseButton>

            <Content>
              <h2>Join the Waitlist</h2>
              <p>
                Be among the first to experience the future of modern real estate.
                Sign up now for early access and exclusive updates.
              </p>
              <WaitlistForm onSuccess={() => setIsSuccess(true)} />
            </Content>

            {isSuccess && (
              <SuccessOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3>You&apos;re In!</h3>
                <p>We&apos;ll notify you as soon as we launch.</p>
                <DoneButton onClick={closePortal}>
                  Done
                </DoneButton>
              </SuccessOverlay>
            )}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
