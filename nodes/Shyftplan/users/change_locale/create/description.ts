import { INodeProperties } from 'n8n-workflow';
export const postApiV1UsersChangeLocaleCreateFields: INodeProperties[] = [
	{
		displayName: 'Locale',
		name: 'locale',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Language code Example: `de`, `en`',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1UsersChangeLocale'],
				resource: ['users'],
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
				operation: ['postApiV1UsersChangeLocale'],
				resource: ['users'],
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
