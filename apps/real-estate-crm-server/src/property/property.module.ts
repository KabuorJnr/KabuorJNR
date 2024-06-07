import { Module } from "@nestjs/common";
import { PropertyModuleBase } from "./base/property.module.base";
import { PropertyService } from "./property.service";
import { PropertyController } from "./property.controller";
import { PropertyResolver } from "./property.resolver";

@Module({
  imports: [PropertyModuleBase],
  controllers: [PropertyController],
  providers: [PropertyService, PropertyResolver],
  exports: [PropertyService],
})
export class PropertyModule {}
