<template>
    <div class="app-document-list-container">
      <section class="app-document-list-section">
        <div v-for="(list, index) in documentList" :key="index" :index="index" class="list-wrap">
          <img :src="list.img" alt="Document Image" v-if="list.img" />
          <p class="icon-wrap" v-else>
            <pictureIcon />
          </p>
          <h3 class="list-name">
            {{ list.name }}
          </h3>
          <p class="favourite-icon" @click="selectFavourite(list)">
            <starIcon :isStarIcon="list.favourite" />            
          </p>
        </div>
        <p style="width: 24px;">

        </p>
      </section>
    </div>
</template>
  
<script>
import pictureIcon from '@/imgs/icons/picture-icon.vue';
import starIcon from '@/imgs/icons/star-icon.vue';


export default {
  name: 'DocumentList',
  components: {
    pictureIcon,
    starIcon
  },
  data() {
    return {
      documentList: [
        { img: '', name: '간호간병통합입원 동의서', favourite: false },
        { img: '', name: '대장내시경 검사 설명서/동의서', favourite: false },
        { img: '', name: '특수재료 및 비급여 신청 동의서', favourite: true },
        { img: '', name: '간호간병통합입원 동의서', favourite: false },
        { img: '', name: '대장내시경 검사 설명서/동의서', favourite: false },
        { img: '', name: '특수재료 및 비급여 신청 동의서', favourite: false },
        { img: '', name: '간호간병통합입원 동의서', favourite: true },
        { img: '', name: '대장내시경 검사 설명서/동의서', favourite: false },
        { img: '', name: '특수재료 및 비급여 신청 동의서', favourite: false },
        { img: '', name: '특수재료 및 비급여 신청 동의서', favourite: false },
        { img: '', name: '간호간병통합입원 동의서', favourite: true },
        { img: '', name: '대장내시경 검사 설명서/동의서', favourite: false },
        { img: '', name: '특수재료 및 비급여 신청 동의서', favourite: false },
        { img: '', name: '특수재료 및 비급여 신청 동의서', favourite: false },
        { img: '', name: '간호간병통합입원 동의서', favourite: true },
        { img: '', name: '대장내시경 검사 설명서/동의서', favourite: false },
        { img: '', name: '특수재료 및 비급여 신청 동의서', favourite: false },
      ],
    };
  },
  methods: {
    selectFavourite(list) {
      list.favourite = !list.favourite;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-document-list-container {
  width: 100%;
  color: #ffff;
  background-color: rgba(66, 64, 64, 0.377);
  .app-document-list-section {
    width: 100%;
    padding: 0 10px;
    .list-wrap {
      width: 100%;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 15px;
      border-bottom: 1px solid rgba(250, 250, 250, .2);

      img {
        width: 20px;
        height: 20px;
      }
      .icon-wrap{
        width: 24px;
        height: 24px;
      }

      .list-name{
        width: 100%;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
      }
      .favourite-icon {
        width: 20px;
        height: 20px;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
</style>
