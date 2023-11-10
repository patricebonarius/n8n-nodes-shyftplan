import { INodeProperties } from 'n8n-workflow';
export const getApiV1ShiftsTagsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1ShiftsTags'],
				resource: ['shifts_tags'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Company ID',
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Pages starts with 1',
			},
			{
				displayName: 'Per Page',
				name: 'per_page',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Between 1 and 1000',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Filter for single ShiftTag ID',
			},
			{
				displayName: 'IDs[]',
				name: 'idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Filter an array of ShiftTag ID',
			},
			{
				displayName: 'Shift ID',
				name: 'shift_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Filter for single Shift ID',
			},
			{
				displayName: 'Shift IDs[]',
				name: 'shift_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Filter an array of Shift IDs',
			},
			{
				displayName: 'Tag ID',
				name: 'tag_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Filter for single Tag ID',
			},
			{
				displayName: 'Tag IDs[]',
				name: 'tag_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Filter an array of Tag IDs',
			},
		],
	},
];