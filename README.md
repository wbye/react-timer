React Time Format
==========

Component for React to render dates by using html <span> element ,and simply do not need moment,only depend on React.Small and simple , only 3kb(uncompressed).

Installation
------------

    % npm install react-time-format --save-dev

Usage
------------

```jsx
import React from 'react'
import Time from 'react-time-format'

class MyComponent extends React.Component {

  render() {
    let now = new Date();
    return (
      <div>
        <p>Today is <Time value={now} format="YYYY/MM/DD" /></p>
        <p>Today is <Time value={Date.now()} format="YYYY-MM-DD" /></p>
      </div>
    )
  }
}
```

[React]: https://facebook.github.io/react/
[react-time-format]: https://wbye.github.io/react-timer