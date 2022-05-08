const layouts = [
    {
        key: 'Backquote',
        ru: {
            lowercase: 'ё',
            uppercase: 'Ё',
        },
        en: {
            lowercase: '`',
            uppercase: '~',
        },
    },
    {
        key: 'Digit1',
        ru: {
            lowercase: '1',
            uppercase: '!',
        },
        en: {
            lowercase: '1',
            uppercase: '!',
        },
    },
    {
        key: 'Digit2',
        ru: {
            lowercase: '2',
            uppercase: '"',
        },
        en: {
            lowercase: '2',
            uppercase: '@',
        },
    },
    {
        key: 'Digit3',
        ru: {
            lowercase: '3',
            uppercase: '№',
        },
        en: {
            lowercase: '3',
            uppercase: '#',
        },
    },
    {
        key: 'Digit4',
        ru: {
            lowercase: '4',
            uppercase: ';',
        },
        en: {
            lowercase: '4',
            uppercase: '$',
        },
    },
    {
        key: 'Digit5',
        ru: {
            lowercase: '5',
            uppercase: '%',
        },
        en: {
            lowercase: '5',
            uppercase: '%',
        },
    },
    {
        key: 'Digit6',
        ru: {
            lowercase: '6',
            uppercase: ':',
        },
        en: {
            lowercase: '6',
            uppercase: '^',
        },
    },
    {
        key: 'Digit7',
        ru: {
            lowercase: '7',
            uppercase: '?',
        },
        en: {
            lowercase: '7',
            uppercase: '&',
        },
    },
    {
        key: 'Digit8',
        ru: {
            lowercase: '8',
            uppercase: '*',
        },
        en: {
            lowercase: '8',
            uppercase: '*',
        },
    },
    {
        key: 'Digit9',
        ru: {
            lowercase: '9',
            uppercase: '(',
        },
        en: {
            lowercase: '9',
            uppercase: '(',
        },
    },
    {
        key: 'Digit0',
        ru: {
            lowercase: '0',
            uppercase: ')',
        },
        en: {
            lowercase: '0',
            uppercase: ')',
        },
    },
    {
        key: 'Minus',
        ru: {
            lowercase: '-',
            uppercase: '_',
        },
        en: {
            lowercase: '-',
            uppercase: '_',
        },
    },
    {
        key: 'Equal',
        ru: {
            lowercase: '=',
            uppercase: '+',
        },
        en: {
            lowercase: '=',
            uppercase: '+',
        },
    },
    {
        key: 'Backspace',
        ru: {
            lowercase: 'Backspace',
            uppercase: 'Backspace',
        },
        en: {
            lowercase: 'Backspace',
            uppercase: 'Backspace',
        },
    },
    {
        key: 'Tab',
        ru: {
            lowercase: 'Tab',
            uppercase: 'Tab',
        },
        en: {
            lowercase: 'Tab',
            uppercase: 'Tab',
        },
    },
    {
        key: 'KeyQ',
        ru: {
            lowercase: 'й',
            uppercase: 'Й',
        },
        en: {
            lowercase: 'q',
            uppercase: 'Q',
        },
    },
    {
        key: 'KeyW',
        ru: {
            lowercase: 'ц',
            uppercase: 'Ц',
        },
        en: {
            lowercase: 'w',
            uppercase: 'W',
        },
    },
    {
        key: 'KeyE',
        ru: {
            lowercase: 'у',
            uppercase: 'У',
        },
        en: {
            lowercase: 'e',
            uppercase: 'E',
        },
    },
    {
        key: 'KeyR',
        ru: {
            lowercase: 'к',
            uppercase: 'К',
        },
        en: {
            lowercase: 'r',
            uppercase: 'R',
        },
    },
    {
        key: 'KeyT',
        ru: {
            lowercase: 'е',
            uppercase: 'Е',
        },
        en: {
            lowercase: 't',
            uppercase: 'T',
        },
    },
    {
        key: 'KeyY',
        ru: {
            lowercase: 'н',
            uppercase: 'Н',
        },
        en: {
            lowercase: 'y',
            uppercase: 'Y',
        },
    },
    {
        key: 'KeyU',
        ru: {
            lowercase: 'г',
            uppercase: 'Г',
        },
        en: {
            lowercase: 'u',
            uppercase: 'U',
        },
    },
    {
        key: 'KeyI',
        ru: {
            lowercase: 'ш',
            uppercase: 'Ш',
        },
        en: {
            lowercase: 'i',
            uppercase: 'I',
        },
    },
    {
        key: 'KeyO',
        ru: {
            lowercase: 'щ',
            uppercase: 'Щ',
        },
        en: {
            lowercase: 'o',
            uppercase: 'O',
        },
    },
    {
        key: 'KeyP',
        ru: {
            lowercase: 'з',
            uppercase: 'З',
        },
        en: {
            lowercase: 'p',
            uppercase: 'P',
        },
    },
    {
        key: 'BracketLeft',
        ru: {
            lowercase: 'х',
            uppercase: 'Х',
        },
        en: {
            lowercase: '[',
            uppercase: '{',
        },
    },
    {
        key: 'BracketRight',
        ru: {
            lowercase: 'ъ',
            uppercase: 'Ъ',
        },
        en: {
            lowercase: ']',
            uppercase: '}',
        },
    },
    {
        key: 'Backslash',
        ru: {
            lowercase: '\\',
            uppercase: '|',
        },
        en: {
            lowercase: '\\',
            uppercase: '|',
        },
    },
    {
        key: 'Delete',
        ru: {
            lowercase: 'Del',
            uppercase: 'Del',
        },
        en: {
            lowercase: 'Del',
            uppercase: 'Del',
        },
    },
    {
        key: 'CapsLock',
        ru: {
            lowercase: 'CapsLock',
            uppercase: 'CapsLock',
        },
        en: {
            lowercase: 'CapsLock',
            uppercase: 'CapsLock',
        },
    },
    {
        key: 'KeyA',
        ru: {
            lowercase: 'ф',
            uppercase: 'Ф',
        },
        en: {
            lowercase: 'a',
            uppercase: 'A',
        },
    },
    {
        key: 'KeyS',
        ru: {
            lowercase: 'ы',
            uppercase: 'Ы',
        },
        en: {
            lowercase: 's',
            uppercase: 'S',
        },
    },
    {
        key: 'KeyD',
        ru: {
            lowercase: 'в',
            uppercase: 'В',
        },
        en: {
            lowercase: 'd',
            uppercase: 'D',
        },
    },
    {
        key: 'KeyF',
        ru: {
            lowercase: 'а',
            uppercase: 'А',
        },
        en: {
            lowercase: 'f',
            uppercase: 'F',
        },
    },
    {
        key: 'KeyG',
        ru: {
            lowercase: 'п',
            uppercase: 'П',
        },
        en: {
            lowercase: 'g',
            uppercase: 'G',
        },
    },
    {
        key: 'KeyH',
        ru: {
            lowercase: 'р',
            uppercase: 'Р',
        },
        en: {
            lowercase: 'h',
            uppercase: 'H',
        },
    },
    {
        key: 'KeyJ',
        ru: {
            lowercase: 'о',
            uppercase: 'О',
        },
        en: {
            lowercase: 'j',
            uppercase: 'J',
        },
    },
    {
        key: 'KeyK',
        ru: {
            lowercase: 'л',
            uppercase: 'Л',
        },
        en: {
            lowercase: 'k',
            uppercase: 'K',
        },
    },
    {
        key: 'KeyL',
        ru: {
            lowercase: 'д',
            uppercase: 'Д',
        },
        en: {
            lowercase: 'l',
            uppercase: 'L',
        },
    },
    {
        key: 'Semicolon',
        ru: {
            lowercase: 'ж',
            uppercase: 'Ж',
        },
        en: {
            lowercase: ';',
            uppercase: ':',
        },
    },
    {
        key: 'Quote',
        ru: {
            lowercase: 'э',
            uppercase: 'Э',
        },
        en: {
            lowercase: "'",
            uppercase: '"',
        },
    },
    {
        key: 'Enter',
        ru: {
            lowercase: 'Enter',
            uppercase: 'Enter',
        },
        en: {
            lowercase: 'Enter',
            uppercase: 'Enter',
        },
    },

    {
        key: 'ShiftLeft',
        ru: {
            lowercase: 'Shift',
            uppercase: 'Shift',
        },
        en: {
            lowercase: 'Shift',
            uppercase: 'Shift',
        },
    },
    {
        key: 'KeyZ',
        ru: {
            lowercase: 'я',
            uppercase: 'Я',
        },
        en: {
            lowercase: 'z',
            uppercase: 'Z',
        },
    },
    {
        key: 'KeyX',
        ru: {
            lowercase: 'ч',
            uppercase: 'Ч',
        },
        en: {
            lowercase: 'x',
            uppercase: 'X',
        },
    },
    {
        key: 'KeyC',
        ru: {
            lowercase: 'с',
            uppercase: 'С',
        },
        en: {
            lowercase: 'c',
            uppercase: 'C',
        },
    },
    {
        key: 'KeyV',
        ru: {
            lowercase: 'м',
            uppercase: 'М',
        },
        en: {
            lowercase: 'v',
            uppercase: 'V',
        },
    },
    {
        key: 'KeyB',
        ru: {
            lowercase: 'и',
            uppercase: 'И',
        },
        en: {
            lowercase: 'b',
            uppercase: 'B',
        },
    },
    {
        key: 'KeyN',
        ru: {
            lowercase: 'т',
            uppercase: 'Т',
        },
        en: {
            lowercase: 'n',
            uppercase: 'N',
        },
    },
    {
        key: 'KeyM',
        ru: {
            lowercase: 'ь',
            uppercase: 'Ь',
        },
        en: {
            lowercase: 'm',
            uppercase: 'M',
        },
    },
    {
        key: 'Comma',
        ru: {
            lowercase: 'б',
            uppercase: 'Б',
        },
        en: {
            lowercase: ',',
            uppercase: '<',
        },
    },
    {
        key: 'Period',
        ru: {
            lowercase: 'ю',
            uppercase: 'Ю',
        },
        en: {
            lowercase: '.',
            uppercase: '>',
        },
    },
    {
        key: 'Slash',
        ru: {
            lowercase: '.',
            uppercase: ',',
        },
        en: {
            lowercase: '/',
            uppercase: '?',
        },
    },
    {
        key: 'ArrowUp',
        ru: {
            lowercase: '↑',
            uppercase: '↑',
        },
        en: {
            lowercase: `↑`,
            uppercase: '↑',
        },
    },
    {
        key: 'ShiftRight',
        ru: {
            lowercase: 'Shift',
            uppercase: 'Shift',
        },
        en: {
            lowercase: 'Shift',
            uppercase: 'Shift',
        },
    },
    {
        key: 'ControlLeft',
        ru: {
            lowercase: 'Ctrl',
            uppercase: 'Ctrl',
        },
        en: {
            lowercase: 'Ctrl',
            uppercase: 'Ctrl',
        },
    },
    {
        key: 'MetaLeft',
        ru: {
            lowercase: 'Win',
            uppercase: 'Win',
        },
        en: {
            lowercase: 'Win',
            uppercase: 'Win',
        },
    },
    {
        key: 'AltLeft',
        ru: {
            lowercase: 'Alt',
            uppercase: 'Alt',
        },
        en: {
            lowercase: 'Alt',
            uppercase: 'Alt',
        },
    },
    {
        key: 'Space',
        ru: {
            lowercase: 'Space',
            uppercase: 'Space',
        },
        en: {
            lowercase: 'Space',
            uppercase: 'Space',
        },
    },
    {
        key: 'AltRight',
        ru: {
            lowercase: 'Alt',
            uppercase: 'Alt',
        },
        en: {
            lowercase: 'Alt',
            uppercase: 'Alt',
        },
    },
    {
        key: 'ArrowLeft',
        ru: {
            uppercase: '←',
            lowercase: '←',
        },
        en: {
            lowercase: '←',
            uppercase: '←',
        },
    },
    {
        key: 'ArrowDown',
        ru: {
            lowercase: '↓',
            uppercase: '↓',
        },
        en: {
            lowercase: '↓',
            uppercase: '↓',
        },
    },
    {
        key: 'ArrowRight',
        ru: {
            lowercase: '→',
            uppercase: '→',
        },
        en: {
            lowercase: '→',
            uppercase: '→',
        },
    },
    {
        key: 'ControlRight',
        ru: {
            lowercase: 'Ctrl',
            uppercase: 'Ctrl',
        },
        en: {
            lowercase: 'Ctrl',
            uppercase: 'Ctrl',
        },
    },
]

export default layouts