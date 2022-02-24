import _ from 'lodash';
import Print from './print';

function component() {
    const element = document.createElement('div');

    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.onclick = Print.bind(null, 'Hello webpack!');

    return element;
}

document.body.appendChild(component());