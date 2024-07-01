<template>
    <div>
        <div class="content-body">
            <div class="container">
                <div class="top-drag" ref="topHeight">
                    <p class="drag-handle" 
                        @mousedown="startDrag"
                        @touchstart="startDrag"
                    ></p>
                </div>
                
                <div>
                    look at the
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDragging: false,
            startY: 0,
            startHeight: 0
        }
    },
    mounted() {
        document.addEventListener('mousedown', this.startDrag)
        document.addEventListener('mousemove', this.drag)
        document.addEventListener('mouseup', this.stopDrag)
        
        document.addEventListener('touchstart', this.startDrag)
        document.addEventListener('touchmove', this.drag, { passive: false })
        document.addEventListener('touchend', this.stopDrag)
    },
    methods: {
        startDrag(event) {
            this.isDragging = true
            this.startY = event.clientY || event.touches[0].clientY
            this.startHeight = this.$refs.topHeight.clientHeight
        },
        drag(event) {
            if (!this.isDragging) return
            event.preventDefault() 
            let clientY = event.clientY || event.touches[0].clientY
            let newHeight = this.startHeight + (clientY - this.startY)
            if (newHeight < 100) newHeight = 100 
            this.$refs.topHeight.style.height = newHeight + 'px'
        },
        stopDrag() {
            this.isDragging = false
        }
    },
    unmounted() {
        document.removeEventListener('mousedown', this.startDrag)
        document.removeEventListener('mousemove', this.drag)
        document.removeEventListener('mouseup', this.stopDrag)

        document.removeEventListener('touchstart', this.startDrag)
        document.removeEventListener('touchmove', this.drag)
        document.removeEventListener('touchend', this.stopDrag)
    }
}
</script>

<style lang="scss" scoped>
.content-body{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .container{
        width: 380px;
        height: 100vh;
        background: lightblue;
    
        .top-drag{
            width: 100%;
            min-height: 100px;
            max-height: 40%;
            background: lightcoral;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            transition: .1s;
            .drag-handle{
                width: 80px; 
                height: 10px; 
                background: honeydew; 
                cursor: pointer;
            }
        }
    }
}
</style>
