/*
  Warnings:

  - You are about to drop the `Case` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CaseEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MediationMeeting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MediationRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Case";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CaseEvent";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Document";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MediationMeeting";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MediationRequest";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Notification";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "phone" TEXT,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "situation" TEXT,
    "familyStatus" TEXT,
    "dependents" INTEGER,
    "monthlyIncome" REAL,
    "type" TEXT,
    "properties" INTEGER,
    "siret" TEXT,
    "office" TEXT,
    "licenseNumber" TEXT,
    "organization" TEXT,
    "certifications" TEXT,
    "service" TEXT,
    "socialDepartment" TEXT,
    "function" TEXT,
    "prefectureDepartment" TEXT
);

-- CreateTable
CREATE TABLE "cases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reference" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "urgency" TEXT NOT NULL,
    "debtAmount" REAL NOT NULL,
    "description" TEXT,
    "reportDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastActionDate" DATETIME,
    "nextDeadline" DATETIME,
    "landlordId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "officerId" TEXT,
    "mediatorId" TEXT,
    "socialWorkerId" TEXT,
    "housingType" TEXT,
    "housingArea" REAL,
    "rent" REAL,
    "charges" REAL,
    "deposit" REAL,
    "leaseStartDate" DATETIME,
    "leaseType" TEXT,
    "leaseDuration" INTEGER,
    "address" TEXT,
    "city" TEXT,
    "zipCode" TEXT,
    "department" TEXT,
    "housingBenefit" BOOLEAN NOT NULL DEFAULT false,
    "benefitAmount" REAL,
    CONSTRAINT "cases_landlordId_fkey" FOREIGN KEY ("landlordId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "cases_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "cases_officerId_fkey" FOREIGN KEY ("officerId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "cases_mediatorId_fkey" FOREIGN KEY ("mediatorId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "cases_socialWorkerId_fkey" FOREIGN KEY ("socialWorkerId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "documents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "fileSize" INTEGER,
    "mimeType" TEXT,
    "uploadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "caseId" TEXT NOT NULL,
    "uploadedById" TEXT,
    "aidId" TEXT,
    CONSTRAINT "documents_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "documents_aidId_fkey" FOREIGN KEY ("aidId") REFERENCES "aids" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "readAt" DATETIME,
    "type" TEXT NOT NULL,
    "priority" TEXT NOT NULL DEFAULT 'NORMAL',
    "expiresAt" DATETIME,
    "userId" TEXT NOT NULL,
    "caseId" TEXT,
    CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "notifications_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "mediation_requests" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "proposal" TEXT,
    "deadline" DATETIME,
    "disputeAmount" REAL,
    "disputeDescription" TEXT,
    "preferredLanguage" TEXT,
    "requesterId" TEXT NOT NULL,
    "mediatorId" TEXT,
    "caseId" TEXT NOT NULL,
    CONSTRAINT "mediation_requests_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "mediation_requests_mediatorId_fkey" FOREIGN KEY ("mediatorId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "mediation_requests_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "mediation_meetings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 60,
    "location" TEXT,
    "videoLink" TEXT,
    "status" TEXT NOT NULL,
    "notes" TEXT,
    "summary" TEXT,
    "attendees" TEXT,
    "mediationId" TEXT NOT NULL,
    CONSTRAINT "mediation_meetings_mediationId_fkey" FOREIGN KEY ("mediationId") REFERENCES "mediation_requests" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "case_events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "actor" TEXT NOT NULL,
    "actorRole" TEXT,
    "metadata" TEXT,
    "importance" INTEGER NOT NULL DEFAULT 1,
    "caseId" TEXT NOT NULL,
    CONSTRAINT "case_events_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "aids" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "amount" REAL,
    "requestedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submittedAt" DATETIME,
    "validatedAt" DATETIME,
    "decisionDate" DATETIME,
    "paymentDate" DATETIME,
    "reason" TEXT,
    "applicationRef" TEXT,
    "aidPurpose" TEXT,
    "beneficiary" TEXT,
    "caseId" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "notes" TEXT,
    "followUpDate" DATETIME,
    CONSTRAINT "aids_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "aids_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "repayment_plans" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "totalAmount" REAL NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "frequency" TEXT NOT NULL DEFAULT 'MONTHLY',
    "initialPayment" REAL,
    "regularAmount" REAL NOT NULL,
    "caseId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "landlordId" TEXT,
    "notes" TEXT,
    "validatedBy" TEXT,
    "validatedAt" DATETIME,
    CONSTRAINT "repayment_plans_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "repayment_plans_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "repayment_plans_landlordId_fkey" FOREIGN KEY ("landlordId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "installments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dueDate" DATETIME NOT NULL,
    "amount" REAL NOT NULL,
    "paidAmount" REAL,
    "paidAt" DATETIME,
    "status" TEXT NOT NULL,
    "paymentMethod" TEXT,
    "paymentReference" TEXT,
    "repaymentPlanId" TEXT NOT NULL,
    "notes" TEXT,
    CONSTRAINT "installments_repaymentPlanId_fkey" FOREIGN KEY ("repaymentPlanId") REFERENCES "repayment_plans" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "readAt" DATETIME,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "caseId" TEXT,
    CONSTRAINT "messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "messages_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "messages_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "content" TEXT NOT NULL,
    "isInternal" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    CONSTRAINT "comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comments_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "case_statistics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "period" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "city" TEXT,
    "newCasesCount" INTEGER NOT NULL,
    "resolvedCount" INTEGER NOT NULL,
    "evictionCount" INTEGER NOT NULL,
    "mediationCount" INTEGER NOT NULL,
    "preventionRate" REAL NOT NULL,
    "averageDebtAmount" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "ccapex_meetings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "location" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "agenda" TEXT,
    "minutes" TEXT,
    "attendees" TEXT
);

-- CreateTable
CREATE TABLE "ccapex_meeting_cases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "meetingId" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "decision" TEXT,
    "recommendation" TEXT,
    "priority" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "ccapex_meeting_cases_meetingId_fkey" FOREIGN KEY ("meetingId") REFERENCES "ccapex_meetings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ccapex_meeting_cases_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "cases_reference_key" ON "cases"("reference");

-- CreateIndex
CREATE INDEX "cases_landlordId_idx" ON "cases"("landlordId");

-- CreateIndex
CREATE INDEX "cases_tenantId_idx" ON "cases"("tenantId");

-- CreateIndex
CREATE INDEX "cases_status_idx" ON "cases"("status");

-- CreateIndex
CREATE INDEX "cases_stage_idx" ON "cases"("stage");

-- CreateIndex
CREATE INDEX "cases_urgency_idx" ON "cases"("urgency");

-- CreateIndex
CREATE INDEX "cases_city_idx" ON "cases"("city");

-- CreateIndex
CREATE INDEX "cases_department_idx" ON "cases"("department");

-- CreateIndex
CREATE INDEX "documents_caseId_idx" ON "documents"("caseId");

-- CreateIndex
CREATE INDEX "documents_type_idx" ON "documents"("type");

-- CreateIndex
CREATE INDEX "documents_aidId_idx" ON "documents"("aidId");

-- CreateIndex
CREATE INDEX "notifications_userId_idx" ON "notifications"("userId");

-- CreateIndex
CREATE INDEX "notifications_caseId_idx" ON "notifications"("caseId");

-- CreateIndex
CREATE INDEX "notifications_read_idx" ON "notifications"("read");

-- CreateIndex
CREATE INDEX "notifications_type_idx" ON "notifications"("type");

-- CreateIndex
CREATE INDEX "mediation_requests_requesterId_idx" ON "mediation_requests"("requesterId");

-- CreateIndex
CREATE INDEX "mediation_requests_mediatorId_idx" ON "mediation_requests"("mediatorId");

-- CreateIndex
CREATE INDEX "mediation_requests_caseId_idx" ON "mediation_requests"("caseId");

-- CreateIndex
CREATE INDEX "mediation_requests_status_idx" ON "mediation_requests"("status");

-- CreateIndex
CREATE INDEX "mediation_meetings_mediationId_idx" ON "mediation_meetings"("mediationId");

-- CreateIndex
CREATE INDEX "mediation_meetings_date_idx" ON "mediation_meetings"("date");

-- CreateIndex
CREATE INDEX "mediation_meetings_status_idx" ON "mediation_meetings"("status");

-- CreateIndex
CREATE INDEX "case_events_caseId_idx" ON "case_events"("caseId");

-- CreateIndex
CREATE INDEX "case_events_date_idx" ON "case_events"("date");

-- CreateIndex
CREATE INDEX "case_events_type_idx" ON "case_events"("type");

-- CreateIndex
CREATE INDEX "case_events_importance_idx" ON "case_events"("importance");

-- CreateIndex
CREATE INDEX "aids_caseId_idx" ON "aids"("caseId");

-- CreateIndex
CREATE INDEX "aids_applicantId_idx" ON "aids"("applicantId");

-- CreateIndex
CREATE INDEX "aids_status_idx" ON "aids"("status");

-- CreateIndex
CREATE INDEX "aids_type_idx" ON "aids"("type");

-- CreateIndex
CREATE INDEX "repayment_plans_caseId_idx" ON "repayment_plans"("caseId");

-- CreateIndex
CREATE INDEX "repayment_plans_tenantId_idx" ON "repayment_plans"("tenantId");

-- CreateIndex
CREATE INDEX "repayment_plans_landlordId_idx" ON "repayment_plans"("landlordId");

-- CreateIndex
CREATE INDEX "repayment_plans_status_idx" ON "repayment_plans"("status");

-- CreateIndex
CREATE INDEX "installments_repaymentPlanId_idx" ON "installments"("repaymentPlanId");

-- CreateIndex
CREATE INDEX "installments_dueDate_idx" ON "installments"("dueDate");

-- CreateIndex
CREATE INDEX "installments_status_idx" ON "installments"("status");

-- CreateIndex
CREATE INDEX "messages_senderId_idx" ON "messages"("senderId");

-- CreateIndex
CREATE INDEX "messages_recipientId_idx" ON "messages"("recipientId");

-- CreateIndex
CREATE INDEX "messages_caseId_idx" ON "messages"("caseId");

-- CreateIndex
CREATE INDEX "messages_read_idx" ON "messages"("read");

-- CreateIndex
CREATE INDEX "comments_caseId_idx" ON "comments"("caseId");

-- CreateIndex
CREATE INDEX "comments_authorId_idx" ON "comments"("authorId");

-- CreateIndex
CREATE INDEX "case_statistics_date_idx" ON "case_statistics"("date");

-- CreateIndex
CREATE INDEX "case_statistics_department_idx" ON "case_statistics"("department");

-- CreateIndex
CREATE INDEX "case_statistics_city_idx" ON "case_statistics"("city");

-- CreateIndex
CREATE INDEX "ccapex_meetings_date_idx" ON "ccapex_meetings"("date");

-- CreateIndex
CREATE INDEX "ccapex_meetings_department_idx" ON "ccapex_meetings"("department");

-- CreateIndex
CREATE INDEX "ccapex_meeting_cases_meetingId_idx" ON "ccapex_meeting_cases"("meetingId");

-- CreateIndex
CREATE INDEX "ccapex_meeting_cases_caseId_idx" ON "ccapex_meeting_cases"("caseId");

-- CreateIndex
CREATE UNIQUE INDEX "ccapex_meeting_cases_meetingId_caseId_key" ON "ccapex_meeting_cases"("meetingId", "caseId");
