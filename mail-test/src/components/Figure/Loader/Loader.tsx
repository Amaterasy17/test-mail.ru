import { loaderPart, loaderStyles } from './styles';
import { LoaderDiv } from './styles';

export const Loader = () => {
	const loader = loaderStyles();

	let delay: number = 0.45;

	const loaderAnimations = [];
	for (let i = 0; i < 3; ++i) {
		loaderAnimations[i] = loaderPart({
			time: `-${delay}s`,
		});
		delay -= 0.15;
	}

	return (
		<div className={loader.loaderRing}>
			<LoaderDiv
				className={
					loader.loaderRingPart +
					' ' +
					loaderAnimations[0].loaderAnimationRing
				}
			/>
			<LoaderDiv
				className={
					loader.loaderRingPart +
					' ' +
					loaderAnimations[1].loaderAnimationRing
				}
			/>
			<LoaderDiv
				className={
					loader.loaderRingPart +
					' ' +
					loaderAnimations[2].loaderAnimationRing
				}
			/>
			<LoaderDiv />
		</div>
	);
};
