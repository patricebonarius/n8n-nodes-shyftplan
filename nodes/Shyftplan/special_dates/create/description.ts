import { INodeProperties } from 'n8n-workflow';
export const postApiV1SpecialDatesCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of a Company',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1SpecialDates'],
				resource: ['special_dates'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Name of the Special Date',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1SpecialDates'],
				resource: ['special_dates'],
			},
		},
	},
	{
		displayName: 'Special Date',
		name: 'special_date',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Special Date',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1SpecialDates'],
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
				operation: ['postApiV1SpecialDates'],
				resource: ['special_dates'],
			},
		},
		options: [
			{
				displayName: 'Full Day',
				name: 'full_day',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Full Day?',
			},
			{
				displayName: 'Start Time',
				name: 'start_time',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Start Time of Special Date',
			},
			{
				displayName: 'End Time',
				name: 'end_time',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter End Time of Special Date',
			},
			{
				displayName: 'All Locations',
				name: 'all_locations',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether All locations?',
			},
			{
				displayName: 'Is Included_in_hour_account',
				name: 'is_included_in_hour_account',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Working hours adjustment?',
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
				description: 'Enter Filter for an array Location ID',
			},
		],
	},
];
