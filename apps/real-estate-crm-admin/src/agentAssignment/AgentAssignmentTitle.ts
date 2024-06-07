import { AgentAssignment as TAgentAssignment } from "../api/agentAssignment/AgentAssignment";

export const AGENTASSIGNMENT_TITLE_FIELD = "agent";

export const AgentAssignmentTitle = (record: TAgentAssignment): string => {
  return record.agent?.toString() || String(record.id);
};
