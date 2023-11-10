import { INodeProperties } from 'n8n-workflow';
import { postApiV1NewsfeedsCreateFields } from './create/description';
import { getApiV1NewsfeedsGetAllFields } from './getAll/description';

export const newsfeedsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['newsfeeds'],
			},
		},
		options: [
			{
				name: 'Post Newsfeeds',
				value: 'postApiV1Newsfeeds',
				description: 'Create a Newsfeed',
				action: 'Post newsfeeds',
			},
			{
				name: 'Get Newsfeeds',
				value: 'getApiV1Newsfeeds',
				description: 'List all Newsfeeds',
				action: 'Get newsfeeds',
			},
		],
		default: 'getApiV1Newsfeeds',
		noDataExpression: true,
	},

	...postApiV1NewsfeedsCreateFields,

	...getApiV1NewsfeedsGetAllFields,
];
