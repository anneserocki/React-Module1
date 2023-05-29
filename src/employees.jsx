let zak = "zak Ruvalcaba"
let anne = "Anne Chao"
let tom = "Tom Serocki"
let jerry = "Jerry Holler"
let sarah = "Sarah Miller"
let robert = "Robert Hayashi"
let lll = "222"

const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}} >
        <li>{zak.toUpperCase()}</li>
        <li>{anne}</li>
        <li>{tom}</li>
        <li>{jerry}</li>
        <li>{sarah}</li>
        <li>{robert}</li>
        <li>{lll}</li>
    </ul>    
)
ReactDOM.render(element, document.getElementById('content'))