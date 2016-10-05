React Time Format
==========

Component for React to render dates by using html <span> element ,and simply do not need moment,only depend on React.Small and simple ,src code only 3kb(uncompressed).

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
    let celebrateDay = new Date('2016-10-05');
    return (
      <div>
        <p>CelebrateDay is <Time value={celebrateDay} format="YYYY/MM/DD" /></p>
        <p>Today is <Time value={Date.now()} format="YYYY-MM-DD" style={{color:'red'}} /></p>
      </div>
    )
  }
}
```
Dom Render
-------------
```
<div>
  <p>CelebrateDay is <span>2016/10/05</span></p>
  <p>Today is <span style="color: red;">2016-10-05</span></p>
</div>
```

Time Format
-------------
```
YYYY-MM-DD hh:mm:ss
Y: year 
M: month
D: day
h: hour
H: hour
m: minute
s: second
```

[React]: https://facebook.github.io/react/
[react-time-format]: https://wbye.github.io/react-timer