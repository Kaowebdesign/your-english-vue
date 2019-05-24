export default {
    state: {
        articles: [{
                id: 'firstarticleid',
                title: 'The firth book about little boy - 1 ',
                description: 'this is a firth book about my program',
                imageId: 'egerg34g3rgfg34',
                level: ['A1', 'B1'],
                rating: 4.5,
                ratingsCount: 100,
                youtube_playlist_id: 'dgegrg234234',
                parts: [{
                        id: 'firstpartid',
                        title: 'Caption 1',
                        youtube_id: 'hg2g3g3g'
                    },
                    {
                        id: 'fsdg54hfeh',
                        title: 'Caption 2',
                        youtube_id: '43gregerg'
                    },
                    {
                        id: 'gtrh45h4r',
                        title: 'Caption 3',
                        youtube_id: 'leohhdht5yd'
                    }
                ]
            },
            {
                id: 'frf34g3ewrrg40',
                title: 'The second book about little boy - 2 ',
                description: 'this is a second book about my program',
                imageId: 'egerg34rewrg34',
                level: ['B1', 'B2'],
                rating: 5,
                ratingsCount: 85,
                youtube_playlist_id: 'derrg234234',
                parts: [{
                        id: 'gdfg34gre',
                        title: 'Caption 1',
                        youtube_id: 'hg2g3g3g'
                    },
                    {
                        id: 'fsdg54hfeh',
                        title: 'Caption 2',
                        youtube_id: '43gregerg'
                    },
                    {
                        id: 'gtrh45h4r',
                        title: 'Caption 3',
                        youtube_id: 'leohhdht5yd'
                    }
                ]
            },
            {
                id: 'frwe4g3ewrrg40',
                title: 'The thirth book about little boy - 3 ',
                description: 'this is a thirth book about my program',
                imageId: 'egerg34werg34',
                level: ['A0', 'A1'],
                rating: 3,
                ratingsCount: 50,
                youtube_playlist_id: 'derrgf34234',
                parts: [{
                        id: 'gdfg34gre',
                        title: 'Caption 1',
                        youtube_id: 'hg2g3g3g'
                    },
                    {
                        id: 'fsdg54hfeh',
                        title: 'Caption 2',
                        youtube_id: '43gregerg'
                    },
                    {
                        id: 'gtrh45h4r',
                        title: 'Caption 3',
                        youtube_id: 'leohhdht5yd'
                    }
                ]
            }
        ],
        articleParts: [{
            articleId: 'firstarticleid',
            articlePartId: 'firstpartid',
            articleTitle: 'The firth book about little boy - 1 ',
            partTitle: 'Caption 1',
            youtube_id: 'hg2g3g3g',
            content: [{
                    paragraph: [{
                            orign: 'lorem reege ergerger ergerger etbrtb rtbrtbrb rtrtbrtb',
                            trans: 'Це просто переклад отого набору тексту що ви бачите вище'
                        },
                        {
                            orign: 'lorem reege ergerger ergerger etbrtb rtbrtbrb rtrtbrtb',
                            trans: 'Це просто переклад отого набору тексту що ви бачите вище'
                        },
                        {
                            orign: 'lorem reege ergerger ergerger etbrtb rtbrtbrb rtrtbrtb',
                            trans: 'Це просто переклад отого набору тексту що ви бачите вище'
                        },
                    ]
                },
                {
                    paragraph: [{
                            orign: 'lorem reege ergerger ergerger etbrtb rtbrtbrb rtrtbrtb',
                            trans: 'Це просто переклад отого набору тексту що ви бачите вище'
                        },
                        {
                            orign: 'lorem reege ergerger ergerger etbrtb rtbrtbrb rtrtbrtb',
                            trans: 'Це просто переклад отого набору тексту що ви бачите вище'
                        },
                        {
                            orign: 'lorem reege ergerger ergerger etbrtb rtbrtbrb rtrtbrtb',
                            trans: 'Це просто переклад отого набору тексту що ви бачите вище'
                        }
                    ]
                }
            ],
            words: [{
                    orignWord: 'Lorem 1',
                    transWord: 'Привіт 1'
                },
                {
                    orignWord: 'Lorem 2',
                    transWord: 'Привіт 2'
                },
                {
                    orignWord: 'Lorem 3',
                    transWord: 'Привіт 3'
                },
                {
                    orignWord: 'Lorem 4',
                    transWord: 'Привіт 4'
                }
            ]
        }]
    },
    mutations: {
        SET_ARTICLE(state, payload) {
            state.articles = payload;
        }
    },
    actions: {

    },
    getters: {
        getArticle: (state) => state.articles,
        getParts: (state) => state.articleParts
    }
}