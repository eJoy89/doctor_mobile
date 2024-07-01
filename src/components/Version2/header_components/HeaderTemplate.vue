<template>
    <header class="main-page-header" ref="headerHeight">
        <section class="user-card-section" ref="userCard">
            <div class="user-card_top-wrap">
                <div style="display: flex; align-items: center; column-gap: 5px;">
                    <p style="width: 30px; height: 30px; border-radius: 50%; background: green;"></p>
                    <h2>김철수</h2>
                    <span style="display: flex; align-items: center; column-gap: 5px;">
                        <p>00123456</p>
                        <p>23</p>
                    </span>
                </div>
                <div class="" style="display: flex; align-items: center; column-gap: 5px;">
                    <p style="width: 24px; height: 24px; border-radius: 50%; background-color: red;"></p>
                    <p style="width: 24px; height: 24px; border-radius: 50%; background-color: red;"></p>
                </div>
            </div>
            
            <div style="width: 100%; height: 100%; background-color: violet; position: absolute; top: 50px;">
                <div v-for="(list, index) in userInfo.info" :key="list" :index="index" style="width: 100%; height: 40px; border-bottom: 1px solid gray; display: flex; align-items: center; justify-content: space-between;">
                    <p>{{ list.name }}</p>
                    <h4>{{ list.info }}</h4>
                </div>
            </div>

        </section>

        <div class="drag-handle"
            @mousedown="startDrag"
            @touchstart="startDrag"
        >
            --------
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderTemplate',
    data() {
        return {
            isDragging: false,
            startY: 0,
            startHeight: 0,

            userInfo: {
                name: '김철수',
                info: [
                    { name: '등록번호', info: '00123456' },
                    { name: '나이', info: '23' },
                    { name: '성별', info: '남' },
                ]
            }

        }
    },
    mounted() {
        document.addEventListener('touchmove', this.disableRefresh, { passive: false });
    },
    methods: {
        startDrag(event) {
            this.isDragging = true;
            this.startY = event.clientY || (event.touches && event.touches[0].clientY);
            this.startHeight = this.$refs.headerHeight.clientHeight;

            document.addEventListener('mousemove', this.drag, { passive: false });
            document.addEventListener('mouseup', this.stopDrag);
            document.addEventListener('touchmove', this.drag, { passive: false });
            document.addEventListener('touchend', this.stopDrag);
        },

        drag(event) {
            if (!this.isDragging) return;
            event.preventDefault();
            let clientY = event.clientY || (event.touches && event.touches[0].clientY);
            if (clientY) {
                let newHeight = this.startHeight + (clientY - this.startY);
                if (newHeight < 50) newHeight = 50;
                this.$refs.headerHeight.style.height = newHeight + 'px';
                this.$refs.userCard.style.height = newHeight + 'px';
            }
        },

        stopDrag() {
            this.isDragging = false;
            document.removeEventListener('mousemove', this.drag);
            document.removeEventListener('mouseup', this.stopDrag);
            document.removeEventListener('touchmove', this.drag);
            document.removeEventListener('touchend', this.stopDrag);
        },

        disableRefresh(event) {
            if (event.target.closest('.tab-menu-nav') || event.target.closest('.side-menu-container') || event.target.closest('.foot-menu-nav')) {
                return; 
            }
            event.preventDefault();
        }
    },
    unmounted() {
        document.removeEventListener('touchmove', this.disableRefresh);
    }
}
</script>

<style lang="scss" scoped>
.main-page-header {
    width: 100%;
    min-height: 50px;
    max-height: 170px;
    padding: 0 10px;
    position: relative;
    overflow: hidden;
    background: gold;

    .drag-handle{
        cursor: pointer;
        user-select: none;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .user-card-section{
        min-height: 50px; 
        max-height: 400px; 
        position: relative;

        .user-card_top-wrap{
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            top: 0;
            span{
                display: flex;
            }
        }
    }
}
</style>
