"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Private_Cat_name;
class Private_Cat {
    constructor(name) {
        _Private_Cat_name.set(this, void 0);
        __classPrivateFieldSet(this, _Private_Cat_name, name, "f");
    }
}
_Private_Cat_name = new WeakMap();
const CAT21 = new Private_Cat('Cosmo');
console.log(CAT21.);
