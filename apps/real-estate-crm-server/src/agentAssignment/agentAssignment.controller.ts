import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgentAssignmentService } from "./agentAssignment.service";
import { AgentAssignmentControllerBase } from "./base/agentAssignment.controller.base";

@swagger.ApiTags("agentAssignments")
@common.Controller("agentAssignments")
export class AgentAssignmentController extends AgentAssignmentControllerBase {
  constructor(protected readonly service: AgentAssignmentService) {
    super(service);
  }
}
