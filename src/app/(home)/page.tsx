import {
  FAQ,
  Featured,
  FinancialFreedom,
  FinancialFuture,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  WaitlistModal,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      {/* <OffersSection /> */}
      <FinancialFreedom />
      <FinancialFuture />
      <IntroSection />
      <JoinSection />
      <FAQ />
      <WaitlistModal />
    </main>
  );
}
