import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1AbsenceReasonsIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Absence Reason ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1AbsenceReasonsId'],
				resource: ['absence_reasons'],
			},
		},
	},
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'ID of a Company',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1AbsenceReasonsId'],
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
				operation: ['deleteApiV1AbsenceReasonsId'],
				resource: ['absence_reasons'],
			},
		},
		options: [],
	},
];
