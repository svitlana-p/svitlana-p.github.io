"use strict";(self.webpackChunkemotions_project=self.webpackChunkemotions_project||[]).push([[592],{3066:(c,p,e)=>{e.d(p,{V:()=>a});var o=e(1135),r=e(8256);let a=(()=>{class s{constructor(){this.isVisible$=new o.X(!1)}open(){this.isVisible$.next(!0)}close(){this.isVisible$.next(!1)}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},4304:(c,p,e)=>{e.d(p,{q:()=>_});var o=e(529),r=e(4004),a=e(2340),s=e(8256);let _=(()=>{class n{constructor(t){this.http=t,this.apiURL=a.N?.apiURL||""}getQuizzes(){return this.http.get(`${this.apiURL}/v1/quizzes`).pipe((0,r.U)(t=>t.content))}getQuizz(t){return this.http.get(`${this.apiURL}/v1/quizzes/${t}`).pipe((0,r.U)(i=>i.questions))}processTest(t,i){return this.http.post(`${this.apiURL}/v1/quizzes/${i}`,t).pipe((0,r.U)(h=>h.attemptId))}getResult(t){return this.http.get(`${this.apiURL}/v1/results/${t}`)}getRecommendations(t){let i=new o.LE;return i=i.set("attemptId",t),this.http.post(`${this.apiURL}/v1/recommendations`,i)}}return n.\u0275fac=function(t){return new(t||n)(s.LFG(o.eN))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);