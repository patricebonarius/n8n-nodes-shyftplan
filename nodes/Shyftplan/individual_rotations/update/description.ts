import { INodeProperties } from 'n8n-workflow';
export const putApiV1IndividualRotationsIdUpdateFields: INodeProperties[] = [
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
				operation: ['putApiV1IndividualRotationsId'],
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
				operation: ['putApiV1IndividualRotationsId'],
				resource: ['individual_rotations'],
			},
		},
		options: [
			{
				displayName: 'Shift Preset_IDs[]',
				name: 'shift_preset_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Shift preset IDs',
			},
			{
				displayName: 'Anchor Date',
				name: 'anchor_date',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Individual rotation anchor date',
			},
			{
				displayName: 'Rotation Interval',
				name: 'rotation_interval',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Number of days in the rotation',
			},
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
