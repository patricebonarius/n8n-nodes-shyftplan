import { INodeProperties } from 'n8n-workflow';
import { employmentsCreateFields } from './create/description';
import { employmentsDeleteFields } from './delete/description';

export const employmentsOps: INodeProperties[] = [
	// CREATE OPERATION
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['employment'],
			},
		},
		options: [
			{
				name: 'Create Employee',
				value: 'employments_create',
				description: 'Create an employee',
				action: 'Create an employee',
			},
			{
				name: 'Delete Employee by ID',
				value: 'employments_delete_by_ID',
				description: 'Delete an employee by ID',
				action: 'Delete an employee by ID',
			},
		],
		default: 'employments_create',
		noDataExpression: true,
	},

	/*  Create Fields  */

	...employmentsCreateFields,

	/* Delete Fields */

	...employmentsDeleteFields,
];
