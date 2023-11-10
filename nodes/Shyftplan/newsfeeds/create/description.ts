import { INodeProperties } from 'n8n-workflow';
export const postApiV1NewsfeedsCreateFields: INodeProperties[] = [
	{
		displayName: 'Newsfeed[message]',
		name: 'newsfeedSTARTmessageEND',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Newsfeed message',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Newsfeeds'],
				resource: ['newsfeeds'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['postApiV1Newsfeeds'],
				resource: ['newsfeeds'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Company ID',
			},
		],
	},
];
