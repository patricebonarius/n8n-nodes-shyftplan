import { INodeProperties } from 'n8n-workflow';
import { postApiV1LoginCreateFields } from './create/description';

export const loginOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['login'],
			},
		},
		options: [
			{
				name: 'Post Login',
				value: 'postApiV1Login',
				description: 'Create a Login',
				action: 'Post login',
			},
		],
		default: 'postApiV1Login',
		noDataExpression: true,
	},

	...postApiV1LoginCreateFields,
];
