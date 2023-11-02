import { INodeProperties } from 'n8n-workflow';
export const putApiV1AbsencesIdUpdateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['putApiV1AbsencesId'],
				resource: ['absences'],
			},
		},
		placeholder: '',
		description: 'Enter Absence ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['putApiV1AbsencesId'],
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
				displayName: 'Starts At',
				name: 'starts_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Start of Absence',
			},
			{
				displayName: 'Ends At',
				name: 'ends_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'End of Absence',
			},
			{
				displayName: 'Absence Reason_ID',
				name: 'absence_reason_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Absence Reason ID',
			},
			{
				displayName: 'Days',
				name: 'days',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Number of days from Absence',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'State of Absence',
			},
			{
				displayName: 'Refuse Message',
				name: 'refuse_message',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Message explaining why the absence is declined',
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
				displayName: 'paID',
				name: 'paid',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Defines if Absence is paid',
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
				displayName: 'Is Full_day',
				name: 'is_full_day',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Is the Absence for the full day(s)',
			},
		],
	},
];