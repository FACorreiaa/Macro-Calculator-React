import { CARBS, FATS, GRAMS, PROTEIN } from '../../helper/data';

type CustomMacroCardType = {
	title: string;
	protein: number;
	fats: number;
	carbs: number;
};
function CustomMacroCard({ title, protein, fats, carbs }: CustomMacroCardType) {
	return (
		<div className="w-64 shadow-sm justify-center  shadow-slate-800 mb-5 bg-white p-6 border border-spacing-2 rounded">
			<h1 className="text-xl font-bold mb-2">{title}</h1>

			<p className="text-sm">
				<label className="font-bold">{PROTEIN}: </label>
				<span>
					{protein} {GRAMS}
				</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">{FATS}: </label>
				<span>
					{fats} {GRAMS}
				</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">{CARBS}: </label>
				<span>
					{carbs} {GRAMS}
				</span>
			</p>
		</div>
	);
}

export default CustomMacroCard;
