import React, { Fragment } from 'react';
import enhance from './enhance';
import { ComName, ExpandedLabel, LocName, RarityCode, Tr } from './styled';

const text = {
  howMany: '# Observed:',
  obsDt: 'Time Observed:',
  sciName: 'Sci. Name',
};

const NotableSighting = ({
  comName,
  handleClick,
  howMany,
  isOpen,
  locName,
  obsDt,
  rarityCode,
  sciName,
  styleRoot,
}) => (
  <Fragment>
    <Tr onClick={handleClick}>
      <RarityCode style={styleRoot}>{rarityCode}</RarityCode>
      <ComName>{comName}</ComName>
      <LocName>{locName}</LocName>
    </Tr>
    {isOpen && (
      <Fragment>
        <tr>
          <td />
          <ExpandedLabel>{text.sciName}</ExpandedLabel>
          <td>{sciName}</td>
        </tr>
        <tr>
          <td />
          <ExpandedLabel>{text.howMany}</ExpandedLabel>
          <td>{howMany}</td>
        </tr>
        <tr>
          <td />
          <ExpandedLabel>{text.obsDt}</ExpandedLabel>
          <td>{obsDt}</td>
        </tr>
      </Fragment>
    )}
  </Fragment>
);

export default enhance(NotableSighting);
