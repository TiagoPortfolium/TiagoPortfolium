(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t){e.exports={styles:["Electro","Big Shaq"],drumPads:[{id:"drum-Q",key:"Q",keyCode:81,description:{electro:"Snare Q",bigshaq:"2 + 2"}},{id:"drum-W",key:"W",keyCode:87,description:{electro:"Snare W",bigshaq:"Quick Maths"}},{id:"drum-E",key:"E",keyCode:69,description:{electro:"Snare E",bigshaq:"Quack"}},{id:"drum-A",key:"A",keyCode:65,description:{electro:"Snare A",bigshaq:"No Ketchup"}},{id:"drum-S",key:"S",keyCode:83,description:{electro:"Snare S",bigshaq:"Jacket"}},{id:"drum-D",key:"D",keyCode:68,description:{electro:"Snare D",bigshaq:"Not Hot"}},{id:"drum-Z",key:"Z",keyCode:90,description:{electro:"Snare Z",bigshaq:"Skkrraa"}},{id:"drum-X",key:"X",keyCode:88,description:{electro:"Snare X",bigshaq:"Skididipapa"}},{id:"drum-C",key:"C",keyCode:67,description:{electro:"Snare C",bigshaq:"Boom"}}]}},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(10),r=a.n(o),s=(a(16),a(2)),l=a(3),c=a(6),d=a(4),u=a(5),p=a(1),m=a(8),h=a.n(m),y=(a(18),a(7)),v=a.n(y),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleKeyPress=a.handleKeyPress.bind(Object(p.a)(Object(p.a)(a))),a.handleOnClick=a.handleOnClick.bind(Object(p.a)(Object(p.a)(a))),a.playSound=a.playSound.bind(Object(p.a)(Object(p.a)(a))),a.toggleHoverStyle=a.toggleHoverStyle.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"handleOnClick",value:function(){this.playSound()}},{key:"playSound",value:function(){var e=document.getElementById(this.props.drum);e.load(),e.volume=this.props.volume/100,e.play(),this.props.updateDescription(this.props.description),this.toggleHoverStyle()}},{key:"toggleHoverStyle",value:function(){var e=document.getElementById(this.props.id);e.classList.toggle("hover"),setTimeout(function(){e.classList.toggle("hover")},150)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.drum,n=e.style;return i.a.createElement("div",{id:t,className:"drum-pad",onClick:this.handleOnClick},i.a.createElement("span",null,a),i.a.createElement("audio",{id:a,className:"clip"},i.a.createElement("source",{src:"/projects/react-apps/drum-machine/audio/"+n.toLowerCase().replace(/\s/g,"")+"/"+a+".mp3",type:"audio/mp3"}),i.a.createElement("p",null,"Your browser doesn't support HTML5 audio.")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).arrowClickHandler=a.arrowClickHandler.bind(Object(p.a)(Object(p.a)(a))),a.toggleHoverStyle=a.toggleHoverStyle.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"arrowClickHandler",value:function(){this.props.arrowHandler(this.props.direction),this.toggleHoverStyle()}},{key:"toggleHoverStyle",value:function(){var e=document.getElementById("style-"+this.props.direction);e.classList.toggle("hover"),setTimeout(function(){e.classList.toggle("hover")},150)}},{key:"render",value:function(){return i.a.createElement("div",{id:"arrowButton",onClick:this.arrowClickHandler},i.a.createElement("div",{id:"style-"+this.props.direction,className:"arrow-"+this.props.direction}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleStyleChange=a.handleStyleChange.bind(Object(p.a)(Object(p.a)(a))),a.handleSliderChange=a.handleSliderChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleSliderChange",value:function(e){this.props.updateVolume(parseInt(e.target.value,10))}},{key:"handleStyleChange",value:function(e){this.props.updateStyle(e)}},{key:"render",value:function(){var e=this.props,t=e.style,a=e.description,n=e.volume;return i.a.createElement("div",{id:"display"},i.a.createElement("div",{className:"drum-style"},i.a.createElement("span",{className:"title"},"Style"),i.a.createElement("span",{className:"info"},t),i.a.createElement("div",{id:"style-arrows"},i.a.createElement(b,{direction:"left",arrowHandler:this.handleStyleChange}),i.a.createElement(b,{direction:"right",arrowHandler:this.handleStyleChange}))),i.a.createElement("div",{className:"drum-sound-description"},i.a.createElement("span",{className:"title"},"Sound"),i.a.createElement("span",{className:"info"},a)),i.a.createElement("div",{className:"volume-control"},i.a.createElement("span",{className:"title"},"Volume"),i.a.createElement("input",{id:"drum-volume",className:"volume-slider",type:"range",min:"1",max:"100",value:n,orient:"vertical",onChange:this.handleSliderChange})))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={style:"Big Shaq",description:"Silence",volume:50},a.updateStyle=a.updateStyle.bind(Object(p.a)(Object(p.a)(a))),a.updateDescription=a.updateDescription.bind(Object(p.a)(Object(p.a)(a))),a.updateVolume=a.updateVolume.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"updateStyle",value:function(e){var t=v.a.styles[(("left"===e?v.a.styles.indexOf(this.state.style)-1:v.a.styles.indexOf(this.state.style)+1)+v.a.styles.length)%v.a.styles.length];this.setState({style:t})}},{key:"updateDescription",value:function(e){this.setState({description:e})}},{key:"updateVolume",value:function(e){this.setState({volume:e})}},{key:"render",value:function(){var e=this,t=v.a.drumPads.map(function(t){return i.a.createElement(g,{id:t.id,key:t.key,keyCode:t.keyCode,drum:t.key,volume:e.state.volume,style:e.state.style,description:t.description[e.state.style.toLowerCase().replace(/\s/g,"")],updateDescription:e.updateDescription})});return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",{className:"App-title"},"Drum Pad Machine"),i.a.createElement("div",{className:"App-react-app"},i.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),i.a.createElement("h2",{className:"App-intro"},"React App"),i.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}))),i.a.createElement("div",{id:"drum-container"},i.a.createElement("div",{id:"brand"},i.a.createElement("span",null,"React Drum Pad 9000")),i.a.createElement("div",{id:"drum-machine"},i.a.createElement("div",{id:"drumPads"},t),i.a.createElement(k,{style:this.state.style,description:this.state.description,volume:this.state.volume,updateVolume:this.updateVolume,updateStyle:this.updateStyle}))))}}]),t}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),window.location.refresh(!0)):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/projects/react-apps/drum-machine",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/projects/react-apps/drum-machine","/service-worker.js");S?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):O(e)})}}()}],[[11,2,1]]]);
//# sourceMappingURL=main.e31356e3.chunk.js.map