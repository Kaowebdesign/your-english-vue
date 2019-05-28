import Vue from 'vue'

export default {
    state: {
        articles: []
            // articles: [{
            //         id: 'firstarticleid',
            //         title: 'The firth book about little boy - 1 ',
            //         description: 'this is a firth book about my program',
            //         imageId: 'egerg34g3rgfg34',
            //         level: ['A1', 'B1'],
            //         rating: 4.5,
            //         ratingsCount: 100,
            //         youtube_playlist_id: 'dgegrg234234',
            //         parts: [{
            //                 id: 'firstpartid',
            //                 title: 'Caption 1',
            //                 youtube_id: 'hg2g3g3g'
            //             },
            //             {
            //                 id: 'fsdg54hfeh',
            //                 title: 'Caption 2',
            //                 youtube_id: '43gregerg'
            //             },
            //             {
            //                 id: 'gtrh45h4r',
            //                 title: 'Caption 3',
            //                 youtube_id: 'leohhdht5yd'
            //             }
            //         ]
            //     },
            //     {
            //         id: 'frf34g3ewrrg40',
            //         title: 'The second book about little boy - 2 ',
            //         description: 'this is a second book about my program',
            //         imageId: 'egerg34rewrg34',
            //         level: ['B1', 'B2'],
            //         rating: 5,
            //         ratingsCount: 85,
            //         youtube_playlist_id: 'derrg234234',
            //         parts: [{
            //                 id: 'gdfg34gre',
            //                 title: 'Caption 1',
            //                 youtube_id: 'hg2g3g3g'
            //             },
            //             {
            //                 id: 'fsdg54hfeh',
            //                 title: 'Caption 2',
            //                 youtube_id: '43gregerg'
            //             },
            //             {
            //                 id: 'gtrh45h4r',
            //                 title: 'Caption 3',
            //                 youtube_id: 'leohhdht5yd'
            //             }
            //         ]
            //     },
            //     {
            //         id: 'frwe4g3ewrrg40',
            //         title: 'The thirth book about little boy - 3 ',
            //         description: 'this is a thirth book about my program',
            //         imageId: 'egerg34werg34',
            //         level: ['A0', 'A1'],
            //         rating: 3,
            //         ratingsCount: 50,
            //         youtube_playlist_id: 'derrgf34234',
            //         parts: [{
            //                 id: 'gdfg34gre',
            //                 title: 'Caption 1',
            //                 youtube_id: 'hg2g3g3g'
            //             },
            //             {
            //                 id: 'fsdg54hfeh',
            //                 title: 'Caption 2',
            //                 youtube_id: '43gregerg'
            //             },
            //             {
            //                 id: 'gtrh45h4r',
            //                 title: 'Caption 3',
            //                 youtube_id: 'leohhdht5yd'
            //             }
            //         ]
            //     }
            // ],
            // articleParts: [{
            //     articleId: 'firstarticleid',
            //     articlePartId: 'firstpartid',
            //     articleTitle: 'The firth book about little boy - 1 ',
            //     partTitle: 'Caption 1',
            //     youtube_id: 'AZQW0_R9Nj8',
            //     content: [{
            //             sentences: [{
            //                     orign: "Here is Prospero, the Duke of Milan, with his wife, and daughter Miranda. ",
            //                     trans: 'Это Просперо, герцог Миланский, с женой и дочерью Мирандой.'
            //                 },
            //                 {
            //                     orign: "When his wife dies, Prospero sees nobody. Some women look after Miranda.",
            //                     trans: 'Когда его жена умерла, Просперо никого не хотел видеть. Некоторые женщины присматривают за Мирандой.'
            //                 },
            //                 {
            //                     orign: "I'm learning magic - Prospero tells his brother, Antonio. Look after Melan for me.",
            //                     trans: 'Я изучаю магию, - говорит Просперо своему брату Антонио. Заботься о Мелане для меня.'
            //                 },
            //             ]
            //         },
            //         {
            //             sentences: [{
            //                     orign: "Here is Prospero, the Duke of Milan, with his wife, and daughter Miranda.",
            //                     trans: 'Это Просперо, герцог Миланский, с женой и дочерью Мирандой.'
            //                 },
            //                 {
            //                     orign: "When his wife dies, Prospero sees nobody. Some women look after Miranda.",
            //                     trans: 'Когда его жена умерла, Просперо никого не хотел видеть. Некоторые женщины присматривают за Мирандой.'
            //                 },
            //                 {
            //                     orign: "I'm learning magic - Prospero tells his brother, Antonio. Look after Melan for me.",
            //                     trans: 'Я изучаю магию, - говорит Просперо своему брату Антонио. Заботься о Мелане для меня.'
            //                 }
            //             ]
            //         }
            //     ],
            //     words: [{
            //             orignWord: 'Duke',
            //             transWord: 'Лорд'
            //         },
            //         {
            //             orignWord: 'daughter',
            //             transWord: 'дочка'
            //         },
            //         {
            //             orignWord: 'learning',
            //             transWord: 'вивчати'
            //         },
            //         {
            //             orignWord: 'magic',
            //             transWord: 'магія'
            //         },
            //         {
            //             orignWord: 'look after',
            //             transWord: 'доглядати'
            //         }
            //     ]
            // }]
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