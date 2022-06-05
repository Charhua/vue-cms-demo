import { App } from 'vue';
import { formatUtcTime as _formatUtcTime } from '@/utils/formatTime';
export default function registerFilter(app: App) {
  app.config.globalProperties.$filters = {
    formatUtcTime(time: string) {
      return _formatUtcTime(time);
    }
  };
}
