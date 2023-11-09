import { INodeProperties } from 'n8n-workflow';import { postApiV1AssignmentGroupsCreateFields } from './create/description';import { getApiV1AssignmentGroupsGetAllFields } from './getAll/description';import { postApiV1AssignmentGroupsIdUnassignEmploymentCreateFields } from './unassign_employment/create/description';import { putApiV1AssignmentGroupsIdUpdateFields } from './update/description';import { deleteApiV1AssignmentGroupsIdDeleteFields } from './delete/description';import { getApiV1AssignmentGroupsIdGetFields } from './get/description';import { postApiV1AssignmentGroupsIdAssignEmploymentCreateFields } from './assign_employment/create/description';import { putApiV1AssignmentGroupsIdRemoveShiftUpdateFields } from './remove_shift/update/description';import { putApiV1AssignmentGroupsIdAddShiftUpdateFields } from './add_shift/update/description';

export const assignment_groupsOps: INodeProperties[] = [

        {
            displayName: 'Operation',
            name: 'operation',
            type: 'options',
            displayOptions: {
                show: {
                    resource: ['assignment_groups'],
                },
            },
            options: [{
                    name: 'Post Assignment Groups',
                    value: 'postApiV1AssignmentGroups',
                    description: 'Create a new AssignmentGroup',
                    action: 'Post assignment groups',
                }, {
                    name: 'Get Assignment Groups',
                    value: 'getApiV1AssignmentGroups',
                    description: 'List all AssignmentGroups.',
                    action: 'Get assignment groups',
                }, {
                    name: 'Post Assignment Groups By ID Unassign Employment',
                    value: 'postApiV1AssignmentGroupsIdUnassignEmployment',
                    description: 'undefined',
                    action: 'Post assignment groups by ID unassign employment',
                }, {
                    name: 'Put Assignment Groups By ID',
                    value: 'putApiV1AssignmentGroupsId',
                    description: 'Update an existing AssignmentGroup',
                    action: 'Put assignment groups by ID',
                }, {
                    name: 'Delete Assignment Groups By ID',
                    value: 'deleteApiV1AssignmentGroupsId',
                    description: 'Delete an AssignmentGroup',
                    action: 'Delete assignment groups by ID',
                }, {
                    name: 'Get Assignment Groups By ID',
                    value: 'getApiV1AssignmentGroupsId',
                    description: 'Return an AssignmentGroup.',
                    action: 'Get assignment groups by ID',
                }, {
                    name: 'Post Assignment Groups By ID Assign Employment',
                    value: 'postApiV1AssignmentGroupsIdAssignEmployment',
                    description: 'undefined',
                    action: 'Post assignment groups by ID assign employment',
                }, {
                    name: 'Put Assignment Groups By ID Remove Shift',
                    value: 'putApiV1AssignmentGroupsIdRemoveShift',
                    description: 'Remove AssignmentGroup from a Shift',
                    action: 'Put assignment groups by ID remove shift',
                }, {
                    name: 'Put Assignment Groups By ID Add Shift',
                    value: 'putApiV1AssignmentGroupsIdAddShift',
                    description: 'Add AssignmentGroup to a Shift',
                    action: 'Put assignment groups by ID add shift',
                }, ],
    default: 'putApiV1AssignmentGroupsIdAddShift',
    noDataExpression: true,
    },

            ... postApiV1AssignmentGroupsCreateFields,
            
            ... getApiV1AssignmentGroupsGetAllFields,
            
            ... postApiV1AssignmentGroupsIdUnassignEmploymentCreateFields,
            
            ... putApiV1AssignmentGroupsIdUpdateFields,
            
            ... deleteApiV1AssignmentGroupsIdDeleteFields,
            
            ... getApiV1AssignmentGroupsIdGetFields,
            
            ... postApiV1AssignmentGroupsIdAssignEmploymentCreateFields,
            
            ... putApiV1AssignmentGroupsIdRemoveShiftUpdateFields,
            
            ... putApiV1AssignmentGroupsIdAddShiftUpdateFields,
            ];
