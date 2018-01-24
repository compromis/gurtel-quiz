<template>
  <div class="results-wrapper">
    <div class="results" id="results">
      <Party class="party-hat" />
      <h3>Has encertat {{ correctAnswers }} de {{ totalQuestions }}</h3>
      <img :src="result.gif" alt="Gif reacció" />
      <p>{{ result.message }}</p>
      <hr />
      <p class="share-cta">Comparteix la teua puntuació<br />i reta a les teues amistats</p>
      <p class="social-plugins">
        <iframe src="https://www.facebook.com/plugins/like.php?href=https://compromis.net/quiz/rajoy-homer/&width=198&layout=button_count&action=like&size=large&show_faces=false&share=true&height=37&appId=252515324782640&locale=ca_ES" width="213" allowtransparency="true" scrolling="no" class="social-plugins-facebook" frameborder="0" height="30"></iframe>
        <iframe :src="'https://platform.twitter.com/widgets/tweet_button.html?size=l&url=https://compromis.net/quiz/rajoy-homer/&via=compromis&related=compromis&text=' + encodeURIComponent(tweet) + '&lang=es'" class="social-plugins-twitter" width="100" height="30" allowtransparency="true" scrolling="no" frameborder="0"></iframe>
      </p>
      <hr />
      <p class="redo-quiz"><a href="#" @click.prevent="redo">🔄 Torna a fer el quiz</a></p>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'
import Party from '../assets/images/party.svg'

export default {
  name: 'quiz-results',

  props: {
    correctAnswers: Number,
    totalQuestions: Number,
    results: Array
  },

  components: {
    Party
  },

  computed: {
    result: function () {
      return this.results.find((element) => this.correctAnswers >= element.minPoints && this.correctAnswers <= element.maxPoints)
    },

    tweet: function () {
      return 'He tret un ' + this.correctAnswers + ' de ' + this.totalQuestions + ' en el quiz sobre el cas Gürtel de @compromis. Pots superar-me?'
    }
  },

  methods: {
    redo () {
      EventBus.$emit('reset', true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';

.results-wrapper {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.results {
  position: relative;
  background: $white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 40px -5px rgba(0, 0, 0, 0.9);
  color: $text-color-dark;
  text-align: center;

  h3 {
    font-weight: bold;
    font-size: 1.75rem;
  }

  p {
    font-size: 1rem;
    max-width: 400px;
    margin: 0 auto;
  }

  img {
    border-radius: 5px;
    margin: 1rem 0;
    max-width: 100%;
  }

  hr {
    margin: 1rem;
  }

  .share-cta {
    font-weight: bold;
    margin-top: 1rem;
  }

  .social-plugins {
    margin-top: 1rem;
  }

  .redo-quiz {
    font-size: 1.25rem;
  }
}

.party-hat {
  fill: $text-color-dark;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

@media (min-width: 769px) {
  .results {
    p {
      font-size: 1.15rem;
    }
  }
}

@media (max-height: 700px) {
  .party-hat {
    display: none;
  }
}

</style>
