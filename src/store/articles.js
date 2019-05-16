export default {
    state: {
        articles: [{
                id: 'frf34g33g4rg40',
                title: 'The firth book about little boy - 1 ',
                description: 'this is a firth book about my program',
                imageId: 'egerg34g3rgfg34',
                parts: 7,
                level: ['A1', 'B1'],
                rating: 4.5,
                ratingsCount: 100,
                youtube_playlist_id: 'dgegrg234234'
            },
            {
                id: 'frf34g3ewrrg40',
                title: 'The second book about little boy - 2 ',
                description: 'this is a second book about my program',
                imageId: 'egerg34rewrg34',
                parts: 7,
                level: ['B1', 'B2'],
                rating: 5,
                ratingsCount: 85,
                youtube_playlist_id: 'derrg234234'
            },
            {
                id: 'frwe4g3ewrrg40',
                title: 'The thirth book about little boy - 3 ',
                description: 'this is a thirth book about my program',
                imageId: 'egerg34werg34',
                parts: 7,
                level: ['A0', 'A1'],
                rating: 3,
                ratingsCount: 50,
                youtube_playlist_id: 'derrgf34234'
            }
        ]
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
    }
}