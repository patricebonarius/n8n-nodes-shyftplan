import { INodeProperties } from 'n8n-workflow';
import { getApiV1PaymentsStaffShiftIdGetFields } from './get/description';

export const paymentsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['payments'],
			},
		},
		options: [
			{
				name: 'Get Payments Staff Shift By ID',
				value: 'getApiV1PaymentsStaffShiftId',
				description: 'Return Payments for a staff_shift ID',
				action: 'Get payments staff shift by ID',
			},
		],
		default: 'getApiV1PaymentsStaffShiftId',
		noDataExpression: true,
	},

	...getApiV1PaymentsStaffShiftIdGetFields,
];
