class StringBuilder {
    #value;
    constructor(initialValue){
        return this.#value = initialValue;
    }
    getValue(){
        return this.#value
    }
    padEnd(str){
        return this.#value += str;
    }
    padStart(str){
        return `${str} ${this.#value}`;
    }
    padBoth(str){
        this.padStart(str); this.padEnd(str);
    }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
