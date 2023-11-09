import { INodeProperties } from 'n8n-workflow';
import { postApiV1IndividualRotationsCreateFields } from './create/description';
import { getApiV1IndividualRotationsGetAllFields } from './getAll/description';
import { deleteApiV1IndividualRotationsIdDeleteFields } from './delete/description';
import { putApiV1IndividualRotationsIdUpdateFields } from './update/description';
import { getApiV1IndividualRotationsIdGetFields } from './get/description';

export const individual_rotationsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['individual_rotations'],
			},
		},
		options: [
			{
				name: 'Post Indivby IDual Rotations',
				value: 'postApiV1IndividualRotations',
				description: 'Create individual rotation',
				action: 'Post indivby IDual rotations',
			},
			{
				name: 'Get Indivby IDual Rotations',
				value: 'getApiV1IndividualRotations',
				description: 'Get collection of individual rotations',
				action: 'Get indivby IDual rotations',
			},
			{
				name: 'Delete Indivby IDual Rotations Id',
				value: 'deleteApiV1IndividualRotationsId',
				description: 'Delete individual rotation',
				action: 'Delete indivby IDual rotations id',
			},
			{
				name: 'Put Indivby IDual Rotations Id',
				value: 'putApiV1IndividualRotationsId',
				description: 'Update an individual roration rotation.',
				action: 'Put indivby IDual rotations id',
			},
			{
				name: 'Get Indivby IDual Rotations Id',
				value: 'getApiV1IndividualRotationsId',
				description: 'Shows an Individual rotation.',
				action: 'Get indivby IDual rotations id',
			},
		],
		default: 'getApiV1IndividualRotationsId',
		noDataExpression: true,
	},

	...postApiV1IndividualRotationsCreateFields,

	...getApiV1IndividualRotationsGetAllFields,

	...deleteApiV1IndividualRotationsIdDeleteFields,

	...putApiV1IndividualRotationsIdUpdateFields,

	...getApiV1IndividualRotationsIdGetFields,
];
