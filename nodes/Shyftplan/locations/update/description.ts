import { INodeProperties } from 'n8n-workflow';
export const locationsbyidUpdateFields: INodeProperties[] = [
	{
		displayName: 'Location ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['locationsById_update'],
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
				operation: ['locationsById_update'],
				resource: ['locations'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '12345',
				description: 'Enter the company ID',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter the locations name',
			},
			{
				displayName: 'Used To Order Locations',
				name: 'sort',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Used to order Locations in the UI',
			},
			{
				displayName: 'Location Metadata',
				name: 'metadata',
				type: 'json',
				default: '',
				placeholder: '',
				description: 'Metadata provided as Object',
			},
		],
	},
];
