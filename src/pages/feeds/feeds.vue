<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="logo">
          <logo/>
        </div>
        <div class="navigation">
          <headerNav/>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li v-for="item in trendings" :id="item.id" :key="item.id" class="stories__item">
            <user-stories
              :data=getStoryData(item)
              @onPress="$router.push({name: 'stories', params: {id: item.id}})"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="container">
    <ul class="post-list">
      <li v-for="n in 3" :key="n" class="post__item">
        <post/>
      </li>
    </ul>
    <!--<slider />-->
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { logo } from '../../icons/variants'
import { userStories } from '../../components/userStories'
import { post } from '../../components/post'
import { headerNav } from '../../components/headerNav'
// import { slider } from '../../components/slider'
// import * as api from '../../api'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    userStories,
    post,
    headerNav
    // slider
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data
    })
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        userLogin: obj.owner?.login,
        content: obj.readme
      }
    }
  },
  async created () {
    try {
      await this.fetchTrendings()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style lang="scss" scoped src="./feeds.scss"></style>
