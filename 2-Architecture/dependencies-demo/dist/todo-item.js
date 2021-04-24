"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem = /** @class */ (function () {
    function TodoItem(name) {
        this.name = name;
        this.isDone = false;
    }
    TodoItem.prototype.done = function () {
        this.isDone = true;
    };
    return TodoItem;
}());
exports.default = TodoItem;
