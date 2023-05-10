'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import {
  StyledOverlayContainer,
  StyledOverlayToggleClose,
  StyledOverlayToggleOpen,
  StyledButtonContainer,
} from './styles';

interface IProps {}

export const DesignOverlay: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [layoutAs, setLayoutAs] = useState<'desktop' | 'mobile'>('desktop');

  const onToggleDesignLayout = () => {
    const newLayout = layoutAs === 'mobile' ? 'desktop' : 'mobile';

    setLayoutAs(newLayout);
  };

  const layoutOpts = (
    <>
      <StyledOverlayToggleOpen onClick={onToggleDesignLayout}>Toggle Layout</StyledOverlayToggleOpen>
    </>
  );

  return (
    <StyledOverlayContainer>
      {isOpen && (
        <>
          {layoutAs === 'desktop' ? (
            <Image
              src="/images/desktop-design-dark.jpg"
              alt="Final Design on Desktop"
              width={1440}
              height={800}
              priority
            />
          ) : (
            <Image
              src="/images/mobile-design-dark.jpg"
              alt="Final Design on Mobile"
              width={375}
              height={730}
              priority
            />
          )}
          <StyledButtonContainer>
            <StyledOverlayToggleClose onClick={() => setIsOpen(false)}>Close</StyledOverlayToggleClose>
            {layoutOpts}
          </StyledButtonContainer>
        </>
      )}
      {!isOpen && (
        <StyledButtonContainer>
          <StyledOverlayToggleOpen onClick={() => setIsOpen(true)}>Open</StyledOverlayToggleOpen>
          {layoutOpts}
        </StyledButtonContainer>
      )}
    </StyledOverlayContainer>
  );
};
