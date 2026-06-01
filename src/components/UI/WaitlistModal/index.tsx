'use client';

import { useState, useEffect } from 'react';
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Title,
  Subtitle,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  SubmitButton,
  SuccessMessage,
} from './styles';
import { motion, AnimatePresence } from 'framer-motion';

const WaitlistModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Tenant');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmitted(false);
      setEmail('');
    };

    window.addEventListener('open-waitlist', handleOpen as EventListener);

    return () => {
      window.removeEventListener('open-waitlist', handleOpen as EventListener);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist Join Request:', { email, role });
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <ModalContainer
            as={motion.div}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={handleClose}>&times;</CloseButton>
            
            <div>
              <Title>Join the Waitlist</Title>
              <Subtitle>Be the first to know when Nexab goes live. Register your interest below.</Subtitle>
            </div>

            {submitted ? (
              <SuccessMessage>
                Thanks for joining! We'll be in touch soon.
              </SuccessMessage>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="role">I am a...</Label>
                  <Select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="Tenant">Tenant</option>
                    <option value="Landlord">Landlord</option>
                    <option value="Agent">Real Estate Agent</option>
                  </Select>
                </FormGroup>

                <SubmitButton type="submit">Join Waitlist</SubmitButton>
              </Form>
            )}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
