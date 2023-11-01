import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansIdAssignRotationCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansIdAssignRotation'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Enter Company ID',
	},
	{
		displayName: 'Shift Rotation_ID',
		name: 'shift_rotation_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansIdAssignRotation'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Shift Rotation ID',
	},
	{
		displayName: 'Workers Per_positions_list[][ID]',
		name: 'workers_per_positions_list[][id]',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansIdAssignRotation'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Worker per Position',
	},
	{
		displayName: 'Workers Per_positions_list[][workers]',
		name: 'workers_per_positions_list[][workers]',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansIdAssignRotation'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Workers per position list by workers',
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansIdAssignRotation'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Enter ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansIdAssignRotation'],
				resource: ['shiftplans'],
			},
		},
		options: [],
	},
];
