import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "mongodb+srv://krishnoit:58ThD1r5Kq4OIZ2y@cluster0.w7eey7o.mongodb.net/trajdim?retryWrites=true&w=majority&appName=Cluster0", // Adjust the connection URL with the desired lock timeout
    },
  },
});
export default prisma;
