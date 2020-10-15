import axios from 'axios'
import { ConfirmQuote, NetEaseListData, NetEaseResponse } from './src/type'

axios.post(
  'https://mpc.netease.com/api/outsource/sm/my_workbenches/pending_quote',
  { 'conditions': {}, 'current_page': 1, 'page_size': 15 }, {
    'headers': {
      'accept': '*/*',
      'accept-language': 'zh-CN,zh;q=0.9',
      'cache-control': 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      'pragma': 'no-cache',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'x-requested-with': 'XMLHttpRequest',
      'cookie': '__snaker__captcha=t43yCkw0ziIFWFGe; gdxidpyhxdE=eIWjzjUuQvB0l0pQpT0%5CbSG8ASdzz1Jx%2B5ssD%2BSl1BL7Y%2FTJKyhPeZAUjv1JOx4KWS6i3xGAVI0Va0PO10W9NqYepk2l0unhI%2BuJ5vMxoa35Gt01Y1X1JlgXC5HT70r%2FvPeM6atXjgXsRlPu0LIm%2BIX8UXwajqZeA0Ys584s5hAXm8AY%3A1602587726988; _9755xjdesxxd_=32; _mpc_session=az7sjPMlVKWOVddsIPSUDnlPAEjN8EUVgYLMoEfZO0uVZQ0c7OTF2Wls7fae5Xab3BDes4cLKi0XHxRQMcTqXAGJfy%2BG8qZy%2B%2Bpk3MAVGMIEtSq5jvASXTjCT%2F%2F%2Bx8QlUOxI8tHyjRQ7fvc28boHjGpJUDEKhp2nydznMDd4yJiHJpNwK00M%2FF1S3iiBDB9U7QT3nYhUsKuG--RdzdVz8j7%2BAATIoW--YwdMRmI7YE87%2F9chUqzZkQ%3D%3D',
    },
  },
).then(res => {
  const data = res.data as NetEaseResponse<NetEaseListData<ConfirmQuote>>
  console.log(data.data.res[0].name)
})