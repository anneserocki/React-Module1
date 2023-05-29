let zak = "zak Ruvalcaba"
let anne = "Anne Chao"
let tom = "Tom Serocki"
let jerry = "Jerry Holler"
let sarah = "Sarah Miller"

const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}} >
        <li>{zak.toUpperCase()}</li>
        <li>{anne}</li>
        <li>{tom}</li>
        <li>{jerry}</li>
        <li>{sarah}</li>
    </ul>    
)
ReactDom.render(element, document.getElementById('content'))