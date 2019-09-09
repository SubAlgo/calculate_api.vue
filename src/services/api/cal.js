import { invoke } from './api'

export const plus = (n1, n2) =>
  invoke('/cal/plus', {
    n1,
    n2
  })
    .then((resp) => {
      alert(resp.sum)
      return resp
    })

export const showList = (n1, n2) =>
  invoke('/cal/returnList', {
    n1,
    n2
  })
    .then((resp) => {
      return resp
    })
