import { INodeProperties } from 'n8n-workflow';
export const postApiV1EmploymentsIdUiSettingsCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1EmploymentsIdUiSettings'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Setting',
		name: 'setting',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'Setting JSON',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1EmploymentsIdUiSettings'],
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
				operation: ['postApiV1EmploymentsIdUiSettings'],
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
				operation: ['postApiV1EmploymentsIdUiSettings'],
				resource: ['employments'],
			},
		},
		options: [],
	},
];
