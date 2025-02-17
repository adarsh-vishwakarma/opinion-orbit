/*
  Warnings:

  - You are about to drop the column `projectId` on the `Project` table. All the data in the column will be lost.
  - Added the required column `projectKey` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "projectId",
ADD COLUMN     "projectKey" TEXT NOT NULL;
