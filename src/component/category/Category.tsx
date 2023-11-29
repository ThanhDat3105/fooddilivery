import React, { useEffect, useState } from 'react';
import { CategoryInterface } from "@/interfaces/category"

import "./category.scss"

interface Props {
  size: string
  category: CategoryInterface;
  setCategory: (value: CategoryInterface) => void;
}

export default function Category(props: Props) {
  const { image, name, id } = props.category

  return (
    <div onClick={() => props.setCategory(props.category)} className={`category_item ${props.size}`} key={id}>
      <div className="img_category">
        <img src={image.src} alt="image" />
      </div>
      <div className="title_category">
        {name}
      </div>
    </div>
  )
}
