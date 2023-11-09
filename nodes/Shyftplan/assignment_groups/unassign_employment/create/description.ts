import { INodeProperties } from 'n8n-workflow';
        export const postApiV1AssignmentGroupsIdUnassignEmploymentCreateFields: INodeProperties[] = [
        {
                    displayName: 'Company ID', 
                    name: 'company_id',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "Company ID",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'postApiV1AssignmentGroupsIdUnassignEmployment' 
                            ], 
                            resource: [
                                'assignment_groups'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'ID', 
                    name: 'id',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "AssignmentGroup ID",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'postApiV1AssignmentGroupsIdUnassignEmployment' 
                            ], 
                            resource: [
                                'assignment_groups'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Employment ID', 
                    name: 'employment_id',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "Employment ID",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'postApiV1AssignmentGroupsIdUnassignEmployment' 
                            ], 
                            resource: [
                                'assignment_groups'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'Start Date', 
                    name: 'start_date',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "Start Date to Filter shifts to in ISO 8601 format with time and UTC offset",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'postApiV1AssignmentGroupsIdUnassignEmployment' 
                            ], 
                            resource: [
                                'assignment_groups'
                            ], 
                        },
                    }, 
                },
{
                    displayName: 'End Date', 
                    name: 'end_date',
                    type: 'string', 
                    default: '',
                    placeholder: '',
                    description: "End Date to Filter shifts to in ISO 8601 format with time and UTC offset",
                    required: true,
                    displayOptions: { 
                        show: { 
                            operation: [
                                'postApiV1AssignmentGroupsIdUnassignEmployment' 
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
                    operation: ['postApiV1AssignmentGroupsIdUnassignEmployment'],
                    resource: ['assignment_groups'],
                },
            },
            options: [	],
    },];