import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftRotationGroupsCreateFields: INodeProperties[] = [
	{
		displayName: 'Shift Rotation_ID',
		name: 'shift_rotation_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shift rotation ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationGroups'],
				resource: ['shift_rotation_groups'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Rotation group name',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationGroups'],
				resource: ['shift_rotation_groups'],
			},
		},
	},
	{
		displayName: 'Shift Preset_IDs[]',
		name: 'shift_preset_idsSTARTEND',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'Enter Shift preset IDs',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationGroups'],
				resource: ['shift_rotation_groups'],
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
				operation: ['postApiV1ShiftRotationGroups'],
				resource: ['shift_rotation_groups'],
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
				displayName: 'Sort Position',
				name: 'sort_position',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Position of group in the list',
			},
		],
	},
];
