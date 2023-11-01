import { INodeProperties } from 'n8n-workflow';
        export const patchApiV1ShiftplansIdPatchFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    required: true,
                    default: '',
                    displayOptions: { 
                    show: { 
                        operation: [
                            'patchApiV1ShiftplansId' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Company ID related to the Shiftplan', 
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
                            'patchApiV1ShiftplansId' 
                        ], 
                        resource: [
                            'shiftplans'
                        ], 
                    },
                    },
                    placeholder: '',
                    description: 'Shiftplan ID', 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['patchApiV1ShiftplansId'],
                    resource: ['shiftplans'],
                },
            },
            options: [{
                    displayName: 'name', 
                    name: 'name',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Name of the Shiftplan', 
                },
{
                    displayName: 'Starts At', 
                    name: 'starts_at',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'Start of the Shiftplan', 
                },
{
                    displayName: 'Ends At', 
                    name: 'ends_at',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: 'End of the Shiftplan', 
                },
{
                    displayName: 'locked', 
                    name: 'locked',
                    type: 'boolean', 
                    default: false,
                    placeholder: '',
                    description: 'WhetherShould this Shiftplan be locked?', 
                },
	],
    },];