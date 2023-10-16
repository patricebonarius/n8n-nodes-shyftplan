import { INodeProperties } from 'n8n-workflow';
export const absence_reasonsCreateFields: INodeProperties[] = [
	{
		displayName: 'User Mail',
		name: 'user_email',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasons_post'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'E-Mail of user',
	},
	{
		displayName: 'Authentication Token',
		name: 'authentication_token',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasons_post'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'Authentication Token - can be fetched by login action',
	},
	{
		displayName: 'ID of a Company.',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasons_post'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'ID of a Company',
	},
	{
		displayName: 'Name of the Absence Reason',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasons_post'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'Name of the Reason',
	},
	{
		displayName: 'No of Days of the Absence Reason',
		name: 'days',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasons_post'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
	},
	{
		displayName: 'Calculation Type',
		name: 'calculation_type',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasons_post'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'Absence days calculation type',
	},
	{
		displayName: 'Hours Calc Type',
		name: 'hours_calculation_type',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasons_post'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'Absence hours calculation type',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['absence_reasons_post'],
				resource: ['absence_reasons'],
			},
		},
		options: [
			{
				displayName: 'Short Name Reason',
				name: 'short_name',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Short name of the Absence Reason',
			},
			{
				displayName: 'Carry Over To Next Year',
				name: 'carry_over_days_enabled',
				type: 'boolean',
				default: false,
				description: 'Whether one take left over absence days to the next year',
			},
			{
				displayName: 'Expiration Date Of Carry Over.',
				name: 'carry_over_days_deadline',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Expiration date of carry over absence days',
			},
			{
				displayName: 'Allow Attachments',
				name: 'is_absence_attachments_allowed',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether one is allowed to upload stuff',
			},
		],
	},
];
