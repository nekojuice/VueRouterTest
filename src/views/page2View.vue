<script setup></script>
<template>
  <div>
    <!-- 路徑必須完全滿足 -->
    <!-- http://localhost:5173/page2/cat/a -->
    <p>userid: {{ this.$route.params.userid }}</p>
    <p>subid: {{ $route.params.subid }}</p>
  </div>
</template>

<style scoped></style>
