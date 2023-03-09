import CustomButtom from '../components/button';
import CustomTdeeForm from '../components/forms/form';
import CustomFormTitle from '../components/forms/form-title';
import CustomInput from '../components/input';
import CustomSelect from '../components/select';
import { measureValues } from '../data/tdee';
import useZodForm from '../hooks/useZodForm';
import Pagelayout from '../layout/layout';
import { TdeeProperties, tdeeSchema } from '../types/tdeeSchema';

function TdeePage() {
	const { handleSubmit, register, formState } = useZodForm({
		schema: tdeeSchema,
		defaultValues: {
			age: '',
			height: '',
			weight: '',
			metric: '',
			gender: '',
			activity: '',
			objective: '',
		},
	});

	function onSumitRegisterValues(values: TdeeProperties) {
		// return await mutation.mutate(values, {
		// 	onSuccess: async () => router.push('http://localhost:5005/login/signin'),
		// 	onError: async (error) => {
		// 		console.log(error);
		// 	},
		// });
		console.log('values', values);
		return 0;
	}

	return (
		<Pagelayout>
			<div className="w-full max-w-xs ">
				<CustomTdeeForm onFormSubmit={handleSubmit(onSumitRegisterValues)}>
					<CustomFormTitle title="Calculate your TDEE" />
					<CustomSelect
						label="Select your metric"
						id="metrics"
						options={measureValues}
						selected
						methods={register('metric')}
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
				</CustomTdeeForm>
			</div>
		</Pagelayout>
	);
}

export default TdeePage;
