import { INodeProperties } from 'n8n-workflow';
export const paygrade_typesGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['paygrade_types_getAll'],
				resource: ['paygrade_types'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter the company ID',
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				placeholder: '',
				description: 'Pages starts with 1',
			},
			{
				displayName: 'Per Page',
				name: 'per_page',
				type: 'number',
				default: 1000,
				placeholder: '',
				description: 'Between 1 and 1000',
			},
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
		],
	},
];
