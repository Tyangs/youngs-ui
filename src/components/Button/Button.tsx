import React from 'react';
import cls from 'classnames';
import { IButtonProps } from './type';
import './index.scss';

const Button = (props: IButtonProps) => {
	const {
		size = 'medium',
		type = 'default',
		shape = 'rectangle',
		outline,
		loading,
		disabled,
		children,
		className,
		onClick,
	} = props;

	const buttonCls = cls('youngs-button', {
		className,
		'youngs-button--outline': outline,
		'youngs-button--disabled': disabled,
		[`youngs-button--type-${type}`]: !!type && type !== 'default',
		[`youngs-button--size-${size}`]: !!size && size !== 'medium',
		[`youngs-button--shape-${shape}`]: !!shape && shape !== 'rectangle',
	});

	const buttonContainerCls = cls('youngs-button__container');

	return (
		<button className={buttonCls} onClick={onClick}>
			<div className={buttonContainerCls}>{children}</div>
		</button>
	);
};

export default Button;
