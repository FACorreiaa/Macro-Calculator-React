import { CARBS, FATS, PROTEIN } from '../../helper/data';

type CustomMacroCardType = {
	title: string;
	protein: number;
	fats: number;
	carbs: number;
};
function CustomMacroCard({ title, protein, fats, carbs }: CustomMacroCardType) {
	return (
		<div className="w-64 shadow-sm justify-center  shadow-slate-800  bg-white p-6 border border-spacing-2 rounded">
			<h1 className="text-xl font-bold mb-2">{title}</h1>

			<p className="text-sm">
				<label className="font-bold">{PROTEIN}: </label>
				<span>{protein}</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">{FATS}: </label>
				<span>{fats}</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">{CARBS}: </label>
				<span>{carbs}</span>
			</p>
		</div>
	);
}

export default CustomMacroCard;
