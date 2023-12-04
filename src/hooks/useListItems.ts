import { useEffect, useState } from 'react'

interface ListItem {
  id: number
  name: string
  path: string
}

const useListItems = (): ListItem[] => {
  const [listItems, setListItems] = useState<ListItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/mock-api/V1/categories/list')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setListItems(data.items || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return listItems
}

export default useListItems
