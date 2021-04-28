const got = require('@/utils/got');

module.exports = async (ctx) => {
    const response = await got({
        method: 'get',
        url: 'http://cai-api.xuanxq.com/topic/topics?digested=false&page=1&group=1824528822',
    });
    const data = response.data.list;
    ctx.state.data = {
        title: '生财有术',
        link: 'http://search.shengcaiyoushu.com/',
        description: '生财有术',
        item: data.map((item) => ({
            title: item.title,
            description: item.shortContent,
            author: item.author,
            pubDate: item.create_time,
            guid: item.topic_id,
            link: `https://wx.zsxq.com/mweb/views/topicdetail/topicdetail.html?topic_id=${item.topic_id}`,
        })),
    };
};
