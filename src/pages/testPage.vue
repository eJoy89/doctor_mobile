<template>
    <div style="width: 100%; height: 100vh; background-color: lightblue; position: relative; overflow: hidden;">
        <div style="width: 50px; height: 100px; background-color: bisque; position: absolute; right: 5px; top: 5px; cursor: grab;" id="moveBox"
            @mousedown="onMouseDown"
            @touchstart="onTouchStart"
        >
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(document.getElementById('moveBox').getBoundingClientRect());
    },
    methods: {
        // 마우스 이동
        onMouseDown(e) {
            const box = document.getElementById('moveBox');
            const parent = box.parentElement;
            const startX = e.clientX;
            const startY = e.clientY;
            const rect = box.getBoundingClientRect();
            const parentRect = parent.getBoundingClientRect();

            const offsetX = startX - rect.left;
            const offsetY = startY - rect.top;

            const onMouseMove = (moveEvent) => {
                let newX = moveEvent.clientX - offsetX;
                let newY = moveEvent.clientY - offsetY;

                // 부모 영역 안으로 제한
                newX = Math.max(0, Math.min(newX, parentRect.width - rect.width));
                newY = Math.max(0, Math.min(newY, parentRect.height - rect.height));

                box.style.left = `${newX}px`;
                box.style.top = `${newY}px`;
            };

            const onMouseUp = () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        },

        // 모바일 환경에서 터치 이동
        onTouchStart(e) {
            const box = document.getElementById('moveBox');
            const parent = box.parentElement;
            const touch = e.touches[0];
            const startX = touch.clientX;
            const startY = touch.clientY;
            const rect = box.getBoundingClientRect();
            const parentRect = parent.getBoundingClientRect();
            const offsetX = startX - rect.left;
            const offsetY = startY - rect.top;

            const onTouchMove = (moveEvent) => {
                const touchMove = moveEvent.touches[0];
                let newX = touchMove.clientX - offsetX;
                let newY = touchMove.clientY - offsetY;

                // 부모 영역 안으로 제한
                newX = Math.max(0, Math.min(newX, parentRect.width - rect.width));
                newY = Math.max(0, Math.min(newY, parentRect.height - rect.height));

                box.style.left = `${newX}px`;
                box.style.top = `${newY}px`;
            };

            const onTouchEnd = () => {
                document.removeEventListener("touchmove", onTouchMove);
                document.removeEventListener("touchend", onTouchEnd);
            };

            document.addEventListener("touchmove", onTouchMove);
            document.addEventListener("touchend", onTouchEnd);
        },
    },
};
</script>

<style>

</style>
