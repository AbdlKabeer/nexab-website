import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Nexab has transformed my approach to property hunting. Their virtual tours have helped me save time, and their user-friendly platform makes managing my viewings a breeze. I've never felt more confident about my next home.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "I can't express how grateful I am to Nexab. Their property management services have been a game-changer for my real estate portfolio. The expert guidance and personalized strategies have given us peace of mind.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Nexab's search filters have been a lifeline for me. I always struggled with finding the right place, but their team helped me find a tailored property that addressed my goals and concerns. It's been a game-changer.",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "I can't express how grateful I am to Nexab. Their property management services have been a game-changer for my family's security. The expert guidance and personalized strategies have given us peace of mind.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Nexab has transformed my approach to real estate. Their smart listing options have helped me grow my portfolio, and their user-friendly platform makes managing my property a breeze.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Join over 3,000', 'homeowners'];
