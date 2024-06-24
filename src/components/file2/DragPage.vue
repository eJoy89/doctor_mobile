<template>
    <div>
        <div class="content-body">
            <div class="container">
                <div class="top-drag" ref="topHeight">
                    <p class="drag-handle" 
                        @mousedown="startDrag"
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
    },
    methods: {
        startDrag(event) {
            this.isDragging = true
            this.startY = event.clientY
            this.startHeight = this.$refs.topHeight.clientHeight
        },
        drag(event) {
            if (!this.isDragging) return
            let newHeight = this.startHeight + (event.clientY - this.startY)
            if (newHeight < 200) newHeight = 200 
            this.$refs.topHeight.style.height = newHeight + 'px'
        },
        stopDrag() {
            this.isDragging = false
        }
    },
    unmounted() {
        document.removeEventListener('mousemove', this.drag)
        document.removeEventListener('mouseup', this.stopDrag)
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
            min-height: 200px;
            max-height: 50%;
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
