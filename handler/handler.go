package handler

import (
	"github.com/go-redis/redis/v8"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

type Handler struct {
	Db *gorm.DB
	Fb *fiber.App
	Rdb *redis.Client
}