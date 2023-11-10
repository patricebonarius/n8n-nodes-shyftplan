import { INodeProperties } from 'n8n-workflow';
export const putApiV1NotificationConfigurationsNotificationFilterUpdateFields: INodeProperties[] = [
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
				operation: ['putApiV1NotificationConfigurationsNotificationFilter'],
				resource: ['notification_configurations'],
			},
		},
	},
	{
		displayName: 'Enabled Shift_rotation_group_IDs[]',
		name: 'enabled_shift_rotation_group_idsSTARTEND',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'List of shift rotation group IDs',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV1NotificationConfigurationsNotificationFilter'],
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
				operation: ['putApiV1NotificationConfigurationsNotificationFilter'],
				resource: ['notification_configurations'],
			},
		},
		options: [],
	},
];
