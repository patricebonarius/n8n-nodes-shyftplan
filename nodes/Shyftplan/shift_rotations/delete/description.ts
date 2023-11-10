import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1ShiftRotationsIdDeleteFields: INodeProperties[] = [
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
				operation: ['deleteApiV1ShiftRotationsId'],
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
				operation: ['deleteApiV1ShiftRotationsId'],
				resource: ['shift_rotations'],
			},
		},
		options: [],
	},
];
