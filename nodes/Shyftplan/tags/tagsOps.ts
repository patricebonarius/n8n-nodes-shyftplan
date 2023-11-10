import { INodeProperties } from 'n8n-workflow';import { postApiV1TagsCreateFields } from './create/description';import { getApiV1TagsGetAllFields } from './getAll/description';import { putApiV1TagsIdUpdateFields } from './update/description';import { deleteApiV1TagsIdDeleteFields } from './delete/description';import { getApiV1TagsIdGetFields } from './get/description';import { putApiV1TagsIdRemoveFromShiftUpdateFields } from './remove_from_shift/update/description';import { putApiV1TagsIdAddToShiftUpdateFields } from './add_to_shift/update/description';

export const tagsOps: INodeProperties[] = [

        {
            displayName: 'Operation',
            name: 'operation',
            type: 'options',
            displayOptions: {
                show: {
                    resource: ['tags'],
                },
            },
            options: [{
                    name: 'Post Tags',
                    value: 'postApiV1Tags',
                    description: 'Create a new tag',
                    action: 'Post tags',
                }, {
                    name: 'Get Tags',
                    value: 'getApiV1Tags',
                    description: 'List all Tags',
                    action: 'Get tags',
                }, {
                    name: 'Put Tags By ID',
                    value: 'putApiV1TagsId',
                    description: 'Update existing tags',
                    action: 'Put tags by ID',
                }, {
                    name: 'Delete Tags By ID',
                    value: 'deleteApiV1TagsId',
                    description: 'Destroy a tag',
                    action: 'Delete tags by ID',
                }, {
                    name: 'Get Tags By ID',
                    value: 'getApiV1TagsId',
                    description: 'Return a Tag',
                    action: 'Get tags by ID',
                }, {
                    name: 'Put Tags By ID Remove From Shift',
                    value: 'putApiV1TagsIdRemoveFromShift',
                    description: 'Remove a tag from a shift',
                    action: 'Put tags by ID remove from shift',
                }, {
                    name: 'Put Tags By ID Add To Shift',
                    value: 'putApiV1TagsIdAddToShift',
                    description: 'Add a tag to a shift',
                    action: 'Put tags by ID add to shift',
                }, ],
    default: 'putApiV1TagsIdAddToShift',
    noDataExpression: true,
    },

            ... postApiV1TagsCreateFields,
            
            ... getApiV1TagsGetAllFields,
            
            ... putApiV1TagsIdUpdateFields,
            
            ... deleteApiV1TagsIdDeleteFields,
            
            ... getApiV1TagsIdGetFields,
            
            ... putApiV1TagsIdRemoveFromShiftUpdateFields,
            
            ... putApiV1TagsIdAddToShiftUpdateFields,
            ];
