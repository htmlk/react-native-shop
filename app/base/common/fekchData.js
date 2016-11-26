//fekch封装get 参考http://www.tuicool.com/articles/M7NRr27
//使用对象键值对方式暴露函数\
/*
{
      headers: new Headers({
        'apikey':'7a32c8cb75c42f8768d2e350c0c837c5'
      })
}
*/
var fekchobj={
  R_GET:function(url, params) {
      if (params) {
          let paramsArray = []
          Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
          if (url.search(/\?/) === -1) {
              url += '?' + paramsArray.join('&')

          } else {
              url += '&' + paramsArray.join('&')
          }
      }

      return new Promise(function (resolve, reject) {
          fetch(url)
              .then((response) => {

                  if (response.ok) {
                      return response.json()

                  } else {
                      reject('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                  }
              })
              .then((response) => {
                    if (response && response.status) {
                        resolve(response)//response.status 是与服务器端的约定，非0就是错误
                    } else {
                        reject(response)//response也是与服务器端的约定
                    }
              })
              .catch((err)=> {
                  reject(_parseErrorMsg(err))
              })
      })
  }
}
export default fekchobj;
