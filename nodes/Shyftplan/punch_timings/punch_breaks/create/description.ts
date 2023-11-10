import { INodeProperties } from 'n8n-workflow';
export const postApiV1PunchTimingsPunchTimingIdPunchBreaksCreateFields: INodeProperties[] = [
	{
		displayName: 'Punch Timing_ID',
		name: 'punch_timing_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Punch time ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1PunchTimingsPunchTimingIdPunchBreaks'],
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
				operation: ['postApiV1PunchTimingsPunchTimingIdPunchBreaks'],
				resource: ['punch_timings'],
			},
		},
		options: [
			{
				displayName: 'Punch Break[start_time]',
				name: 'punch_breakSTARTstart_timeEND',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Punch Break',
			},
			{
				displayName: 'Encrypted Company_ID',
				name: 'encrypted_company_id',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter You get encrypted company_ID when you start a punch time',
			},
		],
	},
];
