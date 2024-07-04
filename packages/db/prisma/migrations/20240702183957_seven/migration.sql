/*
  Warnings:

  - You are about to drop the column `balance` on the `OnRampTransacton` table. All the data in the column will be lost.
  - Added the required column `amount` to the `OnRampTransacton` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OnRampTransacton" DROP COLUMN "balance",
ADD COLUMN     "amount" INTEGER NOT NULL;
