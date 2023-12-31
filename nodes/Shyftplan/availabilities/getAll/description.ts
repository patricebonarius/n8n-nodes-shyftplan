import { INodeProperties } from 'n8n-workflow';
export const getApiV1AvailabilitiesGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1Availabilities'],
				resource: ['availabilities'],
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
				description: 'Filter for single Availability ID',
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
				description: 'Filter an array of Availability ID',
			},
			{
				displayName: 'Employment ID',
				name: 'employment_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Filter for single Employment ID',
			},
			{
				displayName: 'Employment IDs[]',
				name: 'employment_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Filter an array of Employment ID',
			},
			{
				displayName: 'Starts At',
				name: 'starts_at',
				type: 'string',
				default: '',
				placeholder: '',
				description:
					'Return all availabilities which can be applied to the timeframe NOTICE: starts_at AND ends_at needs to be set',
			},
			{
				displayName: 'Ends At',
				name: 'ends_at',
				type: 'string',
				default: '',
				placeholder: '',
				description:
					'Return all availabilities which can be applied to the timeframe NOTICE: starts_at AND ends_at needs to be set',
			},
		],
	},
];
