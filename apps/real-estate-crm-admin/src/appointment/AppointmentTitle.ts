import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "id";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.id?.toString() || String(record.id);
};
