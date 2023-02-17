// import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';
import { FC } from 'react';

interface IButton {
  loadMore: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button: FC<IButton> = ({ loadMore }) => {
  return <ButtonStyle onClick={loadMore}>Load more</ButtonStyle>;
};
