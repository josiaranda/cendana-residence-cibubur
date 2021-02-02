package User

import (
	"encoding/json"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/josiaranda/cendana-residence-cibubur/handler"
	"github.com/josiaranda/cendana-residence-cibubur/model"
	"gorm.io/gorm"
	"log"
	"strconv"
)

type server struct {
	handler.Handler
}

const stringKey = "cendana:Users"

func Register(h handler.Handler,group string)  {
	s := &server{h}

	fb := s.Handler.Fb
	g := fb.Group(group)
	g.Get("/",s.GetAll)
	g.Get("/:id",s.GetOne)
	g.Post("/",s.CreateOne)
	g.Patch("/",s.PatchOne)
}

func (s *server) GetAll(c *fiber.Ctx) error {
	if val2, err := s.Rdb.Get(c.Context(), stringKey).Result();err == nil {
		fmt.Println("got from redis")
		c.Set(fiber.HeaderContentType,fiber.MIMEApplicationJSONCharsetUTF8)
		return c.Status(200).SendString(val2)
	}else {
		fmt.Println("err",err.Error())
	}

	u := model.Users{}
	if err := u.Get(s.Db);err != nil {
		return c.Status(500).JSON(&fiber.Map{
			"status":"err",
			"msg":err.Error(),
			"data":u,
		})

	}
	if b,err := json.Marshal(&fiber.Map{
		"status":"ok",
		"msg":"ok",
		"data":u,
	});err == nil {
		s.Rdb.Set(c.Context(),stringKey,string(b),0)
		fmt.Println("set to redis")

	}
	return c.Status(200).JSON(&fiber.Map{
		"status":"ok",
		"msg":"ok",
		"data":u,
	})

}

func (s *server) GetOne(c *fiber.Ctx) error {
	var err error
	uid := uint64(0)
	if uid,err = strconv.ParseUint(c.Params("id","0"),10,64);err != nil{
		uid = 0
	}
	u := model.User{Model:gorm.Model{ID: uint(uid)} }
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
	s.Rdb.Del(c.Context(),stringKey)
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
	s.Rdb.Del(c.Context(),stringKey)

	return c.Status(200).JSON(&fiber.Map{
		"status":"ok",
		"msg":"ok",
		"data":u,
	})

}