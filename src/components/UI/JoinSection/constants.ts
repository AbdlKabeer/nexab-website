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
      "Nexab has transformed how I find my homes. Booking an inspection was instant, and the agent was already at the property when I arrived! It's never been this সহজ.",
    person: 'Robert Fox (Renter)',
    avatar: robert_fox,
  },
  {
    testimony:
      "As a landlord, I've never reached verified renters so quickly. The Nexab platform gives me peace of mind knowing all documents and inspections are professionally handled.",
    person: 'Cameron Williamson (Landlord)',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Conducting inspections with Nexab has been a rewarding side hustle. I set my own schedule and the platform manages all my bookings and earnings seamlessly.",
    person: 'Esther Howard (Agent)',
    avatar: esther_howard,
  },
  {
    testimony:
      "The transparency Nexab brings to the real estate market is unmatched. Whether you're listing, renting, or inspecting, you know exactly where you stand.",
    person: 'Cameron Williamson (Property Manager)',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "I used to spend days calling agents. Now, I just browse, book, and move in. Nexab is the only property ecosystem you'll ever need.",
    person: 'Robert Fox (Happy Renter)',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Join over 10,000', 'Nexab Users'];
