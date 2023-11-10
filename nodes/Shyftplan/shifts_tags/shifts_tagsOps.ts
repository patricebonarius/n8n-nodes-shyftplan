import { INodeProperties } from 'n8n-workflow';
import { getApiV1ShiftsTagsGetAllFields } from './getAll/description';
import { getApiV1ShiftsTagsIdGetFields } from './get/description';

export const shifts_tagsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['shifts_tags'],
			},
		},
		options: [
			{
				name: 'Get Shifts Tags',
				value: 'getApiV1ShiftsTags',
				description: 'List all Shift tags',
				action: 'Get shifts tags',
			},
			{
				name: 'Get Shifts Tags By ID',
				value: 'getApiV1ShiftsTagsId',
				description: 'Return a ShiftsTag',
				action: 'Get shifts tags by ID',
			},
		],
		default: 'getApiV1ShiftsTagsId',
		noDataExpression: true,
	},

	...getApiV1ShiftsTagsGetAllFields,

	...getApiV1ShiftsTagsIdGetFields,
];
