import { AppointmentWhereInput } from "./AppointmentWhereInput";
import { AppointmentOrderByInput } from "./AppointmentOrderByInput";

export type AppointmentFindManyArgs = {
  where?: AppointmentWhereInput;
  orderBy?: Array<AppointmentOrderByInput>;
  skip?: number;
  take?: number;
};
