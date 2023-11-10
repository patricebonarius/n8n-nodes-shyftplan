import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansIdAssignRotationCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1ShiftplansIdAssignRotation'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Shift Rotation_ID',
		name: 'shift_rotation_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shift Rotation ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansIdAssignRotation'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Workers Per_positions_list[][ID]',
		name: 'workers_per_positions_listSTARTENDSTARTidEND',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'Enter Workers per Positions',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansIdAssignRotation'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Workers Per_positions_list[][workers]',
		name: 'workers_per_positions_listSTARTENDSTARTworkersEND',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'Enter Workers per Position List',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansIdAssignRotation'],
				resource: ['shiftplans'],
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
				operation: ['postApiV1ShiftplansIdAssignRotation'],
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
				operation: ['postApiV1ShiftplansIdAssignRotation'],
				resource: ['shiftplans'],
			},
		},
		options: [],
	},
];
