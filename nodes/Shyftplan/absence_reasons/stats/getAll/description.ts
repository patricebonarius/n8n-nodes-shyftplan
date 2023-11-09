import { INodeProperties } from 'n8n-workflow';
export const getApiV1AbsenceReasonsStatsGetAllFields: INodeProperties[] = [
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
				operation: ['getApiV1AbsenceReasonsStats'],
				resource: ['absence_reasons'],
			},
		},
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['getApiV1AbsenceReasonsStats'],
				resource: ['absence_reasons'],
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
				operation: ['getApiV1AbsenceReasonsStats'],
				resource: ['absence_reasons'],
			},
		},
		options: [
			{
				displayName: 'Starts At',
				name: 'starts_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Start of the search period',
			},
			{
				displayName: 'Ends At',
				name: 'ends_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'End of the search period',
			},
			{
				displayName: 'Location IDs[]',
				name: 'location_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Filter for an array Location ID',
			},
			{
				displayName: 'Attachment',
				name: 'attachment',
				type: 'boolean',
				default: false,
				placeholder: '',
				description:
					"Whether Filter for attached file'true' filters for only those absences which have attachment;'false' filters for only those absences which do not have attachment;'empty value' filters for all absences regardless of attachments",
			},
		],
	},
];
