import { uuid, varchar, text, timestamp, date, bigint, real, boolean, serial, pgTable, pgEnum } from "drizzle-orm/pg-core";
//import { InferInsertModel } from "drizzle-kit";

// enum values
const categoryEnum = pgEnum('category', [
    'Entertainment',
    'Bills',
    'Groceries',
    'Dining Out',
    'Transportaion',
    'Personal Care',
    'Education',
    'Lifestyle',
    'Shopping',
    'General'
]);

const themeColorsEnum = pgEnum('theme_colors', [
    'Green',
    'Yellow',
    'Cyan',
    'Navy',
    'Red',
    'Purple',
    'Turquoise',
    'Brown',
    'Magenta',
    'Blue',
    'Grey',
    'Navy Grey',
    'Army',
    'Pink',
    'Orange',
    'Gold'
]);

const billTypeEnum = pgEnum('bill_type', [
    'Housing',
    'Electricity',
    'Water/Sewer',
    'Internet',
    'Phone',
    'Gas',
    'Subscription',
    'Payment',
    'Other'
]);

const billingPeriodEnum = pgEnum('billing_period', [
    'Monthly',
    'Yearly'
]);

const budgetTypeEnum = pgEnum('budget_type', [
    'Weekly',
    'Monthly',
    'Yearly'
]);

// database schema tables
export const users = pgTable("users", {
    id: uuid().primaryKey().notNull(),
    email: varchar({ length: 256 }).notNull(),
    password: text().notNull(),
    created_at: timestamp({ withTimezone: true }).defaultNow(),
    current_balance: bigint({ mode: "number" }),
    expense_total: bigint({ mode: "number" }),
    avg_monthly_income: bigint({ mode: "number" })
});

export const savings = pgTable("savings", {
    id: serial().primaryKey().notNull(),
    user_id: uuid().notNull(),
    title: text().notNull(),
    target: bigint({ mode: "number" }),
    total_saved: bigint({ mode: "number" }),
    percent_to_target: real().default(0.00)
});

export const transactions = pgTable("transactions", {
    id: serial().primaryKey().notNull(),
    user_id: uuid().notNull(),
    recipient_sender: text().notNull(),
    category: categoryEnum(),
    income: boolean(),
    expense: boolean(),
    amount: bigint({ mode: "number" }),
    date: date()
});

export const budgets = pgTable("budgets", {
    id: serial().primaryKey().notNull(),
    user_id: uuid().notNull(),
    category_id: serial().notNull(),
    theme_color_id: serial().notNull(),
    maximum: bigint({ mode: "number" }),
    spent: bigint({ mode: "number" }).default(0),
    remaining: bigint({ mode: "number"}),
    budget_start_date: date().notNull(),
    budget_type: budgetTypeEnum().notNull()
});

export const bills = pgTable("bills", {
    id: serial().primaryKey().notNull(),
    user_id: uuid().notNull(),
    recipient: text().notNull(),
    bill_type: billTypeEnum().notNull(),
    amount_due: bigint({ mode: "number" }),
    billing_period: billingPeriodEnum().notNull(),
    is_paid: boolean().default(false),
    date_due: date()
});

// table to limit colors from being reused for savings container or budgets
// ex: prevent user from having two savings containers with a theme color of purple
export const themeColors = pgTable("theme", {
    id: serial().notNull(),
    theme_color: themeColorsEnum().notNull(),
    in_used_savings: boolean().default(false),
    in_use_budget: boolean().default(false)
});

// table to limit categories from being reused for budgets 
// ex: prevent user from having two grocery budgets 
export const categories = pgTable("category", {
    id: serial().notNull(),
    category: categoryEnum().notNull(),
    in_use: boolean().default(false)
});