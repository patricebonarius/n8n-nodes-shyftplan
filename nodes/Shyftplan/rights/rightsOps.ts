import { INodeProperties } from 'n8n-workflow';import { deleteApiV1RightsLocationsPositionPaymentManageRightDeleteFields } from './locations_position_payment_manage_right/delete/description';import { putApiV1RightsLocationsPositionPaymentManageRightUpdateFields } from './locations_position_payment_manage_right/update/description';import { deleteApiV1RightsLocationPaymentManageRightDeleteFields } from './location_payment_manage_right/delete/description';import { putApiV1RightsLocationPaymentManageRightUpdateFields } from './location_payment_manage_right/update/description';import { deleteApiV1RightsLocationsPositionPaymentShowRightDeleteFields } from './locations_position_payment_show_right/delete/description';import { putApiV1RightsLocationsPositionPaymentShowRightUpdateFields } from './locations_position_payment_show_right/update/description';import { deleteApiV1RightsLocationPaymentShowRightDeleteFields } from './location_payment_show_right/delete/description';import { putApiV1RightsLocationPaymentShowRightUpdateFields } from './location_payment_show_right/update/description';import { deleteApiV1RightsLocationsPositionShiftManageRightDeleteFields } from './locations_position_shift_manage_right/delete/description';import { putApiV1RightsLocationsPositionShiftManageRightUpdateFields } from './locations_position_shift_manage_right/update/description';import { deleteApiV1RightsLocationShiftManageRightDeleteFields } from './location_shift_manage_right/delete/description';import { putApiV1RightsLocationShiftManageRightUpdateFields } from './location_shift_manage_right/update/description';import { deleteApiV1RightsLocationsPositionShiftShowRightDeleteFields } from './locations_position_shift_show_right/delete/description';import { putApiV1RightsLocationsPositionShiftShowRightUpdateFields } from './locations_position_shift_show_right/update/description';import { deleteApiV1RightsLocationShiftShowRightDeleteFields } from './location_shift_show_right/delete/description';import { putApiV1RightsLocationShiftShowRightUpdateFields } from './location_shift_show_right/update/description';import { getApiV1RightsMyGetAllFields } from './my/getAll/description';import { getApiV1RightsGetAllFields } from './getAll/description';import { deleteApiV1RightsIdDeleteFields } from './delete/description';import { putApiV1RightsIdUpdateFields } from './update/description';

