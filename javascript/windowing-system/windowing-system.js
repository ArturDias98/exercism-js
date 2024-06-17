// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
};

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow {
    constructor() {
        this._screenSize = new Size(800, 600);
        this._size = new Size();
        this._position = new Position();
    }

    get screenSize() {
        return this._screenSize;
    }

    get size() {
        return this._size;
    }

    get position() {
        return this._position;
    }

    resize(newSize) {
        const maxWidth = this._screenSize.width - this._position.x;
        const maxHeight = this._screenSize.height - this._position.y;
        const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
        const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));
        this.size.resize(newWidth, newHeight);
    }
    move(newPosition) {
        const maxX = this._screenSize.width - this._size.width;
        const maxY = this._screenSize.height - this._size.height;
        const newX = Math.max(0, Math.min(newPosition.x, maxX));
        const newY = Math.max(0, Math.min(newPosition.y, maxY));
        this.position.move(newX, newY);
    }
}
export function changeWindow(programWindow) {
    programWindow.move(new Position());
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}