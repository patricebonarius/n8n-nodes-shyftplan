import { INodeProperties } from 'n8n-workflow';
import { putApiV2AbsenceEntitlementsUpdateFields } from './update/description';
import { getApiV2AbsenceEntitlementsGetAllFields } from './getAll/description';

export const absence_entitlementsOps: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['absence_entitlements'],
			},
		},
		options: [
			{
				name: 'Put Absence Entitlements',
				value: 'putApiV2AbsenceEntitlements',
				description: 'Update Absence Entitlement',
				action: 'Put absence entitlements',
			},
			{
				name: 'Get Absence Entitlements',
				value: 'getApiV2AbsenceEntitlements',
				description: 'List all Absence Entitlements',
				action: 'Get absence entitlements',
			},
		],
		default: 'getApiV2AbsenceEntitlements',
		noDataExpression: true,
	},

	...putApiV2AbsenceEntitlementsUpdateFields,

	...getApiV2AbsenceEntitlementsGetAllFields,
];
