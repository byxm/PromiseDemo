const superagent = require('superagent')
const api = 'https://movie.douban.com/j/search_subjects'

module.exports = (pageStart) => {
    return new Promise((resolve, reject) => {
        superagent.get(api).query({
           pageStart,
           type: 'tv',
           tag: '日本动画',
           sort: 'recommend',
           page_limit: 20
        })
        .type('form')
        .accept('application/json')
        .end((err, res) => {
            if(err) reject(err)
            console.log('豆瓣数据', JSON.parse(res.text))
            resolve(res)
        })
    })
}