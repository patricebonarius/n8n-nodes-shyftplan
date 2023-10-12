import { INodeProperties } from 'n8n-workflow';

export const employmentsDeleteFields: INodeProperties[] = [
	{
		displayName: 'Company Number',
		name: 'company_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['employments_delete_by_ID'],
				resource: ['employment'],
			},
		},
		default: '',
		placeholder: 'company_id',
		description: 'Please enter the company number',
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				operation: ['employments_delete_by_ID'],
				resource: ['employment'],
			},
		},
		default: '',
		placeholder: '12345',
		description: 'Please enter employment ID',
	},
];

//exports.employmentsDeleteFields = employmentsDeleteFields;
