import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftRotationGroupsIdUnassignEmployeeCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1ShiftRotationGroupsIdUnassignEmployee'],
				resource: ['shift_rotation_groups'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter ShiftRotationGroup ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationGroupsIdUnassignEmployee'],
				resource: ['shift_rotation_groups'],
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
				operation: ['postApiV1ShiftRotationGroupsIdUnassignEmployee'],
				resource: ['shift_rotation_groups'],
			},
		},
	},
	{
		displayName: 'Locations Position_ID',
		name: 'locations_position_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Locations Position ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationGroupsIdUnassignEmployee'],
				resource: ['shift_rotation_groups'],
			},
		},
	},
	{
		displayName: 'Shiftplan ID',
		name: 'shiftplan_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shiftplan ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationGroupsIdUnassignEmployee'],
				resource: ['shift_rotation_groups'],
			},
		},
	},
	{
		displayName: 'Start Date',
		name: 'start_date',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Start date',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationGroupsIdUnassignEmployee'],
				resource: ['shift_rotation_groups'],
			},
		},
	},
	{
		displayName: 'End Date',
		name: 'end_date',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter End date',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationGroupsIdUnassignEmployee'],
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
				operation: ['postApiV1ShiftRotationGroupsIdUnassignEmployee'],
				resource: ['shift_rotation_groups'],
			},
		},
		options: [],
	},
];
