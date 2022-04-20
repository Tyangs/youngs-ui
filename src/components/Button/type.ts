import React from 'react';

export type SizeEnum = 'small' | 'medium' | 'large';

export type ThemeEnum = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface ButtonProps {
  /**
   * Button size
   * @default 'medium'
   */
  size?: SizeEnum;
  /**
   * Button theme
   * @default -
   */
  theme?: ThemeEnum;
  /**
   * Button shape
   * @default 'rectangle'
   */
  shape?: 'rectangle' | 'square' | 'round' | 'circle';
  /**
   * Button with loading
   * @default false
   */
  loading?: boolean;
  /**
   * Button is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Button with outline
   * @default false
   */
  outline?: boolean;
  /**
   * Button's children node
   * @default -
   */
  children?: React.ReactNode;
  /**
   * Button's customize className
   * @default -
   */
  className?: string;
  /**
   * Button's onClick event
   * @default -
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface IButtonProps extends ButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {}
