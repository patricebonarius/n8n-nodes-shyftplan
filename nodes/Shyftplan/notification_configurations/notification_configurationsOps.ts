import { INodeProperties } from 'n8n-workflow';
import { putApiV1NotificationConfigurationsNotificationFilterUpdateFields } from './notification_filter/update/description';
import { getApiV1NotificationConfigurationsNotificationFilterGetAllFields } from './notification_filter/getAll/description';
import { getApiV1NotificationConfigurationsGetAllFields } from './getAll/description';
import { putApiV1NotificationConfigurationsIdUpdateFields } from './update/description';
import { getApiV1NotificationConfigurationsIdGetFields } from './get/description';

export const notification_configurationsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['notification_configurations'],
			},
		},
		options: [
			{
				name: 'Put Notification Configurations Notification Filter',
				value: 'putApiV1NotificationConfigurationsNotificationFilter',
				description: 'Update a notification filter',
				action: 'Put notification configurations notification filter',
			},
			{
				name: 'Get Notification Configurations Notification Filter',
				value: 'getApiV1NotificationConfigurationsNotificationFilter',
				description: 'Return a notification filter',
				action: 'Get notification configurations notification filter',
			},
			{
				name: 'Get Notification Configurations',
				value: 'getApiV1NotificationConfigurations',
				description: 'List all NotificationConfiguration',
				action: 'Get notification configurations',
			},
			{
				name: 'Put Notification Configurations By ID',
				value: 'putApiV1NotificationConfigurationsId',
				description: 'Update NotificationConfiguration',
				action: 'Put notification configurations by ID',
			},
			{
				name: 'Get Notification Configurations By ID',
				value: 'getApiV1NotificationConfigurationsId',
				description: 'Return a NotificationConfiguration',
				action: 'Get notification configurations by ID',
			},
		],
		default: 'getApiV1NotificationConfigurationsId',
		noDataExpression: true,
	},

	...putApiV1NotificationConfigurationsNotificationFilterUpdateFields,

	...getApiV1NotificationConfigurationsNotificationFilterGetAllFields,

	...getApiV1NotificationConfigurationsGetAllFields,

	...putApiV1NotificationConfigurationsIdUpdateFields,

	...getApiV1NotificationConfigurationsIdGetFields,
];
