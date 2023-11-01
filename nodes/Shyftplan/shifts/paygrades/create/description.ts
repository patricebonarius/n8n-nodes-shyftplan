import { INodeProperties } from 'n8n-workflow';
        export const postApiV1ShiftsShiftIdPaygradesCreateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1ShiftsShiftIdPaygrades' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Company id', 
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
                            'postApiV1ShiftsShiftIdPaygrades' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Paygrade type id', 
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
                            'postApiV1ShiftsShiftIdPaygrades' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Value of paygrade', 
                },
{
                    displayName: 'Shift ID', 
                    name: 'shift_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1ShiftsShiftIdPaygrades' 
                        ], 
                        resource: [
                            'shifts'
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
                    operation: ['postApiV1ShiftsShiftIdPaygrades'],
                    resource: ['shifts'],
                },
            },
            options: [{
                    displayName: 'Parent Paygrade_ID', 
                    name: 'parent_paygrade_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'Parent paygrade id', 
                },
	],
    },];