import { KCALS } from '../../helper/data';
import { dietObjectiveAtom, objectiveAtom } from '../../pages/tdee';
import { useAtom } from 'jotai';

export const DisplayCalorieObjective = () => {
	const [dietObjective] = useAtom(dietObjectiveAtom);
	const [objective] = useAtom(objectiveAtom);

	return (
		<div className="bg-slate-100 border border-slate-400  p-2  rounded relative text-center m-5">
			<div
				className=" m-5 justify-center text-center p-2 items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 border border-blue-200 border-spacing-2 rounded"
				role="alert">
				<p className="text-sm">
					<label className="font-bold">Calories target:&nbsp; </label>
					<span>
						For {objective} you should consume{' '}
						<span className="underline font-bold text-lg">
							{dietObjective} {KCALS}
						</span>{' '}
						per day or&nbsp;
					</span>
					<span>
						<span className="underline font-bold text-lg">
							{dietObjective * 7} {KCALS}
						</span>{' '}
						per week
					</span>
				</p>
			</div>
		</div>
	);
};

export default DisplayCalorieObjective;
