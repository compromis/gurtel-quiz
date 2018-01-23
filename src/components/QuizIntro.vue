<template>
  <section class="intro container">
    <p><span class="intro-flair">QUIZ</span></p>
    <h3 class="intro-heading">
      <span class="intro-heading-text">Gürtel</span>
    </h3>
    <h2 class="intro-subheading">Quant saps?</h2>
    <p class="intro-description">Comença el judici del cas Gürtel, una de les trames de corrupció política més importants del nostre país que demostra la vinculació del PP con “las amiguitos del alma”, i volem saber si estàs tan al dia com et penses.</p>
    <p class="intro-action"><a href="#q1" v-scroll-to="'#q1'">Comença</a></p>
  </section>
</template>

<script>
export default {
  name: 'quiz-intro'
}
</script>

<style lang="scss" scoped>
@import '../variables';

.intro {
  padding: 2.5rem;
  text-align: center;
}

.intro-heading {
  margin: 1rem auto;

  &-text {
    display: block;
    text-indent: -99999px;
    background: url(../assets/images/gurtel.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    z-index: 20;
    width: 80%;
    max-width: 400px;
    height: 200px;
    margin: 0 auto;
  }
}

.intro-subheading {
  font-size: 2rem;
  letter-spacing: -1px;
  line-height: 1;
}

.intro-description {
  max-width: 800px;
  margin: 1rem auto;
}

.intro-flair {
  border: 1px $text-color solid;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  opacity: 0.75;
}

.intro-action {
  margin-top: 2rem;

  a {
    color: $text-color;
    border: 2px $text-color solid;
    border-radius: 30px;
    padding: 0.5rem 2rem;
    transition: 0.25s ease-in-out;

    &:hover {
      background: $text-color;
      color: $background;
    }
  }
}

@media (min-width: 769px) {
  .intro {
    padding: 3rem 5rem;

    &-heading {
      margin: 2rem auto;

      &-text {
        width: 80%;
      }
    }

    &-subheading {
      font-size: 2.5rem;
      margin-top: 3rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
}

@media (max-height: 700px) {
  .intro {
    padding-top: 2.5rem;
  }
}
</style>
