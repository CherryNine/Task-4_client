"use strict";(self.webpackChunktask_4=self.webpackChunktask_4||[]).push([[73],{7889:(e,n,t)=>{t.d(n,{Qp:()=>s,bU:()=>i,iW:()=>r});const i=e=>e.auth.errors.signIn,r=e=>e.auth.errors.signUp,s=e=>e.auth.user},73:(e,n,t)=>{t.r(n),t.d(n,{default:()=>I});var i=t(2791),r=t(9434),s=t(9499),a=t(4663),o=t(890),l=t(4294),c=t(9001),h=t(2002),d=t(5397),u=t(8113),x=t(4395),g=t(9164),m=t(697),p=t(7187),f=t(9891),j=t(3400),k=t(4380),v=t(7889),Z=t(8416),w=t(7689),b=t(1087),C=t(184);function S(){const e=(0,w.s0)(),n=(0,r.I0)(),[t,s]=i.useState(null),c=(0,r.v9)(v.Qp);return(0,i.useEffect)((()=>{n((0,k.et)())}),[n]),(0,C.jsx)(x.Z,{position:"static",children:(0,C.jsx)(g.Z,{maxWidth:"xl",children:(0,C.jsxs)(a.Z,{disableGutters:!0,children:[(0,C.jsx)(o.Z,{variant:"h6",noWrap:!0,component:"a",href:"/users",sx:{mr:2,fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none"},children:"Task-4"}),(0,C.jsx)(m.Z,{sx:{flexGrow:1,display:"flex",justifyContent:"flex-end"},children:c?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(o.Z,{variant:"h6",noWrap:!0,sx:{fontFamily:"monospace",fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none",marginLeft:"auto"},children:["Hi,",c.first_name]}),(0,C.jsx)(p.Z,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(t),onClose:()=>{s(null)},children:(0,C.jsx)(f.Z,{children:(0,C.jsx)(l.Z,{color:"inherit",onClick:()=>{n((0,k.w7)()),s(null),n((0,Z.z)()),e("/auth/sign-in")},children:"Sign Out"})})}),(0,C.jsx)(j.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{s(e.currentTarget)},color:"inherit",sx:{marginLeft:"auto"},children:(0,C.jsx)(u.Z,{})})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(b.OL,{className:"link",to:"/auth/sign-in",style:{textDecoration:"none"},children:(0,C.jsx)(o.Z,{variant:"h6",component:"div",color:"white",sx:{marginLeft:"5px"},children:"Login"})}),(0,C.jsx)(b.OL,{to:"/auth/sign-up",style:{textDecoration:"none",marginLeft:"5px"},children:(0,C.jsx)(o.Z,{variant:"h6",component:"div",color:"white",children:"Registration"})})]})})]})})})}var L=t(936);const y=e=>e.users.users,z=e=>e.users.pending,N=e=>e.users.errors,I=()=>{const e=(0,r.I0)(),n=(0,r.v9)(y),t=(0,r.v9)(z),u=((0,r.v9)(N),(0,r.v9)(v.Qp)),x=(0,w.s0)(),[g,m]=(0,i.useState)([]);(0,i.useEffect)((()=>{e((0,L.Rf)())}),[e]);const p=n=>{const t=u&&g.includes(u.id);e((0,L.az)({ids:g,status:n})).then((()=>{t&&"blocked"===n&&(e((0,k.w7)()),e((0,Z.z)()),x("/auth/sign-in")),e((0,L.Rf)())}))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(S,{}),(0,C.jsxs)("div",{style:{height:"auto",width:"95%",padding:"20px"},children:[(0,C.jsx)("h1",{children:"Users List"}),(0,C.jsxs)(a.Z,{children:[(0,C.jsx)(o.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Actions"}),(0,C.jsx)(l.Z,{variant:"contained",color:"primary",onClick:()=>p("blocked"),startIcon:(0,C.jsx)(c.Z,{}),sx:{marginRight:"5px"},children:"Block"}),(0,C.jsx)(l.Z,{variant:"contained",color:"success",onClick:()=>p("unblocked"),startIcon:(0,C.jsx)(h.Z,{}),sx:{marginRight:"5px"},children:"Unblock"}),(0,C.jsx)(l.Z,{variant:"outlined",color:"error",onClick:()=>{const n=u&&g.includes(u.id);e((0,L.h8)(g)).then((()=>{n&&(e((0,k.w7)()),e((0,Z.z)()),x("/auth/sign-in")),e((0,L.Rf)())}))},startIcon:(0,C.jsx)(d.Z,{}),children:"Delete"})]}),(0,C.jsx)(s._,{rows:n,columns:[{field:"id",headerName:"ID",width:300},{field:"email",headerName:"Email",width:250},{field:"first_name",headerName:"First Name",width:150},{field:"last_name",headerName:"Last Name",width:150},{field:"status",headerName:"Status",width:150}],loading:t.getUsers,autoHeight:!0,pageSize:n.length,rowsPerPageOptions:[n.length],disableSelectionOnClick:!0,checkboxSelection:!0,onSelectionModelChange:e=>{m(e)}})]})]})}}}]);
//# sourceMappingURL=73.51feb0a7.chunk.js.map