import { INodeProperties } from 'n8n-workflow';
import { getApiV1EvaluationBreaksGetAllFields } from './getAll/description';

export const evaluation_breaksOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['evaluation_breaks'],
			},
		},
		options: [
			{
				name: 'Get Evaluation Breaks',
				value: 'getApiV1EvaluationBreaks',
				description: 'List all break times for staff shifts',
				action: 'Get evaluation breaks',
			},
		],
		default: 'getApiV1EvaluationBreaks',
		noDataExpression: true,
	},

	...getApiV1EvaluationBreaksGetAllFields,
];
