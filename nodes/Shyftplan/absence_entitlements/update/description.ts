import { INodeProperties } from 'n8n-workflow';
export const putApiV2AbsenceEntitlementsUpdateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Employment ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
	},
	{
		displayName: 'Absence Reason_ID',
		name: 'absence_reason_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Absence Reason ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
	},
	{
		displayName: 'Days',
		name: 'days',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Number of Days for the Absence Reason',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
	},
	{
		displayName: 'Year',
		name: 'year',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Year to update',
		required: true,
		displayOptions: {
			show: {
				operation: ['putApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
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
				operation: ['putApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
		options: [],
	},
];
