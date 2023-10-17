import { INodeProperties } from 'n8n-workflow';
export const locationsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Filter For Single Location ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',

		displayOptions: {
			show: {
				operation: ['locations_getAll'],
				resource: ['locations'],
			},
		},
		description: 'Filter for an ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['locations_getAll'],
				resource: ['locations'],
			},
		},
		options: [
			{
				displayName: 'Updated After',
				name: 'updated_after',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Return all records which are updated after',
			},
			{
				displayName: 'Created After',
				name: 'created_after',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Return all records which are created after',
			},
			{
				displayName: 'Updated Before',
				name: 'updated_before',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Return all records which are updated before',
			},
			{
				displayName: 'Created Before',
				name: 'created_before',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Return all records which are created before',
			},

			{
				displayName: 'Filter An Array Of Location ID',
				name: 'ids[]',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Put in seperated by comma',
			},

			{
				displayName: 'Filter An Array Of Company ID',
				name: 'company_ids[]',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Takes an array',
			},
		],
	},
];
