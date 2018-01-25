<template>
  <div>
    <video
      id="gif-mp4"
      :poster="'https://media.giphy.com/media/' + id + '/200_s.gif'"
      style="margin:0; padding:0; width:100%; max-width:300px;"
      autoplay
      playsinline
      loop>
      <source :src="'https://media.giphy.com/media/' + id + '/giphy.mp4'" type="video/mp4"></source>
      Your browser does not support the mp4 video codec.
    </video>
  </div>
</template>

<script>
export default {
  name: 'gif',

  props: {
    id: String
  }
}
</script>
