'use client';
import {
  Wrapper,
  Inner,
  Header,
  ServicesGrid,
  ServiceCard,
  IconWrapper,
  ServiceTitle,
  ServiceDescription,
  FeatureList,
  FeatureItem,
  CTASection,
} from './styles';
import { MaskText, GetStartedButton, WaitlistModal } from '@/components';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      title: 'For Renters',
      description: 'Find your next home with confidence and ease.',
      features: [
        'Browse 100% verified listings',
        'Book instant physical inspections',
        'Direct connection with trusted agents',
        'Transparent documentation process',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: 'For Landlords',
      description: 'Reach thousands of verified renters effortlessly.',
      features: [
        'List properties for rent or sale',
        'Connect with verified leads',
        'Manage viewings and inspections',
        'Professional property exposure',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: 'For Agents',
      description: 'Conduct inspections and earn on your schedule.',
      features: [
        'Register as a verified Nexab agent',
        'Accept inspection requests nearby',
        'Conduct professional property tours',
        'Seamless payment tracking',
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <Wrapper>
      <Inner>
        <Header>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Our Services</h1>
            <p>
              Nexab is more than a platform — it&apos;s an ecosystem designed to make
              real estate transactions seamless for everyone involved.
            </p>
          </motion.div>
        </Header>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <FeatureList>
                {service.features.map((feature, fIndex) => (
                  <FeatureItem key={fIndex}>{feature}</FeatureItem>
                ))}
              </FeatureList>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <CTASection>
          <h2>Ready to experience the future?</h2>
          <p>
            Whether you&apos;re looking for a home, listing a property, or ready to
            become an agent, Nexab has a place for you.
          </p>
          <GetStartedButton padding="1.25rem 3rem" />
        </CTASection>
      </Inner>
      <WaitlistModal />
    </Wrapper>
  );
};

export default ServicesPage;
