import { INodeProperties } from 'n8n-workflow';
export const getApiV1StaffShiftsIdGetFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter StaffShift ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1StaffShiftsId'],
				resource: ['staff_shifts'],
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
				operation: ['getApiV1StaffShiftsId'],
				resource: ['staff_shifts'],
			},
		},
		options: [],
	},
];
