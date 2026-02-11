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
    question: 'How do I schedule a property viewing?',
    answer:
      'You can schedule a viewing directly through the property detail page by clicking the "Book a Tour" button, or by contacting our support team.',
  },
  {
    question: 'Are the properties on Nexab verified?',
    answer:
      'Yes, all properties listed on Nexab undergo a thorough verification process, including title checks and physical inspections.',
  },
  {
    question: 'What are the payment options for purchasing?',
    answer:
      'We support various payment methods including bank transfers, mortgage financing through our partners, and installment plans for select properties.',
  },
  {
    question: 'Is there a commission fee?',
    answer:
      'Nexab offers direct-to-owner listings with zero commission on many properties. For managed sales, we charge a transparent, flat fee.',
  },
  {
    question: 'Can I list my own property on Nexab?',
    answer:
      'Absolutely! You can register as a seller and list your property after it passes our verification criteria.',
  },
];
