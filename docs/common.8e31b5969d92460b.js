"use strict";(self.webpackChunkemotions_project=self.webpackChunkemotions_project||[]).push([[592],{3175:(f,a,i)=>{i.d(a,{q:()=>c});var n=i(529),p=i(4004),u=i(8505),e=(()=>{return(t=e||(e={})).joy="1",t.surprise="2",t.anger="3",t.disgust="4",t.fear="5",t.sadness="6",e;var t})(),r=i(8256);let c=(()=>{class t{constructor(s){this.http=s,this.emotionJoy=!1,this.emotionFear=!1,this.emotionSadness=!1,this.emotionDisgust=!1,this.emotionSurprise=!1,this.emotionAnger=!1}getAll(){return this.http.get("/v1/questions").pipe((0,p.U)(s=>s.content))}postTest(s){const h={headers:new n.WM({"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"Origin, Content-Type"})};return this.http.post("/v1/results",s,h).pipe((0,u.b)(o=>{o[e.joy]>=4&&(this.emotionJoy=!0),o[e.fear]>=4&&(this.emotionFear=!0),o[e.sadness]>=4&&(this.emotionSadness=!0),o[e.disgust]>=4&&(this.emotionDisgust=!0),o[e.surprise]>=4&&(this.emotionSurprise=!0),o[e.anger]>=4&&(this.emotionAnger=!0)}))}getResult(){}}return t.\u0275fac=function(s){return new(s||t)(r.LFG(n.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);