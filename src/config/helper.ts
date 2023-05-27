import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "mongodb+srv://krishnoit:06zau35XfEkIANf6@cluster0.1asve3f.mongodb.net/trajdim?retryWrites=true&w=majority&connectTimeoutMS=5000", // Adjust the connection URL with the desired lock timeout
    },
  },
});
export default prisma;
