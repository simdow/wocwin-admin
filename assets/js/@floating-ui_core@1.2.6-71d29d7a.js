function t(t){return t.split("-")[1]}function e(t){return"y"===t?"height":"width"}function n(t){return t.split("-")[0]}function a(t){return["top","bottom"].includes(n(t))?"x":"y"}function i(i,r,o){let{reference:s,floating:l}=i;const c=s.x+s.width/2-l.width/2,f=s.y+s.height/2-l.height/2,m=a(r),u=e(m),y=s[u]/2-l[u]/2,x="x"===m;let g;switch(n(r)){case"top":g={x:c,y:s.y-l.height};break;case"bottom":g={x:c,y:s.y+s.height};break;case"right":g={x:s.x+s.width,y:f};break;case"left":g={x:s.x-l.width,y:f};break;default:g={x:s.x,y:s.y}}switch(t(r)){case"start":g[m]-=y*(o&&x?-1:1);break;case"end":g[m]+=y*(o&&x?-1:1)}return g}const r=async(t,e,n)=>{const{placement:a="bottom",strategy:r="absolute",middleware:o=[],platform:s}=n,l=o.filter(Boolean),c=await(null==s.isRTL?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:m,y:u}=i(f,a,c),y=a,x={},g=0;for(let h=0;h<l.length;h++){const{name:n,fn:o}=l[h],{x:p,y:d,data:w,reset:b}=await o({x:m,y:u,initialPlacement:a,placement:y,strategy:r,middlewareData:x,rects:f,platform:s,elements:{reference:t,floating:e}});m=null!=p?p:m,u=null!=d?d:u,x={...x,[n]:{...x[n],...w}},b&&g<=50&&(g++,"object"==typeof b&&(b.placement&&(y=b.placement),b.rects&&(f=!0===b.rects?await s.getElementRects({reference:t,floating:e,strategy:r}):b.rects),({x:m,y:u}=i(f,y,c))),h=-1)}return{x:m,y:u,placement:y,strategy:r,middlewareData:x}};function o(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}const s=Math.min,l=Math.max;const c=n=>({name:"arrow",options:n,async fn(i){const{element:r,padding:o=0}=n||{},{x:c,y:f,placement:m,rects:u,platform:y,elements:x}=i;if(null==r)return{};const g=function(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}(o),h={x:c,y:f},p=a(m),d=e(p),w=await y.getDimensions(r),b="y"===p,A=b?"top":"left",R=b?"bottom":"right",k=b?"clientHeight":"clientWidth",v=u.reference[d]+u.reference[p]-h[p]-u.floating[d],E=h[p]-u.reference[p],L=await(null==y.getOffsetParent?void 0:y.getOffsetParent(r));let T=L?L[k]:0;T&&await(null==y.isElement?void 0:y.isElement(L))||(T=x.floating[k]||u.floating[d]);const D=v/2-E/2,O=g[A],P=T-w[d]-g[R],M=T/2-w[d]/2+D,j=l(O,s(M,P));const B=null!=t(m)&&M!=j&&u.reference[d]/2-(M<O?g[A]:g[R])-w[d]/2<0;return{[p]:h[p]-(B?M<O?O-M:P-M:0),data:{[p]:j,centerOffset:M-j}}}});const f=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(i){const{x:r,y:o}=i,s=await async function(e,i){const{placement:r,platform:o,elements:s}=e,l=await(null==o.isRTL?void 0:o.isRTL(s.floating)),c=n(r),f=t(r),m="x"===a(r),u=["left","top"].includes(c)?-1:1,y=l&&m?-1:1,x="function"==typeof i?i(e):i;let{mainAxis:g,crossAxis:h,alignmentAxis:p}="number"==typeof x?{mainAxis:x,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...x};return f&&"number"==typeof p&&(h="end"===f?-1*p:p),m?{x:h*y,y:g*u}:{x:g*u,y:h*y}}(i,e);return{x:r+s.x,y:o+s.y,data:s}}}};export{c as a,r as c,f as o,o as r};
