import { INodeProperties } from 'n8n-workflow';
import { getApiV1LanguagesGetAllFields } from './getAll/description';

export const languagesOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['languages'],
			},
		},
		options: [
			{
				name: 'Get Languages',
				value: 'getApiV1Languages',
				description: 'List all languages',
				action: 'Get languages',
			},
		],
		default: 'getApiV1Languages',
		noDataExpression: true,
	},

	...getApiV1LanguagesGetAllFields,
];
