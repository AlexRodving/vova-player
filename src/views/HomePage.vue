<template>
  <ion-page>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <main>
        <div class="play-button" :class="{ playing: isPlaying }" @click="playButton">
                <span v-show="!isPlaying" class="text-icon play">Play</span>
                <span v-show="isPlaying" class="text-icon pause">Pause</span>
            </div>
      </main>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, onMounted } from 'vue';

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
@media (max-width: 768px) {
    div {
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }

    div:focus,
    div:active {
        outline: none;
    }
}

main {
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: hidden;
}

.play-button {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(255, 4, 4, 0.719);
    transition: all 1s;
}

.play-button.playing{
    box-shadow: 0 8px 16px rgba(0, 255, 13, 0.719);
}

@media (hover: hover) {
    .play-button:hover {
        transform: scale(1.1);
    }
}

@media (hover: none) {
    .play-button:active {
        transform: scale(1.1);
        transition: 0.2s;
    }
}

.text-icon {
    font-size: 24px;
    font-weight: bold;
}

.text-icon.play{
    color: rgba(255, 4, 4, 0.719);
}

.text-icon.pause {
    color:rgba(0, 255, 13, 0.719);
}
</style>
