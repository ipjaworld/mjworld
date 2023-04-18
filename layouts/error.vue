<template>
    <div>
      <h1 v-if="error.statusCode === 404">페이지를 찾을 수 없습니다</h1>
      <h1 v-else>오류 발생: {{ error.statusCode }}</h1>
      <nuxt-link to="/">홈페이지로 돌아가기</nuxt-link>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name : "ErrorPage",
    props: ['error'],
  };
  </script>