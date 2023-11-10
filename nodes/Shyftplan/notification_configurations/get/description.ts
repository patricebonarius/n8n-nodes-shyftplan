import { INodeProperties } from 'n8n-workflow';
export const getApiV1NotificationConfigurationsIdGetFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'NotificationConfiguration ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1NotificationConfigurationsId'],
				resource: ['notification_configurations'],
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
				operation: ['getApiV1NotificationConfigurationsId'],
				resource: ['notification_configurations'],
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
