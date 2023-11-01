import { INodeProperties } from 'n8n-workflow';
export const getApiV1ShiftplansShiftplanIdNotificationsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['getApiV1ShiftplansShiftplanIdNotifications'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Enter Company ID',
	},
	{
		displayName: 'Shiftplan ID',
		name: 'shiftplan_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['getApiV1ShiftplansShiftplanIdNotifications'],
				resource: ['shiftplans'],
			},
		},
		placeholder: '',
		description: 'Enter Shiftplan ID',
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
