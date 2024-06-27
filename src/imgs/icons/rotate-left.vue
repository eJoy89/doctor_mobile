<template>
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512" class="svg-icon" @click="!isRotating ? activeRotate() : ''" :class="{ activeAnimation: isRotating }">
        <path style="fill: #ffff;"
        d="M3,12.038c0,4.963,4.038,9,9,9s9-4.037,9-9S16.962,3.038,12,3.038c-2.394,0-4.677,.976-6.353,2.647l2.353,2.353H2.091c-.602,0-1.091-.488-1.091-1.091V1.038L3.529,3.567C5.763,1.341,8.807,.038,12,.038c6.617,0,12,5.383,12,12s-5.383,12-12,12C5.383,24.038,0,18.656,0,12.038H3Z"/>
    </svg>
</template>

<script>
export default {
    name: 'rotate-left',
    data() {
        return {
            isRotating: false,
        }
    },
    methods: {
        activeRotate() {
            this.isRotating = true;
            setTimeout(() => {
                this.isRotating = false;
            }, 500);
        }
    }
}
</script>

<style lang="scss" scoped>
.svg-icon {
    width: 100%;
    height: 100%;
}

.activeAnimation {
    animation: rotating 0.5s ease;
}

@keyframes rotating {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}
</style>
