import { INodeProperties } from 'n8n-workflow';
export const getApiV1EmploymentsIdUiSettingsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Filter for single Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsIdUiSettings'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsIdUiSettings'],
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
				operation: ['getApiV1EmploymentsIdUiSettings'],
				resource: ['employments'],
			},
		},
		options: [],
	},
];
