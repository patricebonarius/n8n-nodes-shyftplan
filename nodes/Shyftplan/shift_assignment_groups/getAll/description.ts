import { INodeProperties } from 'n8n-workflow';
export const getApiV1ShiftAssignmentGroupsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1ShiftAssignmentGroups'],
				resource: ['shift_assignment_groups'],
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
				displayName: 'IDs[]',
				name: 'idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Filter an array of ShiftAssignmentGroup ID',
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
				description: 'Enter Filter an array of Shift ID',
			},
			{
				displayName: 'Assignment Group_IDs[]',
				name: 'assignment_group_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Filter an array of AssigmentGroup ID',
			},
		],
	},
];
