const TMall = {
    key: 'tmall',
    shop: {
        image: 'img[class*="ShopHeader--pic"][src]',
        name: '[class*="ShopHeader--title"][title]',
        link: 'a[class*="ShopHeader--board"][href]',
    },
    item: {
        image: 'img[class*="PicGallery--mainPic"][src]',
        name: '[class*="ItemHeader--mainTitle"]',
        id: undefined,
        price: '[class*="Price--priceText"]',
    },
    sku_current: {
        image: '[.skuItem.current class*="skuIcon"][src]',
        name: '[.skuItem.current class*="selectSkuText"]',
        id: undefined,
        price: '[class*="Price--salePriceRelativeWrap"] [class*="Price--priceText"]',
    },
    btn_buy_parent: '.Actions--root--hwEujgc.BasicContent--actions--1co8sx8',
    btn_buy: '[class*="Actions--leftButtons"]',
}

const Taobao = {
    key: 'taobao',
    shop: {
        image: 'img[class*="ShopHeader--pic"][src]',
        name: '[class*="ShopHeader--title"][title]',
        link: 'a[class*="ShopHeader--board"][href]',
    },
    item: {
        image: 'img[class*="PicGallery--mainPic"][src]',
        name: '[class*="ItemHeader--mainTitle"]',
        id: undefined,
        price: '[class*="Price--priceText"]',
    },
    sku_current: {
        image: '[.skuItem.current class*="skuIcon"][src]',
        name: '[.skuItem.current class*="selectSkuText"]',
        id: undefined,
        price: '[class*="Price--salePriceRelativeWrap"] [class*="Price--priceText"]',
    },
    btn_buy_parent: '.Actions--root--hwEujgc.BasicContent--actions--1co8sx8',
    btn_buy: '[class*="Actions--leftButtons"]',
}

export const JSPath = (() => {
    switch (window.location.host) {
        case 'detail.tmall.com':
            return TMall
            break;
        default:
            return Taobao
            break;
    }
})()