<template>
  <div class="preserve">
      <div class="container">
    <span style="--i: 0">我是也笑</span>
    <span style="--i: 1">我是也笑</span>
    <span style="--i: 2">我是也笑</span>
    <span style="--i: 3">我是也笑</span>
    <span style="--i: 4">我是也笑</span>
    <span style="--i: 5">我是也笑</span>
    <span style="--i: 6">我是也笑</span>
    <span style="--i: 7">我是也笑</span>
    <span style="--i: 8">我是也笑</span>
    <span style="--i: 9">我是也笑</span>
    <span style="--i: 10">我是也笑</span>
    <span style="--i: 11">我是也笑</span>
  </div>
  </div>
</template>

<style scoped>
.preserve {
background-color: #000;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
}
.container {
  --size: 10rem;
  width: var(--size);
  position: relative;
  transform-style: preserve-3d;
  animation: _animate 8s linear infinite;
  
}

.container span {
  display: inline-block;
  text-align: center;
  letter-spacing: 1.5rem;
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  text-shadow: 0 0 1rem cyan;
  transform: rotateX(calc(var(--i) * 30deg)) translateZ(3rem);
}

@keyframes _animate {
  0% {
    transform: rotate3d(1, 0, 1, 0deg);
  }

  100% {
    transform: rotate3d(1, 0, 1, 360deg);
  }
}
</style>