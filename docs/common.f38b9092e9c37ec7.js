"use strict";(self.webpackChunkemotions_project=self.webpackChunkemotions_project||[]).push([[592],{3175:(l,r,i)=>{i.d(r,{q:()=>f});var a=i(4004),u=i(8505),h=i(2340),s=(()=>{return(t=s||(s={})).joy="1",t.surprise="2",t.anger="3",t.disgust="4",t.fear="5",t.sadness="6",s;var t})(),n=i(8256),p=i(529);let f=(()=>{class t{constructor(e){this.http=e,this.emotionJoy=!1,this.emotionFear=!1,this.emotionSadness=!1,this.emotionDisgust=!1,this.emotionSurprise=!1,this.emotionAnger=!1,this.apiURL=h.N?.apiURL||""}getAll(){return this.http.get(`${this.apiURL}/v1/questions`).pipe((0,a.U)(e=>e.content))}postTest(e){return this.http.post(`${this.apiURL}/v1/results`,e).pipe((0,u.b)(o=>{o[s.joy]>=4&&(this.emotionJoy=!0),o[s.fear]>=4&&(this.emotionFear=!0),o[s.sadness]>=4&&(this.emotionSadness=!0),o[s.disgust]>=4&&(this.emotionDisgust=!0),o[s.surprise]>=4&&(this.emotionSurprise=!0),o[s.anger]>=4&&(this.emotionAnger=!0)}))}getResult(){}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(p.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);