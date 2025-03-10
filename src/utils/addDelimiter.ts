// 천자리 단위 콤마
function addDelimiter(value: number | string, delimiter = ',') {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter)
}

export default addDelimiter
