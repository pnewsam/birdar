import styled from 'styled-components';

export const Td = styled.td`
  padding: 0.25rem;
`;

export const TdRarityAndHowMany = Td.extend`
  text-align: center;
  width: 5%;
`;
export const TdComName = Td.extend`
  width: 30%;
`;

export const TdLocName = Td.extend`
  width: 45%;
`;

export const TdObsDt = Td.extend`
  width: 15%;
`;
