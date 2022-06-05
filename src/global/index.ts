import { App } from 'vue';
import registerFilter from '@/global/register-filter';
export default function globalRegister(app: App): void {
  app.use(registerFilter);
}
