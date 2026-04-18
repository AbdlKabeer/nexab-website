'use client';
import {
  Wrapper,
  Inner,
  HeaderSection,
  Grid,
  FormSide,
  Form,
  FormGroup,
  InfoSide,
  InfoCard,
  IconBox,
  SubmitButton,
} from './styles';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our team will get back to you shortly.');
  };

  return (
    <Wrapper>
      <Inner>
        <HeaderSection>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in touch with us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions about the Nexab ecosystem? Our team is here to help
            renters, landlords, and agents succeed.
          </motion.p>
        </HeaderSection>

        <Grid>
          <FormSide>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </FormGroup>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>
          </FormSide>

          <InfoSide>
            <InfoCard>
              <IconBox>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </IconBox>
              <div>
                <h3>Email Support</h3>
                <p>Our team is available to answer your emails 24/7.</p>
                <p style={{ color: 'var(--brand-primary)', fontWeight: 500 }}>
                  hello@nexab.com
                </p>
              </div>
            </InfoCard>

            <InfoCard>
              <IconBox>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </IconBox>
              <div>
                <h3>Call Us</h3>
                <p>Speak directly with a support representative.</p>
                <p style={{ color: 'var(--brand-primary)', fontWeight: 500 }}>
                  +234 800 NEXAB HELP
                </p>
              </div>
            </InfoCard>

            <InfoCard>
              <IconBox>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </IconBox>
              <div>
                <h3>Office HQ</h3>
                <p>
                  Visit our headquarters in the heart of the real estate hub.
                </p>
                <p style={{ color: 'var(--white)' }}>
                  Lagos, Nigeria
                </p>
              </div>
            </InfoCard>
          </InfoSide>
        </Grid>
      </Inner>
    </Wrapper>
  );
};

export default ContactPage;
