'use client';
import Image from 'next/image';
import luxury_penthouse from '../../../../public/images/landing-page/luxury-penthouse.png';
import modern_apartment from '../../../../public/images/landing-page/modern-apartment.png';
import ParallaxText from '@/components/Common/ParallaxImages';
import companies_image from '../../../../public/images/companies.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={modern_apartment}
                alt="Modern Nexab apartment unit"
                fill
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <Image
                src={luxury_penthouse}
                alt="Luxury Nexab penthouse exterior view"
                fill
                style={{ objectFit: 'cover' }}
              />
            )}
          </Div>
        </ImageContainer>
        <h2>Featured Properties and Partners</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={companies_image} alt="comapanies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
