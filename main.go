package main

import (
	"fmt"
	"github.com/go-redis/redis/v8"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
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
	rdb := redis.NewClient(&redis.Options{
		Addr:     os.Getenv("REDIS_ADDR"),
		Password: os.Getenv("REDIS_PASS"), // no password set
		DB:       0,  // use default DB
	})

	app := fiber.New()
	app.Use(cors.New())

	h := handler.Handler{
		Db: db,
		Fb: app,
		Rdb: rdb,
	}

	User.Register(h, "api/users")

	app.Static("/","./web/public",fiber.Static{Browse: true})

	p := os.Getenv("PORT")
	if p == "" {
		p = "3000"
	}

	app.Listen(fmt.Sprintf(":%s", p))
}
