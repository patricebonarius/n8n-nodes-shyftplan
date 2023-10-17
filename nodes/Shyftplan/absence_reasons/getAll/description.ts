import { INodeProperties } from 'n8n-workflow';
export const absence_reasonsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['absence_reasons_getAll'],
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
