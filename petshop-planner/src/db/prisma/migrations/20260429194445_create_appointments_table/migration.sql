-- CreateTable
CREATE TABLE "appointments" (
    "id" TEXT NOT NULL,
    "tutor_name" VARCHAR(255) NOT NULL,
    "pet_name" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(16) NOT NULL,
    "description" TEXT NOT NULL,
    "scheduled_to" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);
