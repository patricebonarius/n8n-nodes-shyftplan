import { INodeProperties } from 'n8n-workflow';
export const absence_reasonsGetFields: INodeProperties[] = [
	{
		displayName: 'E-Mail of User',
		name: 'user_email',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasons_get'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'E-Mail of a User',
	},
	{
		displayName: 'Authentication Token',
		name: 'authentication_token',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasons_get'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'Authentication Token - can be fetched by login action',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['absence_reasons_get'],
				resource: ['absence_reasons'],
			},
		},
		options: [
			{
				displayName: 'Pages',
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
				displayName: 'Array of Company ID',
				name: 'company_ids[]',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Filter for an array of Company ID',
			},
		],
	},
];
