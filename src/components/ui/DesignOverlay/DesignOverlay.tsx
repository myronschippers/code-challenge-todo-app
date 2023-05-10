'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { StyledOverlayContainer, StyledOverlayToggleClose, StyledOverlayToggleOpen } from './styled';

interface IProps {}

export const DesignOverlay: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <StyledOverlayContainer>
      {isOpen && (
        <>
          <Image
            src="/images/desktop-design-dark.jpg"
            alt="Vercel Logo"
            width={1440}
            height={800}
            priority
          />
          <StyledOverlayToggleClose onClick={() => setIsOpen(false)}>Close</StyledOverlayToggleClose>
        </>
      )}
      {!isOpen && <StyledOverlayToggleOpen onClick={() => setIsOpen(true)}>Open</StyledOverlayToggleOpen>}
    </StyledOverlayContainer>
  );
};
