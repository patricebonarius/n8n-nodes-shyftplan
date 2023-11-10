import { INodeProperties } from 'n8n-workflow';
import { getApiV1ShiftAssignmentGroupsGetAllFields } from './getAll/description';

export const shift_assignment_groupsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['shift_assignment_groups'],
			},
		},
		options: [
			{
				name: 'Get Shift Assignment Groups',
				value: 'getApiV1ShiftAssignmentGroups',
				description: 'List all Shift Assignment Groups',
				action: 'Get shift assignment groups',
			},
		],
		default: 'getApiV1ShiftAssignmentGroups',
		noDataExpression: true,
	},

	...getApiV1ShiftAssignmentGroupsGetAllFields,
];
