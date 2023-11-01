import { INodeProperties } from 'n8n-workflow';
        export const deleteApiV1EmploymentsIdPaygradesPaygradeIdDeleteFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'deleteApiV1EmploymentsIdPaygradesPaygradeId' 
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
                    displayName: 'Update Paygrades', 
                    name: 'update_paygrades',
                    type: 'boolean', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'deleteApiV1EmploymentsIdPaygradesPaygradeId' 
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
                            'deleteApiV1EmploymentsIdPaygradesPaygradeId' 
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
                            'deleteApiV1EmploymentsIdPaygradesPaygradeId' 
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
                    displayName: 'Paygrade ID', 
                    name: 'paygrade_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'deleteApiV1EmploymentsIdPaygradesPaygradeId' 
                        ], 
                        resource: [
                            'employments'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: '', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['deleteApiV1EmploymentsIdPaygradesPaygradeId'],
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