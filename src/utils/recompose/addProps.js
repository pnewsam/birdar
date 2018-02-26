import { withProps } from 'recompose';

export const addProps = funcsByPropNames => {
  const propNames = Object.keys(funcsByPropNames);

  const createProps = props =>
    propNames.reduce((createdProps, propName) => {
      const func = funcsByPropNames[propName];
      createdProps[propName] = func(props);
      return createdProps;
    }, {});

  return withProps(createProps);
};
