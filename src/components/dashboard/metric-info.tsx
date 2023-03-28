import { bmrCalculationValuesAtom } from '../../pages/bmr';
import { useAtom } from 'jotai';

function BannerMetricInfo() {
	const [bmrData] = useAtom(bmrCalculationValuesAtom);

	return (
		<div
			className="bg-red-100 border border-red-400 text-red-700 mt-2 p-2 mb-2 rounded relative text-center m-5"
			role="alert">
			<strong className="font-bold">Measuring: </strong>
			<span className="block sm:inline">
				You are using <strong className="font-bold">{bmrData.metric} </strong>
				system
			</span>
		</div>
	);
}

export default BannerMetricInfo;
