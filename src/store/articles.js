import Vue from 'vue'

export default {
    state: {
        articles: []
    },
    mutations: {
        SET_ARTICLE(state, payload) {
            state.articles = payload;
        }
    },
    actions: {
        LOAD_ARTICLES({ commit }) {
            Vue.$db.collection('articles')
                .get()
                .then(querySnapshot => {
                    let articles = []
                    querySnapshot.forEach(s => {
                        const data = s.data()
                        let article = {
                            id: s.id,
                            title: data.title,
                            description: data.description,
                            imageUrl: data.imageUrl,
                            level: data.level.slice(),
                            youtube_playlist_id: data.youtube_playlist_id,
                        }

                        let parts = []
                        if (data.parts) {
                            data.parts.forEach(p => {
                                let part = {
                                    id: p.id,
                                    title: p.title,
                                    youtube_id: p.youtube_id
                                }
                                parts.push(part)
                            })
                        }
                        article.parts = parts

                        articles.push(article)
                    })
                    commit('SET_ARTICLE', articles)
                })
                .catch(error => console.log(error))
        }
    },
    getters: {
        getArticle: (state) => state.articles
    }
}