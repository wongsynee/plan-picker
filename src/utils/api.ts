export const fetchData = async() => {
  try {
    const response = await fetch('http://localhost:3000/data')
    const data = await response.json()
    return data
  } catch (error) {
    // Do something with error.
  }
}