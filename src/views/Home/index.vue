<template>
  <div class="home">
    <img 
      alt="Vue logo" 
      src="https://iiong.com/wp-content/uploads/2018/09/1_-PlqbnwqjqJi_EVmrhmuDQ-360x240.jpeg">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>{{name}}</h1>
    <van-button 
      :loading="loading" 
      type="primary" 
      @click="Ajax">Ajax</van-button>
    <van-button 
      type="primary" 
      @click="ToPage">ToPage</van-button>
      <van-button 
      :loading="loading" 
      type="primary" 
      @click="ApiAjax">Ajax</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button } from "vant";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    [Button.name]: Button
  },
  data: function() {
    return {
      name: "Leslie",
      loading: false
    };
  },
  methods: {
    Ajax: function() {
      this.loading = true;
      this.$api.article
        .articleList({
          api: 123
        })
        .then(res => {
          // 执行某些操作
          console.log(res.data);
          this.name = res.data.name;
          this.loading = false;
        });
    },
    ToPage: function() {
      let UA = navigator.userAgent;
      console.log(UA);
      if (UA.indexOf("Android") > -1) {
        console.log("Android");
        this.$router.push("goods");
      } else {
        console.log("Iphone");
        this.$router.push("goods");
      }
    },
    ApiAjax: function() {
      this.loading = true;
      this.$api.article.getdata().then(res => {
        // 执行某些操作
        console.log(res.data);
        this.loading = false;
      });
    }
  }
};
</script>
