<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="you are a good man" @test-emit="onTestEmit"/> -->
    <HelloWorld msg="you are a good man" @sendparent="onTestEmit"/>
    <hr>
    <Decor message="春节快乐"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from "./components/HelloWorld.vue";
import Decor from "./components/Decor.vue";

@Component({
  components: {
    HelloWorld,
    Decor
  }
})
export default class App extends Vue {
  private onTestEmit(e:any){
    window.console.log(e)
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
