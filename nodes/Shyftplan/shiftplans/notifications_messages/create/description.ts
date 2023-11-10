import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansShiftplanIdNotificationsMessagesCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1ShiftplansShiftplanIdNotificationsMessages'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Shiftplan ID',
		name: 'shiftplan_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shiftplan ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdNotificationsMessages'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Notification Type',
		name: 'notification_type',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter Notification Type',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansShiftplanIdNotificationsMessages'],
				resource: ['shiftplans'],
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
				operation: ['postApiV1ShiftplansShiftplanIdNotificationsMessages'],
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				displayName: 'Message',
				name: 'message',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Notification content',
			},
		],
	},
];
