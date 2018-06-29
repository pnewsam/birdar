import React from 'react';
import { TdRarityAndHowMany, TdComName, TdLocName, TdObsDt } from './styled';
import { Tr } from '../NotableSightings/styled';
import enhance from './enhance';

const NotableSighting = ({
  comName,
  howMany,
  locName,
  obsDt,
  rarityCode,
  styleRoot,
}) => (
  <Tr style={styleRoot}>
    <TdRarityAndHowMany>{rarityCode}</TdRarityAndHowMany>
    <TdRarityAndHowMany>{howMany}</TdRarityAndHowMany>
    <TdComName>{comName}</TdComName>
    <TdLocName>{locName}</TdLocName>
    <TdObsDt>{obsDt}</TdObsDt>
  </Tr>
);

export default enhance(NotableSighting);
