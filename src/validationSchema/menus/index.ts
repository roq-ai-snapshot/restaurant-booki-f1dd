import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name_update: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
});
