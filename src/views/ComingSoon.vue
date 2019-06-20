<template>
  <section class="body">
    <div class="overlay"></div>
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="../assets/images/wine-pouring.mp4" type="video/mp4">
    </video>
    <div class="ribbon">
      <div class="ribbon-bg"></div>
      <div class="ribbon__container">
        <div class="ribbon__content">
          <h1>Kommer snart!</h1>
          <p>
            Efter stor efterfrågan har jag bestämt mig för att skapa en webbaserad plattform för
            <b>Vinlotteriet</b>! Under utvecklingstiden kommer den här temporära sidan visas.
          </p>
        </div>
      </div>
    </div>
    <div class="icon__container" v-on:click="github($event)">
      <svg class="icon icon-github">
        <use xlink:href="../assets/icons/symbol-defs.svg#icon-github"></use>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: "ComingSoon",
  methods: {
    github: function(event) {
      return window.open("https://github.com/Jowa1307/wamble-web");
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/_mixins.scss";

.body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
  height: 100%;
  min-height: 35rem;
  position: relative;
  font-family: "Source Sans Pro";
  font-weight: 300;
}

video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
}

.icon {
  display: inline-block;
  width: 6rem;
  height: 6rem;
  stroke-width: 0;
  fill: #2b2b2b;
  stroke: #2b2b2b;

  &__container {
    z-index: 200;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    padding: 0.5rem;
    background-color: rgba($color: white, $alpha: 0.5);
    border-radius: 2rem;
    transition: all 0.25s ease-in-out;
    box-shadow: 10px 10px 37px -18px rgba(0, 0, 0, 0.75);

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
      box-shadow: 10px 10px 37px -5px rgba(0, 0, 0, 0.75);
      background-color: rgba($color: white, $alpha: .8);
    }
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #295fa3b5;
  opacity: 0.5;
  z-index: 1;
}

.ribbon {
  height: 100%;
  min-height: 0;
  width: 50rem;
  position: relative;
  overflow: hidden;
  padding-bottom: 0;
  z-index: 2;

  @include respond(phone) {
    width: 100%;
  }

  &-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    min-height: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.68);
    transform: skewX(-8deg);
    transform-origin: top right;

    @include respond(phone) {
      transform-origin: bottom left;
      transform: skewY(-8deg);
      height: 50%;
    }
  }

  &__container {
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;

    @include respond(phone) {
      height: 50%;
    }
  }

  &__content {
    z-index: 100;
    color: rgb(192, 192, 192);
    margin: 0 10rem 0 7rem;

    h1 {
      font-size: 3.7rem;
      font-family: Merriweather;
      font-weight: 700;
    }

    p {
      font-size: 1.5rem;
      font-family: "Source Sans Pro";
      font-weight: 300;

      margin-bottom: 6rem;
    }
  }
}
</style>
