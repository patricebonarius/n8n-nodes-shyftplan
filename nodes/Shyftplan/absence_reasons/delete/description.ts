import { INodeProperties } from 'n8n-workflow';
export const absence_reasonsbyidDeleteFields: INodeProperties[] = [
	{
		displayName: 'Absence Reason ID.',
		name: 'id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasonsById_delete'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'Absence Reason ID',
	},
	{
		displayName: 'ID of a Company.',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['absence_reasonsById_delete'],
				resource: ['absence_reasons'],
			},
		},
		placeholder: '',
		description: 'ID of a Company',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['absence_reasonsById_delete'],
				resource: ['absence_reasons'],
			},
		},
		options: [],
	},
];
