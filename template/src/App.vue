<template>
  <div id="app">
    <router-view/>
    <Loading></Loading>
    <Notification></Notification>
  </div>
</template>

<script>
// 等待组件
import Loading from '@/components/util/load'
// home单元组件
import Notification from '@/components/util/Notification'
export default {
  name: 'app',
  components: {
    Loading,
    Notification
  }
}
</script>

<style>
/* 基本配置开始 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul, ol {
  list-style: none;
}
a {
  text-decoration: none;
}
/* 基本配置结束 */
</style>
