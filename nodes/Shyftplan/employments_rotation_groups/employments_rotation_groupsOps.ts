import { INodeProperties } from 'n8n-workflow';
import { getApiV1EmploymentsRotationGroupsGetAllFields } from './getAll/description';
import { postApiV1EmploymentsRotationGroupsCreateFields } from './create/description';
import { deleteApiV1EmploymentsRotationGroupsIdDeleteFields } from './delete/description';
import { putApiV1EmploymentsRotationGroupsIdUpdateFields } from './update/description';

export const employments_rotation_groupsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['employments_rotation_groups'],
			},
		},
		options: [
			{
				name: 'Get Employments Rotation Groups',
				value: 'getApiV1EmploymentsRotationGroups',
				description: 'Get collection of rotation groups of employees',
				action: 'Get employments rotation groups',
			},
			{
				name: 'Post Employments Rotation Groups',
				value: 'postApiV1EmploymentsRotationGroups',
				description: 'Create employments rotation groups',
				action: 'Post employments rotation groups',
			},
			{
				name: 'Delete Employments Rotation Groups By ID',
				value: 'deleteApiV1EmploymentsRotationGroupsId',
				description: 'Delete employments rotation group',
				action: 'Delete employments rotation groups by ID',
			},
			{
				name: 'Put Employments Rotation Groups By ID',
				value: 'putApiV1EmploymentsRotationGroupsId',
				description: 'Update an Employments rotation group',
				action: 'Put employments rotation groups by ID',
			},
		],
		default: 'putApiV1EmploymentsRotationGroupsId',
		noDataExpression: true,
	},

	...getApiV1EmploymentsRotationGroupsGetAllFields,

	...postApiV1EmploymentsRotationGroupsCreateFields,

	...deleteApiV1EmploymentsRotationGroupsIdDeleteFields,

	...putApiV1EmploymentsRotationGroupsIdUpdateFields,
];
