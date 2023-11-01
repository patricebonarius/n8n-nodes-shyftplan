import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansShiftplanIdCopyCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Company ID of Shiftplan',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Name of the Shiftplan',
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Start of the Shiftplan',
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'End of the Shiftplan',
	},
	{
		displayName: 'Copy Employees',
		name: 'copy_employees',
		type: 'boolean',
		required: true,
		default: false,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Whether to copy Shiftplan with Employees',
	},
	{
		displayName: 'Without Conflicts',
		name: 'without_conflicts',
		type: 'boolean',
		required: true,
		default: false,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Whether only copies assignments that wouldn’t trigger a warning',
	},
	{
		displayName: 'Copy Full_shiftplan',
		name: 'copy_full_shiftplan',
		type: 'boolean',
		required: true,
		default: false,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Whether Copy full Shiftplan',
	},
	{
		displayName: 'Shiftplan ID',
		name: 'shiftplan_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Enter a shiftplan ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				displayName: 'Position IDs[]',
				name: 'position_ids[]',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Positions IDs',
			},
			{
				displayName: 'Copy Timeframe_starts_at',
				name: 'copy_timeframe_starts_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Copy timeframe start at',
			},
			{
				displayName: 'Copy Timeframe_ends_at',
				name: 'copy_timeframe_ends_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Copy timeframe end at',
			},
		],
	},
];
