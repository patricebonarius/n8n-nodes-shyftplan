import { INodeProperties } from 'n8n-workflow';
export const locationsbyidDeleteFields: INodeProperties[] = [
	{
		displayName: 'Location ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['locationsById_delete'],
				resource: ['locations'],
			},
		},
		placeholder: '',
		description: 'Enter the Location ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['locationsById_delete'],
				resource: ['locations'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '11231',
				description: 'Enter the company Number',
			},
		],
	},
];
