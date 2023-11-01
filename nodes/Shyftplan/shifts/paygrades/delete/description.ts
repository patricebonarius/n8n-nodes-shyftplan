import { INodeProperties } from 'n8n-workflow';
        export const deleteApiV1ShiftsShiftIdPaygradesIdDeleteFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'deleteApiV1ShiftsShiftIdPaygradesId' 
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
                            'deleteApiV1ShiftsShiftIdPaygradesId' 
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
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'deleteApiV1ShiftsShiftIdPaygradesId' 
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
                    operation: ['deleteApiV1ShiftsShiftIdPaygradesId'],
                    resource: ['shifts'],
                },
            },
            options: [	],
    },];