"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJsonData = void 0;
function parseJsonData(jsonData) {
    try {
        const parsedData = JSON.parse(jsonData);
        return parsedData;
    }
    catch (error) {
        return null;
    }
}
exports.parseJsonData = parseJsonData;
//# sourceMappingURL=parser.js.map