import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftRotationGroupsIdUnassignFromShiftsCreateFields: INodeProperties[] = [
	{
		displayName: 'Shift IDs[]',
		name: 'shift_idsSTARTEND',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'Enter Shift IDs to unassign from Shift Rotation Group',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftRotationGroupsIdUnassignFromShifts'],
				resource: ['shift_rotation_groups'],
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
				operation: ['postApiV1ShiftRotationGroupsIdUnassignFromShifts'],
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
				operation: ['postApiV1ShiftRotationGroupsIdUnassignFromShifts'],
				resource: ['shift_rotation_groups'],
			},
		},
		options: [],
	},
];
