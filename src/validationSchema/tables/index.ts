import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  number_update: yup.number().integer().required(),
  restaurant_id: yup.string().nullable().required(),
});
