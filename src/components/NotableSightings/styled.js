import styled from 'styled-components';

export const Section = styled.section`
  grid-column: span 2;
  text-align: left;
`;

export const Table = styled.table`
  width: 100%;
`;

export const Th = styled.th`
  padding: 0.25rem;
`;

export const ThRarityAndHowMany = Th.extend`
  text-align: center;
  width: 5%;
`;
export const ThComName = Th.extend`
  width: 30%;
`;

export const ThLocName = Th.extend`
  width: 45%;
`;

export const ThObsDt = Th.extend`
  width: 15%;
`;

export const Tr = styled.tr`
  height: 2rem;
  color: var(--white);
`;
