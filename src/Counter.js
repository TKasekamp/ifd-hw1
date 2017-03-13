/**
 * Created by Tonis on 13.03.2017.
 */
export class Counter {

    constructor() {
        this.count = 0;
    }

    getCount() {
        return this.count;
    }

    increase() {
        this.count+=1;
    }
}
