import '../styles/normalize.css';
import '../styles/main.css';
import layouts from './layouts';
import gitlogo from './logo';

const container = document.createElement('div');
const heading = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboardWrapper = document.createElement('div');
const key = document.createElement('div');
const desc = document.createElement('p');
const desc1 = document.createElement('span');
const desc2 = document.createElement('span');

heading.textContent = 'Virtual Keyboard';
container.className = 'container';
textarea.className = 'textarea';
keyboardWrapper.className = 'keyboard';



key.className = 'key';

textarea.placeholder = 'Enter text...';
desc.textContent = 'OS Windows';
desc2.textContent = 'Switch language: Shift (Left) + Alt (Left)';

document.body.append(container);
container.append(heading);
desc.append(desc1);
desc.append(desc2);
container.append(desc);
container.append(textarea);
container.append(keyboardWrapper);
container.append(gitlogo);

class Keys {
    constructor() {
        this.layouts = layouts;
        this.wrapper = keyboardWrapper;
        this.lang = localStorage.getItem('lang');
    }
    keysRender() {
        this.setLang()
        for (let i = 0; i < this.layouts.length; i++) {
            let keyId = this.layouts[i].key;
            let keyRu = this.layouts[i].ru.lowercase;
            let keyEn = this.layouts[i].en.lowercase;
            let key = document.createElement('div');
            let keyInner = document.createElement('span');
            key.appendChild(keyInner);
            key.classList.add('key');
            key.setAttribute('data-id', `${keyId}`)
            if (this.lang === 'ru') {
                keyInner.textContent = `${keyRu}`;
            } else {
                keyInner.textContent = `${keyEn}`;
            }
        }
        keyboardWrapper.appendChild(key);
    }
}
let keys = new Keys()
keys.keysRender()