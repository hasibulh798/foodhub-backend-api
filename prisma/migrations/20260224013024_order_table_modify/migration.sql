/*
  Warnings:

  - You are about to drop the column `totalPrice` on the `orders` table. All the data in the column will be lost.
  - Added the required column `phone` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtotal` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('COD', 'ONLINE');

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "totalPrice",
ADD COLUMN     "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'COD',
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "subtotal" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "totalAmount" DECIMAL(10,2) NOT NULL;
