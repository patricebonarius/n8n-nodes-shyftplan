import { INodeProperties } from "n8n-workflow";
export const postApiV1EmployeeEvaluationsStaffShiftIdPaymentsCreateFields: INodeProperties[] =
  [
    {
      displayName: "Value",
      name: "value",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: ["postApiV1EmployeeEvaluationsStaffShiftIdPayments"],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "Payment value",
    },
    {
      displayName: "Company ID",
      name: "company_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: ["postApiV1EmployeeEvaluationsStaffShiftIdPayments"],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "ID of the Company",
    },
    {
      displayName: "Paygrade Type_ID",
      name: "paygrade_type_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: ["postApiV1EmployeeEvaluationsStaffShiftIdPayments"],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "ID of PaygradeType",
    },
    {
      displayName: "Staff Shift_ID",
      name: "staff_shift_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: ["postApiV1EmployeeEvaluationsStaffShiftIdPayments"],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "",
    },
    {
      displayName: "Additional Fields",
      name: "additionalFields",
      type: "collection",
      placeholder: "Add Field",
      default: {},
      displayOptions: {
        show: {
          operation: ["postApiV1EmployeeEvaluationsStaffShiftIdPayments"],
          resource: ["employee_evaluations"],
        },
      },
      options: [
        {
          displayName: "Parent Payment_ID",
          name: "parent_payment_id",
          type: "number",
          default: "",
          placeholder: "",
          description: "ID of Parent Payment",
        },
      ],
    },
  ];
