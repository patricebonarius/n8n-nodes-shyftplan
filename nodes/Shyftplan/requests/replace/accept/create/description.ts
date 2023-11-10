import { INodeProperties } from 'n8n-workflow';
export const postApiV1RequestsReplaceAcceptCreateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Replace Request ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1RequestsReplaceAccept'],
				resource: ['requests'],
			},
		},
	},
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1RequestsReplaceAccept'],
				resource: ['requests'],
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
				operation: ['postApiV1RequestsReplaceAccept'],
				resource: ['requests'],
			},
		},
		options: [
			{
				displayName: 'Ignore Conflicts',
				name: 'ignore_conflicts',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Accept when conflicts are present',
			},
		],
	},
];
