import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftsShiftIdEvaluationTagsCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1ShiftsShiftIdEvaluationTags'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Shift ID',
		name: 'shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shift ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsShiftIdEvaluationTags'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Tag ID',
		name: 'tag_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Evaluation Tag ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftsShiftIdEvaluationTags'],
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
				operation: ['postApiV1ShiftsShiftIdEvaluationTags'],
				resource: ['shifts'],
			},
		},
		options: [],
	},
];
