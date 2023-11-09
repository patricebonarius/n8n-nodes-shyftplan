import { INodeProperties } from 'n8n-workflow';
export const postApiV1AbsencesCreateFields: INodeProperties[] = [
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Start of Absence',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Absences'],
				resource: ['absences'],
			},
		},
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'End of Absence',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Absences'],
				resource: ['absences'],
			},
		},
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Absences'],
				resource: ['absences'],
			},
		},
	},
	{
		displayName: 'Absence Reason_ID',
		name: 'absence_reason_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Absence Reason ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Absences'],
				resource: ['absences'],
			},
		},
	},
	{
		displayName: 'Days',
		name: 'days',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Number of days from Absence',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Absences'],
				resource: ['absences'],
			},
		},
	},
	{
		displayName: 'PaID',
		name: 'paid',
		type: 'boolean',
		default: false,
		placeholder: '',
		description: 'Whether Defines if Absence is paid',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Absences'],
				resource: ['absences'],
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
				operation: ['postApiV1Absences'],
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
				description: 'Enter Company ID',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Initial State of Absence',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Note of Absence',
			},
			{
				displayName: 'Is Full_day',
				name: 'is_full_day',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Is the Absence for the full day(s)',
			},
			{
				displayName: 'Force Collision',
				name: 'force_collision',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Create absences even when conflicts exists when set to true',
			},
			{
				displayName: 'Force Collision_and_remove',
				name: 'force_collision_and_remove',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Remove staff from conflicting Shifts',
			},
			{
				displayName: 'File',
				name: 'file',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Attachment file (<= 5MB)',
			},
		],
	},
];
