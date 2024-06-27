<template>
    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512" class="svg-icon">
        <path :style="{fill: `${arrowColor}`}" d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/>
    </svg>
</template>

<script>
export default {
    name: 'angle-small-down',
    props: {
        arrowColor: {
            type: String,
            default() {
                return '#000000'
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.svg-icon{
    width: 100%;
    height: 100%;
}
</style>