function modifyTime(time) {
  const res = time.replace('T', ' ');
  return res.slice(0, 19);
}

export default modifyTime;
