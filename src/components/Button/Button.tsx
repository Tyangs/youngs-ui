import React, { forwardRef } from 'react';
import cls from 'classnames';
import { IButtonProps } from './type';
import './index.scss';

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    size = 'medium',
    theme = 'default',
    shape = 'rectangle',
    outline,
    loading,
    disabled,
    children,
    className,
    onClick,
    ...otherProps
  } = props;

  const buttonCls = cls('youngs-button', {
    className,
    'youngs-button--outline': outline,
    'youngs-button--disabled': disabled,
    [`youngs-button--theme-${theme}`]: !!theme && theme !== 'default',
    [`youngs-button--size-${size}`]: !!size && size !== 'medium',
    [`youngs-button--shape-${shape}`]: !!shape && shape !== 'rectangle',
  });

  const buttonContainerCls = cls('youngs-button__container');

  return (
    <button className={buttonCls} onClick={onClick} ref={ref} {...otherProps}>
      <div className={buttonContainerCls}>{children}</div>
    </button>
  );
});

export default Button;
