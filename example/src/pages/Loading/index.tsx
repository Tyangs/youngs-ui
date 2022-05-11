import emotion from '@emotion/styled';
import './index.scss';

const Button = emotion.button(
  {
    color: 'darkorchid',
  },
  props => ({
    fontSize: props.fontSize,
  })
);

const ButtonPage = () => {
  return <Button fontSize={16}>This is a darkorchid button.</Button>;
};

export default ButtonPage;
