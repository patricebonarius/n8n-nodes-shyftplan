import { INodeProperties } from 'n8n-workflow';
export const getApiV1UsersGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1Users'],
				resource: ['users'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Company ID',
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Pages starts with 1',
			},
			{
				displayName: 'Per Page',
				name: 'per_page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Between 1 and 1000',
			},
		],
	},
];
