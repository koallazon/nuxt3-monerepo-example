<template>
  <header>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <slot />
  </header>
</template>

<style scoped>
header {
  padding: 1.5rem;
  margin-bottom: 15px;
  background-color: #ccc;
}
header nav {
  display: flex;
  gap: 10px;
}
header nav a {
  color: #000;
  text-decoration: none;
}
header nav a:hover {
  font-weight: 700;
  color: blue;
}
</style>
