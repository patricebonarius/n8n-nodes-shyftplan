import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1IndividualRotationsIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1IndividualRotationsId'],
				resource: ['individual_rotations'],
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
				operation: ['deleteApiV1IndividualRotationsId'],
				resource: ['individual_rotations'],
			},
		},
		options: [],
	},
];
