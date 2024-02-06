import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createMueble = async (mueble) => {
  const { nombre, alto, ancho, cantidad, precio, muebleMelaminaId } = mueble;
  const newMueble = await prisma.mueble.create({
    data: {
      nombre,
      alto,
      ancho,
      cantidad: Number(cantidad),
      precio: Number(precio),
      muebleMelaminaId: Number(muebleMelaminaId),
    },
  });

  return newMueble;
};

const listMuebles = async () => {
  const list = await prisma.mueble.findMany({
    include: {
      muebleMelamina: true,
    },
  });

  return list;
};

const createMuebleMelamina = async (muebleMelamina) => {
  const { nombre, color, material, precio } = muebleMelamina;
  const nuevoRegistro = await prisma.muebleMelamina.create({
    data: {
      nombre,
      color,
      material,
      precio: Number(precio),
    },
  });
  return nuevoRegistro;
};

const listAllMelamina = async () => {
    const listMuebleMelamina = await prisma.muebleMelamina.findMany();
    return listMuebleMelamina
}

export { createMueble, listMuebles, createMuebleMelamina, listAllMelamina };
