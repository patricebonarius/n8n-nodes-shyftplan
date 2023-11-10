import { INodeProperties } from 'n8n-workflow';
import { postApiV1ShiftRotationsCreateFields } from './create/description';
import { getApiV1ShiftRotationsGetAllFields } from './getAll/description';
import { postApiV1ShiftRotationsIdShiftplanCreateFields } from './shiftplan/create/description';
import { deleteApiV1ShiftRotationsIdDeleteFields } from './delete/description';
import { getApiV1ShiftRotationsIdGetFields } from './get/description';
import { putApiV1ShiftRotationsIdUpdateFields } from './update/description';

export const shift_rotationsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['shift_rotations'],
			},
		},
		options: [
			{
				name: 'Post Shift Rotations',
				value: 'postApiV1ShiftRotations',
				description: 'Creates a ShiftRotation',
				action: 'Post shift rotations',
			},
			{
				name: 'Get Shift Rotations',
				value: 'getApiV1ShiftRotations',
				description: 'Get collection of shift rotations',
				action: 'Get shift rotations',
			},
			{
				name: 'Post Shift Rotations By ID Shiftplan',
				value: 'postApiV1ShiftRotationsIdShiftplan',
				description: 'Shiftplan',
				action: 'Post shift rotations by ID shiftplan',
			},
			{
				name: 'Delete Shift Rotations By ID',
				value: 'deleteApiV1ShiftRotationsId',
				description: 'Deletes a Shift rotation',
				action: 'Delete shift rotations by ID',
			},
			{
				name: 'Get Shift Rotations By ID',
				value: 'getApiV1ShiftRotationsId',
				description: 'Shows a Shift rotation',
				action: 'Get shift rotations by ID',
			},
			{
				name: 'Put Shift Rotations By ID',
				value: 'putApiV1ShiftRotationsId',
				description: 'Updates a Shift rotation',
				action: 'Put shift rotations by ID',
			},
		],
		default: 'putApiV1ShiftRotationsId',
		noDataExpression: true,
	},

	...postApiV1ShiftRotationsCreateFields,

	...getApiV1ShiftRotationsGetAllFields,

	...postApiV1ShiftRotationsIdShiftplanCreateFields,

	...deleteApiV1ShiftRotationsIdDeleteFields,

	...getApiV1ShiftRotationsIdGetFields,

	...putApiV1ShiftRotationsIdUpdateFields,
];
