<template>
  <div :class="['simple-page', 'limited-height']">
    <Container
      @drop="onDrop"
      drag-class="opacity-ghost"
      drop-class="opacity-ghost-drop"
      @drag-enter="onDragStart"
      @drag-leave="onDragLeave"
    >
      <Draggable v-for="item in items" :key="item.id" @click="handleClick(item)">
        <div class="draggable-item">
          {{ item.data }}
        </div>
      </Draggable>
    </Container>
  </div>
  <p style="color: red;">{{ isDragging }}</p>
</template>

<script>
import { Container, Draggable } from "vue-dndrop";
import { applyDrag } from "@/utils/helpers";

export default {
  name: "DragClass",
  components: { Container, Draggable },
  data() {
    return {
      items: [
        { data: '청출어람'},
        { data: '안하무인'},
        { data: '우이독경'},
        { data: '고진감래'},
        { data: '마이동풍'},
        { data: '풍전등화'},
        { data: '이이제이'},
      ],
      test: false,
      isDragging: false,
    };
  },
  methods: {
    onDrop(dropResult) {
      this.items = applyDrag(this.items, dropResult);
      this.isDragging = !this.isDragging;

    },
    onDragStart() {
      this.isDragging = !this.isDragging;
    },
    onDragLeave() {

    }
  },
};
</script>

<style scoped>
.limited-height {
  height: 60vh;
  overflow: auto;
}
.draggable-item {
  padding: 20px;
  user-select: none;
  cursor: pointer;
}
.opacity-ghost {
  opacity: 0.4;
}
.opacity-ghost-drop {
  opacity: 0.1;
}
</style>
