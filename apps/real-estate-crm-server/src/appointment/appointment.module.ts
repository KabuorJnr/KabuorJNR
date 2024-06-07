import { Module } from "@nestjs/common";
import { AppointmentModuleBase } from "./base/appointment.module.base";
import { AppointmentService } from "./appointment.service";
import { AppointmentController } from "./appointment.controller";
import { AppointmentResolver } from "./appointment.resolver";

@Module({
  imports: [AppointmentModuleBase],
  controllers: [AppointmentController],
  providers: [AppointmentService, AppointmentResolver],
  exports: [AppointmentService],
})
export class AppointmentModule {}
