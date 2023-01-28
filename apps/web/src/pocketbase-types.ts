/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Categories = "categories",
	Expenses = "expenses",
	Incomes = "incomes",
	Planners = "planners",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CategoriesRecord = {
	title: string
	planner: RecordIdString
}

export type ExpensesRecord = {
	title: string
	description?: string
	date: IsoDateString
	planner: RecordIdString
	category?: RecordIdString
	value?: number
	attachements?: string[]
}

export type IncomesRecord = {
	title: string
	description?: string
	date: IsoDateString
	planner: RecordIdString
	category?: RecordIdString
	value?: number
	attachements?: string[]
}

export type PlannersRecord = {
	title: string
	description?: string
	user: RecordIdString
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type CategoriesResponse<Texpand = unknown> = CategoriesRecord & BaseSystemFields<Texpand>
export type ExpensesResponse<Texpand = unknown> = ExpensesRecord & BaseSystemFields<Texpand>
export type IncomesResponse<Texpand = unknown> = IncomesRecord & BaseSystemFields<Texpand>
export type PlannersResponse<Texpand = unknown> = PlannersRecord & BaseSystemFields<Texpand>
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	categories: CategoriesRecord
	expenses: ExpensesRecord
	incomes: IncomesRecord
	planners: PlannersRecord
	users: UsersRecord
}