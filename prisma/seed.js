const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const accommodations = [
  {
    name: "Chambre 1",
    residence: "Résidence Rincón d'Alicia 1 (Liberté 6)",
    price: 20000,
    type: "Chambre",
    capacity: "2 personnes",
    image: "/images/residence-1/chambre%201/WhatsApp%20Image%202026-07-10%20at%2022.34.28.jpeg",
    wifi: true,
    tv: true,
    bathroom: true,
    kitchenette: false
  },
  {
    name: "Studio 1",
    residence: "Résidence Rincón d'Alicia 1 (Liberté 6)",
    price: 22500,
    type: "Studio",
    capacity: "2 personnes",
    image: "/images/residence-1/studio%201/WhatsApp%20Image%202026-07-10%20at%2022.30.11.jpeg",
    wifi: true,
    tv: true,
    kitchenette: true,
    bathroom: true
  },
  {
    name: "Chambre 1 avec Kitchenette",
    residence: "Résidence Rincón d'Alicia 2 (Almadies 2)",
    price: 30000,
    type: "Chambre",
    capacity: "2 personnes",
    image: "/images/residence-2/Chambre%201%20avec%20Kitchenette/WhatsApp%20Image%202026-07-10%20at%2018.37.49.jpeg",
    wifi: true,
    tv: true,
    kitchenette: true,
    bathroom: true
  },
  {
    name: "Studio 2",
    residence: "Résidence Rincón d'Alicia 2 (Almadies 2)",
    price: 25000,
    type: "Studio",
    capacity: "2 personnes",
    image: "/images/residence-2/studio%202/WhatsApp%20Image%202026-07-10%20at%2018.33.42.jpeg",
    wifi: true,
    tv: true,
    kitchenette: true,
    bathroom: true
  },
  {
    name: "Appartement F3",
    residence: "Résidence Rincón d'Alicia 2 (Almadies 2)",
    price: 60000,
    type: "Appartement",
    capacity: "6 personnes",
    image: "/images/residence-2/Appartement%20F3/WhatsApp%20Image%202026-07-10%20at%2018.36.48%20(5).jpeg",
    wifi: true,
    tv: true,
    kitchenette: true,
    bathroom: true
  }
];

async function main() {
  console.log('Start seeding...');
  
  // Clean existing
  await prisma.reservation.deleteMany();
  await prisma.accommodation.deleteMany();
  
  for (const acc of accommodations) {
    const createdAcc = await prisma.accommodation.create({
      data: acc
    });
    console.log(`Created accommodation with id: ${createdAcc.id}`);
  }
  
  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
