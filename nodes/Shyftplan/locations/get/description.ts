import { INodeProperties } from 'n8n-workflow';
export const locationsbyidGetFields: INodeProperties[] = [
	{
		displayName: 'Location ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['locationsById_get'],
				resource: ['locations'],
			},
		},
		placeholder: '',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['locationsById_get'],
				resource: ['locations'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '11234',
			},
		],
	},
];
