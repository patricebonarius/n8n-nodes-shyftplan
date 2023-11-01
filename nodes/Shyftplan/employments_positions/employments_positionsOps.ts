import { INodeProperties } from 'n8n-workflow';
import { postApiV1EmploymentsPositionsCreateFields } from './create/description';
import { getApiV1EmploymentsPositionsGetAllFields } from './getAll/description';
import { deleteApiV1EmploymentsPositionsIdDeleteFields } from './delete/description';
import { getApiV1EmploymentsPositionsIdGetFields } from './get/description';

export const employments_positionsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['employments_positions'],
			},
		},
		options: [
			{
				name: 'Post Employments Positions',
				value: 'postApiV1EmploymentsPositions',
				description: 'Create a new EmploymentsPosition',
				action: 'Post employments positions',
			},
			{
				name: 'Get Employments Positions',
				value: 'getApiV1EmploymentsPositions',
				description: 'List all Employments Positions',
				action: 'Get employments positions',
			},
			{
				name: 'Delete Employments Positions By ID',
				value: 'deleteApiV1EmploymentsPositionsId',
				description: 'Delete a EmploymentsPosition',
				action: 'Delete employments positions by ID',
			},
			{
				name: 'Get Employments Positions By ID',
				value: 'getApiV1EmploymentsPositionsId',
				description: 'Return a Employments Position',
				action: 'Get employments positions by ID',
			},
		],
		default: 'getApiV1EmploymentsPositions',
		noDataExpression: true,
	},

	...postApiV1EmploymentsPositionsCreateFields,

	...getApiV1EmploymentsPositionsGetAllFields,

	...deleteApiV1EmploymentsPositionsIdDeleteFields,

	...getApiV1EmploymentsPositionsIdGetFields,
];
