package db

import (
    "database/sql"
    "fmt"
    "os"
    _ "github.com/lib/pq"
)

type Database struct {
    db *sql.DB
}

func New() (*Database, error) {
    dbURL := os.Getenv("DATABASE_URL")
    if dbURL == "" {
        return nil, fmt.Errorf("DATABASE_URL is required")
    }

    db, err := sql.Open("postgres", dbURL)
    if err != nil {
        return nil, err
    }

    return &Database{db: db}, nil
}

func (d *Database) Migrate() error {
    migration, err := os.ReadFile("migrations/001_init.sql")
    if err != nil {
        return err
    }

    _, err = d.db.Exec(string(migration))
    return err
}
