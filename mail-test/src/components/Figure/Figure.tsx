import React, { useEffect, useState } from 'react';
import { Loader } from './Loader/Loader';
import {
	Figcaption,
	FigureContainer,
	FigureDiv,
	Image,
	ImageContainer,
} from './styles';
import { Icon } from './Icon/Icon';

export type FigureProps = {
	children?: React.ReactNode,
	src: string,
	arWidth?: number,
	arHeight?: number,
};

type ChildrenProps = {
	children: React.ReactNodeArray,
};

export const Figure: React.FC<FigureProps> = ({
	children,
	src,
	arWidth = 9,
	arHeight = 16,
}: FigureProps) => {
	const [height, setHeight] = useState<number>(0);
	const [loading, setLoading] = React.useState<boolean>(true);
	const [error, setError] = React.useState<boolean>(false);

	const ComponentContainer = React.forwardRef<HTMLDivElement, ChildrenProps>(
		(props, ref) => (
			<FigureDiv ref={ref} height={height}>
				{props.children}
			</FigureDiv>
		)
	);
	const ref = React.createRef<HTMLDivElement>();

	const onLoading = (ev: React.SyntheticEvent<HTMLImageElement>) => {
		setLoading(false);
	};

	const onError = (ev: React.SyntheticEvent<HTMLImageElement>) => {
		setLoading(false);
		setError(true);
	};

	useEffect(() => {
		if (!ref.current) {
			return;
		}

		const width: number = ref.current.clientWidth;
		const height = (arHeight * width) / arWidth;

		if (height < ref.current.clientHeight) {
			setHeight(height);
		}
	}, []);

	return (
		<ComponentContainer ref={ref}>
			<FigureContainer>
				<ImageContainer arHeight={arHeight} arWidth={arWidth}>
					{loading && <Loader />}
					<Image
						isNone={loading || error}
						src={src}
						alt={'Загрузка'}
						onLoad={onLoading}
						onError={onError}
					/>
					{error && <Icon />}
				</ImageContainer>
			</FigureContainer>
			<Figcaption>{children}</Figcaption>
		</ComponentContainer>
	);
};
