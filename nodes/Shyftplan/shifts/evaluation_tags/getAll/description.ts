import { INodeProperties } from 'n8n-workflow';
        export const getApiV1ShiftsShiftIdEvaluationTagsGetAllFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'getApiV1ShiftsShiftIdEvaluationTags' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Company ID', 
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
                            'getApiV1ShiftsShiftIdEvaluationTags' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Shift ID', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1ShiftsShiftIdEvaluationTags'],
                    resource: ['shifts'],
                },
            },
            options: [	],
    },];