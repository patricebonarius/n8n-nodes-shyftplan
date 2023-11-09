import { INodeProperties } from 'n8n-workflow';
export const getApiV1EmploymentsIdYearlyBringShiftsGetAllFields: INodeProperties[] = [
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
				operation: ['getApiV1EmploymentsIdYearlyBringShifts'],
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
				operation: ['getApiV1EmploymentsIdYearlyBringShifts'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Start Year',
		name: 'start_year',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Start of year range',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsIdYearlyBringShifts'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'End Year',
		name: 'end_year',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'End of year range',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsIdYearlyBringShifts'],
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
				operation: ['getApiV1EmploymentsIdYearlyBringShifts'],
				resource: ['employments'],
			},
		},
		options: [],
	},
];
