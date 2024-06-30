<template>
  <div class="header">
    <Header>
      <template #headline>
        <logo class="logo logo-stories" />
        <navigation :src="user.avatar_url" :username="user.login" />
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="item in trendings" :key="item.id">
            <story-user-item v-bind="getFeedData(item)"
              @onPress="$router.push({ name: 'stories', params: { initialSlide: item.id } })" />
          </li>
        </ul>
      </template>
    </Header>
  </div>
  <user-content />
</template>

<script>
import Header from '@/components/header/Header.vue'
import storyUserItem from '@/components/storyUserItem/storyUserItem.vue'
import stories from './data.json'
import userContent from '@/components/userContent/userContent.vue'
import navigation from '@/components/navigation/navigation.vue'
import logo from '@/components/logo/logo.vue'
import * as api from '../../components/api'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

export default {
  name: 'Feeds',
  components: {
    Header,
    storyUserItem,
    userContent,
    navigation,
    logo
  },

  setup () {
    const { dispatch, state } = useStore()

    onMounted(() => {
      dispatch('trendings/fetchTrendings')
      dispatch('starred/fetchStarred', { limit: 10 })
      dispatch('user/getUser')
    })

    const items = []
    const getFeedData = (item) => {
      return {
        avatar: item.owner.avatar_url,
        username: item.owner.login
      }
    }

    return {
      trendings: computed(() => state.trendings.data),
      starred: computed(() => state.starred.data),
      user: computed(() => state.user.data),
      items,
      stories,
      getFeedData
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
