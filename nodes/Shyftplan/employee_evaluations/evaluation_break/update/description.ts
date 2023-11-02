import { INodeProperties } from "n8n-workflow";
export const putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakIdUpdateFields: INodeProperties[] =
  [
    {
      displayName: "Company ID",
      name: "company_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: [
            "putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId",
          ],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "Company ID",
    },
    {
      displayName: "Starts At",
      name: "starts_at",
      type: "string",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: [
            "putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId",
          ],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "Evaluation break starts from",
    },
    {
      displayName: "Ends At",
      name: "ends_at",
      type: "string",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: [
            "putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId",
          ],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "Evaluation break ends at",
    },
    {
      displayName: "Staff Shift_ID",
      name: "staff_shift_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: [
            "putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId",
          ],
          resource: ["employee_evaluations"],
        },
      },
      placeholder: "",
      description: "",
    },
    {
      displayName: "Evaluation Break_ID",
      name: "evaluation_break_id",
      type: "number",
      required: true,
      default: "",
      displayOptions: {
        show: {
          operation: [
            "putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId",
          ],
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
          operation: [
            "putApiV1EmployeeEvaluationsStaffShiftIdEvaluationBreakEvaluationBreakId",
          ],
          resource: ["employee_evaluations"],
        },
      },
      options: [],
    },
  ];
