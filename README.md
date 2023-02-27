# simple-react-modal-wj

A Simple modal 

[![NPM](https://img.shields.io/npm/v/simple-react-modal-wj.svg)](https://www.npmjs.com/package/simple-react-modal-wj) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-modal-wj
```

## Usage

```jsx
import { Modal } from 'simple-react-modal-wj'

function EnclosingFunction() {
  const [toggle, handleToggle] = useState(false)
  return (
    <Modal
      isOpen={toggle}
      onClose={() => {
        handleToggle(false)
        return true
      }}
    />
  )
}
```

## Options

You can use those props to add specific content through the modal :

```jsx
 title={here you can add a title}
subTitle={here you can add a subtitle near the title}
content={here yu can add your main content}
```

## License

MIT © [WillemJou](https://github.com/WillemJou)
