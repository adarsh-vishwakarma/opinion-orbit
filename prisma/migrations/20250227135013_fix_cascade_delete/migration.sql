-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_projectId_fkey";

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("projectKey") ON DELETE CASCADE ON UPDATE CASCADE;
