import { INodeProperties } from 'n8n-workflow';
export const getApiV1AbsencesEmploymentsIdAbsenceInfoGetAllFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1AbsencesEmploymentsIdAbsenceInfo'],
				resource: ['absences'],
			},
		},
	},
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
				operation: ['getApiV1AbsencesEmploymentsIdAbsenceInfo'],
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
				operation: ['getApiV1AbsencesEmploymentsIdAbsenceInfo'],
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
				operation: ['getApiV1AbsencesEmploymentsIdAbsenceInfo'],
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
				displayName: 'Absence Days',
				name: 'absence_days',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Number of days of absence',
			},
			{
				displayName: 'Absence Reason_ID',
				name: 'absence_reason_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Absence Reason ID If not present, the first absence reason is taken',
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
