'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Hero,
  Section,
  ContentSide,
  ImageSide,
  ValuesGrid,
  ValueCard,
  IconBox,
  MissionVision,
  FullWidthCTA,
} from './styles';
import { GetStartedButton } from '@/components';
import { motion } from 'framer-motion';
import penthouse_img from '../../../public/images/landing-page/luxury-penthouse.png';
import lifestyle_img from '../../../public/images/landing-page/person-reaching-to-hang-a-frame-on-the-wall.jpg';

const AboutUsPage = () => {
  const values = [
    {
      title: 'Transparency',
      description:
        'We believe in a market without hidden fees or surprise commissions. Every transaction is clear and direct.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    }, 
    {
      title: 'Trust',
      description:
        'Trust is our foundation. We verify every listing, landlord, and agent to ensure a safe ecosystem for everyone.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description:
        'From virtual tours to smart property management, we leverage technology to simplify the future of real estate.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  return (
    <Wrapper>
      <Inner>
        <Hero>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Changing the way you <span style={{ color: 'var(--brand-primary)' }}>live</span> and <span style={{ color: 'var(--brand-primary)' }}>invest</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nexab is a technology-driven real estate ecosystem dedicated to making property transactions 
            transparent, efficient, and accessible for everyone.
          </motion.p>
        </Hero>

        <Section>
          <ContentSide>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Nexab was born out of a simple realization: the traditional real estate market was broken. 
              Fragmented data, lack of transparency, and inefficient processes made finding or managing 
              property a daunting task.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              We set out to build more than just a listing site. We built an ecosystem where renters, 
              landlords, and agents work together seamlessly. A place where data is verified, 
              inspections are professional, and trust is built into every click.
            </motion.p>
          </ContentSide>
          <ImageSide>
            <Image src={penthouse_img} alt="Nexab Visionary Property" fill />
          </ImageSide>
        </Section>

        <MissionVision>
          <Section style={{ gridTemplateColumns: '1fr 1fr', textAlign: 'left' }}>
            <div style={{ padding: '0 2rem' }}>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--white)' }}>Our Mission</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--link-color)', lineHeight: '1.7' }}>
                To build the most trusted and efficient property ecosystem in Africa, 
                leveraging technology to connect people with the spaces they love.
              </p>
            </div>
            <div style={{ padding: '0 2rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--white)' }}>Our Vision</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--link-color)', lineHeight: '1.7' }}>
                A future where real estate transactions are instant, transparent, and joyful for everyone, 
                powered by the Nexab ecosystem.
              </p>
            </div>
          </Section>
        </MissionVision>

        <section style={{ marginBottom: '10rem' }}>
          <header style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 500 }}>Our Core Values</h2>
          </header>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <IconBox>{value.icon}</IconBox>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </section>

        <Section style={{ direction: 'rtl' }}>
          <ContentSide style={{ direction: 'ltr' }}>
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Innovation at Heart
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We are constantly pushing the boundaries of what&apos;s possible in real estate technology. 
              From smart asset management to integrated agent scheduling, our platform is built 
              to handle the complexities of modern property markets.
            </motion.p>
          </ContentSide>
          <ImageSide>
            <Image src={lifestyle_img} alt="Innovation in property management" fill />
          </ImageSide>
        </Section>

        <FullWidthCTA>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Join the Nexab Ecosystem</h2>
            <p>
              Whether you&apos;re looking for your next home, managing a portfolio, or 
              ready to conduct inspections, there&apos;s a place for you here.
            </p>
            <GetStartedButton padding="1.5rem 4rem" />
          </motion.div>
        </FullWidthCTA>
      </Inner>

    </Wrapper>
  );
};

export default AboutUsPage;
