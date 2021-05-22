import styled from 'styled-components';
import { createUseStyles } from 'react-jss';

type propsStyle = {
	time: string,
};

export const LoaderDiv = styled.div`
	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const keyFrame = createUseStyles({
	'@keyframes lds-ring': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'100%': {
			transform: 'rotate(360deg)',
		},
	},
});

export const loaderStyles = createUseStyles({
	loaderRing: {
		display: 'inline-block',
		position: 'absolute',
		top: '45%',
		width: '60px',
		height: '60px',
	},
	loaderRingPart: {
		boxSizing: 'border-box',
		display: 'block',
		position: 'absolute',
		width: '56px',
		height: '56px',
		border: '6px solid #46dbd3',
		borderRadius: '50%',
		animation: `lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
		borderColor: '#cadae5 transparent transparent transparent',
	},
});

export const loaderPart = createUseStyles({
	loaderAnimationRing: {
		animationDelay: (props: propsStyle) => props.time,
	},
});
