import { INodeProperties } from 'n8n-workflow';
export const postApiV1AbsencesIdAttachmentCreateFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1AbsencesIdAttachment'],
				resource: ['absences'],
			},
		},
		placeholder: '',
		description: 'Absence ID',
	},
	{
		displayName: 'File',
		name: 'file',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['postApiV1AbsencesIdAttachment'],
				resource: ['absences'],
			},
		},
		placeholder: '',
		description: 'Attachment file (<= 5MB)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['postApiV1AbsencesIdAttachment'],
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
