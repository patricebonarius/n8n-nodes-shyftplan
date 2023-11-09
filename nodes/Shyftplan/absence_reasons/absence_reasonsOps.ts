import { INodeProperties } from 'n8n-workflow';
import { postApiV1AbsenceReasonsCreateFields } from './create/description';
import { getApiV1AbsenceReasonsGetAllFields } from './getAll/description';
import { getApiV1AbsenceReasonsStatsGetAllFields } from './stats/getAll/description';
import { deleteApiV1AbsenceReasonsIdDeleteFields } from './delete/description';
import { putApiV1AbsenceReasonsIdUpdateFields } from './update/description';
import { getApiV1AbsenceReasonsIdGetFields } from './get/description';

export const absence_reasonsOps: INodeProperties[] = [
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
				name: 'Post Absence Reasons',
				value: 'postApiV1AbsenceReasons',
				description: 'Create a new Absence Reason.',
				action: 'Post absence reasons',
			},
			{
				name: 'Get Absence Reasons',
				value: 'getApiV1AbsenceReasons',
				description: 'List all Absence Reasons.',
				action: 'Get absence reasons',
			},
			{
				name: 'Get Absence Reasons Stats',
				value: 'getApiV1AbsenceReasonsStats',
				description: 'Return aggregated absence days for each absence reason',
				action: 'Get absence reasons stats',
			},
			{
				name: 'Delete Absence Reasons By ID',
				value: 'deleteApiV1AbsenceReasonsId',
				description: 'Delete an Absence Reason.',
				action: 'Delete absence reasons by ID',
			},
			{
				name: 'Put Absence Reasons By ID',
				value: 'putApiV1AbsenceReasonsId',
				description: 'Update an Absence Reason.',
				action: 'Put absence reasons by ID',
			},
			{
				name: 'Get Absence Reasons By ID',
				value: 'getApiV1AbsenceReasonsId',
				description: 'Return a Absence Reason.',
				action: 'Get absence reasons by ID',
			},
		],
		default: 'getApiV1AbsenceReasons',
		noDataExpression: true,
	},

	...postApiV1AbsenceReasonsCreateFields,

	...getApiV1AbsenceReasonsGetAllFields,

	...getApiV1AbsenceReasonsStatsGetAllFields,

	...deleteApiV1AbsenceReasonsIdDeleteFields,

	...putApiV1AbsenceReasonsIdUpdateFields,

	...getApiV1AbsenceReasonsIdGetFields,
];
