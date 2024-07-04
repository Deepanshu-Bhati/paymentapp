-- CreateEnum
CREATE TYPE "onRamp" AS ENUM ('success', 'processing', 'failure');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "onramptransacton" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,
    "status" "onRamp" NOT NULL,
    "token" TEXT NOT NULL,
    "startdate" TIMESTAMP(3) NOT NULL,
    "provider" TEXT NOT NULL,

    CONSTRAINT "onramptransacton_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "balance" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "locked" INTEGER NOT NULL,

    CONSTRAINT "balance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_number_key" ON "User"("number");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "onramptransacton" ADD CONSTRAINT "onramptransacton_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "balance" ADD CONSTRAINT "balance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
