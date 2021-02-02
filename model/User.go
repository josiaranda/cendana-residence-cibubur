package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name string `json:"name,required"`
	Phone string `json:"phone" gorm:"unique"`
	NickName string `json:"nickname"`
	Blok string `json:"blok"`
	Image string `json:"image"`
}

func (u *User) Create(db *gorm.DB) (err error) {
	err = db.Create(&u).Error
	return
}

func (u *User) Update(db *gorm.DB) (err error) {
	err = db.Model(&u).Updates(&u).Error
	return
}

func (u *User) Get(db *gorm.DB) (err error) {
	err = db.Find(&u).Error
	return
}

type Users []*User

func (u *Users) Get(db *gorm.DB) (err error) {
	err = db.Find(&u).Error
	return
}
