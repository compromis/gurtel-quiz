<template>
  <div class="true-false-quiz">
    <div v-for="question in questions">
      <transition name="slide">
        <quiz-question
          :visible="visibleQuestions.includes(question.id)"
          :question="question"
          :next-question-id="question.id + 1 <= questions.length ? question.id + 1 : false"
          @updateQuiz="updateQuiz"
          @nextQuestion="nextQuestion" />
        </transition>
    </div>

    <quiz-results
      v-if="answers.length === questions.length && answers.length > 1"
      :results="results"
      :correct-answers="correctAnswers"
      :total-questions="questions.length" />
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'
import QuizQuestion from './QuizQuestion'
import QuizResults from './QuizResults'

export default {
  name: 'true-false-quiz',

  components: {
    QuizQuestion,
    QuizResults
  },

  props: {
    questions: Array,
    results: Array
  },

  data () {
    return {
      visibleQuestions: [1],
      answers: []
    }
  },

  computed: {
    correctAnswers: function () {
      return this.answers.reduce((sum, current) => sum + current.points, 0)
    }
  },

  mounted () {
    EventBus.$on('reset', () => this.reset())
  },

  methods: {
    updateQuiz (option, question) {
      const optionIndex = this.answers.findIndex(o => o.id === option.id)

      if (optionIndex) {
        this.answers.splice(optionIndex, 1)
      }

      this.answers.push(option)

      // Send the selected option to the server
      EventBus.$emit('postStats', option, question)

      // If all questions answered, send the final score to the server
      if (this.answers.length === this.questions.length && this.answers.length > 1) {
        EventBus.$emit('postScore', this.correctAnswers)
      }
    },

    nextQuestion (nextQuestion) {
      if (this.questions.length >= nextQuestion) {
        this.visibleQuestions.push(nextQuestion)
      }
    },

    reset () {
      this.answers = []
      this.visibleQuestions = [1]
      this.$scrollTo('#q1', 500, { offset: -75 })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';

.true-false-quiz {
  margin-top: -2rem;
  margin-bottom: 4rem;
}
</style>
