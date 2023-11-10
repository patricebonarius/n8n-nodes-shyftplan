import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftRotationsCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1ShiftRotations'],
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
		description: 'Enter Name of shift rotation',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotations'],
				resource: ['shift_rotations'],
			},
		},
	},
	{
		displayName: 'Anchor Date',
		name: 'anchor_date',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Shift rotation anchor date',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotations'],
				resource: ['shift_rotations'],
			},
		},
	},
	{
		displayName: 'Rotation Interval',
		name: 'rotation_interval',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Number of days in the rotation',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotations'],
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
				operation: ['postApiV1ShiftRotations'],
				resource: ['shift_rotations'],
			},
		},
		options: [
			{
				displayName: 'Starts At',
				name: 'starts_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Start of shift rotation',
			},
			{
				displayName: 'Ends At',
				name: 'ends_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter End of shift rotation',
			},
		],
	},
];
