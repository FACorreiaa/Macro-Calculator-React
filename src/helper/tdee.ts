//file to aux on the tdee calculation

interface ICalculateTDEEProps {
	getBMR: () => number;
	activityValue: number;
}
export const calculateTDEE = ({
	getBMR,
	activityValue,
}: ICalculateTDEEProps): number => {
	return 0;
};

// const calculateBMR(UserData UserData, gender string) float64 {
// 	var ageFactor float64
// 	if gender == "male" {
// 		ageFactor = maleAgeFactor
// 	} else {
// 		ageFactor = femaleAgeFactor
// 	}

// 	if UserData.Metric == "metric" {
// 		return (10*UserData.Weight + 6.25*UserData.Height - 5.0*(UserData.Age)) + ageFactor
// 	} else {
// 		return (4.536*UserData.Weight + 15.88*UserData.Height - 5.0*(UserData.Age)) + ageFactor
// 	}
// }

// func GetCorrectUnitSystem(metric string) Units {
// 	unit := Units{}
// 	switch metric {
// 	case "metric":
// 		unit.Height = MetricHeight
// 		unit.Weight = MetricWeight
// 	case "imperial":
// 		unit.Height = ImperialHeight
// 		unit.Weight = ImperialWeight
// 	default:
// 		return unit
// 	}
// 	return unit
// }

// func getActivityValues(label string) float64 {
// 	mapActivity := make(map[string]float64)
// 	mapActivity[constants.Sedentary_Activity] = sedentaryActivityValue
// 	mapActivity[constants.Light_Activity] = lightActivityValue
// 	mapActivity[constants.Moderate_Activity] = moderateActivityValue
// 	mapActivity[constants.Heavy_Activity] = veryActiveActivityValue
// 	mapActivity[constants.Extra_Heavy_Activity] = extraActiveActivityValue
// 	return float64(mapActivity[label])
// }
