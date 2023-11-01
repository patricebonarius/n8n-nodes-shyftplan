import { INodeProperties } from 'n8n-workflow';
        export const postApiV1EmploymentsIdPaygradesCreateFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmploymentsIdPaygrades' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Employment id', 
                },
{
                    displayName: 'Paygrade Type_ID', 
                    name: 'paygrade_type_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmploymentsIdPaygrades' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Paygrade Type ID', 
                },
{
                    displayName: 'value', 
                    name: 'value',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmploymentsIdPaygrades' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Paygrade value', 
                },
{
                    displayName: 'Update Paygrades', 
                    name: 'update_paygrades',
                    type: 'boolean', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmploymentsIdPaygrades' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Update paygrades on shifts', 
                },
{
                    displayName: 'Update Force', 
                    name: 'update_force',
                    type: 'boolean', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmploymentsIdPaygrades' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Paygrade value', 
                },
{
                    displayName: 'Update All', 
                    name: 'update_all',
                    type: 'boolean', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1EmploymentsIdPaygrades' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Paygrade value', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['postApiV1EmploymentsIdPaygrades'],
                    resource: ['employments'],
                },
            },
            options: [{
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: '', 
                },
{
                    displayName: 'Employments Position_ID', 
                    name: 'employments_position_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'EmploymentsPosition ID to add paygrade for particular position to the employment', 
                },
{
                    displayName: 'Monthly Paygrade', 
                    name: 'monthly_paygrade',
                    type: 'boolean', 
                    default: '',
                    placeholder: '',
                    description: 'Add to Monthly Paygrade of employment if true', 
                },
{
                    displayName: 'Parent Paygrade_ID', 
                    name: 'parent_paygrade_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'Parent paygrade ID to which a bonus paygrade to be added', 
                },
{
                    displayName: 'Update Start_date', 
                    name: 'update_start_date',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Paygrade value', 
                },
{
                    displayName: 'Update End_date', 
                    name: 'update_end_date',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Paygrade value', 
                },
	],
    },];