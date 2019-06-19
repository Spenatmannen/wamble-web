<template>
  <section class="not-found">
    <div class="not-found__caption">
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  </section>
</template>


<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.not-found {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/images/404.gif");
  background-repeat: no-repeat;
  background-size: cover;

  &__caption {
    display: flex;
    align-items: center;
    flex-direction: column;

    height: 100%;
    widows: 100%;
    color: $color-white;
    padding-bottom: 12%;

    h1 {
      font-size: 8rem;
      margin: auto 0 0 0;
    }

    h2 {
      margin: 0 0 auto 0;
    }
  }
}
</style>