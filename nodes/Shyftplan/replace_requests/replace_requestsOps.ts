import { INodeProperties } from 'n8n-workflow';
import { deleteApiV1ReplaceRequestsIdDeleteFields } from './delete/description';

export const replace_requestsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['replace_requests'],
			},
		},
		options: [
			{
				name: 'Delete Replace Requests By ID',
				value: 'deleteApiV1ReplaceRequestsId',
				description: 'Destroys a Replace request',
				action: 'Delete replace requests by ID',
			},
		],
		default: 'deleteApiV1ReplaceRequestsId',
		noDataExpression: true,
	},

	...deleteApiV1ReplaceRequestsIdDeleteFields,
];
