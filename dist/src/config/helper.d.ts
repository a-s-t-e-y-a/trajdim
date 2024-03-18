import { PrismaClient } from "@prisma/client";
declare const prisma: PrismaClient<{
    datasources: {
        db: {
            url: string;
        };
    };
}, never, false, import("@prisma/client/runtime").DefaultArgs>;
export default prisma;
