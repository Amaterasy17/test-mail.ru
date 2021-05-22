import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Figure } from './Figure';
import styled from 'styled-components';

configure({ adapter: new Adapter() });

type testProps = {
	width: number,
	height: number,
};

const TestDiv = styled.div`
	width: ${(props: testProps) => `${props.width}px`};
	height: ${(props: testProps) => `${props.height}px`};
`;

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useLayoutEffect: jest.requireActual('react').useEffect,
}));

const photoSrc =
	'https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006';

describe('Tests of Figure component', () => {
	afterAll(() => {
		jest.resetModules();
	});

	test.each([
		[300, 500, 5, 3, photoSrc],
		[300, 500, 2, 1, photoSrc],
		[300, 500, 5, 1, photoSrc],
		[300, 100, 16, 9, photoSrc],
		[300, 500, 4, 3, photoSrc],
		[300, 500, 15, 5, photoSrc],
	])(
		'tests of resizing pictures',
		(
			width: number,
			height: number,
			arHeight: number,
			arWidth: number,
			src: string
		) => {
			const figure = render(
				<TestDiv width={width} height={height}>
					<Figure src={src} arWidth={arWidth} arHeight={arHeight} />
				</TestDiv>
			);
			expect(figure).toMatchSnapshot();
		}
	);
	it('test with not valid src of photo', () => {
		const figure = render(
			<TestDiv width={300} height={500}>
				<Figure src="fakePicture" arWidth={9} arHeight={16} />
			</TestDiv>
		);
		expect(figure).toMatchSnapshot();
	});

	it('default width and height with figcaption', () => {
		const figure = render(
			<TestDiv width={300} height={300}>
				<Figure src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006">
					Автор:{' '}
					<a href="https://www.pexels.com/@simonmigaj">Simon Migaj</a>
				</Figure>
			</TestDiv>
		);
		expect(figure).toMatchSnapshot();
	});
});
