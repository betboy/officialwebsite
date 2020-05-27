<template>
  <div
    class="col-lg-3 col-md-4 col-sm-4 col-xs-12"
    style="padding-top: 2rem;padding-bottom: 2rem;"
  >
    <q-card style="width:360px;max-width:80%;margin-left:auto;margin-right:auto;" @click="goToUrl()">
        <div>
        <img
          :src="src"
          style="max-width: 100%;"
        >
        </div>
      <q-card-section
        style="font-size: 12px;white-space:normal;background-color:blue;"
      >
        <div style="text-align:center;color:white;" v-html="title"></div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ShowCard',
  props: ['project', 'title', 'imgcnt', 'url'],
  data: function () {
    return {
      src: '/statics/favicon-128x128.png',
      jpgnow: 1
    }
  },
  mounted () {
    const imgcnt = this.imgcnt
    const jpgnow = this.jpgnow
    const project = this.project
    this.src = `/statics/${project}/${jpgnow}.jpg`
    setInterval(() => {
      this.jpgnow = (this.jpgnow % imgcnt) + 1
      this.changeImg()
    }, 3000)
  },
  activated () {
    this.changeImg()
  },
  updated () {
    this.changeImg()
  },
  beforeDestroy () {
  },
  destroyed () {
  },
  methods: {
    changeImg () {
      const jpgnow = this.jpgnow
      const project = this.project
      this.src = this.getImg(project, jpgnow)
    },
    getImg (project, jpgnow) {
      return require('../statics/' + project + '/' + jpgnow + '.jpg')
    },
    goToUrl () {
      // window.open(this.url, '_blank')
    }
  }
}
</script>

<style>
.q-card-title {
  font-size: 12px;
  line-height: 1rem;
}
</style>
