export interface IButtonProps {
	/**
	 * Button size
	 * @default 'medium'
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * Button type
	 * @default 'default'
	 */
	type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
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
