import { INodeProperties } from 'n8n-workflow';
export const putApiV1EmploymentsRotationGroupsIdUpdateFields: INodeProperties[] = [
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
				operation: ['putApiV1EmploymentsRotationGroupsId'],
				resource: ['employments_rotation_groups'],
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
				operation: ['putApiV1EmploymentsRotationGroupsId'],
				resource: ['employments_rotation_groups'],
			},
		},
		options: [
			{
				displayName: 'Starts At',
				name: 'starts_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Employmnets rotation group valid from',
			},
			{
				displayName: 'Ends At',
				name: 'ends_at',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Employmnets rotation group ends at',
			},
			{
				displayName: 'Strategy To_unassign_from_shifts',
				name: 'strategy_to_unassign_from_shifts',
				type: 'string',
				default: '',
				placeholder: '',
				description:
					'When ends_at is provided, it is possible to unassign employee from shifts after ends_at There are two strategies: all and rotation_group. When all is passed, employee is unassigned from all shifts after end_at. When rotation_group is passed, employee is unassigned from all shifts of the rotation group after ends_at. Employee is unassigned in the background.',
			},
		],
	},
];
