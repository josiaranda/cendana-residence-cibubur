package main

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/josiaranda/cendana-residence-cibubur/handler"
	"github.com/josiaranda/cendana-residence-cibubur/handler/User"
	"github.com/josiaranda/cendana-residence-cibubur/model"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"
)

func main() {

	dsn := os.Getenv("DB_CONFIG")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	//db.Exec("drop table users")

	db.AutoMigrate(&model.User{})
	app := fiber.New()

	handler := handler.Handler{
		Db: db,
		Fb: app,
	}

	User.Register(handler, "api/users")
	p := os.Getenv("PORT")
	if p == "" {
		p = "3000"
	}

	app.Listen(fmt.Sprintf(":%s", p))
}
