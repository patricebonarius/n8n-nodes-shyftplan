import { INodeProperties } from 'n8n-workflow';
        export const postApiV1AssignmentGroupsIdAssignEmploymentCreateFields: INodeProperties[] = [
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
                                'postApiV1AssignmentGroupsIdAssignEmployment' 
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
                                'postApiV1AssignmentGroupsIdAssignEmployment' 
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
                                'postApiV1AssignmentGroupsIdAssignEmployment' 
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
                                'postApiV1AssignmentGroupsIdAssignEmployment' 
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
                                'postApiV1AssignmentGroupsIdAssignEmployment' 
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
                    operation: ['postApiV1AssignmentGroupsIdAssignEmployment'],
                    resource: ['assignment_groups'],
                },
            },
            options: [{
                            displayName: 'Ignore Conflicts', 
                            name: 'ignore_conflicts',
                            type: 'json', 
                            typeOptions: {
                                multipleValues: true,
                                multipleValueButtonText: 'Add Tag',
                            },
                            default: '',
                            placeholder: '',
                            description: "Either true to ignore all conflicts listed below or an Array of specific conflicts to ignore Only warnings can be ignored, enforced conflicts will persist. Possible values are:<ul> <li>shifts_collision</li><li>absences_collision</li><li>locations_position_changed</li><li>minimum_break</li><li>maximum_working_hours</li><li>minimum_rest</li><li>maximum_earning</li><li>outside_employment_period</li><li>maximum_consecutive_working_days</li><li>restricted_shift_presets</li><li>unavailable</li><li>not_available</li></ul>", 
                        },
	],
    },];