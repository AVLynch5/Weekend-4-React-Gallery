-- CREATE DATABASE "wknd-4-gallery"

-- TABLE
CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"description" VARCHAR(80) NOT NULL,
	"path" VARCHAR(80) NOT NULL,
	"likes" INTEGER DEFAULT 0
);

INSERT INTO "posts" ("description", "path")
VALUES ('Photo of a goat taken at Glacier National Park.', 'images/goat_small.jpg');