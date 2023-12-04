import { useRouter } from 'next/router'
import ShopTemplate from '../../templates/Shop'

const allowedCategories = ['camisetas', 'calcas', 'calcados']

const CategoryPage = () => {
  const router = useRouter()
  const { slug } = router.query

  if (!allowedCategories.includes(slug as string)) {
    return <div>Essa categoria não existe!</div>
  }

  return <ShopTemplate categoryName={slug as string} />
}

export default CategoryPage
