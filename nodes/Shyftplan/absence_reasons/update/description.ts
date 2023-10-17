import { INodeProperties } from 'n8n-workflow';
export const absence_reasonsbyidUpdateFields: INodeProperties[] = [
	{
		displayName: 'Absence Reason ID.',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasonsById_update'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'Absence Reason ID',
	},
	{
		displayName: 'ID of a Company.',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasonsById_update'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'ID of a Company',
	},
	{
		displayName: 'Name of the Absence Reason.',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasonsById_update'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'Name of the Absence Reason',
	},
	{
		displayName: 'No of Days of the Absence Reason.',
		name: 'days',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasonsById_update'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'No of Days of the Absence Reason',
	},
	{
		displayName: 'Days Calculation Type',
		name: 'calculation_type',
		type: 'string',
		required: true,
		default: 'standart',
		displayOptions: {
			show: {
				operation: ['absence_reasonsById_update'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'Absence days calculation type',
	},
	{
		displayName: 'Hours Calculation Type',
		name: 'hours_calculation_type',
		type: 'string',
		required: true,
		default: 'employee_profile',
		displayOptions: {
			show: {
				operation: ['absence_reasonsById_update'],
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
				operation: ['absence_reasonsById_update'],
				resource: ['absence_reasons'],
			},
		},
		options: [
			{
				displayName: 'Short Name of the Absence Reason',
				name: 'short_name',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter a short name',
			},
			{
				displayName: 'Leftover Absence Days To The Next Year',
				name: 'carry_over_days_enabled',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Carry leftover absence days to the next year',
			},
			{
				displayName: 'Expiration Date Absence Days',
				name: 'carry_over_days_deadline',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Expiration date of carry over absence days',
			},
			{
				displayName: 'Allow Attachments?',
				name: 'is_absence_attachments_allowed',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Allow Attachments?',
			},
		],
	},
];
