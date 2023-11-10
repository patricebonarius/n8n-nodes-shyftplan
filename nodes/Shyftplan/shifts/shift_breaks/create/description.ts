import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftsShiftIdShiftBreaksCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsShiftIdShiftBreaks'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Shift ID',
		name: 'shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shift ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsShiftIdShiftBreaks'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Shift break start time',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsShiftIdShiftBreaks'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Shift break start time',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsShiftIdShiftBreaks'],
				resource: ['shifts'],
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
				operation: ['postApiV1ShiftsShiftIdShiftBreaks'],
				resource: ['shifts'],
			},
		},
		options: [],
	},
];
