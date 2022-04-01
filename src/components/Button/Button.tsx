import React from 'react';
import './index.scss';
import { IButtonProps } from './type';

export const Button = (props: IButtonProps) => {
	const { children } = props;

	return (
		<button
			className="soft-ui-button"
			onClick={() => {
				alert('click me');
			}}
		>
			{children}
		</button>
	);
};
