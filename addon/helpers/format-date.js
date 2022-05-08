import { helper } from '@ember/component/helper';

export default helper(function formatDate(params) {
  let [date] = params;

  if (!date) {
    return;
  }

  return new Intl.DateTimeFormat().format(date, { dateStyle: 'full' });
});
