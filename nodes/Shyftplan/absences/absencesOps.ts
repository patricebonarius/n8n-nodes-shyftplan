import { INodeProperties } from 'n8n-workflow';
import { absencesCreateFields } from './create/description';

export const absencesOps: INodeProperties[] = [
	// CREATE OPERATION
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['absences'],
			},
		},
		options: [
			{
				name: 'Create an Absence',
				value: 'absences_create',
				action: 'Create an absence',
			},
			{
				name: 'Delete an Absence',
				value: 'absences_delete',
				action: 'Delete an absence',
			},
		],
		default: 'absences_create',
		noDataExpression: true,
	},

	/*  Create Fields  */
	...absencesCreateFields,
];
