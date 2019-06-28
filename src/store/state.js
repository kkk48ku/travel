let city = '上海'
try {
  if (localStorage.city) {
    city = localStorage.city
  }
} catch (error) {
  console.log(error)
}
export default {
  city
}
