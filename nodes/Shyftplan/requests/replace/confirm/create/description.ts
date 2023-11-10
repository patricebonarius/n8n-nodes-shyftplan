import { INodeProperties } from 'n8n-workflow';
export const postApiV1RequestsReplaceConfirmCreateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Request ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1RequestsReplaceConfirm'],
				resource: ['requests'],
			},
		},
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID that accepted shift offer',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1RequestsReplaceConfirm'],
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
				operation: ['postApiV1RequestsReplaceConfirm'],
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
				operation: ['postApiV1RequestsReplaceConfirm'],
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
				description: 'Whether Confirm when conflicts are present',
			},
		],
	},
];
