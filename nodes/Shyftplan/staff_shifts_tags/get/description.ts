import { INodeProperties } from 'n8n-workflow';
export const getApiV1StaffShiftsTagsIdGetFields: INodeProperties[] = [
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
				operation: ['getApiV1StaffShiftsTagsId'],
				resource: ['staff_shifts_tags'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter StaffShiftsTag ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1StaffShiftsTagsId'],
				resource: ['staff_shifts_tags'],
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
				operation: ['getApiV1StaffShiftsTagsId'],
				resource: ['staff_shifts_tags'],
			},
		},
		options: [],
	},
];
