<template>
  <NuxtLayout></NuxtLayout>
  <nx3-base-button class="animate__animated animate__bounce">{{
    $hello('website 1')
  }}</nx3-base-button>
  <main>
    <NuxtPage />
  </main>
</template>
