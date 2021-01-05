<template>
  <div class="theme-container">

    <div class="theme-default-content">
      <h1>Page Not Found</h1>

      <p>
      <img 
       :src="$withBase('/images/k8dash-logo-stacked.png')" 
       alt="k8dash logo" width="15%" /></p>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        Back to k8dash home
      </RouterLink>
    </div>
  </div>

</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'

const msgs = [
  `We couldn't find that page.`,
  `We could not locate that page.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
