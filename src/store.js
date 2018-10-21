import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/firestore'
import config from '../config'
firebase.initializeApp(config)

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		db: firebase.firestore()
	},
	mutations: {

	},
	actions: {

	}
})