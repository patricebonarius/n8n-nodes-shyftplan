import { INodeProperties } from 'n8n-workflow';
export const postApiV1StaffShiftsTagsCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1StaffShiftsTags'],
				resource: ['staff_shifts_tags'],
			},
		},
	},
	{
		displayName: 'Staff Shift_ID',
		name: 'staff_shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Staff shift ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1StaffShiftsTags'],
				resource: ['staff_shifts_tags'],
			},
		},
	},
	{
		displayName: 'Tag ID',
		name: 'tag_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Tag ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1StaffShiftsTags'],
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
				operation: ['postApiV1StaffShiftsTags'],
				resource: ['staff_shifts_tags'],
			},
		},
		options: [],
	},
];
