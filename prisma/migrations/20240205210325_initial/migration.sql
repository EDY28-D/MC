-- CreateTable
CREATE TABLE `MuebleMelamina` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NOT NULL,
    `precio` DECIMAL(8, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mueble` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `ancho` VARCHAR(191) NOT NULL,
    `alto` VARCHAR(191) NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `precio` DECIMAL(8, 2) NOT NULL,
    `muebleMelaminaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mueble` ADD CONSTRAINT `Mueble_muebleMelaminaId_fkey` FOREIGN KEY (`muebleMelaminaId`) REFERENCES `MuebleMelamina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
