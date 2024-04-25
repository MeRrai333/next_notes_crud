/*
  Warnings:

  - You are about to drop the column `userid` on the `Notes` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_userid_fkey";

-- AlterTable
ALTER TABLE "Notes" DROP COLUMN "userid";

-- DropTable
DROP TABLE "User";
