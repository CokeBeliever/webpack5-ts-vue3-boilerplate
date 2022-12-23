<template>
  <div>
    <h1>{{ name }}</h1>
    <img src="@/assets/image/avatar.png" />
  </div>
</template>

<script setup>
const name = "CokeBeliever";
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  color: blue;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
}
</style>
