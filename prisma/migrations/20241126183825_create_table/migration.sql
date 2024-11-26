-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `senha` VARCHAR(255) NULL,
    `cargo` VARCHAR(255) NULL,
    `icone` VARCHAR(255) NULL,
    `criadoEm` DATE NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Avaliacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NULL,
    `id_prato` INTEGER NOT NULL,
    `comentario` VARCHAR(255) NULL,
    `avaliacao` VARCHAR(255) NULL,
    `data_avaliacao` DATE NULL,

    INDEX `id_usuario`(`id_usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Evento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NULL,
    `data` DATE NULL,
    `horario` VARCHAR(255) NULL,
    `banner` VARCHAR(255) NULL,
    `criadoEm` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NOT NULL,
    `id_prato` INTEGER NOT NULL,
    `nome_prato` VARCHAR(191) NOT NULL,
    `data_pedido` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `quantidade` INTEGER NOT NULL,
    `total_pedido` DOUBLE NOT NULL,
    `status_pedido` VARCHAR(191) NOT NULL DEFAULT 'Pendente',

    INDEX `Pedido_id_usuario_idx`(`id_usuario`),
    INDEX `Pedido_id_prato_idx`(`id_prato`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prato` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NULL,
    `descricao` VARCHAR(255) NULL,
    `preco` VARCHAR(255) NULL,
    `imagem` VARCHAR(255) NULL,
    `tipo_comida` VARCHAR(255) NULL,
    `prato_dia` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Avaliacao` ADD CONSTRAINT `avaliacao_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Avaliacao` ADD CONSTRAINT `avaliacao_ibfk_2` FOREIGN KEY (`id_prato`) REFERENCES `Prato`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_id_prato_fkey` FOREIGN KEY (`id_prato`) REFERENCES `Prato`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
