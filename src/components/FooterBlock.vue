<template> 
  <div class="footer">
    <p class="me">Thanks Turing</p>
    <ul>
      <li>
        <a
          href="https://github.com/30ozSteak"
          target="_blank"
        >
          Github
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/30ozsteak"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ndambr/"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
    </ul>
    <h2>Nick Dambrosio</h2>
  </div>
</template>

<script>
export default {
  name: "FooterBlock",
  data() {
    return {};
  }
};
</script>

<style scoped>
.me {
  border-bottom: 2px solid black;
  display: inline-block;
  margin-bottom: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #6500b8;
  text-decoration: none;
  transition: 0.5s;
  border-bottom: 2px solid transparent;
}

a:hover {
  border-bottom: 2px solid #6500b8;
  filter: brightness(1.5);
}
</style>