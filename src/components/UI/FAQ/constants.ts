type FAQItem = {
  question: string;
  answer: string;
};
export const desktopHeaderPhrase = ['Frequently Asked', 'Questions'];

export const mobileHeaderPhrase = ['Frequently', 'Asked Questions'];

export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How do I schedule an inspection as a Renter?',
    answer:
      'You can schedule an inspection directly through the property detail page. Just click "Book Inspection", choose a convenient time, and a verified Nexab agent will meet you at the property.',
  },
  {
    question: 'How do I earn money as a Nexab Agent?',
    answer:
      'After registration and verification, you can accept inspection requests in your area. You earn a fee for every professional property tour you conduct through the platform.',
  },
  {
    question: 'Are the landlords and agents on Nexab verified?',
    answer:
      'Absolutely. Every landlord and agent on our platform undergoes a rigorous identity and document verification process to ensure a safe and trusted ecosystem.',
  },
  {
    question: 'What are the fees for Landlords to list properties?',
    answer:
      'Landlords can list their first property for free! For multiple listings or premium placements, we offer transparent, tiered pricing plans with no hidden costs.',
  },
  {
    question: 'Does Nexab handle property sales as well?',
    answer:
      'Yes, Nexab supports both rentals and sales. Landlords can list properties for sale, and our network of agents can facilitate the viewing and closing process.',
  },
];
