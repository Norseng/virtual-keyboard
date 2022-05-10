const layouts = [
    {
        key: 'Backquote',
        ru: {
            lowercase: 'ё',
            uppercase: 'Ё',
            capsLowercase: 'Ё',
            capsUppercase: 'ё',
        },
        en: {
            lowercase: '`',
            uppercase: '~',
            capsLowercase: '`',
            capsUppercase: '`',
        },
    },
    {
        key: 'Digit1',
        ru: {
            lowercase: '1',
            uppercase: '!',
            capsLowercase: '1',
            capsUppercase: '1',
        },
        en: {
            lowercase: '1',
            uppercase: '!',
            capsLowercase: '1',
            capsUppercase: '1',
        },
    },
    {
        key: 'Digit2',
        ru: {
            lowercase: '2',
            uppercase: '"',
            capsLowercase: '2',
            capsUppercase: '2',
        },
        en: {
            lowercase: '2',
            uppercase: '@',
            capsLowercase: '2',
            capsUppercase: '2',
        },
    },
    {
        key: 'Digit3',
        ru: {
            lowercase: '3',
            uppercase: '№',
            capsLowercase: '3',
            capsUppercase: '3',
        },
        en: {
            lowercase: '3',
            uppercase: '#',
            capsLowercase: '3',
            capsUppercase: '3',
        },
    },
    {
        key: 'Digit4',
        ru: {
            lowercase: '4',
            uppercase: ';',
            capsLowercase: '4',
            capsUppercase: '4',
        },
        en: {
            lowercase: '4',
            uppercase: '$',
            capsLowercase: '4',
            capsUppercase: '4',
        },
    },
    {
        key: 'Digit5',
        ru: {
            lowercase: '5',
            uppercase: '%',
            capsLowercase: '5',
            capsUppercase: '5',
        },
        en: {
            lowercase: '5',
            uppercase: '%',
            capsLowercase: '5',
            capsUppercase: '5',
        },
    },
    {
        key: 'Digit6',
        ru: {
            lowercase: '6',
            uppercase: ':',
            capsLowercase: '6',
            capsUppercase: '6',
        },
        en: {
            lowercase: '6',
            uppercase: '^',
            capsLowercase: '6',
            capsUppercase: '6',
        },
    },
    {
        key: 'Digit7',
        ru: {
            lowercase: '7',
            uppercase: '?',
            capsLowercase: '7',
            capsUppercase: '7',
        },
        en: {
            lowercase: '7',
            uppercase: '&',
            capsLowercase: '7',
            capsUppercase: '7',
        },
    },
    {
        key: 'Digit8',
        ru: {
            lowercase: '8',
            uppercase: '*',
            capsLowercase: '8',
            capsUppercase: '8',
        },
        en: {
            lowercase: '8',
            uppercase: '*',
            capsLowercase: '8',
            capsUppercase: '8',
        },
    },
    {
        key: 'Digit9',
        ru: {
            lowercase: '9',
            uppercase: '(',
            capsLowercase: '9',
            capsUppercase: '9',
        },
        en: {
            lowercase: '9',
            uppercase: '(',
            capsLowercase: '9',
            capsUppercase: '9',
        },
    },
    {
        key: 'Digit0',
        ru: {
            lowercase: '0',
            uppercase: ')',
            capsLowercase: '0',
            capsUppercase: '0',
        },
        en: {
            lowercase: '0',
            uppercase: ')',
            capsLowercase: '0',
            capsUppercase: '0',
        },
    },
    {
        key: 'Minus',
        ru: {
            lowercase: '-',
            uppercase: '_',
            capsLowercase: '-',
            capsUppercase: '-',
        },
        en: {
            lowercase: '-',
            uppercase: '_',
            capsLowercase: '-',
            capsUppercase: '-',
        },
    },
    {
        key: 'Equal',
        ru: {
            lowercase: '=',
            uppercase: '+',
            capsLowercase: '=',
            capsUppercase: '=',
        },
        en: {
            lowercase: '=',
            uppercase: '+',
            capsLowercase: '=',
            capsUppercase: '=',
        },
    },
    {
        key: 'Backspace',
        ru: {
            lowercase: 'Backspace',
            uppercase: 'Backspace',
            capsLowercase: 'Backspace',
            capsUppercase: 'Backspace',
        },
        en: {
            lowercase: 'Backspace',
            uppercase: 'Backspace',
            capsLowercase: 'Backspace',
            capsUppercase: 'Backspace',
        },
    },
    {
        key: 'Tab',
        ru: {
            lowercase: 'Tab',
            uppercase: 'Tab',
            capsLowercase: 'Tab',
            capsUppercase: 'Tab',
        },
        en: {
            lowercase: 'Tab',
            uppercase: 'Tab',
            capsLowercase: 'Tab',
            capsUppercase: 'Tab',
        },
    },
    {
        key: 'KeyQ',
        ru: {
            lowercase: 'й',
            uppercase: 'Й',
            capsLowercase: 'Й',
            capsUppercase: 'й',
        },
        en: {
            lowercase: 'q',
            uppercase: 'Q',
            capsLowercase: 'Q',
            capsUppercase: 'q',
        },
    },
    {
        key: 'KeyW',
        ru: {
            lowercase: 'ц',
            uppercase: 'Ц',
            capsLowercase: 'Ц',
            capsUppercase: 'ц',
        },
        en: {
            lowercase: 'w',
            uppercase: 'W',
            capsLowercase: 'W',
            capsUppercase: 'w',
        },
    },
    {
        key: 'KeyE',
        ru: {
            lowercase: 'у',
            uppercase: 'У',
            capsLowercase: 'У',
            capsUppercase: 'у',
        },
        en: {
            lowercase: 'e',
            uppercase: 'E',
            capsLowercase: 'E',
            capsUppercase: 'e',
        },
    },
    {
        key: 'KeyR',
        ru: {
            lowercase: 'к',
            uppercase: 'К',
            capsLowercase: 'К',
            capsUppercase: 'к',
        },
        en: {
            lowercase: 'r',
            uppercase: 'R',
            capsLowercase: 'R',
            capsUppercase: 'r',
        },
    },
    {
        key: 'KeyT',
        ru: {
            lowercase: 'е',
            uppercase: 'Е',
            capsLowercase: 'Е',
            capsUppercase: 'е',
        },
        en: {
            lowercase: 't',
            uppercase: 'T',
            capsLowercase: 'T',
            capsUppercase: 't',
        },
    },
    {
        key: 'KeyY',
        ru: {
            lowercase: 'н',
            uppercase: 'Н',
            capsLowercase: 'Н',
            capsUppercase: 'н',
        },
        en: {
            lowercase: 'y',
            uppercase: 'Y',
            capsLowercase: 'Y',
            capsUppercase: 'y',
        },
    },
    {
        key: 'KeyU',
        ru: {
            lowercase: 'г',
            uppercase: 'Г',
            capsLowercase: 'Г',
            capsUppercase: 'г',
        },
        en: {
            lowercase: 'u',
            uppercase: 'U',
            capsLowercase: 'U',
            capsUppercase: 'u',
        },
    },
    {
        key: 'KeyI',
        ru: {
            lowercase: 'ш',
            uppercase: 'Ш',
            capsLowercase: 'Ш',
            capsUppercase: 'ш',
        },
        en: {
            lowercase: 'i',
            uppercase: 'I',
            capsLowercase: 'I',
            capsUppercase: 'i',
        },
    },
    {
        key: 'KeyO',
        ru: {
            lowercase: 'щ',
            uppercase: 'Щ',
            capsLowercase: 'Щ',
            capsUppercase: 'щ',
        },
        en: {
            lowercase: 'o',
            uppercase: 'O',
            capsLowercase: 'O',
            capsUppercase: 'o',
        },
    },
    {
        key: 'KeyP',
        ru: {
            lowercase: 'з',
            uppercase: 'З',
            capsLowercase: 'З',
            capsUppercase: 'з',
        },
        en: {
            lowercase: 'p',
            uppercase: 'P',
            capsLowercase: 'P',
            capsUppercase: 'p',
        },
    },
    {
        key: 'BracketLeft',
        ru: {
            lowercase: 'х',
            uppercase: 'Х',
            capsLowercase: 'Х',
            capsUppercase: 'х',
        },
        en: {
            lowercase: '[',
            uppercase: '{',
            capsLowercase: '[',
            capsUppercase: '[',
        },
    },
    {
        key: 'BracketRight',
        ru: {
            lowercase: 'ъ',
            uppercase: 'Ъ',
            capsLowercase: 'Ъ',
            capsUppercase: 'ъ',
        },
        en: {
            lowercase: ']',
            uppercase: '}',
            capsLowercase: ']',
            capsUppercase: ']',
        },
    },
    {
        key: 'Backslash',
        ru: {
            lowercase: '\\',
            uppercase: '|',
            capsLowercase: '\\',
            capsUppercase: '\\',
        },
        en: {
            lowercase: '\\',
            uppercase: '|',
            capsLowercase: '\\',
            capsUppercase: '\\',
        },
    },
    {
        key: 'Delete',
        ru: {
            lowercase: 'Del',
            uppercase: 'Del',
            capsLowercase: 'Del',
            capsUppercase: 'Del',
        },
        en: {
            lowercase: 'Del',
            uppercase: 'Del',
            capsLowercase: 'Del',
            capsUppercase: 'Del',
        },
    },
    {
        key: 'CapsLock',
        ru: {
            lowercase: 'CapsLock',
            uppercase: 'CapsLock',
            capsLowercase: 'CapsLock',
            capsUppercase: 'CapsLock',
        },
        en: {
            lowercase: 'CapsLock',
            uppercase: 'CapsLock',
            capsLowercase: 'CapsLock',
            capsUppercase: 'CapsLock',
        },
    },
    {
        key: 'KeyA',
        ru: {
            lowercase: 'ф',
            uppercase: 'Ф',
            capsLowercase: 'Ф',
            capsUppercase: 'ф',
        },
        en: {
            lowercase: 'a',
            uppercase: 'A',
            capsLowercase: 'A',
            capsUppercase: 'a',
        },
    },
    {
        key: 'KeyS',
        ru: {
            lowercase: 'ы',
            uppercase: 'Ы',
            capsLowercase: 'Ы',
            capsUppercase: 'ы',
        },
        en: {
            lowercase: 's',
            uppercase: 'S',
            capsLowercase: 'S',
            capsUppercase: 's',
        },
    },
    {
        key: 'KeyD',
        ru: {
            lowercase: 'в',
            uppercase: 'В',
            capsLowercase: 'В',
            capsUppercase: 'в',
        },
        en: {
            lowercase: 'd',
            uppercase: 'D',
            capsLowercase: 'D',
            capsUppercase: 'd',
        },
    },
    {
        key: 'KeyF',
        ru: {
            lowercase: 'а',
            uppercase: 'А',
            capsLowercase: 'А',
            capsUppercase: 'а',
        },
        en: {
            lowercase: 'f',
            uppercase: 'F',
            capsLowercase: 'F',
            capsUppercase: 'f',
        },
    },
    {
        key: 'KeyG',
        ru: {
            lowercase: 'п',
            uppercase: 'П',
            capsLowercase: 'П',
            capsUppercase: 'п',
        },
        en: {
            lowercase: 'g',
            uppercase: 'G',
            capsLowercase: 'G',
            capsUppercase: 'g',
        },
    },
    {
        key: 'KeyH',
        ru: {
            lowercase: 'р',
            uppercase: 'Р',
            capsLowercase: 'Р',
            capsUppercase: 'р',
        },
        en: {
            lowercase: 'h',
            uppercase: 'H',
            capsLowercase: 'H',
            capsUppercase: 'h',
        },
    },
    {
        key: 'KeyJ',
        ru: {
            lowercase: 'о',
            uppercase: 'О',
            capsLowercase: 'О',
            capsUppercase: 'о',
        },
        en: {
            lowercase: 'j',
            uppercase: 'J',
            capsLowercase: 'J',
            capsUppercase: 'j',
        },
    },
    {
        key: 'KeyK',
        ru: {
            lowercase: 'л',
            uppercase: 'Л',
            capsLowercase: 'Л',
            capsUppercase: 'л',
        },
        en: {
            lowercase: 'k',
            uppercase: 'K',
            capsLowercase: 'K',
            capsUppercase: 'k',
        },
    },
    {
        key: 'KeyL',
        ru: {
            lowercase: 'д',
            uppercase: 'Д',
            capsLowercase: 'Д',
            capsUppercase: 'д',
        },
        en: {
            lowercase: 'l',
            uppercase: 'L',
            capsLowercase: 'L',
            capsUppercase: 'l',
        },
    },
    {
        key: 'Semicolon',
        ru: {
            lowercase: 'ж',
            uppercase: 'Ж',
            capsLowercase: 'Ж',
            capsUppercase: 'ж',
        },
        en: {
            lowercase: ';',
            uppercase: ':',
            capsLowercase: ';',
            capsUppercase: ';',
        },
    },
    {
        key: 'Quote',
        ru: {
            lowercase: 'э',
            uppercase: 'Э',
            capsLowercase: 'Э',
            capsUppercase: 'э',
        },
        en: {
            lowercase: "'",
            uppercase: '"',
            capsLowercase: "'",
            capsUppercase: "'",
        },
    },
    {
        key: 'Enter',
        ru: {
            lowercase: 'Enter',
            uppercase: 'Enter',
            capsLowercase: 'Enter',
            capsUppercase: 'Enter',
        },
        en: {
            lowercase: 'Enter',
            uppercase: 'Enter',
            capsLowercase: 'Enter',
            capsUppercase: 'Enter',
        },
    },

    {
        key: 'ShiftLeft',
        ru: {
            lowercase: 'Shift',
            uppercase: 'Shift',
            capsLowercase: 'Shift',
            capsUppercase: 'Shift',
        },
        en: {
            lowercase: 'Shift',
            uppercase: 'Shift',
            capsLowercase: 'Shift',
            capsUppercase: 'Shift',
        },
    },
    {
        key: 'KeyZ',
        ru: {
            lowercase: 'я',
            uppercase: 'Я',
            capsLowercase: 'Я',
            capsUppercase: 'я',
        },
        en: {
            lowercase: 'z',
            uppercase: 'Z',
            capsLowercase: 'Z',
            capsUppercase: 'z',
        },
    },
    {
        key: 'KeyX',
        ru: {
            lowercase: 'ч',
            uppercase: 'Ч',
            capsLowercase: 'Ч',
            capsUppercase: 'ч',
        },
        en: {
            lowercase: 'x',
            uppercase: 'X',
            capsLowercase: 'X',
            capsUppercase: 'x',
        },
    },
    {
        key: 'KeyC',
        ru: {
            lowercase: 'с',
            uppercase: 'С',
            capsLowercase: 'С',
            capsUppercase: 'с',
        },
        en: {
            lowercase: 'c',
            uppercase: 'C',
            capsLowercase: 'C',
            capsUppercase: 'c',
        },
    },
    {
        key: 'KeyV',
        ru: {
            lowercase: 'м',
            uppercase: 'М',
            capsLowercase: 'М',
            capsUppercase: 'м',
        },
        en: {
            lowercase: 'v',
            uppercase: 'V',
            capsLowercase: 'V',
            capsUppercase: 'v',
        },
    },
    {
        key: 'KeyB',
        ru: {
            lowercase: 'и',
            uppercase: 'И',
            capsLowercase: 'И',
            capsUppercase: 'и',
        },
        en: {
            lowercase: 'b',
            uppercase: 'B',
            capsLowercase: 'B',
            capsUppercase: 'b',
        },
    },
    {
        key: 'KeyN',
        ru: {
            lowercase: 'т',
            uppercase: 'Т',
            capsLowercase: 'Т',
            capsUppercase: 'т',
        },
        en: {
            lowercase: 'n',
            uppercase: 'N',
            capsLowercase: 'N',
            capsUppercase: 'n',
        },
    },
    {
        key: 'KeyM',
        ru: {
            lowercase: 'ь',
            uppercase: 'Ь',
            capsLowercase: 'Ь',
            capsUppercase: 'ь',
        },
        en: {
            lowercase: 'm',
            uppercase: 'M',
            capsLowercase: 'M',
            capsUppercase: 'm',
        },
    },
    {
        key: 'Comma',
        ru: {
            lowercase: 'б',
            uppercase: 'Б',
            capsLowercase: 'Б',
            capsUppercase: 'б',
        },
        en: {
            lowercase: ',',
            uppercase: '<',
            capsLowercase: ',',
            capsUppercase: ',',
        },
    },
    {
        key: 'Period',
        ru: {
            lowercase: 'ю',
            uppercase: 'Ю',
            capsLowercase: 'Ю',
            capsUppercase: 'ю',
        },
        en: {
            lowercase: '.',
            uppercase: '>',
            capsLowercase: '.',
            capsUppercase: '.',
        },
    },
    {
        key: 'Slash',
        ru: {
            lowercase: '.',
            uppercase: ',',
            capsLowercase: '.',
            capsUppercase: '.',
        },
        en: {
            lowercase: '/',
            uppercase: '?',
            capsLowercase: '/',
            capsUppercase: '/',
        },
    },
    {
        key: 'ArrowUp',
        ru: {
            lowercase: '↑',
            uppercase: '↑',
            capsLowercase: '↑',
            capsUppercase: '↑',
        },
        en: {
            lowercase: '↑',
            uppercase: '↑',
            capsLowercase: '↑',
            capsUppercase: '↑',
        },
    },
    {
        key: 'ShiftRight',
        ru: {
            lowercase: 'Shift',
            uppercase: 'Shift',
            capsLowercase: 'Shift',
            capsUppercase: 'Shift',
        },
        en: {
            lowercase: 'Shift',
            uppercase: 'Shift',
            capsLowercase: 'Shift',
            capsUppercase: 'Shift',
        },
    },
    {
        key: 'ControlLeft',
        ru: {
            lowercase: 'Ctrl',
            uppercase: 'Ctrl',
            capsLowercase: 'Ctrl',
            capsUppercase: 'Ctrl',
        },
        en: {
            lowercase: 'Ctrl',
            uppercase: 'Ctrl',
            capsLowercase: 'Ctrl',
            capsUppercase: 'Ctrl',
        },
    },
    {
        key: 'MetaLeft',
        ru: {
            lowercase: 'Win',
            uppercase: 'Win',
            capsLowercase: 'Win',
            capsUppercase: 'Win',
        },
        en: {
            lowercase: 'Win',
            uppercase: 'Win',
            capsLowercase: 'Win',
            capsUppercase: 'Win',
        },
    },
    {
        key: 'AltLeft',
        ru: {
            lowercase: 'Alt',
            uppercase: 'Alt',
            capsLowercase: 'Alt',
            capsUppercase: 'Alt',
        },
        en: {
            lowercase: 'Alt',
            uppercase: 'Alt',
            capsLowercase: 'Alt',
            capsUppercase: 'Alt',
        },
    },
    {
        key: 'Space',
        ru: {
            lowercase: 'Space',
            uppercase: 'Space',
            capsLowercase: 'Space',
            capsUppercase: 'Space',
        },
        en: {
            lowercase: 'Space',
            uppercase: 'Space',
            capsLowercase: 'Space',
            capsUppercase: 'Space',
        },
    },
    {
        key: 'AltRight',
        ru: {
            lowercase: 'Alt',
            uppercase: 'Alt',
            capsLowercase: 'Alt',
            capsUppercase: 'Alt',
        },
        en: {
            lowercase: 'Alt',
            uppercase: 'Alt',
            capsLowercase: 'Alt',
            capsUppercase: 'Alt',
        },
    },
    {
        key: 'ArrowLeft',
        ru: {
            uppercase: '←',
            lowercase: '←',
            capsLowercase: '←',
            capsUppercase: '←',
        },
        en: {
            lowercase: '←',
            uppercase: '←',
            capsLowercase: '←',
            capsUppercase: '←',
        },
    },
    {
        key: 'ArrowDown',
        ru: {
            lowercase: '↓',
            uppercase: '↓',
            capsLowercase: '↓',
            capsUppercase: '↓',
        },
        en: {
            lowercase: '↓',
            uppercase: '↓',
            capsLowercase: '↓',
            capsUppercase: '↓',
        },
    },
    {
        key: 'ArrowRight',
        ru: {
            lowercase: '→',
            uppercase: '→',
            capsLowercase: '→',
            capsUppercase: '→',
        },
        en: {
            lowercase: '→',
            uppercase: '→',
            capsLowercase: '→',
            capsUppercase: '→',
        },
    },
    {
        key: 'ControlRight',
        ru: {
            lowercase: 'Ctrl',
            uppercase: 'Ctrl',
            capsLowercase: 'Ctrl',
            capsUppercase: 'Ctrl',
        },
        en: {
            lowercase: 'Ctrl',
            uppercase: 'Ctrl',
            capsLowercase: 'Ctrl',
            capsUppercase: 'Ctrl',
        },
    },
]

export default layouts
