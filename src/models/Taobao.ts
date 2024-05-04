let msgNotSelectedYet = 'chưa được chọn'

export class Taobao {
    shop: any;
    item: any;
    query: any;
    constructor() {
        this.shop = {
            name: this.getShopName(),
            link: this.getShopLink(),
            image: this.getShopImage(),
        }

        this.item = {
            name: this.getItemName(),
            image: this.getItemImage(),
            link: this.getSkuLink(),
            quantity: this.getSkuQuantity(),
            price: this.getSkuPrice(),
            sku: this.getSkuCate(),
            sku_name: this.getSkuName(),
            services: this.getSkuServices(),
        }

        this.query = {
            ...this.queryLocal()
        }
    }

    keyMap(key: string) {
        let map: { [key: string]: string } = {
            id: 'item_id',
            skuId: 'sku_id',
        }

        return map[key] ?? key
    }

    queryLocal() {
        const result: any = {};
        const pairs = window.location.search.substring(1).split('&');
        pairs.forEach(pair => {
            const [key, value] = pair.split('=');
            if (value.length > 0 && value !== 'null' && value !== 'undefined') {
                result[this.keyMap(key)] = value;
            }
        });
        return result
    }

    //#region SKU
    getSkuLink() {
        return window.location.href
    }

    getSkuName() {
        let data = this.getSkuCate()

        return data.map(item => `${item.skuCateText} ${item.skuValueName !== null ? item.skuValueName : msgNotSelectedYet}`).join(", ");
    }

    getSkuImage() {
        let slt = '.skuItem.current img.skuIcon'
        let e = document.querySelector(slt)
        return e?.getAttribute('src') || null
    }

    getSkuPrice() {
        let slt = '[class*="MiniPrice--priceText--"]'
        let e = document.querySelector(slt) as HTMLButtonElement
        return e.innerText;
    }

    getSkuServices() {
        return null;
    }

    getNote() {
        return null;
    }

    getSkuCate(skuCate = 'div.skuCate') {
        const nodeList_skuCates = document.querySelectorAll(skuCate)
        const arr = Array.from(nodeList_skuCates)
        return arr.map((el) => {
            return {
                skuCateText: (el.querySelector('.skuCateText') as HTMLElement)?.innerText || null,
                skuValueName: (el.querySelector('.skuItem.current .skuValueName') as HTMLElement)?.innerText || null // gia tri cua phan loai sp dang duoc chon
            }
        }, [])
    }

    getSkuQuantity(selector = "#root div.countValueWrapper input") {
        const quantity = document.querySelector(selector) as HTMLInputElement
        return quantity.value || 0
    }

    getPrice(selector = '[class*="Price--priceText--"]') {
        const e = document.querySelector(selector) as HTMLElement

        const priceText = e?.innerText || '0'

        return parseFloat(priceText)
    }
    //#endregion


    // #region shop
    getShopLink() {
        let slt = 'a[class*="ShopHeader--board"][href]'
        let e = document.querySelector(slt)
        return e?.getAttribute('href') || null;
    }
    getShopName() {
        let slt = '[class*="ShopHeader--title--"][title]'
        let e = document.querySelector(slt)
        return e?.getAttribute('title') || null;
    }
    getShopImage() {
        let slt = 'img[class*="ShopHeader--pic--"][src]'
        let e = document.querySelector(slt)
        return e?.getAttribute('src') || null;
    }
    // #endregion


    // #region item
    getItemLink() {
        return window.location.href
    }

    getItemName() {
        let slt = '[class*="ItemHeader--mainTitle--"]'
        let e = document.querySelector(slt) as HTMLElement
        return e?.innerText || null;
    }

    getItemImage() {
        let e = document.querySelector("img[class*='PicGallery--mainPic--']")
        return e?.getAttribute('src') || null
    }

    getItemQuantity() {
        let slt = '.countValueWrapper input'
        let e = document.querySelector(slt) as HTMLInputElement
        return e?.value || 0
    }

    getItemPrice() {
        let slt = '[class*="Price--sale--"] [class*="Price--priceText--"]'
        let e = document.querySelector(slt) as HTMLElement
        let priceText = e?.innerText || "0";
        let numericString = priceText.replace(/[^\d.]/g, "");
        return parseFloat(numericString);
    }

    //#endregion

    checkValid() {
        if ((this.item.sku_name === undefined) || this.item.sku_name.indexOf(msgNotSelectedYet) !== -1) {
            console.log(this.item);
            throw new Error(this.item.sku_name + '\nVui lòng chọn đủ thông tin trước khi đặt hàng.')
        }
    }
}