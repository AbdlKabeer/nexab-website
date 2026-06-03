import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["The Ultimate Real Estate", 'Ecosystem'];
export const desktopParagraphPhrase = [
  "Discover Nexab's premium platform. Elevate your real estate",
  'experience with curated listings, seamless management,',
  'and unprecedented convenience.',
];

// For mobile
export const mobileHeaderPhrase = ["The Ultimate", 'Ecosystem'];
export const mobileParagraphPhrase = [
  "Discover Nexab's premium platform.",
  'Elevate your real estate experience with',
  'curated listings and management.',
];

export const edges = [
  {
    point: 'For Renters',
    details:
      'Explore properties with immersive virtual tours and book instant inspections with local agents.',
    icon: ic_document_duplicate,
  },
  {
    point: 'For Agents',
    details:
      'Manage inspection schedules, conduct verified property tours, and earn rewards on our platform.',
    icon: ic_identification,
  },
  {
    point: 'For Landlords',
    details:
      'List properties with advanced filters to reach verified renters and manage your portfolio with ease.',
    icon: ic_lock_closed,
  },
];
