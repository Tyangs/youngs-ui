import { Button } from 'youngs-ui';
import './index.scss';

const ButtonPage = () => {
	return (
		<div>
			<div className="line">
				<h3>Type: </h3>
				<Button>默认按钮</Button>
				<Button type="primary">主要按钮</Button>
				<Button type="success">成功按钮</Button>
				<Button type="warning">信息按钮</Button>
				<Button type="danger">警告按钮</Button>
				<Button type="info">信息按钮</Button>
			</div>
			<div className="line">
				<h3>Outline: </h3>
				<Button outline>默认按钮</Button>
				<Button type="primary" outline>
					主要按钮
				</Button>
				<Button type="success" outline>
					成功按钮
				</Button>
				<Button type="warning" outline>
					信息按钮
				</Button>
				<Button type="danger" outline>
					警告按钮
				</Button>
				<Button type="info" outline>
					信息按钮
				</Button>
			</div>
			<div className="line">
				<h3>Disabled: </h3>
				<Button disabled>默认按钮</Button>
				<Button type="primary" disabled>
					主要按钮
				</Button>
				<Button type="success" disabled>
					成功按钮
				</Button>
				<Button type="warning" disabled>
					信息按钮
				</Button>
				<Button type="danger" disabled>
					警告按钮
				</Button>
				<Button type="info" disabled>
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
