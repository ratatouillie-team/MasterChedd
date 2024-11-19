/*
  Warnings:

  - Added the required column `id_prato` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `avaliacao` ADD COLUMN `id_prato` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Avaliacao` ADD CONSTRAINT `avaliacao_ibfk_2` FOREIGN KEY (`id_prato`) REFERENCES `Prato`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
