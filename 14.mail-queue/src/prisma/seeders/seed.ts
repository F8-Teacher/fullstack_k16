import { prisma } from "../../utils/prisma";
import { faker } from "@faker-js/faker";
async function main() {
  const number = 50;
  const data = [];
  for (let i = 0; i < number; i++) {
    data.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(10),
      status: faker.datatype.boolean(),
    });
  }
  await prisma.post.createMany({
    data,
  });
}
main()
  .then((data) => {
    console.log(data);
    process.exit(1);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
