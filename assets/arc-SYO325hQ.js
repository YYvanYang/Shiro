import{w as ln,c as J}from"./path-aUcfwwLI.js";import{E as rn,F as N,G as E,H as an,I as y,J as on,K as j,L as _,M as un,N as t,O as sn,P as tn,Q as fn}from"./mermaid.core-4kKHylvX.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,q,I,v,A,K,r){var D=q-l,i=I-h,n=K-v,m=r-A,a=m*D-n*i;if(!(a*a<y))return a=(n*(h-A)-m*(l-v))/a,[l+a*D,h+a*i]}function W(l,h,q,I,v,A,K){var r=l-q,D=h-I,i=(K?A:-A)/j(r*r+D*D),n=i*D,m=-i*r,a=l+n,s=h+m,f=q+n,c=I+m,L=(a+f)/2,o=(s+c)/2,p=f-a,g=c-s,R=p*p+g*g,T=v-A,P=a*c-f*s,F=(g<0?-1:1)*j(fn(0,T*T*R-P*P)),G=(P*g-p*F)/R,H=(-P*p-g*F)/R,w=(P*g+p*F)/R,d=(-P*p+g*F)/R,x=G-L,e=H-o,u=w-L,M=d-o;return x*x+e*e>u*u+M*M&&(G=w,H=d),{cx:G,cy:H,x01:-n,y01:-m,x11:G*(v/T-1),y11:H*(v/T-1)}}function vn(){var l=cn,h=yn,q=J(0),I=null,v=gn,A=mn,K=pn,r=null,D=ln(i);function i(){var n,m,a=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-an,c=A.apply(this,arguments)-an,L=un(c-f),o=c>f;if(r||(r=n=D()),s<a&&(m=s,s=a,a=m),!(s>y))r.moveTo(0,0);else if(L>on-y)r.moveTo(s*N(f),s*E(f)),r.arc(0,0,s,f,c,!o),a>y&&(r.moveTo(a*N(c),a*E(c)),r.arc(0,0,a,c,f,o));else{var p=f,g=c,R=f,T=c,P=L,F=L,G=K.apply(this,arguments)/2,H=G>y&&(I?+I.apply(this,arguments):j(a*a+s*s)),w=_(un(s-a)/2,+q.apply(this,arguments)),d=w,x=w,e,u;if(H>y){var M=sn(H/a*E(G)),z=sn(H/s*E(G));(P-=M*2)>y?(M*=o?1:-1,R+=M,T-=M):(P=0,R=T=(f+c)/2),(F-=z*2)>y?(z*=o?1:-1,p+=z,g-=z):(F=0,p=g=(f+c)/2)}var Q=s*N(p),S=s*E(p),B=a*N(T),C=a*E(T);if(w>y){var U=s*N(g),V=s*E(g),X=a*N(R),Y=a*E(R),O;if(L<rn)if(O=dn(Q,S,X,Y,U,V,B,C)){var Z=Q-O[0],$=S-O[1],k=U-O[0],b=V-O[1],nn=1/E(tn((Z*k+$*b)/(j(Z*Z+$*$)*j(k*k+b*b)))/2),en=j(O[0]*O[0]+O[1]*O[1]);d=_(w,(a-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}F>y?x>y?(e=W(X,Y,Q,S,s,x,o),u=W(U,V,B,C,s,x,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),r.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(r.moveTo(Q,S),r.arc(0,0,s,p,g,!o)):r.moveTo(Q,S),!(a>y)||!(P>y)?r.lineTo(B,C):d>y?(e=W(B,C,U,V,a,-d,o),u=W(Q,S,X,Y,a,-d,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,a,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),r.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):r.arc(0,0,a,T,R,o)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-rn/2;return[N(m)*n,E(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:J(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:J(+n),i):h},i.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:J(+n),i):q},i.padRadius=function(n){return arguments.length?(I=n==null?null:typeof n=="function"?n:J(+n),i):I},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:J(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:J(+n),i):A},i.padAngle=function(n){return arguments.length?(K=typeof n=="function"?n:J(+n),i):K},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{vn as a};
