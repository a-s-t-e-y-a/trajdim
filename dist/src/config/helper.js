"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    datasources: {
        db: {
            url: 'mongodb+srv://krishnoit:06zau35XfEkIANf6@cluster0.1asve3f.mongodb.net/trajdim?retryWrites=true&w=majority&connectTimeoutMS=5000', // Adjust the connection URL with the desired lock timeout
        },
    },
});
exports.default = prisma;
//# sourceMappingURL=helper.js.map