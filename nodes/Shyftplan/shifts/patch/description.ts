import { INodeProperties } from 'n8n-workflow';
export const patchApiV1ShiftsIdPatchFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of the Shift',
		required: true,
		displayOptions: {
			show: {
				operation: ['patchApiV1ShiftsId'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of the Company',
		required: true,
		displayOptions: {
			show: {
				operation: ['patchApiV1ShiftsId'],
				resource: ['shifts'],
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
				operation: ['patchApiV1ShiftsId'],
				resource: ['shifts'],
			},
		},
		options: [
			{
				displayName: 'Workers',
				name: 'workers',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter Number of workers',
			},
			{
				displayName: 'Untimed',
				name: 'untimed',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Standby shift',
			},
			{
				displayName: 'Auto Accept',
				name: 'auto_accept',
				type: 'string',
				default: '',
				placeholder: '',
				description:
					'Enter Auto accept shift requests as long as there are open slots on the shift',
			},
			{
				displayName: 'Can Evaluate',
				name: 'can_evaluate',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Employees can create evaluations',
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Note for the shift',
			},
			{
				displayName: 'Manager Note',
				name: 'manager_note',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Manager note for the Shift',
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
				description: 'Enter Array of Shift Tag IDs',
			},
			{
				displayName: 'Evaluation Tag_IDs[]',
				name: 'evaluation_tag_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Array of EvaluationTag IDs',
			},
		],
	},
];
