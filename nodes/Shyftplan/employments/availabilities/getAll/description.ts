import { INodeProperties } from 'n8n-workflow';
export const getApiV1EmploymentsIdAvailabilitiesGetAllFields: INodeProperties[] = [
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Start Date to get availabilities from',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsIdAvailabilities'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'End Date to get availabilities from',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsIdAvailabilities'],
				resource: ['employments'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1EmploymentsIdAvailabilities'],
				resource: ['employments'],
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
				operation: ['getApiV1EmploymentsIdAvailabilities'],
				resource: ['employments'],
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
				displayName: 'Availability IDs[]',
				name: 'availability_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Availabilities IDs to filter for',
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Page to fetch for pagination',
			},
			{
				displayName: 'Per Page',
				name: 'per_page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Per Page items for pagination',
			},
		],
	},
];
