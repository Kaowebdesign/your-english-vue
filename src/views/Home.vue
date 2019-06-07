<template>
  <div>
    <v-content class="pt-0">
      <section>
        <v-parallax src="https://firebasestorage.googleapis.com/v0/b/your-english-dp.appspot.com/o/hback.jpg?alt=media&token=bd734b67-5f78-4738-9345-3d80b5b27c26" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <!-- <img src="assets/vuetify.png" alt="Vuetify.js" height="200"> -->
            <h1 class="white--text mb-2 display-1 text-xs-center mainCaption">Your english</h1>
            <div class="mb-3 text-xs-center duoHomeCaption">Не відкладай на потім!</div>
            <div class="mb-3 text-xs-center duoHomeCaption">Почни вивчати англійську прямо зараз!</div>
            <v-btn
              class="cyan darken-1 mt-5"
              dark
              large
              href="/articles"
            >
              Почати
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Як швидко підняти свій рівень англійського?</h2>
              <span class="subheading">
                Все дуже просто
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="cyan--text text--darken-4">important_devices</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Дивись</div>
                    </v-card-title>
                    <v-card-text>
                      Для зареєстрованих користувачів доступно безліч відео. Від аудіокниг до найвідоміших сцен з різних фільмів.
                      Матеріал підібраний відповідно до рівня складності, а отже кожен зможе знайти те що йому до вподоби.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="cyan--text text--darken-4">hearing</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Слухай</div>
                    </v-card-title>
                    <v-card-text>
                      Значна частина матеріалу складається з аудіокниг. Сприймання мови на слух дуже важлива річ.
                      Найшвидший спосіб вивчити мову це поринути в середовище де нею спілкуються. Починай слухати прямо зараз.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="cyan--text text--darken-4">g_translate</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Читай</div>
                    </v-card-title>
                    <v-card-text>
                      Під кожним відео чи аудіо матеріалом ти зможеш знайти текст, що відноситься до даного ролика. Для того щоб тобі було легше
                      внизу є панель із найскладнішими словами, для який доступний переклад.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <section v-if="articles.length">
          <v-container>
            <v-layout row wrap justify-center>
              <v-flex xs12 md4>
                 <h2 class="headline text-xs-center">Випадкові книги</h2>
                <v-card class="elevation-0 transparent">
                  <v-card-title class="layout justify-center">
                  </v-card-title>
                  <v-card-text>
                    <v-carousel xs12 hide-delimiters height="450px">
                      <v-carousel-item class="articleCarousel"  v-for="(article , i) in articles" :key="i" :src="article.imageUrl" @click="goToArticle(article.id)">
                          <div class="articleTitle">{{article.title}}</div>
                      </v-carousel-item>
                    </v-carousel>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
      </section>

      <section>
        <v-parallax src="https://firebasestorage.googleapis.com/v0/b/your-english-dp.appspot.com/o/orig.jpg?alt=media&token=19124d5a-b6fb-4eb0-97ea-3a8e0f7f6146" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Досить гаяти час!</div>
            <em>Прокачай свої скіли прямо зараз</em>
            <v-btn
              class="cyan darken-1 mt-5"
              dark
              large
              href="/articles"
            >
              Прокачати
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Про проект</div>
                </v-card-title>
                <v-card-text>
                  You english - це сховище крутих відеоматеріалів підібраних під різні рівні складності.
                  Слухай, читай, перекладай, вивчай слова та підніми свій рівень англійської прямо зараз.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Напишіть нам</div>
                </v-card-title>
                <v-card-text>
                  Напиши, якщо з'явилися пропозиції щодо покращення даного додатку
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+38(098)-86-61-190</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Dnipro, UA</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>kaowebdev@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    articles(){
      let articles= this.$store.getters.getArticle
      if(!articles) return []

      const articleMas = articles.sort(() => .5 - Math.random())
      let result = []
      if(articleMas.length < 5)
        result = articleMas
      else 
        result = articleMas.slice(0,3)

       return result
    }
  },
  methods:{
    goToArticle(id){
      this.$router.push({name:'article',params:{id:id}})
    }
  }
}
</script>

<style lang="scss" scoped>
    .v-parallax::after{
      content:"";
      display: block;
      position: absolute;
      top:0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,.5);
      z-index: 1;
    }
  .duoHomeCaption{
    text-shadow: 1px 1px 9px #000;
    font-size: 18px;
  }
  .mainCaption{
    text-shadow: 1px 1px 9px #000;
    text-transform: uppercase;
  }
  .articleTitle{
    position:absolute;
    top: 0;
    left:0;
    width: 100%;
    padding: 20px;
    background: rgba(0,0,0,.5);
    color: #fff;
    font-size: 17px;
    text-align:center;
  }
  .articleCarousel{
    cursor:pointer;
    transition: .6s;
    max-width: 350px;
    height: 450px;
    &:hover{
      opacity: .9;
    }
  }

</style>
