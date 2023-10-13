import { INodeProperties } from 'n8n-workflow';
import { employmentsGetAllFields } from './getAll/description';
import { employmentsCreateFields } from './create/description';
import { employmentsDeleteFields } from './delete/description';

export const employmentsOps: INodeProperties[] = [
	// Choose Operations like CRUD on resource (endpoint)
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['employments'],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'employments_getAll',
				description: 'Get all company employments',
				action: 'Get all',
			},
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
		default: 'employments_getAll',
		noDataExpression: true,
	},

	/* Get All Employments Fields aka Views */
	...employmentsGetAllFields,

	/*  Create Fields  */
	...employmentsCreateFields,

	/* Delete Fields */
	...employmentsDeleteFields,
];
