<template>
    <div ref="container" class="swiper-container"
        @mousedown="startDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
        @mousemove="onDrag"
        @touchstart="startTouch"
        @touchend="stopTouch"
    >
        <div v-for="(list, index) in lists" :key="index" class="slide-wrap">
            slide {{ index + 1 }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'SwiperJs',
    data() {
        return {
            lists: [1, 2, 3],
            isDragging: false,
            startX: 0,
            scrollLeftPosition: 0,
            startTouchX: 0,
            dragged: false,
            moveRange: null,
        };
    },
    mounted() {
        this.moveRange = this.$refs.container.offsetWidth - 20;
        console.log(this.moveRange)

    },
    methods: {
        startDrag(event) {
            this.isDragging = true;
            this.dragged = false;
            this.startX = event.pageX - this.$refs.container.offsetLeft;
            this.scrollLeftPosition = this.$refs.container.scrollLeft;
        },
        stopDrag() {
            if (this.dragged) {
                this.snapToSlide();
            }
            this.isDragging = false;
        },
        onDrag(event) {
            if (!this.isDragging) return;
            event.preventDefault();
            const x = event.pageX - this.$refs.container.offsetLeft;
            const walk = (x - this.startX);
            console.log(Math.abs(walk))

            if (Math.abs(walk) >= 1 || Math.abs(walk) <= 1) { 
                this.dragged = true;
                if (walk > 0) {
                    this.scrollLeft();
                } else {
                    this.scrollRight();
                }
                this.isDragging = false; 
            }
        },
        startTouch(event) {
            this.startTouchX = event.touches[0].pageX - this.$refs.container.offsetLeft;
            this.scrollLeftPosition = this.$refs.container.scrollLeft;
        },
        stopTouch() {
            this.startTouchX = 0;
        },
        // onTouchMove(event) {
        //     if (this.startTouchX === 0) return;
        //     const x = event.touches[0].pageX - this.$refs.container.offsetLeft;
        //     const walk = (x - this.startTouchX);
            
        //     if (Math.abs(walk) >= 1) { 
        //         if (walk > 0) {
        //             this.scrollLeft();
        //         } else {
        //             this.scrollRight();
        //         }
        //         // this.startTouchX = 0; 
        //     }
        // },
        scrollRight() {
            this.$refs.container.scrollLeft += this.moveRange;
        },
        scrollLeft() {
            this.$refs.container.scrollLeft -= this.moveRange;
        },
        snapToSlide() {
            const container = this.$refs.container;
            const scrollPosition = container.scrollLeft;
            const slideWidth = this.moveRange;
            const slideIndex = Math.round(scrollPosition / slideWidth);
            container.scrollLeft = slideIndex * slideWidth;
        }
    },
};
</script>


<style lang="scss" scoped>
.swiper-container {
    width: 100%;
    height: 150px;
    padding: 0 20px;
    background: lightblue;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    column-gap: 20px;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

    .slide-wrap {
        width: 100%; 
        height: 100px;
        background: green;
        color: 1;
        flex-shrink: 0;
        user-select: none;
    }
}
</style>
