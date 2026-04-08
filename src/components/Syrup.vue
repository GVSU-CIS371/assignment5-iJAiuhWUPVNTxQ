<template>
  <div
    class="syrup"
    :style="{ '--texture-color': beverageStore.currentSyrup?.color }"
  ></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";

const beverageStore = useBeverageStore();
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
  background: repeating-linear-gradient(
    45deg,
    var(--texture-color),
    var(--texture-color) 10px,
    rgba(225, 207, 149, 1) 10px,
    rgba(225, 207, 149, 1) 20px
  );
}
</style>
