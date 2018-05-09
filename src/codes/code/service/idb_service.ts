declare var JsStore;

export class IdbService {

    connection;

    constructor() {
        this.connection = new JsStore.Instance();
    }

    isDbExist(name: string) {
        return JsStore.isDbExist(name)
    }

}