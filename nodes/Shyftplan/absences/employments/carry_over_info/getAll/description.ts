import { INodeProperties } from 'n8n-workflow';
export const getApiV1AbsencesEmploymentsIdCarryOverInfoGetAllFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1AbsencesEmploymentsIdCarryOverInfo'],
				resource: ['absences'],
			},
		},
	},
	{
		displayName: 'Absence Reason_ID',
		name: 'absence_reason_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Absence Reason ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1AbsencesEmploymentsIdCarryOverInfo'],
				resource: ['absences'],
			},
		},
	},
	{
		displayName: 'Starts At',
		name: 'starts_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Start of the period',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1AbsencesEmploymentsIdCarryOverInfo'],
				resource: ['absences'],
			},
		},
	},
	{
		displayName: 'Ends At',
		name: 'ends_at',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'End of the period',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1AbsencesEmploymentsIdCarryOverInfo'],
				resource: ['absences'],
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
				operation: ['getApiV1AbsencesEmploymentsIdCarryOverInfo'],
				resource: ['absences'],
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
		],
	},
];
