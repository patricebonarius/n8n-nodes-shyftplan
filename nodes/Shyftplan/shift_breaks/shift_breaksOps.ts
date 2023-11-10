import { INodeProperties } from 'n8n-workflow';
import { getApiV1ShiftBreaksGetAllFields } from './getAll/description';

export const shift_breaksOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['shift_breaks'],
			},
		},
		options: [
			{
				name: 'Get Shift Breaks',
				value: 'getApiV1ShiftBreaks',
				description: 'List all shift breaks',
				action: 'Get shift breaks',
			},
		],
		default: 'getApiV1ShiftBreaks',
		noDataExpression: true,
	},

	...getApiV1ShiftBreaksGetAllFields,
];
