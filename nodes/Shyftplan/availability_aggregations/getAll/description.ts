import { INodeProperties } from 'n8n-workflow';
export const getApiV1AvailabilityAggregationsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1AvailabilityAggregations'],
				resource: ['availability_aggregations'],
			},
		},
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description:
			'Start of time frame in ISO 8601 format with time and UTC offset (time is nullified)',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1AvailabilityAggregations'],
				resource: ['availability_aggregations'],
			},
		},
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		default: '',
		placeholder: '',
		description:
			'End of time frame in ISO 8601 format with time and UTC offset (time is nullified)',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1AvailabilityAggregations'],
				resource: ['availability_aggregations'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1AvailabilityAggregations'],
				resource: ['availability_aggregations'],
			},
		},
		options: [
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
				displayName: 'Location IDs[]',
				name: 'location_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Array of Location ID',
			},
			{
				displayName: 'Position IDs[]',
				name: 'position_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Array of Position ID',
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
				description: 'Array of Employment ID',
			},
			{
				displayName: 'Order Key',
				name: 'order_key',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Sort keys',
			},
			{
				displayName: 'Order Dir',
				name: 'order_dir',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Sort direction',
			},
		],
	},
];
