import React from 'react';
import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Spinner,
  Span,
  Wrapper,
} from './styled';

export const LoadingSpinner = () => (
  <Wrapper>
    <Spinner>
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Ten />
      <Eleven />
      <Twelve />
    </Spinner>
    <Span>Loading...</Span>
  </Wrapper>
);

export default LoadingSpinner;
