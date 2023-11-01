import { INodeProperties } from 'n8n-workflow';
        export const getApiV1ShiftsShiftIdPaygradesGetAllFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1ShiftsShiftIdPaygrades' 
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
                    displayName: 'Shift ID', 
                    name: 'shift_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1ShiftsShiftIdPaygrades' 
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
                    operation: ['getApiV1ShiftsShiftIdPaygrades'],
                    resource: ['shifts'],
                },
            },
            options: [{
                    displayName: 'page', 
                    name: 'page',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'Pages starts with 1', 
                },
{
                    displayName: 'Per Page', 
                    name: 'per_page',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'Between 1 and 1000', 
                },
	],
    },];