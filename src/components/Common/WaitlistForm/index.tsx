'use client';
import { useState } from 'react';
import { FormContainer, Input, SubmitButton, Message } from './styles';
import { AnimatePresence } from 'framer-motion';

const WaitlistForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully added to the waitlist!');
        setEmail('');
        if (onSuccess) onSuccess();
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to connect to the server.');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
      />
      <SubmitButton
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </SubmitButton>
      
      <AnimatePresence mode="wait">
        {message && (
          <Message
            key={message}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            $isError={status === 'error'}
          >
            {message}
          </Message>
        )}
      </AnimatePresence>
    </FormContainer>
  );
};

export default WaitlistForm;
