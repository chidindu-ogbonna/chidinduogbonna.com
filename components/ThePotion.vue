<template>
  <div class="potion">
    <div class="potion__bottom">
      <div class="potion__top" />
      <div class="wave wave--left" />
      <div class="wave wave--right" />
      <div class="drops">
        <div v-for="i in 6" :key="i" class="drop" />
      </div>
    </div>
  </div>
</template>
