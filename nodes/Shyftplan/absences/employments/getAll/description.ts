import { INodeProperties } from 'n8n-workflow';
export const getApiV1AbsencesEmploymentsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1AbsencesEmployments'],
				resource: ['absences'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Single Company ID',
			},
			{
				displayName: 'Page',
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
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Single Employment ID',
			},
			{
				displayName: 'IDs[]',
				name: 'idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Array of Employment ID',
			},
			{
				displayName: 'Company IDs[]',
				name: 'company_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Array of Company ID',
			},
			{
				displayName: 'With Deleted',
				name: 'with_deleted',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Include soft-deleted employments',
			},
			{
				displayName: 'Order Key',
				name: 'order_key',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Sort Employments',
			},
			{
				displayName: 'Order Dir',
				name: 'order_dir',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Sort Employments',
			},
		],
	},
];
