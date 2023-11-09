import { INodeProperties } from 'n8n-workflow';
export const postApiV1IndividualRotationsCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1IndividualRotations'],
				resource: ['individual_rotations'],
			},
		},
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1IndividualRotations'],
				resource: ['individual_rotations'],
			},
		},
	},
	{
		displayName: 'Anchor Date',
		name: 'anchor_date',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Individual rotation anchor date',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1IndividualRotations'],
				resource: ['individual_rotations'],
			},
		},
	},
	{
		displayName: 'Rotation Interval',
		name: 'rotation_interval',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Number of days in the rotation',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1IndividualRotations'],
				resource: ['individual_rotations'],
			},
		},
	},
	{
		displayName: 'Shift Preset_IDs[]',
		name: 'shift_preset_idsSTARTEND',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'Shift preset IDs',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1IndividualRotations'],
				resource: ['individual_rotations'],
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
				operation: ['postApiV1IndividualRotations'],
				resource: ['individual_rotations'],
			},
		},
		options: [
			{
				displayName: 'Starts At',
				name: 'starts_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Rotation starts at',
			},
			{
				displayName: 'Ends At',
				name: 'ends_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Rotation ends at',
			},
		],
	},
];
