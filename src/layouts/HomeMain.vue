<template>
  <v-main class="pt-0">
      <v-carousel height="800" cycle>
          <v-carousel-item cover v-for="(item, index) in carouselItems" :src="item.imageUrl" :key="index">
          </v-carousel-item>
      </v-carousel>
      <v-container>
          <h2>觀念</h2>
          <v-row>
              <v-col v-for="(list, index) in ConceptList" :key="index" cols="12" md="3">
                  <v-card height="380">
                      <v-img cover :src="list.imageUrl" height="200" @click="()=>navigateToPage(list.route)"  ></v-img>
                      <v-card-title style= "font-size: 25px">{{ list.name }}</v-card-title>
                      <v-card-text style= "font-size: 17px">{{ list.description }}</v-card-text>
                      <v-card-actions>
                          <v-btn color="primary" :to="`/${ list.route }`">了解更多</v-btn>
                      </v-card-actions>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
      <v-container>
          <v-row>
              <v-col cols="12">
                  <h2>體能訓練</h2>
              </v-col>
              <v-col v-for="(list, index) in FitnessList" :key="index" cols="12" md="3">
                  <v-card height="350">
                      <v-img cover :src="list.imageUrl" height="200" @click="()=>navigateToPage(list.route)" ></v-img>
                      <v-card-title>{{ list.name }}</v-card-title>
                      <v-card-text>{{ list.description }}</v-card-text>
                      <v-card-actions>
                          <v-btn color="primary" :to="`/${ list.route }`" >了解更多</v-btn>
                      </v-card-actions>
                  </v-card>
              </v-col>
          </v-row>
      </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const carouselItems = ref([
    { imageUrl: "https://news-cdn.para-daily.com/wp-content/uploads/2024/04/22181205/0089pE32ly1holqai2w79j30ky0egweu.jpeg"},
    { imageUrl: "https://news-cdn.para-daily.com/wp-content/uploads/2024/04/22181528/0089pE32ly1holqai9tufj30ky0egwet.jpeg"},
    { imageUrl: "https://news-cdn.para-daily.com/wp-content/uploads/2024/04/22180824/0089pE32ly1holqahtergj30ky0egwfb.webp"},
    { imageUrl: "https://news-cdn.para-daily.com/wp-content/uploads/2024/04/22175810/0089pE32ly1holqah7o3ij30ky0eg74q.webp"},
    { imageUrl: "https://news-cdn.para-daily.com/wp-content/uploads/2024/04/22180259/0089pE32ly1holqahh7kcj30ky0egwf1.webp"},
    { imageUrl: "https://news-cdn.para-daily.com/wp-content/uploads/2024/04/22180137/0089pE32ly1holqagwv5cj30ky0egmxq.webp"},
    { imageUrl: "https://news-cdn.para-daily.com/wp-content/uploads/2024/04/22181723/0089pE32ly1holqbaff3mj30u00llgmm.jpeg"},
])

const ConceptList = ref([
    {
        name: "球員位置",
        description: "排球場上有著不同的位置，每個人各司其職，力求贏得比賽!",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*k6IY0i6giGZoqQnpzoNEow.png",
        route: "site"
    },
    {
        name: "接發球站位",
        description: "場上站位會因輪轉而改變，同時也讓比賽增加更多的戰術性。",
        imageUrl: "https://i2.wp.com/news.qoo-app.com/wp-content/uploads/2023/03/haikyu_21.jpg?strip=info&w=1280&ssl=1",
        route: "reserve"
    },
    {
        name: "戰術球種",
        description: "舉球員根據設定好的暗號，舉出相應的戰術球，使得場上的攻擊更為有效且靈活!",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CeqrzLAZcfGWmVMTpkdiiRstfK7iTP72yA&s",
        route: "sign"
    },
    {
        name: "場上思考",
        description: "一個好的球員，思考是必須的！給你一點方向，自己去思考並且摸索，然後實踐它吧!",
        imageUrl: "https://megapx-assets.dcard.tw/images/c61cf42a-1ebe-4d15-bc3b-187107d9cde4/1280.webp",
        route: "think"
    },
])

const FitnessList = ref( [
    {
        name: "胸",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvZRmTrX7XNbQeT2KM8ZoDxUaI2huD9G0bknfjYBUsh7_LsJf1",
        route: "chest"
    },
    {
        name: "背",
        imageUrl: "https://images.summitmedia-digital.com/spotph/images/2022/06/07/img-20220607-161021-572-1654589453.jpeg",
        route: "back"
    },
    {
        name: "肩",
        imageUrl: "https://megapx-assets.dcard.tw/images/b5bf6b37-dd5f-4346-b34f-71c088dbf006/1280.jpeg",
        route: "shoulder"
    },
    {
        name: "腿",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBIMrT6wG8LeRac-V526czKfzqijzTHQzvQ&s",
        route: "leg"
    }
])

const router = useRouter();

const navigateToPage = (route) => {
    router.push(`/${route}`);
};
</script>

<style scoped>
/* 在這裡添加自定義的CSS樣式 */
</style>
