import { INodeProperties } from 'n8n-workflow';
export const postApiV1PayslipsCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1Payslips'],
				resource: ['payslips'],
			},
		},
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Date of Payslip',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Payslips'],
				resource: ['payslips'],
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
				operation: ['postApiV1Payslips'],
				resource: ['payslips'],
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
				operation: ['postApiV1Payslips'],
				resource: ['payslips'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter name of Payslip',
			},
		],
	},
];
