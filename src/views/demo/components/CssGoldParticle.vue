<template>
  <div class="container"></div>
</template>

<style scoped>
.container {
  --size: 5rem;
  width: var(--size);
  height: var(--size);
  box-sizing: border-box;
  border: calc(var(--size) * 0.025) solid #4caf50;
  border-right-width: calc(var(--size) * 0.25);
  border-bottom-width: calc(var(--size) * 0.25);
  border-radius: 50% 0;
  animation: _rotate 2s linear infinite;
}

.container::before {
  content: "";
  width: calc(var(--size) * 0.1);
  height: calc(var(--size) * 0.1);
  border-radius: 50%;
  background: gold;
  box-shadow: 0 0 calc(var(--size) * 0.1) gold, 0 0 calc(var(--size) * 0.2) gold,
    0 0 calc(var(--size) * 0.3) gold;
  position: absolute;
  animation: _move 2s linear infinite;
}

@keyframes _rotate {
  0%,
  100% {
    transform: rotate(20deg);
  }

  25%,
  75% {
    transform: rotate(45deg);
  }

  50% {
    transform: rotate(70deg);
  }
}

@keyframes _move {
  0%,
  100% {
    left: 0;
    bottom: 0;
  }

  24%,
  75% {
    left: calc(var(--size) * 0.525);
    bottom: 0;
  }

  25%,
  74% {
    left: calc(var(--size) * 0.625);
    bottom: calc(var(--size) * 0.1);
  }

  50% {
    left: calc(var(--size) * 0.625);
    bottom: calc(var(--size) * 0.625);
  }
}
</style>