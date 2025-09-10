const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
    }
    dianying: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '电影天堂',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
