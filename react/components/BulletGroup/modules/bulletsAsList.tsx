import React from "react"
import { BulletsSchema } from "../BulletTypes"
import Bullet from "../Bullet"

export const getBulletsAsTSXList = (
  bullets: BulletsSchema
) => (
  bullets.map((bullet: any, index) => {
    console.log("mi bullet", bullet)
    return <Bullet
    key={index}
    src={bullet.image}
    titleBullet={bullet.titleBullet}
    titleProduct={bullet.titleProduct}
    link={
      bullet.link
      ?
      bullet.link
      :
      {
        url: "",
        attributeNofollow: false,
        attributeTitle: "",
        openNewTab: false,
        newTab: false,
      }

    }
    />
  })
)
