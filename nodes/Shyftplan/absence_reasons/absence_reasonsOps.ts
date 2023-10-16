import { INodeProperties } from 'n8n-workflow';
import { absence_reasonsGetFields } from './get/description';
import { absence_reasonsCreateFields } from './create/description';

export const absence_reasonsOps: INodeProperties[] = [
	// Choose Operations like CRUD on resource (endpoint)
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['abscence_reasons'],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'absence_reasons_get',
				description: 'Get all absence reasons',
				action: 'Get all absence reasons',
			},
			{
				name: 'Create Absence Reason',
				value: 'absence_reasons_post',
				description: 'Create an absence reason',
				action: 'Create an absence reason',
			},
		],
		default: 'absence_reasons_get',
		noDataExpression: true,
	},

	/* Get All Employments Fields aka Views */
	...absence_reasonsGetFields,

	/*  Create Fields  */
	...absence_reasonsCreateFields,
];
