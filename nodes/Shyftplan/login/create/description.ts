import { INodeProperties } from 'n8n-workflow';
export const postApiV1LoginCreateFields: INodeProperties[] = [
	{
		displayName: 'User[email]',
		name: 'userSTARTemailEND',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter User[email]',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Login'],
				resource: ['login'],
			},
		},
	},
	{
		displayName: 'User[password]',
		name: 'userSTARTpasswordEND',
		type: 'string',
		default: '',
		placeholder: '',
		description: 'Enter User[password]',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1Login'],
				resource: ['login'],
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
				operation: ['postApiV1Login'],
				resource: ['login'],
			},
		},
		options: [],
	},
];
