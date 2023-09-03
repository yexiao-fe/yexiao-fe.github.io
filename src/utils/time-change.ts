const timestampToTime = (timestamp: number) => {
  const date = new Date(timestamp * 1); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + "-";
  const month = date.getMonth() + 1;
  const M = (month < 10 ? "0" + month : month) + "-";
  const day = date.getDate();
  const D = (day < 10 ? "0" + day : day) + " ";
  const hour = date.getHours();
  const h = (hour < 10 ? "0" + hour : hour) + ":";
  const min = date.getMinutes();
  const m = (min < 10 ? "0" + min : min) + ":";
  const sec = date.getSeconds();
  const s = sec < 10 ? "0" + sec : sec;
  return Y + M + D + h + m + s;
};

const timeToTimestamp = (time: string) => {
  const date = new Date(time);
  return date.getTime();
};

export default { timestampToTime, timeToTimestamp };
