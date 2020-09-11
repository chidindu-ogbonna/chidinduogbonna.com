import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({ modules: ['app'] }).plugin(store)
}

// import VuexPersistence from 'vuex-persist'

// export default ({ store }) => {
//   new VuexPersistence({
//     /*  options */
//     modules: ['ui', 'authentication'],
//   }).plugin(store)
// }
