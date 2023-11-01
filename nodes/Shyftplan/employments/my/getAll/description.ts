import { INodeProperties } from 'n8n-workflow';
export const getApiV1EmploymentsMyGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsMy'],
				resource: ['employments'],
			},
		},
		options: [
			{
				displayName: 'page',
				name: 'page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Pages starts with 1',
			},
			{
				displayName: 'Per Page',
				name: 'per_page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Between 1 and 1000',
			},
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Filter for single Company ID',
			},
			{
				displayName: 'Company IDs[]',
				name: 'company_ids[]',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Filter an array of Company ID',
			},
		],
	},
];
