package handler

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

type Handler struct {
	Db *gorm.DB
	Fb *fiber.App
}