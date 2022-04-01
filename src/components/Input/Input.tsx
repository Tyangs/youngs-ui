import React from 'react';

import { IInputProps } from './type';
import './index.scss';

export const Input = (props: IInputProps) => {
	const { text } = props;

	return <input className="soft-ui-input" value={text} />;
};
