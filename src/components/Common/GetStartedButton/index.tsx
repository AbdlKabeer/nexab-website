'use client';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch custom event to open the waitlist modal
    const event = new CustomEvent('open-waitlist');
    window.dispatchEvent(event);
  };

  return (
    <LinkTo
      style={{
        padding: padding,
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      Get Started
    </LinkTo>
  );
};

export default GetStartedButton;
