<template>
    <div :class="['simple-page', 'limited-height']">
        <Container
            @drop="onDrop"
            drag-class="opacity-ghost"
            drop-class="opacity-ghost-drop"
        >
            <Draggable v-for="item in items" :key="item.id" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
                <div class="draggable-item">
                    {{ item.data }}
                </div>
            </Draggable>
        </Container>
    </div>
</template>

<script>
import { Container, Draggable } from "vue-dndrop";
import { applyDrag, generateItems } from "@/utils/helpers.js";

export default {
  name: "DragClass",

  components: { Container, Draggable },

  data() {
    return {
      items: generateItems(50, (i) => ({ id: i, data: "Draggable " + i })),
      touchPosition: null,
    };
  },

  methods: {
    onDrop(dropResult) {
      this.items = applyDrag(this.items, dropResult);
    },
    onTouchStart(event) {
      this.touchPosition = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    },
    onTouchMove(event) {
      if (this.touchPosition) {
        const touch = event.touches[0];
        const moveX = touch.clientX - this.touchPosition.x;
        const moveY = touch.clientY - this.touchPosition.y;
        event.target.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    },
    onTouchEnd(event) {
      this.touchPosition = null;
      event.target.style.transform = "";
    },
  },
};
</script>

<style scoped>
.limited-height {
  height: 60vh;
  overflow: auto;
}

.draggable-item {
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  cursor: grab;
  touch-action: none; /* 터치 이벤트가 드래그로 인식되도록 설정 */
}
</style>
