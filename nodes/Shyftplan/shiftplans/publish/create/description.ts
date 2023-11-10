import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansIdPublishCreateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID related to the Shiftplan',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansIdPublish'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shiftplan ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansIdPublish'],
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
				operation: ['postApiV1ShiftplansIdPublish'],
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				displayName: 'Publish With_email',
				name: 'publish_with_email',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Publish with email',
			},
			{
				displayName: 'Send Assigned_shifts',
				name: 'send_assigned_shifts',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Send assigned shifts when publish_with_email is true',
			},
			{
				displayName: 'Send Open_shifts',
				name: 'send_open_shifts',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Send open shift when publish_with_email is true',
			},
			{
				displayName: 'Send Message',
				name: 'send_message',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Send a message when publish_with_email is true',
			},
			{
				displayName: 'Message',
				name: 'message',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Publish message when send_message is true',
			},
		],
	},
];
