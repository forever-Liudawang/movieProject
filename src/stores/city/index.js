const state={
    nm:window.localStorage.getItem('nowCity')||"北京",
    id:10
    
};
const mutations={
    changeCityInfo(state,payload){
        state.nm=payload.nm;
        state.id=payload.cityId
    }
};
const actions={

};
export default {
    namespaced:true,
    state,
    mutations,
    actions
}
