package User

import (
	"github.com/gofiber/fiber/v2"
	"github.com/josiaranda/cendana-residence-cibubur/handler"
	"github.com/josiaranda/cendana-residence-cibubur/model"
	"log"
)

type server struct {
	handler.Handler
}

func Register(h handler.Handler,group string)  {
	s := &server{h}

	fb := s.Handler.Fb
	g := fb.Group(group)
	g.Get("/",s.GetAll)
	g.Post("/",s.CreateOne)
	g.Patch("/",s.PatchOne)
}

func (s *server) GetAll(c *fiber.Ctx) error {
	u := model.Users{}
	if err := u.Get(s.Db);err != nil {
		return c.Status(500).JSON(&fiber.Map{
			"status":"err",
			"msg":err.Error(),
			"data":u,
		})

	}
	return c.Status(200).JSON(&fiber.Map{
		"status":"ok",
		"msg":"ok",
		"data":u,
	})

}

func (s *server) CreateOne(c *fiber.Ctx) error {
	u := model.User{}

	if err := c.BodyParser(&u); err != nil {
		log.Println(err)
		return c.Status(400).JSON(&fiber.Map{
			"status":"err",
			"msg":err.Error(),
			"data":&fiber.Map{},
		})

	}
	if err := u.Create(s.Db);err != nil {
		return c.Status(500).JSON(&fiber.Map{
			"status":"err",
			"msg":err.Error(),
			"data":&fiber.Map{},
		})

	}
	return c.Status(200).JSON(&fiber.Map{
		"status":"ok",
		"msg":"ok",
		"data":u,
	})

}

func (s *server) PatchOne(c *fiber.Ctx) error {
	u := model.User{}

	if err := c.BodyParser(&u); err != nil {
		log.Println(err)
		return c.Status(400).JSON(&fiber.Map{
			"status":"err",
			"msg":err.Error(),
			"data":&fiber.Map{},
		})

	}
	if err := u.Update(s.Db);err != nil {
		return c.Status(500).JSON(&fiber.Map{
			"status":"err",
			"msg":err.Error(),
			"data":&fiber.Map{},
		})

	}
	return c.Status(200).JSON(&fiber.Map{
		"status":"ok",
		"msg":"ok",
		"data":u,
	})

}