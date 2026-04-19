'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  Offers,
  OfferCard,
  ImageCtn,
  TextCtn,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
} from './constants';

import { motion } from 'framer-motion';

const OffersSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />

          {isMobile ? (
            <MaskText phrases={mobileParagraphPhrase} tag="p" />
          ) : (
            <MaskText phrases={desktopParagraphPhrase} tag="p" />
          )}
        </Header>
        <Offers>
          {offers.slice(0, 2).map((offer, i) => (
            <OfferCard key={i}>
              <ImageCtn>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Image
                    src={offer.illustration}
                    alt="illustration"
                    priority
                    quality={90}
                  />
                </motion.div>
              </ImageCtn>
              <TextCtn>
                <MaskText phrases={new Array(offer.title)} tag="h2" />
                <p>{offer.details}</p>
              </TextCtn>
            </OfferCard>
          ))}
        </Offers>
        <Offers>
          {offers.slice(2, 4).map((offer, i) => (
            <OfferCard key={i}>
              <ImageCtn>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Image
                    src={offer.illustration}
                    alt="illustration"
                    priority
                    quality={90}
                  />
                </motion.div>
              </ImageCtn>
              <TextCtn>
                <MaskText phrases={new Array(offer.title)} tag="h2" />
                <p>{offer.details}</p>
              </TextCtn>
            </OfferCard>
          ))}
        </Offers>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;
