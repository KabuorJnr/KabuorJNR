import { Module } from "@nestjs/common";
import { AgentAssignmentModuleBase } from "./base/agentAssignment.module.base";
import { AgentAssignmentService } from "./agentAssignment.service";
import { AgentAssignmentController } from "./agentAssignment.controller";
import { AgentAssignmentResolver } from "./agentAssignment.resolver";

@Module({
  imports: [AgentAssignmentModuleBase],
  controllers: [AgentAssignmentController],
  providers: [AgentAssignmentService, AgentAssignmentResolver],
  exports: [AgentAssignmentService],
})
export class AgentAssignmentModule {}
