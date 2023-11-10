import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansShiftplanIdCopyCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID of Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Name of the Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Start of the Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter End of the Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Copy Employees',
		name: 'copy_employees',
		type: 'boolean',
		default: false,
		placeholder: '',
		description: 'Whether Copy Shiftplan with Employees',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Without Conflicts',
		name: 'without_conflicts',
		type: 'boolean',
		default: false,
		placeholder: '',
		description: 'Whether Only copies assignments that wouldn’t trigger a warning',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Copy Full_shiftplan',
		name: 'copy_full_shiftplan',
		type: 'boolean',
		default: false,
		placeholder: '',
		description: 'Whether Copy full Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Shiftplan ID',
		name: 'shiftplan_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shiftlan ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
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
				operation: ['postApiV1ShiftplansShiftplanIdCopy'],
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				displayName: 'Position IDs[]',
				name: 'position_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Positions IDs',
			},
			{
				displayName: 'Copy Timeframe_starts_at',
				name: 'copy_timeframe_starts_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Copy timeframe start at',
			},
			{
				displayName: 'Copy Timeframe_ends_at',
				name: 'copy_timeframe_ends_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Copy timeframe end at',
			},
		],
	},
];
