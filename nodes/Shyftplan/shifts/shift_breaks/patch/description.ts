import { INodeProperties } from 'n8n-workflow';
export const patchApiV1ShiftsShiftIdShiftBreaksIdPatchFields: INodeProperties[] = [
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
				operation: ['patchApiV1ShiftsShiftIdShiftBreaksId'],
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
				operation: ['patchApiV1ShiftsShiftIdShiftBreaksId'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shift break ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['patchApiV1ShiftsShiftIdShiftBreaksId'],
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
				operation: ['patchApiV1ShiftsShiftIdShiftBreaksId'],
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
				operation: ['patchApiV1ShiftsShiftIdShiftBreaksId'],
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
				operation: ['patchApiV1ShiftsShiftIdShiftBreaksId'],
				resource: ['shifts'],
			},
		},
		options: [],
	},
];
