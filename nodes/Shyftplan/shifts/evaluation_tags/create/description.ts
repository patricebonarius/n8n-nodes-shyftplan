import { INodeProperties } from 'n8n-workflow';
        export const postApiV1ShiftsShiftIdEvaluationTagsCreateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1ShiftsShiftIdEvaluationTags' 
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
                            'postApiV1ShiftsShiftIdEvaluationTags' 
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
                    displayName: 'Tag ID', 
                    name: 'tag_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'postApiV1ShiftsShiftIdEvaluationTags' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Evaluation Tag ID', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['postApiV1ShiftsShiftIdEvaluationTags'],
                    resource: ['shifts'],
                },
            },
            options: [	],
    },];