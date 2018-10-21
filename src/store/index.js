import Vue from 'vue'
import Vuex from 'vuex'

import users from './users'
import conversations from './conversations'

import firebase from 'firebase/app'
import 'firebase/firestore'
import config from '../config'
firebase.initializeApp(config)

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		db: firebase.firestore()
	},
	modules: {
		users,
		conversations
	}
})