<template lang='pug'>
  button( @click="$emit('click', $event)" ).v-button
    slot
</template>
<script>
export default {}
</script>
<style lang='scss'>
.v-button {
  background-color: var(--primary-80);
  padding: 0.2em;
  min-width: 5em;
  border: 0px;
  border-bottom: 0.2em solid var(--primary-70);
  border-radius: 0.2em;
  cursor: pointer;
  font-family: "Cairo";
}

.v-button:active {
  border-bottom: 0px;
}
</style>