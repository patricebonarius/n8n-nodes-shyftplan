import { INodeProperties } from 'n8n-workflow';
export const locationsCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['locations_create'],
				resource: ['locations'],
			},
		},
		placeholder: '',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['locations_create'],
				resource: ['locations'],
			},
		},
		placeholder: '',
		description: 'Name of the location',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['locations_create'],
				resource: ['locations'],
			},
		},
		options: [
			{
				displayName: 'Order',
				name: 'sort',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Used to order Locations in the UI',
			},
			{
				displayName: 'Location Metadata As Json',
				name: 'metadata',
				type: 'json',
				default: '',
				placeholder: '',
			},
		],
	},
];
