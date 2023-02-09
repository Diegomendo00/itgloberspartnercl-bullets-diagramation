import React, { PropsWithChildren } from "react"
import { BulletsSchema } from "./BulletTypes"
import { useDevice } from "vtex.device-detector"
import { useListContext } from "vtex.list-context"
import { getBulletsAsTSXList } from "./modules/bulletsAsList"

export interface BulletGroupProps {
  bullets: BulletsSchema
}
const BulletGroup = ({
  bullets,
  children
}:PropsWithChildren<BulletGroupProps> ) => {
  const { isMobile } = useDevice()
  const { list } = useListContext() || []
  console.log("bullets", list, bullets)
  const bulletsContent = getBulletsAsTSXList(bullets)
  if (false){
    children
  }
  return (
    isMobile
    ?
    <div>list context mobile</div>
    :
    <div>{ bulletsContent }</div>
  )
}

export default BulletGroup
