export default {
  namespaced: true,
  state: {
    // 当前所在大栏目的英文
    Bigc_e: '',
    // 当前所在大栏目的中文
    Bigc_c: '',
    // 当前所在小栏目的英文
    Samllc_e: '',
    // 当前所在小栏目的中文
    Samllc_c: '',
  },
  mutations: {
    changeC(state, payloads) {
      state.Bigc_c = payloads.Bigc_c;
      state.Bigc_e = payloads.Bigc_e;
      state.Samllc_c = payloads.Samllc_c;
      state.Samllc_e = payloads.Samllc_e;
      console.log(state.Bigc_c);
    },
  },
  actions: {

  },
};
