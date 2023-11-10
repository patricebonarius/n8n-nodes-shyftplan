import { INodeProperties } from 'n8n-workflow';
import { postApiV1SessionsRefreshCreateFields } from './refresh/create/description';

export const sessionsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['sessions'],
			},
		},
		options: [
			{
				name: 'Post Sessions Refresh',
				value: 'postApiV1SessionsRefresh',
				description: 'Refresh user session',
				action: 'Post sessions refresh',
			},
		],
		default: 'postApiV1SessionsRefresh',
		noDataExpression: true,
	},

	...postApiV1SessionsRefreshCreateFields,
];
