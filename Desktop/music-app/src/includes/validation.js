import {
  Form as VeeForm, Field as VeeField, defineRule, ErrorMessage,
} from 'vee-validate';
import { required } from '@vee-validate/rules';

export default {
  install(app) {
    app.component(VeeForm);
    app.component(VeeField);
    app.component('ErrorMessage', ErrorMessage);
    defineRule('required', required);
  },
};
