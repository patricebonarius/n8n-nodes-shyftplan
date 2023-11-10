import { INodeProperties } from 'n8n-workflow';
export const putApiV1ShiftRotationsIdUpdateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shift rotation ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1ShiftRotationsId'],
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
				operation: ['putApiV1ShiftRotationsId'],
				resource: ['shift_rotations'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Company ID',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Name of shift rotation',
			},
			{
				displayName: 'Anchor Date',
				name: 'anchor_date',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Shift rotation anchor date',
			},
			{
				displayName: 'Rotation Interval',
				name: 'rotation_interval',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Number of days in the rotation',
			},
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
