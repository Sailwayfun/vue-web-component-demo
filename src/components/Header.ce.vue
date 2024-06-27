<script setup>
const props = defineProps({
  mode: {
    type: String,
    default: "light", // light or dark
  },
});

const emit = defineEmits(["modechange"]);
</script>

<template>
  <header :class="['header-bar', props.mode]">
    <button @click="emit('modechange', { event: 'click' })">click</button>
    {{ props }}
  </header>
</template>

<style>
.header-bar {
  width: 100%;
  height: 30px;
  font-size: 30px;
  box-shadow: 0 6px 5px rgba(0, 0, 0, 0.323);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
}
.light {
  background-color: darksalmon;
  color: #000;
}
.dark {
  background-color: #4e4e4e;
  color: white;
}
</style>
