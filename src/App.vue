<template>
  <div id="app">
    <router-view/>
    <router-view name="tabbar" />
  </div>
</template>

<script>
// import Vconsole from "vconsole";
// let vConsole = new Vconsole();
export default {
  name: "App",
  created() {},
  mounted() {
    let _this = this;
    window.onload = function() {
      var api = {};
      var e = navigator.userAgent;
      var t = "";
      var o = e.match(/(ipod).*\s([\d_]+)/i);
      var n = e.match(/(ipad).*\s([\d_]+)/i);
      var i = e.match(/(iphone)\sos\s([\d_]+)/i);
      var a = e.match(/(android)\s([\d\.]+)/i);
      var t = "Unknown";
      a
        ? (t = "Android " + a[2])
        : i
          ? (t = "iPhone, iOS " + i[2].replace(/_/g, "."))
          : n
            ? (t = "iPad, iOS " + n[2].replace(/_/g, "."))
            : o && (t = "iPod, iOS " + o[2].replace(/_/g, "."));
      var r = t;
      var l = e.match(/MicroMessenger\/([\d\.]+)/i);
      (t = "Unknown"),
        l && l[1]
          ? ((t = l[1]), (r += ", WeChat " + t), (api.system = r))
          : (api.system = r);
      api.UA = e;
      setTimeout(function() {
        var e =
          window.performance ||
          window.msPerformance ||
          window.webkitPerformance;
        if (e && e.timing) {
          var t = e.timing;
          if (t.navigationStart) {
            api.navigationStart = t.navigationStart;
          }
          if (t.navigationStart && t.domainLookupStart) {
            api.navigation = t.domainLookupStart - t.navigationStart;
          }
          if (t.domainLookupEnd && t.domainLookupStart) {
            api.dns = t.domainLookupEnd - t.domainLookupStart;
          }
          if (t.connectEnd && t.connectStart) {
            api.tcp = t.connectEnd - t.connectStart;
          }
          if (t.responseStart && t.navigationStart) {
            api.null = t.responseStart - t.navigationStart;
          }
          if (t.responseStart && t.requestStart) {
            api.request = t.responseStart - t.requestStart;
          }
          if (t.responseEnd && t.responseStart) {
            api.response = t.responseEnd - t.responseStart;
          }
          if (t.domComplete && t.domLoading) {
            if (t.domContentLoadedEventStart && t.domLoading) {
              api.domComplete_domLoaded =
                t.domComplete -
                t.domLoading +
                "_" +
                (t.domContentLoadedEventStart - t.domLoading);
            } else {
              api.domComplete = t.domComplete - t.domLoading;
            }
          }
          if (t.loadEventEnd && t.loadEventStart) {
            api.loadEvent = t.loadEventEnd - t.loadEventStart;
          }
          if (t.navigationStart && t.loadEventEnd) {
            api.total = t.loadEventEnd - t.navigationStart;
            api.total_DOM = t.domComplete - t.navigationStart;
          }
        }
        let resource = performance.getEntriesByType("resource");
        api.name = window.location.host;
        api.href = window.location.href;
        api.resource = {};
        for (const item in resource) {
          if (resource.hasOwnProperty(item)) {
            const element = resource[item];
            api.resource[item] = {};
            api.resource[item].name = element.name;
            api.resource[item].duration = element.duration;
            api.resource[item].initiatorType = element.initiatorType;
          }
        }
        _this.$api.article.login(api).then(res => {
          // 执行某些操作
          console.log(res.data);
        });
      }, 0);
    };
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
