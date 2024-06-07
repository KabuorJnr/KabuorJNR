import { AgentAssignmentWhereInput } from "./AgentAssignmentWhereInput";
import { AgentAssignmentOrderByInput } from "./AgentAssignmentOrderByInput";

export type AgentAssignmentFindManyArgs = {
  where?: AgentAssignmentWhereInput;
  orderBy?: Array<AgentAssignmentOrderByInput>;
  skip?: number;
  take?: number;
};
