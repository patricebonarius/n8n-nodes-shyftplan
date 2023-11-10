import { INodeProperties } from 'n8n-workflow';import { postApiV1PositionsCreateFields } from './create/description';import { getApiV1PositionsGetAllFields } from './getAll/description';import { postApiV1PositionsIdDestroyPositionCreateFields } from './destroy_position/create/description';import { deleteApiV1PositionsIdDeleteFields } from './delete/description';import { putApiV1PositionsIdUpdateFields } from './update/description';import { getApiV1PositionsIdGetFields } from './get/description';import { putApiV1PositionsIdRemoveEmploymentUpdateFields } from './remove_employment/update/description';import { putApiV1PositionsIdAddEmploymentUpdateFields } from './add_employment/update/description';

export const positionsOps: INodeProperties[] = [

        {
            displayName: 'Operation',
            name: 'operation',
            type: 'options',
            displayOptions: {
                show: {
                    resource: ['positions'],
                },
            },
            options: [{
                    name: 'Post Positions',
                    value: 'postApiV1Positions',
                    description: 'Create a new Position',
                    action: 'Post positions',
                }, {
                    name: 'Get Positions',
                    value: 'getApiV1Positions',
                    description: 'List all Positions.',
                    action: 'Get positions',
                }, {
                    name: 'Post Positions By ID Destroy Position',
                    value: 'postApiV1PositionsIdDestroyPosition',
                    description: 'Permanently destroy a position',
                    action: 'Post positions by ID destroy position',
                }, {
                    name: 'Delete Positions By ID',
                    value: 'deleteApiV1PositionsId',
                    description: 'Soft delete a position (keep billing data)',
                    action: 'Delete positions by ID',
                }, {
                    name: 'Put Positions By ID',
                    value: 'putApiV1PositionsId',
                    description: 'Update a Position',
                    action: 'Put positions by ID',
                }, {
                    name: 'Get Positions By ID',
                    value: 'getApiV1PositionsId',
                    description: 'Return a Position.',
                    action: 'Get positions by ID',
                }, {
                    name: 'Put Positions By ID Remove Employment',
                    value: 'putApiV1PositionsIdRemoveEmployment',
                    description: 'Remove a employment from a position',
                    action: 'Put positions by ID remove employment',
                }, {
                    name: 'Put Positions By ID Add Employment',
                    value: 'putApiV1PositionsIdAddEmployment',
                    description: 'Add a employment to a position',
                    action: 'Put positions by ID add employment',
                }, ],
    default: 'putApiV1PositionsIdAddEmployment',
    noDataExpression: true,
    },

            ... postApiV1PositionsCreateFields,
            
            ... getApiV1PositionsGetAllFields,
            
            ... postApiV1PositionsIdDestroyPositionCreateFields,
            
            ... deleteApiV1PositionsIdDeleteFields,
            
            ... putApiV1PositionsIdUpdateFields,
            
            ... getApiV1PositionsIdGetFields,
            
            ... putApiV1PositionsIdRemoveEmploymentUpdateFields,
            
            ... putApiV1PositionsIdAddEmploymentUpdateFields,
            ];
