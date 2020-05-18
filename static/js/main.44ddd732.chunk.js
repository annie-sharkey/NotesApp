(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{20:function(t,e,n){t.exports=n(31)},25:function(t,e,n){},26:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(17),r=n.n(o),s=(n(25),n(19)),c=n(7),l=n(8),u=n(10),d=n(9),m=(n(26),n(11)),p=n(12),v=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{id:"notesList"},i.a.createElement("h1",null,"Your Notes"),i.a.createElement("div",null,this.props.notes.map((function(e){return i.a.createElement(m.a,null,i.a.createElement(m.a.Body,null,i.a.createElement(m.a.Title,null,e.title,i.a.createElement("div",{id:"buttons"},i.a.createElement(p.a,{variant:"light",onClick:function(){return t.props.setEditingNoteFunc(e.index)}},"Edit"),i.a.createElement(p.a,{variant:"danger",onClick:function(){return t.props.deleteNoteFunc(e.index)}},"Delete"))),i.a.createElement(m.a.Subtitle,{id:"timestamp"},e.timestamp),i.a.createElement(m.a.Text,null,e.text)))}))))}}]),n}(a.Component),h=n(6),g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={title:"",text:""},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{id:"addNote"},i.a.createElement("h1",null," ",this.props.editing?"Editing Note":"Create Note"," "),i.a.createElement(h.a,null,i.a.createElement(h.a.Group,null,i.a.createElement(h.a.Label,null,"Title"),i.a.createElement(h.a.Control,{type:"textarea",placeholder:"Title",onChange:this.props.setActiveTitleFunc,value:this.props.activeTitle})),i.a.createElement(h.a.Group,null,i.a.createElement(h.a.Label,null,"Text"),i.a.createElement(h.a.Control,{as:"textarea",rows:"8",placeholder:"Text",onChange:this.props.setActiveTextFunc,id:"noteText",value:this.props.activeText})),i.a.createElement(p.a,{variant:this.props.editing?"success":"primary",onClick:this.props.editing?function(){return t.props.editNoteFunc()}:function(){return t.props.addNoteFunc()}},this.props.editing?"Edit Note":"Create Note")))}}]),n}(a.Component),x=(n(30),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).clearNote=function(){a.setState({activeTitle:""}),a.setState({activeText:""})},a.nowTimeString=function(){var t=new Date;return"Last edited "+t.getHours()+":"+t.getMinutes()+" on "+(t.getMonth()+1)+"/"+t.getDate()+"/"+t.getFullYear()},a.addNote=function(){var t={title:a.state.activeTitle,text:a.state.activeText,index:a.state.notes.length,timestamp:a.nowTimeString()};a.setState((function(e){return{notes:[].concat(Object(s.a)(e.notes),[t])}})),a.clearNote(),a.setState({editing:!1})},a.setEditingNote=function(t){a.setState({editing:!0}),a.setState({editIndex:t}),a.setState({activeTitle:a.state.notes[t].title}),a.setState({activeText:a.state.notes[t].text})},a.setActiveTitle=function(t){a.setState({activeTitle:t.target.value})},a.setActiveText=function(t){a.setState({activeText:t.target.value})},a.editNote=function(){var t=a.state.notes;t[a.state.editIndex].title=a.state.activeTitle,t[a.state.editIndex].text=a.state.activeText,t[a.state.editIndex].timestamp=a.nowTimeString(),a.setState({notes:t}),a.setState({editing:!1}),a.clearNote()},a.deleteNote=function(t){var e=a.state.notes;e.splice(t,1),a.setState({notes:e})},a.state={notes:[{title:"Example Title",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",index:0,timestamp:a.nowTimeString()}],activeTitle:"",activeText:"",editing:!1,editIndex:0},a}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,{addNoteFunc:this.addNote,setActiveTitleFunc:this.setActiveTitle,setActiveTextFunc:this.setActiveText,editing:this.state.editing,activeTitle:this.state.activeTitle,activeText:this.state.activeText,editNoteFunc:this.editNote}),i.a.createElement(v,{notes:this.state.notes,setEditingNoteFunc:this.setEditingNote,deleteNoteFunc:this.deleteNote}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.44ddd732.chunk.js.map