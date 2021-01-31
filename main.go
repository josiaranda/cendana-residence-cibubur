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

	dsn := "host=ec2-54-237-135-248.compute-1.amazonaws.com user=vfzkoexcnqltui password=eec90a304424b821b23c662af6d1f178bb7fe6e1aea1354f0be3d28d8bbf63c0 dbname=dahssf7e60a7uf port=5432  TimeZone=Asia/Jakarta"
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
