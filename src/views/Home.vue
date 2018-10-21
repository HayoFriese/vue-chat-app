<template>
  <div class="home">
    <Initialize />
    <ConversationContainer
      v-for="id in convoIds"
      :conversation="conversations[id]"
      :id="id"
      :key="id"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Initialize from '@/components/Initialize'
import ConversationContainer from '@/components/ConversationContainer'
import { mapState } from 'vuex'

export default {
	name: 'home',
	components: {
		Initialize,
    	ConversationContainer
	},
	created() {
		this.checkDB();
	},
    computed: {
      ...mapState({
        conversations: state => state.conversations.all,
        convoIds: state => state.conversations.allIds
      })
    },
	methods: {
		checkDB(){
			/* eslint-disable no-console */
			console.log(this.$store.state.db);
			/* eslint-enable no-console */
		}
		
	}
}
</script>
