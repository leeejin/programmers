function solution(n, lost, reserve) {
  let lost_st = lost.filter((l) => !reserve.includes(l)).sort();
  let reserve_st = reserve.filter((r) => !lost.includes(r)).sort();
  for (let i = 0; i < reserve_st.length; i++) {
    if (lost_st.includes(reserve_st[i] - 1))
      //없는지
      lost_st = lost_st.filter((l) => l != reserve_st[i] - 1);
    else if (lost_st.includes(reserve_st[i] + 1))
      // 도난당한게 있는지
      lost_st = lost_st.filter((l) => l != reserve_st[i] + 1);
  }
  return n - lost_st.length;
}
