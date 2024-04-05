export default class Service {
    #tableName = ''
    constructor({ tableName }) {
        this.#tableName = tableName
    }

    #getItems() {
        return JSON.parse(localStorage.getItem(this.#tableName)) ?? []
    }

    #setItems(items) {
        localStorage.setItem(this.#tableName, JSON.stringify(items))
    }

    #sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async saveItem(item) {
        const items = this.#getItems()
        items.push(item)
        await this.#sleep(200)
        this.#setItems(items)
        return;
    }

    async getItems() {
        await this.#sleep(200)
        return this.#getItems()
    }
}