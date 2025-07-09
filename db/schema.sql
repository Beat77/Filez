DROP TABLE IF EXISTS folders CASCADE;
DROP TABLE IF EXISTS files;
CREATE TABLE folders (
    id serial PRIMARY KEY,
    name text NOT NULL CONSTRAINT must_be_different UNIQUE
);

CREATE TABLE files (
    id serial PRIMARY KEY,
    name text NOT NULL,
    size integer NOT NULL,
    folder_id integer NOT NULL
);