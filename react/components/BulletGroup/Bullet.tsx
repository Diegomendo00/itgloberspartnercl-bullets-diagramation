import React from "react"
import { Link } from "vtex.render-runtime"
import { LinkProps } from "./BulletTypes"
import { useCssHandles } from "vtex.css-handles"
import "./styles.css"

type Props = {
  src: string
  titleBullet: string
  titleProduct: string
  link: LinkProps
}

const Bullet = ({src, titleBullet, titleProduct, link}: Props) => {
  const CSS_HANDLES = [
    "bullet__item",
    "bullet__item--title",
    "bullet__item--image",
    "bullet__item--link",
    "bullet__item--titleProduct"
  ]
  const handles = useCssHandles(CSS_HANDLES)
  return (
  <div className={handles["bullet__item"]}>
      <img className={handles["bullet__item--image"]} src={src} alt={titleBullet}/>
      <p className={handles["bullet__item--titleProduct"]} >{titleProduct}</p>
      <Link
        to={link.url}
        className={handles["bullet__item--link"]}
      >
        <p className={handles["bullet__item--title"]} >{titleBullet}</p>
      </Link>
  </div>
  )
}

Bullet.schema= {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "imagen de bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}

export default Bullet
