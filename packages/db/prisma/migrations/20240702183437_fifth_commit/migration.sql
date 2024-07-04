/*
  Warnings:

  - You are about to drop the `onramptransacton` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "onramptransacton" DROP CONSTRAINT "onramptransacton_userid_fkey";

-- DropTable
DROP TABLE "onramptransacton";

-- CreateTable
CREATE TABLE "OnRampTransacton" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,
    "status" "onRamp" NOT NULL,
    "token" TEXT NOT NULL,
    "StartTime" TIMESTAMP(3) NOT NULL,
    "provider" TEXT NOT NULL,

    CONSTRAINT "OnRampTransacton_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OnRampTransacton" ADD CONSTRAINT "OnRampTransacton_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
