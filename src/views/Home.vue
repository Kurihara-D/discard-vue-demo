<template>
  <div class="home">
    <p>{{ message }}</p>
    <img alt="Vue logo" src="../assets/logo.png" @click="increment">
    <HelloWorld :msg="`Welcome to Your Vue.js + TypeScript App ${this.counter}`"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private get counter(): number {
    return this.$store.getters.getCounter()
  }
  private get message(): string {
    return this.$store.getters.getMessage()
  }

  private increment(): void {
    this.$store.dispatch('incrementAction')
    this.$store.dispatch('getMessageAction')
  }
}
</script>
