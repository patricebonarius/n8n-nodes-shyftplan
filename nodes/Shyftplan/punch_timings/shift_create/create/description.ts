import { INodeProperties } from 'n8n-workflow';
export const postApiV1PunchTimingsShiftCreateCreateFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['postApiV1PunchTimingsShiftCreate'],
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
				displayName: 'Shift[shiftplan ID]',
				name: 'shiftSTARTshiftplan_idEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter ID of a shiftplan',
			},
			{
				displayName: 'Shift[locations Position_ID]',
				name: 'shiftSTARTlocations_position_idEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter ID of location positions',
			},
			{
				displayName: 'Shift[break Time]',
				name: 'shiftSTARTbreak_timeEND',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Break time in minutes',
			},
			{
				displayName: 'Shift[starts At]',
				name: 'shiftSTARTstarts_atEND',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Date and time of start',
			},
			{
				displayName: 'Shift[ends At_time]',
				name: 'shiftSTARTends_at_timeEND',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Time of end',
			},
		],
	},
];
