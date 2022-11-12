//filter.js 전역 data를 filter(함수로) 적용해서 data 보기좋게 변경하는 방법
//https://v2.vuejs.org/v2/guide/filters.html?redirect=true#ad
export function formatDate(value) {
  const date = new Date(value);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month > 9 ? month : `0${month}`;
  const day = date.getDate();
  let hours = date.getHours();
  hours = hours > 9 ? hours : `0${hours}`;
  const minutes = date.getMinutes();
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
