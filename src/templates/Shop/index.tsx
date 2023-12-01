import React from 'react'

interface ShopTemplateProps {
  categoryName: string
}

const ShopTemplate: React.FC<ShopTemplateProps> = ({ categoryName }) => {
  return (
    <>
      <h1>{categoryName}</h1>
      <p>Conteúdo da categoria {categoryName}</p>
    </>
  )
}

export default ShopTemplate
