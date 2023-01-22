export function filterData(seatchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(seatchText.toLowerCase())
  )

  return filterData
}
