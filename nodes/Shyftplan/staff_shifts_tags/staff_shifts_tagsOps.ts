import { INodeProperties } from 'n8n-workflow';
import { deleteApiV1StaffShiftsTagsDeleteFields } from './delete/description';
import { postApiV1StaffShiftsTagsCreateFields } from './create/description';
import { getApiV1StaffShiftsTagsGetAllFields } from './getAll/description';
import { getApiV1StaffShiftsTagsIdGetFields } from './get/description';

export const staff_shifts_tagsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['staff_shifts_tags'],
			},
		},
		options: [
			{
				name: 'Delete Staff Shifts Tags',
				value: 'deleteApiV1StaffShiftsTags',
				description: 'Deletes the association between a given StaffShift and Tag',
				action: 'Delete staff shifts tags',
			},
			{
				name: 'Post Staff Shifts Tags',
				value: 'postApiV1StaffShiftsTags',
				description: 'Create staff Shift Tag',
				action: 'Post staff shifts tags',
			},
			{
				name: 'Get Staff Shifts Tags',
				value: 'getApiV1StaffShiftsTags',
				description: 'Get collection of Staff Shift tags',
				action: 'Get staff shifts tags',
			},
			{
				name: 'Get Staff Shifts Tags By ID',
				value: 'getApiV1StaffShiftsTagsId',
				description: 'Return a StaffShiftsTag',
				action: 'Get staff shifts tags by ID',
			},
		],
		default: 'getApiV1StaffShiftsTagsId',
		noDataExpression: true,
	},

	...deleteApiV1StaffShiftsTagsDeleteFields,

	...postApiV1StaffShiftsTagsCreateFields,

	...getApiV1StaffShiftsTagsGetAllFields,

	...getApiV1StaffShiftsTagsIdGetFields,
];
