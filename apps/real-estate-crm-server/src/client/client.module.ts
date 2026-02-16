import { Module } from "@nestjs/common";
import { ClientModuleBase } from "./base/client.module.base";
import { ClientService } from "./client.service";
import { ClientController } from "./client.controller";
import { ClientResolver } from "./client.resolver";

@Module({
  imports: [ClientModuleBase],
  controllers: [ClientController],
  providers: [ClientService, ClientResolver],
  exports: [ClientService],
})
export class ClientModule {}
