import { INodeProperties } from 'n8n-workflow';
import { absencesCreateFields } from './create/description';
import { absencesGetAllFields } from './getAll/description';

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
				name: 'Get Absences',
				value: 'absences_getAll',
				action: 'Get all absences',
			},
			{
				name: 'Create an Absence',
				value: 'absences_create',
				action: 'Create an absence',
			},
		],
		default: 'absences_create',
		noDataExpression: true,
	},

	/*  Create Fields  */
	...absencesGetAllFields,

	/*  Create Fields  */
	...absencesCreateFields,
];
