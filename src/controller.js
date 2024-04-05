export default class Controller {
    #view = {}
    #service = {}
    constructor({ view, service }) {
        this.#view = view
        this.#service = service
        this.#view.configureOnSubmit(this.#onSubmit.bind(this))
    }

    async initialize() {
        this.#view.initialize()
        return this.loadItems()
    }

    /**
     * @param {object} item
     * @param {string} item.title
     * @param {string} item.imageUrl
     * @returns {Promise<void>}
     */
    async #onSubmit(item) {
        await this.#service.saveItem(item)
        return this.#view.updateList([item])
    }

    async loadItems() {
        const items = await this.#service.getItems()
        if(!items.length) return

        this.#view.updateList(items)
    }
}