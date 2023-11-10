import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftRotationsIdShiftplanCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID related to the Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationsIdShiftplan'],
				resource: ['shift_rotations'],
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'location_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of an Location',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationsIdShiftplan'],
				resource: ['shift_rotations'],
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
				operation: ['postApiV1ShiftRotationsIdShiftplan'],
				resource: ['shift_rotations'],
			},
		},
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Start Date of the Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationsIdShiftplan'],
				resource: ['shift_rotations'],
			},
		},
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter End Date of the Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationsIdShiftplan'],
				resource: ['shift_rotations'],
			},
		},
	},
	{
		displayName: 'Workers Per_positions_list[][ID]',
		name: 'workers_per_positions_listSTARTENDSTARTidEND',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'Enter Workers Per List',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationsIdShiftplan'],
				resource: ['shift_rotations'],
			},
		},
	},
	{
		displayName: 'Workers Per_positions_list[][workers]',
		name: 'workers_per_positions_listSTARTENDSTARTworkersEND',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'Enter Worker per Position',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationsIdShiftplan'],
				resource: ['shift_rotations'],
			},
		},
	},
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
				operation: ['postApiV1ShiftRotationsIdShiftplan'],
				resource: ['shift_rotations'],
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
				operation: ['postApiV1ShiftRotationsIdShiftplan'],
				resource: ['shift_rotations'],
			},
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadata',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Shiftplan metadata as JSON',
			},
		],
	},
];
