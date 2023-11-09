import { INodeProperties } from 'n8n-workflow';
        export const getApiV1AssignmentGroupsGetAllFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'number', 
                    default: '',
                    placeholder: '',
                    description: "Enter Company ID",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'getApiV1AssignmentGroups' 
                            ], 
                            resource: [
                                'assignment_groups'
                            ], 
                        },
                    }, 
                },
{
            displayName: 'Additional Fields',
            name: 'additionalFields',
            type: 'collection',
            placeholder: 'Add Field',
            default: {},
            displayOptions: {
                show: {
                    operation: ['getApiV1AssignmentGroups'],
                    resource: ['assignment_groups'],
                },
            },
            options: [{
                            displayName: 'Page', 
                            name: 'page',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Pages starts with 1", 
                        },
{
                            displayName: 'Per Page', 
                            name: 'per_page',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Between 1 and 1000", 
                        },
{
                            displayName: 'Updated After', 
                            name: 'updated_after',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Return all records which are updated after", 
                        },
{
                            displayName: 'Created After', 
                            name: 'created_after',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Return all records which are created after", 
                        },
{
                            displayName: 'Updated Before', 
                            name: 'updated_before',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Return all records which are updated before", 
                        },
{
                            displayName: 'Created Before', 
                            name: 'created_before',
                            type: 'string', 
                            default: '',
                            placeholder: '',
                            description: "Return all records which are created before", 
                        },
{
                            displayName: 'ID', 
                            name: 'id',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Filter for single AssignmentGroup ID", 
                        },
{
                            displayName: 'IDs[]', 
                            name: 'idsSTARTEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Filter an array of AssignmentGroup ID", 
                        },
{
                            displayName: 'Shiftplan ID', 
                            name: 'shiftplan_id',
                            type: 'number', 
                            default: '',
                            placeholder: '',
                            description: "Filter for single Shiftplan ID", 
                        },
{
                            displayName: 'Shiftplan IDs[]', 
                            name: 'shiftplan_idsSTARTEND',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Filter an array of Shiftplan ID", 
                        },
	],
    },];