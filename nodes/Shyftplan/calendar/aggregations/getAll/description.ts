import { INodeProperties } from 'n8n-workflow';
export const getApiV1CalendarAggregationsGetAllFields: INodeProperties[] = [
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
				operation: ['getApiV1CalendarAggregations'],
				resource: ['calendar'],
			},
		},
	},
	{
		displayName: 'Start Date',
		name: 'start_date',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Start date for aggregation',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1CalendarAggregations'],
				resource: ['calendar'],
			},
		},
	},
	{
		displayName: 'End Date',
		name: 'end_date',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'End date for aggregation',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1CalendarAggregations'],
				resource: ['calendar'],
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
				operation: ['getApiV1CalendarAggregations'],
				resource: ['calendar'],
			},
		},
		options: [
			{
				displayName: 'Locations Position_IDs[]',
				name: 'locations_position_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Array of LocationsPosition ID',
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
				displayName: 'Shift Rotation_group_IDs[]',
				name: 'shift_rotation_group_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Array of ShiftRotationGroup ID',
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
				displayName: 'Shiftplan IDs[]',
				name: 'shiftplan_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Array of Shiftplan ID',
			},
		],
	},
];
