<template>
  <label :class="{
    'option': true,
    'disabled': disabled,
    'selected': selected,
    'revealed': revealed,
    'option-is-correct': option.points > 0 && (selected || revealed),
    'option-is-incorrect': option.points == 0 && selected
    }">
    <input
      type="radio"
      :value="option"
      :name="'q' + questionId"
      :checked="selected"
      :disabled="disabled"
      @change="$emit('change', option)" />

      {{ option.name }}
  </label>
</template>

<script>
import True from '../assets/images/true.svg'
import False from '../assets/images/false.svg'

export default {
  name: 'quiz-option',

  props: {
    option: Object,
    disabled: Boolean,
    selected: Boolean,
    revealed: Boolean,
    questionId: Number
  },

  components: {
    True,
    False
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';

input {
  display: none;
}

.option {
  display: block;
  cursor: pointer;
  padding: 0.65rem 1.75rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  font-size: 1.25rem;
  color: $white;
  position: relative;
  transition: 0.2s ease-in-out;
  background: $option-color;
  line-height: 1.25;

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    width: 30px;
    height: 30px;
    margin-top: -15px;
  }

  &:hover {
    background: $option-hover;
    box-shadow: 0 4px 15px -2px rgba(17, 36, 85, 0.25);
  }

  &:active {
    transform: translateY(3px);
  }

  &.disabled:hover {
    transform: scale(1);
    box-shadow: none;
  }
}

.disabled {
  opacity: 0.5;
}

.option-is-correct.selected,
.option-is-correct.selected:hover,
.option-is-correct.revealed {
  background: $true-color-end;
  color: #fff;
  opacity: 0.75;
}
.option-is-incorrect.selected,
.option-is-incorrect.selected:hover {
  background: $false-color-start;
  color: #fff;
  opacity: 0.75;
}
</style>
