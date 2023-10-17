import { INodeProperties } from 'n8n-workflow';
import { absence_reasonsCreateFields } from './create/description';
import { absence_reasonsbyidDeleteFields } from './delete/description';
import { absence_reasonsGetAllFields } from './getAll/description';
import { absence_reasonsbyidGetFields } from './get/description';
import { absence_reasonsbyidUpdateFields } from './update/description';

export const absence_reasonsOps: INodeProperties[] = [
	// Choose Operations like CRUD on resource (endpoint)
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['absence_reasons'],
			},
		},
		options: [
			{
				name: 'Create Absence Reason',
				value: 'absence_reasons_post',
				description: 'Create an absence reason',
				action: 'Create an absence reason',
			},
			{
				name: 'Delete Absence Reason',
				value: 'absence_reasonsById_delete',
				description: 'Get single absence reason',
				action: 'Delete single absence reason',
			},
			{
				name: 'Get Absence Reason',
				value: 'absence_reasonsbyid_get',
				description: 'Get single absence reason',
				action: 'Get single absence reason',
			},
			{
				name: 'Get All',
				value: 'absence_reasons_getAll',
				description: 'Get all absence reasons',
				action: 'Get all absence reasons',
			},
			{
				name: 'Update Absence Reason',
				value: 'absence_reasonsById_update',
				description: 'Update an absence reason',
				action: 'Update absence reason',
			},
		],
		default: 'absence_reasons_getAll',
		noDataExpression: true,
	},

	/*  Create Fields  */
	...absence_reasonsCreateFields,
	/*  Delete Fields  */
	...absence_reasonsbyidDeleteFields,
	/*  Get Fields  */
	...absence_reasonsbyidGetFields,
	/*  Get All  */
	...absence_reasonsGetAllFields,
	/*  Update Fields  */
	...absence_reasonsbyidUpdateFields,
];
