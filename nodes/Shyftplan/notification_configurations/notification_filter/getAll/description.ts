import { INodeProperties } from 'n8n-workflow';
export const getApiV1NotificationConfigurationsNotificationFilterGetAllFields: INodeProperties[] = [
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
				operation: ['getApiV1NotificationConfigurationsNotificationFilter'],
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
				operation: ['getApiV1NotificationConfigurationsNotificationFilter'],
				resource: ['notification_configurations'],
			},
		},
		options: [],
	},
];
