'use client';
import { LinkTo } from './styles';
const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      onClick={() => window.dispatchEvent(new CustomEvent('open-waitlist'))}
      style={{
        padding: padding,
      }}
    >
      Get Started
    </LinkTo>
  );
};

export default GetStartedButton;

