import { useEffect, useState } from 'react'

interface Item {
  id: number
  path: string
  name: string
  image: string
  price: number
}

const useCategoryItems = (categoryName: string): Item[] => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/mock-api/V1/categories/${categoryName}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setItems(data.items || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [categoryName])

  return items
}

export default useCategoryItems
