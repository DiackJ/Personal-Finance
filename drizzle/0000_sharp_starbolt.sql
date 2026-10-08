CREATE TABLE "bills" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"recipient" text NOT NULL,
	"bill_type" "bill_type" NOT NULL,
	"amount_due" bigint,
	"billing_period" "billing_period" NOT NULL,
	"is_paid" boolean DEFAULT false,
	"date_due" date
);
--> statement-breakpoint
CREATE TABLE "budgets" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"category_id" serial NOT NULL,
	"theme_color_id" serial NOT NULL,
	"maximum" bigint,
	"spent" bigint DEFAULT 0,
	"remaining" bigint,
	"budget_start_date" date NOT NULL,
	"budget_type" "budget_type" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "category" (
	"id" serial NOT NULL,
	"category" "category" NOT NULL,
	"in_use" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "savings" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"title" text NOT NULL,
	"target" bigint,
	"total_saved" bigint,
	"percent_to_target" real DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "theme" (
	"id" serial NOT NULL,
	"theme_color" "theme_colors" NOT NULL,
	"in_used_savings" boolean DEFAULT false,
	"in_use_budget" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"recipient_sender" text NOT NULL,
	"category" "category",
	"income" boolean,
	"expense" boolean,
	"amount" bigint,
	"date" date
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"current_balance" bigint,
	"expense_total" bigint,
	"avg_monthly_income" bigint
);
