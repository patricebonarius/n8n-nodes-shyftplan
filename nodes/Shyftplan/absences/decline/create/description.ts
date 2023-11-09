import { INodeProperties } from 'n8n-workflow';
export const postApiV1AbsencesIdDeclineCreateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Absence ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1AbsencesIdDecline'],
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
				operation: ['postApiV1AbsencesIdDecline'],
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
			{
				displayName: 'Refuse Message',
				name: 'refuse_message',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Message explaining why the absence is declined',
			},
		],
	},
];
