import * as graphql from "@nestjs/graphql";
import { AppointmentResolverBase } from "./base/appointment.resolver.base";
import { Appointment } from "./base/Appointment";
import { AppointmentService } from "./appointment.service";

@graphql.Resolver(() => Appointment)
export class AppointmentResolver extends AppointmentResolverBase {
  constructor(protected readonly service: AppointmentService) {
    super(service);
  }
}
