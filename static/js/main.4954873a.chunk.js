(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(e,a,n){},12:function(e,a,n){"use strict";n.r(a);var r=n(1),s=n.n(r),o=n(3),t=n.n(o),u=(n(9),n(4)),c=(n(10),n(0)),m=[{key:"Q",name:"Bass 1",url:"audio/AndrewHuang_WMD_kick_one_shot_tight_1.wav",url2:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{key:"W",name:"Hi Hat Closed",url:"audio/AndrewHuang_WMD_hihat_one_shot_2.wav",url2:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},{key:"E",name:"Snare 1",url:"audio/AndrewHuang_WMD_snare_one_shot_full_2.wav",url2:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"},{key:"A",name:"Bass 2",url:"audio/AndrewHuang_WMD_kick_one_shot_tight_4.wav",url2:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{key:"S",name:"Hi Hat Open",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",url2:"audio/AndrewHuang_WMD_hihat_one_shot_2.wav"},{key:"D",name:"Tom 1",url:"audio/AndrewHuang_WMD_tom_one_shot_1.wav",url2:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{key:"Z",name:"Bass 3",url:"audio/AndrewHuang_WMD_kick_one_shot_tight_1.wav",url2:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{key:"X",name:"Crash",url:"audio/AndrewHuang_WMD_cymbal_one_shot_14.wav",url2:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{key:"C",name:"Tom 2",url:"audio/AndrewHuang_WMD_tom_one_shot_3.wav",url2:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}];function d(e){var a=e.drum.key,n=e.drum.name,s=e.drum.url,o=e.drum.url2,t=function(){var r=document.getElementById(a);r.pause(),r.currentTime=0,r.play(),e.changeDisplay(n)},u=function(e){e.key.toUpperCase()===a&&(console.log(e.key),t())};return Object(r.useEffect)((function(){return document.addEventListener("keydown",u)}),[]),Object(c.jsxs)("div",{className:"drum-pad",id:n,onClick:t,children:[Object(c.jsxs)("audio",{className:"clip",id:a,children:[Object(c.jsx)("source",{src:s,type:"audio/wav"}),Object(c.jsx)("source",{src:o,type:"audio/wav"}),"Your browser does not support this audio"]}),a]})}var i=function(){var e=Object(r.useState)("Drum Machine"),a=Object(u.a)(e,2),n=a[0],s=a[1];return Object(c.jsxs)("div",{id:"drum-machine",className:"drum-machine",children:[Object(c.jsx)("div",{id:"display",className:"display",children:Object(c.jsx)("p",{children:n})}),m.map((function(e){return Object(c.jsx)(d,{drum:e,changeDisplay:function(e){return s(e)}})}))]})};t.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(i,{})}),document.getElementById("root"))},9:function(e,a,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.4954873a.chunk.js.map