CREATE TABLE demo_state (id TEXT PRIMARY KEY NOT NULL, version INTEGER NOT NULL DEFAULT 0, data TEXT NOT NULL);
--> statement-breakpoint
CREATE TABLE demo_sessions (id TEXT PRIMARY KEY NOT NULL, role TEXT NOT NULL, person TEXT NOT NULL, expires INTEGER NOT NULL);
--> statement-breakpoint
CREATE INDEX session_expiry ON demo_sessions(expires);
--> statement-breakpoint
CREATE TABLE rate_limits (id TEXT PRIMARY KEY NOT NULL, hits INTEGER NOT NULL, expires INTEGER NOT NULL);
