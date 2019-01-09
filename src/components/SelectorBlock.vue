<template>
  <div class="selector-box">
    <button v-on:click=getPOD($event) class="show-daily-pod">{{btn1}}</button>
    <button v-on:click=getAllPics($event) class="show-all">{{btn2}}</button>
    <section class = "image-box" >
      <section class="images" v-for="pic in pics" :key = "pic.id">
      <img v-bind:src="pic.picture" class="vue-tiful-picture" alt="a photo from nasa"/>
      </section>
     </section>
  </div>
</template>

<script>
import { fetchPics, fetchPOD } from "../utils/fetch";

export default {
  name: "selector-box",
  data() {
    return {
      day: "",
      month: "",
      btn1: "POD",
      btn2: "Monthly",
      query: "",
      pics: [],
      results: ""
    };
  },
  methods: {
    getAllPics: async function(event) {
      this.pics = await fetchPics();
    },
    getPOD: async function(event) {
      this.pics = await fetchPOD();
    }
  }
};
</script>

<style scoped>
button {
  width: 8rem;
  height: 2rem;
  border-radius: 15px;
  border: 2px solid black;
  box-shadow: 2px 2px 2px transparent;
  transition: 0.5s;
  cursor: pointer;
  outline: none;
  font-weight: 600;
}

.vue-tiful-picture {
  height: 15rem;
  width: 15rem;
  padding: 1rem;
  transition: 0.5s;
  cursor: pointer;
}

.vue-tiful-picture:hover {
  filter: brightness(1.5);
  transform: scale(1.2);
}

.image-box {
  margin: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

button:hover {
  border: 2px solid black;
  background-color: black;
  color: white;
}
</style>
