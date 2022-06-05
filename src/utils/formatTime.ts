import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
//格式化UTC时间
const DATA_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export function formatUtcTime(
  utcTime: string,
  format: string = DATA_TIME_FORMAT
) {
  return dayjs.utc(utcTime).utcOffset(8).format(format);
}
