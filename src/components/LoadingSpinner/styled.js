import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  justify-content: center;
  width: 100%;
`;

export const Spinner = styled.div`
  display: inline-block;
  height: 64px;
  position: relative;
  width: 64px;
`;

const grow = keyframes`
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`;

const Div = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background: #fff;
  border-radius: 50%;
  animation: ${grow} 1.2s linear infinite;
`;

export const One = styled(Div)`
  animation-delay: 0s;
  top: 29px;
  left: 53px;
`;

export const Two = styled(Div)`
  animation-delay: -0.1s;
  top: 18px;
  left: 50px;
`;

export const Three = styled(Div)`
  animation-delay: -0.2s;
  top: 9px;
  left: 41px;
`;

export const Four = styled(Div)`
  animation-delay: -0.3s;
  top: 6px;
  left: 29px;
`;

export const Five = styled(Div)`
  animation-delay: -0.4s;
  top: 9px;
  left: 18px;
`;

export const Six = styled(Div)`
  animation-delay: -0.5s;
  top: 18px;
  left: 9px;
`;

export const Seven = styled(Div)`
  animation-delay: -0.6s;
  top: 29px;
  left: 6px;
`;

export const Eight = styled(Div)`
  animation-delay: -0.7s;
  top: 41px;
  left: 9px;
`;

export const Nine = styled(Div)`
  animation-delay: -0.8s;
  top: 50px;
  left: 18px;
`;

export const Ten = styled(Div)`
  animation-delay: -0.9s;
  top: 53px;
  left: 29px;
`;

export const Eleven = styled(Div)`
  animation-delay: -1s;
  top: 50px;
  left: 41px;
`;

export const Twelve = styled(Div)`
  animation-delay: -1.1s;
  top: 41px;
  left: 50px;
`;

export const Span = styled.span`
  color: var(--white);
`;
