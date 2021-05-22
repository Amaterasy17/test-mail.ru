import styled, { css } from 'styled-components';

type StyledImgProps = {
	isNone: boolean,
};

type StyledImage = {
	arWidth: number,
	arHeight: number,
};

type StyledDivProps = {
	height: number,
};

export const FigureDiv = styled.div`
	width: 100%;
	height: ${(props: StyledDivProps) => {
		if (props.height === 0) {
			return '100%';
		}
		return `${props.height}px`;
	}};
`;

export const FigureContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	box-sizing: border-box;
	height: 100%;
	overflow: hidden;
`;

export const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #1f2128;
	align-items: center;
	position: relative;
	width: 100%;
	height: 100%;
	padding-top: calc(
		${(props: StyledImage) => props.arHeight / props.arWidth} * 100%
	);
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	display: block;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	${({ isNone }: StyledImgProps) =>
		isNone &&
		css`
			display: none;
		`}
`;

export const Figcaption = styled.figcaption`
	font-family: -apple-system, 'Roboto', 'Oxygen', sans-serif;
	font-size: 2.5vh;
	margin-top: 3px;
	text-align: center;
`;
