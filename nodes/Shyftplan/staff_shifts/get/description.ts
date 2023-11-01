import { INodeProperties } from 'n8n-workflow';
export const getApiV1StaffShiftsIdGetFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['getApiV1StaffShiftsId'],
				resource: ['staff_shifts'],
			},
		},
		placeholder: '',
		description: 'StaffShift ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1StaffShiftsId'],
				resource: ['staff_shifts'],
			},
		},
		options: [],
	},
];
