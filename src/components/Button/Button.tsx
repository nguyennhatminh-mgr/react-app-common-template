import React from 'react';

interface IButtonProps {
  text: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { text } = props;
  return <button type="button">{text}</button>;
};

export default Button;
