/**
 * Created by 502742374 on 2017/5/18.
 */
import _ from 'lodash'


 let component =  () => {
    let el = document.createElement('div')

    el.innerHTML = _.join(['hello','webpack'],'  ')

    return el
}

document.body.appendChild(component())