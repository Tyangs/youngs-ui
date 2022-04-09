import React from 'react';
import { Button } from 'youngs-ui';
import './index.scss';

const ButtonPage = () => {
	return (
		<div>
			<div className="line">
				<h3>Type: </h3>
				<Button>默认按钮</Button>
				<Button theme="primary">主要按钮</Button>
				<Button theme="success">成功按钮</Button>
				<Button theme="warning">信息按钮</Button>
				<Button theme="danger">警告按钮</Button>
				<Button theme="info">信息按钮</Button>
			</div>
			<div className="line">
				<h3>Outline: </h3>
				<Button outline>默认按钮</Button>
				<Button theme="primary" outline>
					主要按钮
				</Button>
				<Button theme="success" outline>
					成功按钮
				</Button>
				<Button theme="warning" outline>
					信息按钮
				</Button>
				<Button theme="danger" outline>
					警告按钮
				</Button>
				<Button theme="info" outline>
					信息按钮
				</Button>
			</div>
			<div className="line">
				<h3>Disabled: </h3>
				<Button disabled>默认按钮</Button>
				<Button theme="primary" disabled>
					主要按钮
				</Button>
				<Button theme="success" disabled>
					成功按钮
				</Button>
				<Button theme="warning" disabled>
					信息按钮
				</Button>
				<Button theme="danger" disabled>
					警告按钮
				</Button>
				<Button theme="info" disabled>
					信息按钮
				</Button>
			</div>
			<div className="line">
				<h3>Size: </h3>
				<Button size="large">大型按钮</Button>
				<Button>中等按钮</Button>
				<Button size="small">小型按钮</Button>
			</div>
			<div className="line">
				<h3>Shape: </h3>
				<Button>长型按钮</Button>
				<Button shape="round">半圆按钮</Button>
			</div>
		</div>
	);
};

export default ButtonPage;
