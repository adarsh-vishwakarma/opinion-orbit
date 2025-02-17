/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `projectCount` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_projectId_fkey";

-- AlterTable
ALTER TABLE "Feedback" ALTER COLUMN "projectId" SET DATA TYPE TEXT;

-- AlterTable
CREATE SEQUENCE project_id_seq;
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
DROP COLUMN "projectCount",
ALTER COLUMN "id" SET DEFAULT nextval('project_id_seq'),
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("projectId");
ALTER SEQUENCE project_id_seq OWNED BY "Project"."id";

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("projectId") ON DELETE RESTRICT ON UPDATE CASCADE;
