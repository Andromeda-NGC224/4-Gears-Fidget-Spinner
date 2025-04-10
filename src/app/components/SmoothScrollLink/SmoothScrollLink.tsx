'use client';

import { ReactNode } from 'react';

interface SmoothScrollLinkProps {
  targetId: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const SmoothScrollLink = ({
  targetId,
  children,
  className,
  onClick,
}: SmoothScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    }

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState({}, '', `#${targetId}`);
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={className}
      aria-label={`Scroll to ${targetId}`}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;
