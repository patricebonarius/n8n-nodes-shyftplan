import { INodeProperties } from 'n8n-workflow';
export const putApiV1PunchTimingsPunchTimingIdPunchBreaksIdUpdateFields: INodeProperties[] = [
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
				operation: ['putApiV1PunchTimingsPunchTimingIdPunchBreaksId'],
				resource: ['punch_timings'],
			},
		},
	},
	{
		displayName: 'Punch Timing_ID',
		name: 'punch_timing_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1PunchTimingsPunchTimingIdPunchBreaksId'],
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
				operation: ['putApiV1PunchTimingsPunchTimingIdPunchBreaksId'],
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
				displayName: 'Punch Break[end_time]',
				name: 'punch_breakSTARTend_timeEND',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Punch Break',
			},
		],
	},
];
