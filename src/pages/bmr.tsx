import { useState } from 'react';
import CustomButtom from '../components/button';
import CustomBmrForm from '../components/forms/form';
import HeadComponent from '../components/head';
import CustomInput from '../components/input';
import CustomSelect from '../components/select';
import CustomTabsComponent from '../components/tabs';
import { calculateBMR } from '../helper/bmr';
import { measureValues, genderValues } from '../helper/data';
import useZodForm from '../hooks/useZodForm';
import Pagelayout from '../layout/layout';
import { BmrInput, tdeeSchema } from '../types/tdeeSchema';
import { useNavigate } from 'react-router-dom';
function BmrPage() {
	const { handleSubmit, register, formState, setValue } = useZodForm({
		schema: tdeeSchema,
		defaultValues: {
			age: '',
			height: '',
			weight: '',
			metric: 'Metric',
			gender: '',
		},
		mode: 'onChange',
		reValidateMode: 'onChange',
	});
	const [bmr, setBmr] = useState<number>();
	const [activeTab, setActiveTab] = useState('Metric');
	const navigate = useNavigate();

	const handleTabClick = (e: any) => {
		const tab = e.target.value;
		console.log('tab', tab);
		setActiveTab(tab);
		setValue('metric', tab);
	};

	function onSubmitBmrValuesPage(values: BmrInput) {
		// return await mutation.mutate(values, {
		// 	onSuccess: async () => router.push('http://localhost:5005/login/signin'),
		// 	onError: async (error) => {
		// 		console.log(error);
		// 	},
		// });
		const bmr = calculateBMR(values as BmrInput);
		navigate('/goals', {
			state: { bmr },
		});
		setBmr(bmr);
		console.log('values', values);
		console.log('bmr', bmr);
		return 0;
	}

	const genderOptions = Object.entries(genderValues).map(([label, value]) => ({
		label,
		value,
	}));

	return (
		<Pagelayout>
			<HeadComponent
				title="Tdee Calculator"
				name="Tdee Calculator"
				content="Calculate your basic calories"
			/>
			<div className="w-full max-w-xs ">
				<CustomBmrForm onFormSubmit={handleSubmit(onSubmitBmrValuesPage)}>
					<CustomTabsComponent
						options={measureValues}
						activeTab={activeTab}
						onClick={handleTabClick}
					/>
					{/* <CustomFormTitle title="Calculate your bmr" /> */}

					{/* <CustomSelect
						label="Select your metric"
						id="metrics"
						options={measureValues}
						selected
						methods={register('metric')}
					/> */}

					<CustomSelect
						label="Gender"
						id="gender"
						options={genderOptions}
						selected
						methods={register('gender')}
						placeholder="Select gender"
					/>

					<CustomInput
						label="Age"
						id="age"
						type="number"
						placeholder="Insert your age"
						methods={register('age')}
						errorMessage={formState.errors.age?.message}
					/>
					<CustomInput
						label="Weight"
						id="weight"
						type="number"
						placeholder="Insert your weight"
						methods={register('weight')}
						errorMessage={formState.errors.weight?.message}
					/>
					<CustomInput
						label="Height"
						id="height"
						type="number"
						placeholder="Insert your height"
						methods={register('height')}
						errorMessage={formState.errors.age?.message}
					/>

					{/* <CustomRadioList
						title="Select your daily activity:"
						options={workoutVolume}
						name="activity"
						methods={register('activity')}
					/> */}

					<div className="flex justify-center">
						<CustomButtom type="submit" label="Next" />
					</div>
				</CustomBmrForm>
			</div>
		</Pagelayout>
	);
}

export default BmrPage;
