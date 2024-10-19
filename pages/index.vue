<template>
    <main>
        <div class="play-button" :class="{ playing: isPlaying }" @click="playButton">
            <span v-show="!isPlaying" class="text-icon play">Play</span>
            <span v-show="isPlaying" class="text-icon pause">Pause</span>
        </div>
    </main>
</template>

<script setup>

let audio;
const isPlaying = ref(false)
const audioSrc = "http://pub0201.101.ru:8000/stream/air/aac/64/99?1d98"

onMounted(() => {
    audio = new Audio(audioSrc);

    audio.addEventListener('ended', () => {
        isPlaying.value = false;
    });
})

const playButton = () => {
    if(audio.paused){
        audio.play();
        isPlaying.value = true;
    }else{
        audio.pause();
        isPlaying.value = false;
    }
};
</script>

<style scoped>

</style>