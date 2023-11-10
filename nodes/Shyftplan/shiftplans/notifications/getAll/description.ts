import { INodeProperties } from 'n8n-workflow';
export const getApiV1ShiftplansShiftplanIdNotificationsGetAllFields: INodeProperties[] = [
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
				operation: ['getApiV1ShiftplansShiftplanIdNotifications'],
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
				operation: ['getApiV1ShiftplansShiftplanIdNotifications'],
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
				operation: ['getApiV1ShiftplansShiftplanIdNotifications'],
				resource: ['shiftplans'],
			},
		},
		options: [],
	},
];
