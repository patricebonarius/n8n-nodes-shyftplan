import { INodeProperties } from 'n8n-workflow';
export const postApiV1AbsencesIdAttachmentCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1AbsencesIdAttachment'],
				resource: ['absences'],
			},
		},
	},
	{
		displayName: 'File',
		name: 'file',
		type: 'json',
		default: '',
		placeholder: '',
		description: 'Attachment file (<= 5MB)',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1AbsencesIdAttachment'],
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
