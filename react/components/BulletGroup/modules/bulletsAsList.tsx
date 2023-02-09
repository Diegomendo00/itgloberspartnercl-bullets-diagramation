import React from "react"
import { BulletsSchema, Link } from "../BulletTypes"

type Bullet = {
  image: string
  titleBullet?: string
  link?: Link
}

export const getBulletsAsTSXList = (
  bullets: BulletsSchema
) => (
  bullets.map((bullet: Bullet, index) => {
    return <div key= {index}>
      <a href={bullet?.link?.url ? bullet?.link?.url : ""}>
        <p>{bullet?.image}</p>
        <p>{bullet?.titleBullet}</p>
      </a>
    </div>
  })
)
