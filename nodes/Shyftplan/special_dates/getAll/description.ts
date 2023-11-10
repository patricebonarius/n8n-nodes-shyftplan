import { INodeProperties } from 'n8n-workflow';
export const getApiV1SpecialDatesGetAllFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1SpecialDates'],
				resource: ['special_dates'],
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
				operation: ['getApiV1SpecialDates'],
				resource: ['special_dates'],
			},
		},
		options: [
			{
				displayName: 'Starts At',
				name: 'starts_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Start date to filter for special dates',
			},
			{
				displayName: 'Ends At',
				name: 'ends_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter End date to filter for special dates',
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
				description: 'Enter Location IDs',
			},
		],
	},
];