export const rightsOps: INodeProperties[] = [

        {
            displayName: 'Operation',
            name: 'operation',
            type: 'options',
            displayOptions: {
                show: {
                    resource: ['rights'],
                },
            },
            options: [{
                    name: 'Delete Rights Locations Position Payment Manage Right',
                    value: 'deleteApiV1RightsLocationsPositionPaymentManageRight',
                    description: 'Remove PaymentManageRight for LocationsPosition from employment by ID',
                    action: 'Delete rights locations position payment manage right',
                }, {
                    name: 'Put Rights Locations Position Payment Manage Right',
                    value: 'putApiV1RightsLocationsPositionPaymentManageRight',
                    description: 'Assign PaymentManageRight for LocationsPosition to employment',
                    action: 'Put rights locations position payment manage right',
                }, {
                    name: 'Delete Rights Location Payment Manage Right',
                    value: 'deleteApiV1RightsLocationPaymentManageRight',
                    description: 'Remove PaymentManageRight for Location from employment by ID',
                    action: 'Delete rights location payment manage right',
                }, {
                    name: 'Put Rights Location Payment Manage Right',
                    value: 'putApiV1RightsLocationPaymentManageRight',
                    description: 'Assign PaymentManageRight for Location to employment',
                    action: 'Put rights location payment manage right',
                }, {
                    name: 'Delete Rights Locations Position Payment Show Right',
                    value: 'deleteApiV1RightsLocationsPositionPaymentShowRight',
                    description: 'Remove PaymentShowRight for LocationsPosition from employment by ID',
                    action: 'Delete rights locations position payment show right',
                }, {
                    name: 'Put Rights Locations Position Payment Show Right',
                    value: 'putApiV1RightsLocationsPositionPaymentShowRight',
                    description: 'Assign PaymentShowRight for LocationsPosition to employment',
                    action: 'Put rights locations position payment show right',
                }, {
                    name: 'Delete Rights Location Payment Show Right',
                    value: 'deleteApiV1RightsLocationPaymentShowRight',
                    description: 'Remove PaymentShowRight for Location from employment by ID',
                    action: 'Delete rights location payment show right',
                }, {
                    name: 'Put Rights Location Payment Show Right',
                    value: 'putApiV1RightsLocationPaymentShowRight',
                    description: 'Assign PaymentShowRight for Location to employment',
                    action: 'Put rights location payment show right',
                }, {
                    name: 'Delete Rights Locations Position Shift Manage Right',
                    value: 'deleteApiV1RightsLocationsPositionShiftManageRight',
                    description: 'Remove ShiftManageRight for LocationsPosition from employment by ID',
                    action: 'Delete rights locations position shift manage right',
                }, {
                    name: 'Put Rights Locations Position Shift Manage Right',
                    value: 'putApiV1RightsLocationsPositionShiftManageRight',
                    description: 'Assign ShiftManageRight for LocationsPosition to employment',
                    action: 'Put rights locations position shift manage right',
                }, {
                    name: 'Delete Rights Location Shift Manage Right',
                    value: 'deleteApiV1RightsLocationShiftManageRight',
                    description: 'Remove ShiftManageRight for Location from employment by ID',
                    action: 'Delete rights location shift manage right',
                }, {
                    name: 'Put Rights Location Shift Manage Right',
                    value: 'putApiV1RightsLocationShiftManageRight',
                    description: 'Assign ShiftManageRight for Location to employment',
                    action: 'Put rights location shift manage right',
                }, {
                    name: 'Delete Rights Locations Position Shift Show Right',
                    value: 'deleteApiV1RightsLocationsPositionShiftShowRight',
                    description: 'Remove ShiftShowRight for LocationsPosition from employment by ID',
                    action: 'Delete rights locations position shift show right',
                }, {
                    name: 'Put Rights Locations Position Shift Show Right',
                    value: 'putApiV1RightsLocationsPositionShiftShowRight',
                    description: 'Assign ShiftShowRight for LocationsPosition to employment',
                    action: 'Put rights locations position shift show right',
                }, {
                    name: 'Delete Rights Location Shift Show Right',
                    value: 'deleteApiV1RightsLocationShiftShowRight',
                    description: 'Remove ShiftShowRight for Location from employment by ID',
                    action: 'Delete rights location shift show right',
                }, {
                    name: 'Put Rights Location Shift Show Right',
                    value: 'putApiV1RightsLocationShiftShowRight',
                    description: 'Assign ShiftShowRight for Location to employment',
                    action: 'Put rights location shift show right',
                }, {
                    name: 'Get Rights My',
                    value: 'getApiV1RightsMy',
                    description: 'List active for employment rights',
                    action: 'Get rights my',
                }, {
                    name: 'Get Rights',
                    value: 'getApiV1Rights',
                    description: 'List all rights',
                    action: 'Get rights',
                }, {
                    name: 'Delete Rights By ID',
                    value: 'deleteApiV1RightsId',
                    description: 'Remove right from employment by ID. If all stakeholder loses all stakeholder rights,that stakeholder becomes an employee.',
                    action: 'Delete rights by ID',
                }, {
                    name: 'Put Rights By ID',
                    value: 'putApiV1RightsId',
                    description: 'Assign right to employment by ID. If employee is assigned stakeholder right,that employee becomes a stakeholder.',
                    action: 'Put rights by ID',
                }, ],
    default: 'putApiV1RightsId',
    noDataExpression: true,
    },

            ... deleteApiV1RightsLocationsPositionPaymentManageRightDeleteFields,
            
            ... putApiV1RightsLocationsPositionPaymentManageRightUpdateFields,
            
            ... deleteApiV1RightsLocationPaymentManageRightDeleteFields,
            
            ... putApiV1RightsLocationPaymentManageRightUpdateFields,
            
            ... deleteApiV1RightsLocationsPositionPaymentShowRightDeleteFields,
            
            ... putApiV1RightsLocationsPositionPaymentShowRightUpdateFields,
            
            ... deleteApiV1RightsLocationPaymentShowRightDeleteFields,
            
            ... putApiV1RightsLocationPaymentShowRightUpdateFields,
            
            ... deleteApiV1RightsLocationsPositionShiftManageRightDeleteFields,
            
            ... putApiV1RightsLocationsPositionShiftManageRightUpdateFields,
            
            ... deleteApiV1RightsLocationShiftManageRightDeleteFields,
            
            ... putApiV1RightsLocationShiftManageRightUpdateFields,
            
            ... deleteApiV1RightsLocationsPositionShiftShowRightDeleteFields,
            
            ... putApiV1RightsLocationsPositionShiftShowRightUpdateFields,
            
            ... deleteApiV1RightsLocationShiftShowRightDeleteFields,
            
            ... putApiV1RightsLocationShiftShowRightUpdateFields,
            
            ... getApiV1RightsMyGetAllFields,
            
            ... getApiV1RightsGetAllFields,
            
            ... deleteApiV1RightsIdDeleteFields,
            
            ... putApiV1RightsIdUpdateFields,
            ];
