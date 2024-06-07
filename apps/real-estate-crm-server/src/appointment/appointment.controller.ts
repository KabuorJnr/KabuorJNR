import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppointmentService } from "./appointment.service";
import { AppointmentControllerBase } from "./base/appointment.controller.base";

@swagger.ApiTags("appointments")
@common.Controller("appointments")
export class AppointmentController extends AppointmentControllerBase {
  constructor(protected readonly service: AppointmentService) {
    super(service);
  }
}
