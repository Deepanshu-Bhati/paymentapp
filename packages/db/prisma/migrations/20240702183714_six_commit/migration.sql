/*
  Warnings:

  - You are about to drop the column `StartTime` on the `OnRampTransacton` table. All the data in the column will be lost.
  - Added the required column `startTime` to the `OnRampTransacton` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OnRampTransacton" DROP COLUMN "StartTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
