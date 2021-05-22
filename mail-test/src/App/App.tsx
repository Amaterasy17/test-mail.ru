import { Figure } from '@components/Figure/Figure';
import React from 'react';
import { PreviewDiv } from './styles';

const App: React.FC = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<PreviewDiv>
				<Figure
					src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"
					arWidth={3}
					arHeight={5}
				/>
			</PreviewDiv>
			<PreviewDiv>
				<Figure
					src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"
					arWidth={3}
					arHeight={4}
				/>
			</PreviewDiv>
			<PreviewDiv>
			<Figure
				src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"
				arWidth={15}
				arHeight={4}
			/>
		</PreviewDiv>
			<PreviewDiv>
				<Figure
					src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"
					arWidth={1}
					arHeight={2}
				/>
			</PreviewDiv>
		</div>
	);
};

export default App;
