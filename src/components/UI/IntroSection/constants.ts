import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Introducing Nexab's Smart", 'Property App'];
export const desktopParagraphPhrase = [
  " Discover Nexab's latest innovation – our property management app. Elevate your",
  'real estate experience with cutting-edge features, virtual tours, and unprecedented',
  'convenience.',
];

// For mobile
export const mobileHeaderPhrase = ["Introducing Nexab's", 'Property App'];
export const mobileParagraphPhrase = [
  " Discover Nexab's latest innovation – our property app.",
  ' Elevate your real estate experience with cutting-edge',
  'features, virtual tours, and unprecedented',
  'convenience.',
];

export const edges = [
  {
    point: 'Virtual Tours',
    details:
      'Our app comes equipped with immersive virtual tour technology, allowing you to explore properties from the comfort of your home.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Smart Management',
    details:
      'Manage your property listings, viewing schedules, and documents all in one secure place with a few simple taps.',
    icon: ic_identification,
  },
  {
    point: 'Advanced Search',
    details:
      'Your perfect home is just a search away. Our advanced filters help you find properties that match your exact criteria.',
    icon: ic_lock_closed,
  },
];
