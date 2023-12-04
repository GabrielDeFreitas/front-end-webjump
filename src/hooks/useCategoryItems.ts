import { useEffect, useState } from 'react'

interface ListItem {
  id: number
  name: string
  image: string
  price: number
}

const useCategoryItems = (categoryId: string): ListItem[] => {
  const [items, setItems] = useState<ListItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/mock-api/V1/categories/${categoryId}`
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
  }, [categoryId])

  return items
}

export default useCategoryItems
