<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <TitleBlock/>
    <SelectorBlock />
    <FooterBlock />
  </div>
</template>

<script>
import TitleBlock from "./components/TitleBlock";
import SelectorBlock from "./components/SelectorBlock";
import FooterBlock from "./components/FooterBlock";

export default {
  name: "App",
  components: {
    TitleBlock,
    SelectorBlock,
    FooterBlock
  }
};
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

.logo {
  height: 15rem;
  filter: drop-shadow(1px 1px 5px black);
}
</style>
