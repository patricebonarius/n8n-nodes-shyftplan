import { INodeProperties } from 'n8n-workflow';
import { getApiV1ReplacedEvaluationsGetAllFields } from './getAll/description';

export const replaced_evaluationsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['replaced_evaluations'],
			},
		},
		options: [
			{
				name: 'Get Replaced Evaluations',
				value: 'getApiV1ReplacedEvaluations',
				description: 'List Replaced Evaluations',
				action: 'Get replaced evaluations',
			},
		],
		default: 'getApiV1ReplacedEvaluations',
		noDataExpression: true,
	},

	...getApiV1ReplacedEvaluationsGetAllFields,
];
