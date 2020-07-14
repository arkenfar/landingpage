<template>
  <v-img
    class="grow"
    contain
    max-height="200"
    width="100%"
    position="top right"
    :src="require('@/assets/bubbles1.png')"
    ><slot></slot
  ></v-img>
</template>

<script>
export default {
  name: "BaseBubble1",
};
</script>
