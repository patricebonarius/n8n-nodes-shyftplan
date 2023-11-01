import { INodeProperties } from 'n8n-workflow';
        export const patchApiV1ShiftsIdPatchFields: INodeProperties[] = [
        {
                    displayName: 'ID', 
                    name: 'id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'patchApiV1ShiftsId' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'ID of the Shift', 
                },
{
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'patchApiV1ShiftsId' 
                        ], 
                        resource: [
                            'shifts'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'ID of the Company', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['patchApiV1ShiftsId'],
                    resource: ['shifts'],
                },
            },
            options: [{
                    displayName: 'workers', 
                    name: 'workers',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: 'Number of workers', 
                },
{
                    displayName: 'untimed', 
                    name: 'untimed',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'WhetherStandby shift', 
                },
{
                    displayName: 'Auto Accept', 
                    name: 'auto_accept',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Auto accept shift requests as long as there are open slots on the shift', 
                },
{
                    displayName: 'Can Evaluate', 
                    name: 'can_evaluate',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'WhetherEmployees can create evaluations', 
                },
{
                    displayName: 'note', 
                    name: 'note',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Note for the shift', 
                },
{
                    displayName: 'Manager Note', 
                    name: 'manager_note',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Manager note for the Shift', 
                },
{
                    displayName: 'Tag IDs[]', 
                    name: 'tag_ids[]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Array of Shift Tag IDs', 
                },
{
                    displayName: 'Evaluation Tag_IDs[]', 
                    name: 'evaluation_tag_ids[]',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Array of EvaluationTag IDs', 
                },
	],
    },];