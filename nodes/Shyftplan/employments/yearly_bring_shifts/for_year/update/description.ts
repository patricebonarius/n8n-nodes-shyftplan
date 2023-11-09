import { INodeProperties } from 'n8n-workflow';
export const putApiV1EmploymentsIdYearlyBringShiftsForYearUpdateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdYearlyBringShiftsForYear'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdYearlyBringShiftsForYear'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Year',
		name: 'year',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Year to update',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdYearlyBringShiftsForYear'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Hours',
		name: 'hours',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Hours of the Yearly Bring Shift',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdYearlyBringShiftsForYear'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['putApiV1EmploymentsIdYearlyBringShiftsForYear'],
				resource: ['employments'],
			},
		},
		options: [],
	},
];
