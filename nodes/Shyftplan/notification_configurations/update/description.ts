import { INodeProperties } from 'n8n-workflow';
export const putApiV1NotificationConfigurationsIdUpdateFields: INodeProperties[] = [
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
				operation: ['putApiV1NotificationConfigurationsId'],
				resource: ['notification_configurations'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1NotificationConfigurationsId'],
				resource: ['notification_configurations'],
			},
		},
	},
	{
		displayName: 'Notification Configuration',
		name: 'notification_configuration',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'NotificationConfiguration',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1NotificationConfigurationsId'],
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
				operation: ['putApiV1NotificationConfigurationsId'],
				resource: ['notification_configurations'],
			},
		},
		options: [],
	},
];
