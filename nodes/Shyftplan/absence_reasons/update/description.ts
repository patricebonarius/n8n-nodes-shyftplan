import { INodeProperties } from 'n8n-workflow';
export const putApiV1AbsenceReasonsIdUpdateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Absence Reason ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1AbsenceReasonsId'],
				resource: ['absence_reasons'],
			},
		},
	},
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'ID of a Company',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1AbsenceReasonsId'],
				resource: ['absence_reasons'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Name of the Absence Reason',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1AbsenceReasonsId'],
				resource: ['absence_reasons'],
			},
		},
	},
	{
		displayName: 'Days',
		name: 'days',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'No of Days of the Absence Reason',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1AbsenceReasonsId'],
				resource: ['absence_reasons'],
			},
		},
	},
	{
		displayName: 'Calculation Type',
		name: 'calculation_type',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Absence days calculation type',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1AbsenceReasonsId'],
				resource: ['absence_reasons'],
			},
		},
	},
	{
		displayName: 'Hours Calculation_type',
		name: 'hours_calculation_type',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Absence hours calculation type',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1AbsenceReasonsId'],
				resource: ['absence_reasons'],
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
				operation: ['putApiV1AbsenceReasonsId'],
				resource: ['absence_reasons'],
			},
		},
		options: [
			{
				displayName: 'Short Name',
				name: 'short_name',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Short name of the Absence Reason',
			},
			{
				displayName: 'Carry Over_days_enabled',
				name: 'carry_over_days_enabled',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Can Carry leftover absence days to the next year?',
			},
			{
				displayName: 'Carry Over_days_deadline',
				name: 'carry_over_days_deadline',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Expiration date of carry over absence days',
			},
			{
				displayName: 'Is Absence_attachments_allowed',
				name: 'is_absence_attachments_allowed',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Allow Attachments?',
			},
		],
	},
];
