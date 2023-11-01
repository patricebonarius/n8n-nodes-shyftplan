import { INodeProperties } from 'n8n-workflow';
export const putApiV2AbsenceEntitlementsUpdateFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['putApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
		placeholder: '',
		description: 'Enter company ID',
	},
	{
		displayName: 'Employment ID',
		name: 'employment_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['putApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
		placeholder: '',
		description: 'Enter Employment ID',
	},
	{
		displayName: 'Absence Reason_ID',
		name: 'absence_reason_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['putApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
		placeholder: '',
		description: 'Absence Reason ID',
	},
	{
		displayName: 'Days',
		name: 'days',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['putApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
		placeholder: '',
		description: 'Number of Days for the Absence Reason',
	},
	{
		displayName: 'Year',
		name: 'year',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['putApiV2AbsenceEntitlements'],
				resource: ['absence_entitlements'],
			},
		},
		placeholder: '',
		description: 'Year to update',
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
