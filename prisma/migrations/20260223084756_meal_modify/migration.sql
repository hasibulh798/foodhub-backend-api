-- CreateEnum
CREATE TYPE "DietaryType" AS ENUM ('VEG', 'NON_VEG', 'VEGAN');

-- AlterTable
ALTER TABLE "meals" ADD COLUMN     "cuisine" TEXT,
ADD COLUMN     "dietaryType" "DietaryType";
