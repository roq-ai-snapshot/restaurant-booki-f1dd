import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time_update: yup.date().required(),
  table_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
