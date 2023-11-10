import { INodeProperties } from 'n8n-workflow';
export const putApiV1PunchTimingsIdUpdateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter PunchTiming ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1PunchTimingsId'],
				resource: ['punch_timings'],
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
				operation: ['putApiV1PunchTimingsId'],
				resource: ['punch_timings'],
			},
		},
		options: [
			{
				displayName: 'Encrypted Company_ID',
				name: 'encrypted_company_id',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter You get encrypted company_ID when you start a punch time',
			},
			{
				displayName: 'Punch Timing[additional_break_time]',
				name: 'punch_timingSTARTadditional_break_timeEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Break time in minutes',
			},
			{
				displayName: 'Punch Timing[end_time]',
				name: 'punch_timingSTARTend_timeEND',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter End of the updated punchtime',
			},
		],
	},
];
