let zak = "zak Ruvalcaba";
let anne = "Anne Chao";
let tom = "Tom Serocki";
let jerry = "Jerry Holler";
let sarah = "Sarah Miller";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, zak.toUpperCase()), /*#__PURE__*/React.createElement("li", null, anne), /*#__PURE__*/React.createElement("li", null, tom), /*#__PURE__*/React.createElement("li", null, jerry), /*#__PURE__*/React.createElement("li", null, sarah));
ReactDom.render(element, document.getElementById('content'));