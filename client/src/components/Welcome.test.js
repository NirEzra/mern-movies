import React  from 'react'
import Welcome from "./Welcome"
import ReactDOM from "react-dom"

it('should render div with hello',()=>{

let div =document.createElement('div');

ReactDOM.render(<Welcome/>,div)
expect(div.innerHTML).toEqual('<div>hello</div>')
})