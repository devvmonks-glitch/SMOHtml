(()=>{var vc="170";var gd=0,Qc=1,xd=2;var du=1,Mc=2,Fn=3,ri=0,Ge=1,sn=2,ii=0,es=1,eo=2,th=3,eh=4,_d=5,vi=100,yd=101,vd=102,Md=103,Sd=104,bd=200,Ed=201,wd=202,Td=203,Za=204,Ja=205,Ad=206,Rd=207,Cd=208,Pd=209,Id=210,Ld=211,Dd=212,Ud=213,Nd=214,Ka=0,$a=1,ja=2,rs=3,Qa=4,tl=5,el=6,nl=7,Sc=0,Fd=1,Od=2,si=0,Bd=1,zd=2,kd=3,bc=4,Hd=5,Vd=6,Wd=7;var fu=300,os=301,as=302,il=303,sl=304,ko=306,Gs=1e3,Si=1001,rl=1002,rn=1003,Gd=1004;var mr=1005;var Mn=1006,ua=1007;var bi=1008;var Vn=1009,pu=1010,mu=1011,Xs=1012,Ec=1013,Ei=1014,Sn=1015,nr=1016,wc=1017,Tc=1018,ls=1020,gu=35902,xu=1021,_u=1022,pn=1023,yu=1024,vu=1025,ns=1026,cs=1027,Ac=1028,Rc=1029,Mu=1030,Cc=1031;var Pc=1033,Jr=33776,Kr=33777,$r=33778,jr=33779,ol=35840,al=35841,ll=35842,cl=35843,hl=36196,ul=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,xl=37812,_l=37813,yl=37814,vl=37815,Ml=37816,Sl=37817,bl=37818,El=37819,wl=37820,Tl=37821,Qr=36492,Al=36494,Rl=36495,Su=36283,Cl=36284,Pl=36285,Il=36286;var no=2300,Ll=2301,da=2302,nh=2400,ih=2401,sh=2402;var Xd=3200,qd=3201;var Ic=0,Yd=1,ni="",Ve="srgb",xs="srgb-linear",Ho="linear",ae="srgb";var Ui=7680;var rh=519,Zd=512,Jd=513,Kd=514,bu=515,$d=516,jd=517,Qd=518,tf=519,Dl=35044,Eu=35048;var oh="300 es",zn=2e3,io=2001,oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var to=Math.PI/180,Ul=180/Math.PI;function kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function ef(i,t){return(i%t+t)%t}function fa(i,t,e){return(1-e)*i+e*t}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var it=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],S=s[1],y=s[4],x=s[7],N=s[2],R=s[5],w=s[8];return r[0]=o*_+a*S+l*N,r[3]=o*m+a*y+l*R,r[6]=o*f+a*x+l*w,r[1]=c*_+h*S+u*N,r[4]=c*m+h*y+u*R,r[7]=c*f+h*x+u*w,r[2]=d*_+p*S+g*N,r[5]=d*m+p*y+g*R,r[8]=d*f+p*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pa.makeScale(t,e)),this}rotate(t){return this.premultiply(pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pa=new Vt;function wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nf(){let i=so("canvas");return i.style.display="block",i}var ah={};function Bs(i){i in ah||(ah[i]=!0,console.warn(i))}function sf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function rf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function of(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?Ho:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var lh=[.64,.33,.3,.6,.15,.06],ch=[.2126,.7152,.0722],hh=[.3127,.329],uh=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[xs]:{primaries:lh,whitePoint:hh,transfer:Ho,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:ch,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:lh,whitePoint:hh,transfer:ae,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:ch,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});var Ni,Nl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=so("canvas")),Ni.width=t.width,Ni.height=t.height;let n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=so("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},af=0,ro=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ma(s[o].image)):r.push(ma(s[o]))}else r=ma(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lf=0,$e=class i extends oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Si,s=Si,r=Mn,o=bi,a=pn,l=Vn,c=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=kn(),this.name="",this.source=new ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=fu;$e.DEFAULT_ANISOTROPY=1;var ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(p+1)/2,N=(f+1)/2,R=(h+d)/4,w=(u+_)/4,C=(g+m)/4;return y>x&&y>N?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=w/n):x>N?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=C/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=w/r,s=C/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ro(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Fl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},oo=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ol=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*_,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let N=Math.sqrt(y),R=Math.atan2(N,f*S);m=Math.sin(m*R)/N,a=Math.sin(a*R)/N}let x=a*S;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ga=new P,fh=new bn,Gn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),xr.subVectors(this.max,As),Fi.subVectors(t.a,As),Oi.subVectors(t.b,As),Bi.subVectors(t.c,As),Kn.subVectors(Oi,Fi),$n.subVectors(Bi,Oi),fi.subVectors(Fi,Bi);let e=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-fi.z,fi.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,fi.z,0,-fi.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-fi.y,fi.x,0];return!xa(e,Fi,Oi,Bi,xr)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Fi,Oi,Bi,xr))?!1:(_r.crossVectors(Kn,$n),e=[_r.x,_r.y,_r.z],xa(e,Fi,Oi,Bi,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},In=[new P,new P,new P,new P,new P,new P,new P,new P],un=new P,gr=new Gn,Fi=new P,Oi=new P,Bi=new P,Kn=new P,$n=new P,fi=new P,As=new P,xr=new P,_r=new P,pi=new P;function xa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);let a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var cf=new Gn,Rs=new P,_a=new P,ai=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);let e=Rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(_a)),this.expandByPoint(Rs.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new P,ya=new P,yr=new P,jn=new P,va=new P,vr=new P,Ma=new P,ao=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ya.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(ya);let r=t.distanceTo(e)*.5,o=-this.direction.dot(yr),a=jn.dot(this.direction),l=-jn.dot(yr),c=jn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ya).addScaledVector(yr,d),p}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){va.subVectors(e,t),vr.subVectors(n,t),Ma.crossVectors(va,vr);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);let l=a*this.direction.dot(vr.crossVectors(jn,vr));if(l<0)return null;let c=a*this.direction.dot(va.cross(jn));if(c<0||l+c>o)return null;let h=-a*jn.dot(Ma);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hf,t,uf)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Qn.crossVectors(n,en),Qn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Qn.crossVectors(n,en)),Qn.normalize(),Mr.crossVectors(en,Qn),s[0]=Qn.x,s[4]=Mr.x,s[8]=en.x,s[1]=Qn.y,s[5]=Mr.y,s[9]=en.y,s[2]=Qn.z,s[6]=Mr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],S=n[3],y=n[7],x=n[11],N=n[15],R=s[0],w=s[4],C=s[8],b=s[12],v=s[1],D=s[5],U=s[9],F=s[13],T=s[2],O=s[6],I=s[10],V=s[14],B=s[3],j=s[7],K=s[11],tt=s[15];return r[0]=o*R+a*v+l*T+c*B,r[4]=o*w+a*D+l*O+c*j,r[8]=o*C+a*U+l*I+c*K,r[12]=o*b+a*F+l*V+c*tt,r[1]=h*R+u*v+d*T+p*B,r[5]=h*w+u*D+d*O+p*j,r[9]=h*C+u*U+d*I+p*K,r[13]=h*b+u*F+d*V+p*tt,r[2]=g*R+_*v+m*T+f*B,r[6]=g*w+_*D+m*O+f*j,r[10]=g*C+_*U+m*I+f*K,r[14]=g*b+_*F+m*V+f*tt,r[3]=S*R+y*v+x*T+N*B,r[7]=S*w+y*D+x*O+N*j,r[11]=S*C+y*U+x*I+N*K,r[15]=S*b+y*F+x*V+N*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],S=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,x=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,N=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,R=e*S+n*y+s*x+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=S*w,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*w,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*w,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*w,t[4]=y*w,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*w,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*w,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*w,t[8]=x*w,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*w,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*w,t[12]=N*w,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,S=l*c,y=l*h,x=l*u,N=n.x,R=n.y,w=n.z;return s[0]=(1-(_+f))*N,s[1]=(p+x)*N,s[2]=(g-y)*N,s[3]=0,s[4]=(p-x)*R,s[5]=(1-(d+f))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+y)*w,s[9]=(m-S)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=zi.set(s[0],s[1],s[2]).length(),o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);let c=1/r,h=1/o,u=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,e.setFromRotationMatrix(dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=zn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(a===zn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===io)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h,g,_;if(a===zn)g=(o+r)*u,_=-2*u;else if(a===io)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zi=new P,dn=new re,hf=new P(0,0,0),uf=new P(1,1,1),Qn=new P,Mr=new P,en=new P,ph=new re,mh=new bn,mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var lo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},df=0,gh=new P,ki=new bn,Dn=new re,Sr=new P,Cs=new P,ff=new P,pf=new bn,xh=new P(1,0,0),_h=new P(0,1,0),yh=new P(0,0,1),vh={type:"added"},mf={type:"removed"},Hi={type:"childadded",child:null},Sa={type:"childremoved",child:null},Oe=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new mn,n=new bn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Vt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(xh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(yh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Cs,Sr,this.up):Dn.lookAt(Sr,Cs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Dn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mf),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Oe.DEFAULT_UP=new P(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=new P,Un=new P,ba=new P,Nn=new P,Vi=new P,Wi=new P,Mh=new P,Ea=new P,wa=new P,Ta=new P,Aa=new ce,Ra=new ce,Ca=new ce,Bn=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Un.subVectors(n,e),ba.subVectors(t,e);let o=fn.dot(fn),a=fn.dot(Un),l=fn.dot(ba),c=Un.dot(Un),h=Un.dot(ba),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Aa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Aa,r.x),o.addScaledVector(Ra,r.y),o.addScaledVector(Ca,r.z),o}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Un.subVectors(t,e),fn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Vi.subVectors(s,n),Wi.subVectors(r,n),Ea.subVectors(t,n);let l=Vi.dot(Ea),c=Wi.dot(Ea);if(l<=0&&c<=0)return e.copy(n);wa.subVectors(t,s);let h=Vi.dot(wa),u=Wi.dot(wa);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Vi,o);Ta.subVectors(t,r);let p=Vi.dot(Ta),g=Wi.dot(Ta);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Wi,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Mh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Mh,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Vi,o).addScaledVector(Wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},br={h:0,s:0,l:0};function Pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=ef(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Pa(o,r,t+1/3),this.g=Pa(o,r,t),this.b=Pa(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=Tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return te.fromWorkingColorSpace(He.copy(this),t),Math.round(Fe(He.r*255,0,255))*65536+Math.round(Fe(He.g*255,0,255))*256+Math.round(Fe(He.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ve){te.fromWorkingColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(br);let n=fa(ti.h,br.h,e),s=fa(ti.s,br.s,e),r=fa(ti.l,br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Wt;Wt.NAMES=Tu;var gf=0,En=class extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=kn(),this.name="",this.blending=es,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ja,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},je=class extends En{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new P,Er=new it,Ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dl&&(t.usage=this.usage),t}};var co=class extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ho=class extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},xf=0,an=new re,Ia=new Oe,Gi=new P,nn=new Gn,Ps=new Gn,Ue=new P,Ee=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?ho:co)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(nn.min,Ps.min),nn.expandByPoint(Ue),Ue.addVectors(nn.max,Ps.max),nn.expandByPoint(Ue)):(nn.expandByPoint(Ps.min),nn.expandByPoint(Ps.max))}nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(t,c),Ue.add(Gi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new P,l[C]=new P;let c=new P,h=new P,u=new P,d=new it,p=new it,g=new it,_=new P,m=new P;function f(C,b,v){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[C].add(_),a[b].add(_),a[v].add(_),l[C].add(m),l[b].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,b=S.length;C<b;++C){let v=S[C],D=v.start,U=v.count;for(let F=D,T=D+U;F<T;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new P,x=new P,N=new P,R=new P;function w(C){N.fromBufferAttribute(s,C),R.copy(N);let b=a[C];y.copy(b),y.sub(N.multiplyScalar(N.dot(b))).normalize(),x.crossVectors(R,b);let D=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,b=S.length;C<b;++C){let v=S[C],D=v.start,U=v.count;for(let F=D,T=D+U;F<T;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sh=new re,mi=new ao,wr=new ai,bh=new P,Tr=new P,Ar=new P,Rr=new P,La=new P,Cr=new P,Eh=new P,Pr=new P,ht=class extends Oe{constructor(t=new Ee,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(La.fromBufferAttribute(u,t),o?Cr.addScaledVector(La,h):Cr.addScaledVector(La.sub(e),h))}e.add(Cr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(wr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(wr,bh)===null||mi.origin.distanceToSquared(bh)>(t.far-t.near)**2))&&(Sh.copy(r).invert(),mi.copy(t.ray).applyMatrix4(Sh),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,N=y;x<N;x+=3){let R=a.getX(x),w=a.getX(x+1),C=a.getX(x+2);s=Ir(this,f,t,n,c,h,u,R,w,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let S=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Ir(this,o,t,n,c,h,u,S,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,N=y;x<N;x+=3){let R=x,w=x+1,C=x+2;s=Ir(this,f,t,n,c,h,u,R,w,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let S=m,y=m+1,x=m+2;s=Ir(this,o,t,n,c,h,u,S,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function _f(i,t,e,n,s,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ri,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Pr);return c<e.near||c>e.far?null:{distance:c,point:Pr.clone(),object:i}}function Ir(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Tr),i.getVertexPosition(l,Ar),i.getVertexPosition(c,Rr);let h=_f(i,t,e,n,Tr,Ar,Rr,Eh);if(h){let u=new P;Bn.getBarycoord(Eh,Tr,Ar,Rr,u),s&&(h.uv=Bn.getInterpolatedAttribute(s,a,l,c,u,new it)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,a,l,c,u,new it)),o&&(h.normal=Bn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};Bn.getNormal(Tr,Ar,Rr,d.normal),h.face=d,h.barycoord=u}return h}var Re=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function g(_,m,f,S,y,x,N,R,w,C,b){let v=x/w,D=N/C,U=x/2,F=N/2,T=R/2,O=w+1,I=C+1,V=0,B=0,j=new P;for(let K=0;K<I;K++){let tt=K*D-F;for(let Mt=0;Mt<O;Mt++){let Dt=Mt*v-U;j[_]=Dt*S,j[m]=tt*y,j[f]=T,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[f]=R>0?1:-1,h.push(j.x,j.y,j.z),u.push(Mt/w),u.push(1-K/C),V+=1}}for(let K=0;K<C;K++)for(let tt=0;tt<w;tt++){let Mt=d+tt+O*K,Dt=d+tt+O*(K+1),W=d+(tt+1)+O*(K+1),nt=d+(tt+1)+O*K;l.push(Mt,Dt,nt),l.push(Dt,W,nt),B+=6}a.addGroup(p,B,b),p+=B,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=hs(i[e]);for(let s in n)t[s]=n[s]}return t}function yf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Au(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var vf={clone:hs,merge:qe},Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends En{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},uo=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=new P,wh=new it,Th=new it,We=class extends uo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ul*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,wh,Th),e.subVectors(Th,wh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xi=-90,qi=1,Bl=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(Xi,qi,t,e);s.layers=this.layers,this.add(s);let r=new We(Xi,qi,t,e);r.layers=this.layers,this.add(r);let o=new We(Xi,qi,t,e);o.layers=this.layers,this.add(o);let a=new We(Xi,qi,t,e);a.layers=this.layers,this.add(a);let l=new We(Xi,qi,t,e);l.layers=this.layers,this.add(l);let c=new We(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},fo=class extends $e{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zl=class extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Re(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:ii});r.uniforms.tEquirect.value=e;let o=new ht(s,r),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=Mn),new Bl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Da=new P,bf=new P,Ef=new Vt,On=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Da.subVectors(n,e).cross(bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ef.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new ai,Lr=new P,qs=class{constructor(t=new On,e=new On,n=new On,s=new On,r=new On,o=new On){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],S=s[13],y=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-p,x-f).normalize(),n[1].setComponents(l+r,d+c,m+p,x+f).normalize(),n[2].setComponents(l+o,d+h,m+g,x+S).normalize(),n[3].setComponents(l-o,d-h,m-g,x-S).normalize(),n[4].setComponents(l-a,d-u,m-_,x-y).normalize(),e===zn)n[5].setComponents(l+a,d+u,m+_,x+y).normalize();else if(e===io)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Lr.x=s.normal.x>0?t.max.x:t.min.x,Lr.y=s.normal.y>0?t.max.y:t.min.y,Lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ru(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Tn=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let S=f*d-o;for(let y=0;y<c;y++){let x=y*u-r;g.push(x,-S,0),_.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let y=S+c*f,x=S+c*(f+1),N=S+1+c*(f+1),R=S+1+c*f;p.push(y,x,R),p.push(x,N,R)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$f=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ep=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Np=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Um=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Km=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,i0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Tf,alphahash_pars_fragment:Af,alphamap_fragment:Rf,alphamap_pars_fragment:Cf,alphatest_fragment:Pf,alphatest_pars_fragment:If,aomap_fragment:Lf,aomap_pars_fragment:Df,batching_pars_vertex:Uf,batching_vertex:Nf,begin_vertex:Ff,beginnormal_vertex:Of,bsdfs:Bf,iridescence_fragment:zf,bumpmap_pars_fragment:kf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Gf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:Zf,common:Jf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:$f,displacementmap_pars_vertex:jf,displacementmap_vertex:Qf,emissivemap_fragment:tp,emissivemap_pars_fragment:ep,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:op,envmap_pars_vertex:ap,envmap_physical_pars_fragment:_p,envmap_vertex:lp,fog_vertex:cp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:dp,gradientmap_pars_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:xp,lights_toon_fragment:yp,lights_toon_pars_fragment:vp,lights_phong_fragment:Mp,lights_phong_pars_fragment:Sp,lights_physical_fragment:bp,lights_physical_pars_fragment:Ep,lights_fragment_begin:wp,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Lp,map_pars_fragment:Dp,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Op,morphinstance_vertex:Bp,morphcolor_vertex:zp,morphnormal_vertex:kp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Vp,normal_fragment_begin:Wp,normal_fragment_maps:Gp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:jp,opaque_fragment:Qp,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:am,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:dm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:xm,tonemapping_pars_fragment:_m,transmission_fragment:ym,transmission_pars_fragment:vm,uv_pars_fragment:Mm,uv_pars_vertex:Sm,uv_vertex:bm,worldpos_vertex:Em,background_vert:wm,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Pm,depth_vert:Im,depth_frag:Lm,distanceRGBA_vert:Dm,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:Fm,linedashed_vert:Om,linedashed_frag:Bm,meshbasic_vert:zm,meshbasic_frag:km,meshlambert_vert:Hm,meshlambert_frag:Vm,meshmatcap_vert:Wm,meshmatcap_frag:Gm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:Zm,meshphysical_vert:Jm,meshphysical_frag:Km,meshtoon_vert:$m,meshtoon_frag:jm,points_vert:Qm,points_frag:t0,shadow_vert:e0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},dt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},yn={basic:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:qe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:qe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:qe([dt.points,dt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:qe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:qe([dt.common,dt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:qe([dt.sprite,dt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:qe([dt.common,dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:qe([dt.lights,dt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};yn.physical={uniforms:qe([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Dr={r:0,b:0,g:0},xi=new mn,r0=new re;function o0(i,t,e,n,s,r,o){let a=new Wt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1,x=g(S);x===null?f(a,l):x&&x.isColor&&(f(x,1),y=!0);let N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){let x=g(y);x&&(x.isCubeTexture||x.mapping===ko)?(h===void 0&&(h=new ht(new Re(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:hs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(y.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(xi)),h.material.toneMapped=te.getTransfer(x.colorSpace)!==ae,(u!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ht(new Tn(2,2),new wn({name:"BackgroundMaterial",uniforms:hs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,y){S.getRGB(Dr,Au(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:_,addToRenderList:m}}function a0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,D,U,F,T){let O=!1,I=u(F,U,D);r!==I&&(r=I,c(r.object)),O=p(v,F,U,T),O&&g(v,F,U,T),T!==null&&t.update(T,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(v,D,U,F),T!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(T).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,D,U){let F=U.wireframe===!0,T=n[v.id];T===void 0&&(T={},n[v.id]=T);let O=T[D.id];O===void 0&&(O={},T[D.id]=O);let I=O[F];return I===void 0&&(I=d(l()),O[F]=I),I}function d(v){let D=[],U=[],F=[];for(let T=0;T<e;T++)D[T]=0,U[T]=0,F[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:F,object:v,attributes:{},index:null}}function p(v,D,U,F){let T=r.attributes,O=D.attributes,I=0,V=U.getAttributes();for(let B in V)if(V[B].location>=0){let K=T[B],tt=O[B];if(tt===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor)),K===void 0||K.attribute!==tt||tt&&K.data!==tt.data)return!0;I++}return r.attributesNum!==I||r.index!==F}function g(v,D,U,F){let T={},O=D.attributes,I=0,V=U.getAttributes();for(let B in V)if(V[B].location>=0){let K=O[B];K===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(K=v.instanceColor));let tt={};tt.attribute=K,K&&K.data&&(tt.data=K.data),T[B]=tt,I++}r.attributes=T,r.attributesNum=I,r.index=F}function _(){let v=r.newAttributes;for(let D=0,U=v.length;D<U;D++)v[D]=0}function m(v){f(v,0)}function f(v,D){let U=r.newAttributes,F=r.enabledAttributes,T=r.attributeDivisors;U[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),T[v]!==D&&(i.vertexAttribDivisor(v,D),T[v]=D)}function S(){let v=r.newAttributes,D=r.enabledAttributes;for(let U=0,F=D.length;U<F;U++)D[U]!==v[U]&&(i.disableVertexAttribArray(U),D[U]=0)}function y(v,D,U,F,T,O,I){I===!0?i.vertexAttribIPointer(v,D,U,T,O):i.vertexAttribPointer(v,D,U,F,T,O)}function x(v,D,U,F){_();let T=F.attributes,O=U.getAttributes(),I=D.defaultAttributeValues;for(let V in O){let B=O[V];if(B.location>=0){let j=T[V];if(j===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){let K=j.normalized,tt=j.itemSize,Mt=t.get(j);if(Mt===void 0)continue;let Dt=Mt.buffer,W=Mt.type,nt=Mt.bytesPerElement,mt=W===i.INT||W===i.UNSIGNED_INT||j.gpuType===Ec;if(j.isInterleavedBufferAttribute){let lt=j.data,It=lt.stride,Bt=j.offset;if(lt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<B.locationSize;Ft++)f(B.location+Ft,lt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ft=0;Ft<B.locationSize;Ft++)m(B.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let Ft=0;Ft<B.locationSize;Ft++)y(B.location+Ft,tt/B.locationSize,W,K,It*nt,(Bt+tt/B.locationSize*Ft)*nt,mt)}else{if(j.isInstancedBufferAttribute){for(let lt=0;lt<B.locationSize;lt++)f(B.location+lt,j.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let lt=0;lt<B.locationSize;lt++)m(B.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let lt=0;lt<B.locationSize;lt++)y(B.location+lt,tt/B.locationSize,W,K,tt*nt,tt/B.locationSize*lt*nt,mt)}}else if(I!==void 0){let K=I[V];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(B.location,K);break;case 3:i.vertexAttrib3fv(B.location,K);break;case 4:i.vertexAttrib4fv(B.location,K);break;default:i.vertexAttrib1fv(B.location,K)}}}}S()}function N(){C();for(let v in n){let D=n[v];for(let U in D){let F=D[U];for(let T in F)h(F[T].object),delete F[T];delete D[U]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;let D=n[v.id];for(let U in D){let F=D[U];for(let T in F)h(F[T].object),delete F[T];delete D[U]}delete n[v.id]}function w(v){for(let D in n){let U=n[D];if(U[v.id]===void 0)continue;let F=U[v.id];for(let T in F)h(F[T].object),delete F[T];delete U[v.id]}}function C(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function l0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function c0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==pn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Vn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Sn&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:N,maxSamples:R}}function h0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new On,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,y=S*4,x=f.clippingState||null;l.value=x,x=h(g,d,y,p);for(let N=0;N!==y;++N)x[N]=e[N];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function u0(i){let t=new WeakMap;function e(o,a){return a===il?o.mapping=os:a===sl&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===il||a===sl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new zl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var po=class extends uo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,Ah=[.125,.215,.35,.446,.526,.582],Mi=20,Ua=new po,Rh=new Wt,Na=null,Fa=0,Oa=0,Ba=!1,yi=(1+Math.sqrt(5))/2,Yi=1/yi,Ch=[new P(-yi,Yi,0),new P(yi,Yi,0),new P(-Yi,0,yi),new P(Yi,0,yi),new P(0,yi,-Yi),new P(0,yi,Yi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],us=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Fa,Oa),this._renderer.xr.enabled=Ba,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:nr,format:pn,colorSpace:xs,depthBuffer:!1},s=Ph(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(r)),this._blurMaterial=f0(r,t,e)}return s}_compileMaterial(t){let e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,s){let a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rh),h.toneMapping=si,h.autoClear=!1;let p=new je({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new ht(new Re,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Rh),_=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let y=this._cubeSize;Ur(s,S*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ua)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ch[(s-r-1)%Ch.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ht(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let f=[],S=0;for(let w=0;w<Mi;++w){let C=w/_,b=Math.exp(-C*C/2);f.push(b),w===0?S+=b:w<m&&(S+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let x=this._sizeLods[s],N=3*x*(s>y-Qi?s-y+Qi:0),R=4*(this._cubeSize-x);Ur(e,N,R,3*x,2*x),l.setRenderTarget(e),l.render(u,Ua)}};function d0(i){let t=[],e=[],n=[],s=i,r=i-Qi+1+Ah.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Qi?l=Ah[o-i+Qi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,S=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,C=R>2?0:-1,b=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];S.set(b,_*g*R),y.set(d,m*g*R);let v=[R,R,R,R,R,R];x.set(v,f*g*R)}let N=new Ee;N.setAttribute("position",new Ke(S,_)),N.setAttribute("uv",new Ke(y,m)),N.setAttribute("faceIndex",new Ke(x,f)),t.push(N),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ph(i,t,e){let n=new Wn(i,t,e);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function f0(i,t,e){let n=new Float32Array(Mi),s=new P(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ih(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Lh(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===il||l===sl,h=l===os||l===as;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new us(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new us(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function m0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function g0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let S=p.array;_=p.version;for(let y=0,x=S.length;y<x;y+=3){let N=S[y+0],R=S[y+1],w=S[y+2];d.push(N,R,R,w,w,N)}}else if(g!==void 0){let S=g.array;_=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){let N=y+0,R=y+1,w=y+2;d.push(N,R,R,w,w,N)}}else return;let m=new(wu(d)?ho:co)(d,1);m.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function x0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*_[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function y0(i,t,e){let n=new WeakMap,s=new ce;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,N=1;x>t.maxTextureSize&&(N=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let R=new Float32Array(x*N*4*u),w=new oo(R,x,N,u);w.type=Sn,w.needsUpdate=!0;let C=y*4;for(let v=0;v<u;v++){let D=m[v],U=f[v],F=S[v],T=x*N*4*v;for(let O=0;O<D.count;O++){let I=O*C;p===!0&&(s.fromBufferAttribute(D,O),R[T+I+0]=s.x,R[T+I+1]=s.y,R[T+I+2]=s.z,R[T+I+3]=0),g===!0&&(s.fromBufferAttribute(U,O),R[T+I+4]=s.x,R[T+I+5]=s.y,R[T+I+6]=s.z,R[T+I+7]=0),_===!0&&(s.fromBufferAttribute(F,O),R[T+I+8]=s.x,R[T+I+9]=s.y,R[T+I+10]=s.z,R[T+I+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new it(x,N)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function v0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var mo=class extends $e{constructor(t,e,n,s,r,o,a,l,c,h=ns){if(h!==ns&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ei),n===void 0&&h===cs&&(n=ls),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Cu=new $e,Dh=new mo(1,1),Pu=new oo,Iu=new Ol,Lu=new fo,Uh=[],Nh=[],Fh=new Float32Array(16),Oh=new Float32Array(9),Bh=new Float32Array(4);function _s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vo(i,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function M0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function b0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function w0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Bh.set(n),i.uniformMatrix2fv(this.addr,!1,Bh),Pe(e,n)}}function T0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Oh.set(n),i.uniformMatrix3fv(this.addr,!1,Oh),Pe(e,n)}}function A0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Fh.set(n),i.uniformMatrix4fv(this.addr,!1,Fh),Pe(e,n)}}function R0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function L0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function F0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dh.compareFunction=bu,r=Dh):r=Cu,e.setTexture2D(t||r,s)}function O0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Iu,s)}function B0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lu,s)}function z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pu,s)}function k0(i){switch(i){case 5126:return M0;case 35664:return S0;case 35665:return b0;case 35666:return E0;case 35674:return w0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return I0;case 5125:return L0;case 36294:return D0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function H0(i,t){i.uniform1fv(this.addr,t)}function V0(i,t){let e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function W0(i,t){let e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function G0(i,t){let e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function X0(i,t){let e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function q0(i,t){let e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Y0(i,t){let e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Z0(i,t){i.uniform1iv(this.addr,t)}function J0(i,t){i.uniform2iv(this.addr,t)}function K0(i,t){i.uniform3iv(this.addr,t)}function $0(i,t){i.uniform4iv(this.addr,t)}function j0(i,t){i.uniform1uiv(this.addr,t)}function Q0(i,t){i.uniform2uiv(this.addr,t)}function tg(i,t){i.uniform3uiv(this.addr,t)}function eg(i,t){i.uniform4uiv(this.addr,t)}function ng(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Cu,r[o])}function ig(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Iu,r[o])}function sg(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lu,r[o])}function rg(i,t,e){let n=this.cache,s=t.length,r=Vo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pu,r[o])}function og(i){switch(i){case 5126:return H0;case 35664:return V0;case 35665:return W0;case 35666:return G0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return Z0;case 35667:case 35671:return J0;case 35668:case 35672:return K0;case 35669:case 35673:return $0;case 5125:return j0;case 36294:return Q0;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}var kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k0(e.type)}},Hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}},Vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},za=/(\w+)(\])?(\[|\.)?/g;function zh(i,t){i.seq.push(t),i.map[t.id]=t}function ag(i,t,e){let n=i.name,s=n.length;for(za.lastIndex=0;;){let r=za.exec(n),o=za.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zh(e,c===void 0?new kl(a,i,t):new Hl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Vl(a),zh(e,u)),e=u}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ag(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function kh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lg=37297,cg=0;function hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Hh=new Vt;function ug(i){te._getMatrix(Hh,te.workingColorSpace,i);let t=`mat3( ${Hh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Ho:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hg(i.getShaderSource(t),o)}else return s}function dg(i,t){let e=ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fg(i,t){let e;switch(t){case Bd:e="Linear";break;case zd:e="Reinhard";break;case kd:e="Cineon";break;case bc:e="ACESFilmic";break;case Vd:e="AgX";break;case Wd:e="Neutral";break;case Hd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nr=new P;function pg(){te.getLuminanceCoefficients(Nr);let i=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function gg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zs(i){return i!==""}function Wh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(i){return i.replace(_g,vg)}var yg=new Map;function vg(i,t){let e=qt[t];if(e===void 0){let n=yg.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wl(e)}var Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(i){return i.replace(Mg,Sg)}function Sg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===du?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Eg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function Tg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sc:t="ENVMAP_BLENDING_MULTIPLY";break;case Fd:t="ENVMAP_BLENDING_MIX";break;case Od:t="ENVMAP_BLENDING_ADD";break}return t}function Ag(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=bg(e),c=Eg(e),h=wg(e),u=Tg(e),d=Ag(e),p=mg(e),g=gg(r),_=s.createProgram(),m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),f.length>0&&(f+=`
`)):(m=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),f=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?qt.tonemapping_pars_fragment:"",e.toneMapping!==si?fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,dg("linearToOutputTexel",e.outputColorSpace),pg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),o=Wl(o),o=Wh(o,e),o=Gh(o,e),a=Wl(a),a=Wh(a,e),a=Gh(a,e),o=Xh(o),a=Xh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=S+m+o,x=S+f+a,N=kh(s,s.VERTEX_SHADER,y),R=kh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,N),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(D){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(N).trim(),T=s.getShaderInfoLog(R).trim(),O=!0,I=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,N,R);else{let V=Vh(s,N,"vertex"),B=Vh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+V+`
`+B)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||T==="")&&(I=!1);I&&(D.diagnostics={runnable:O,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:T,prefix:f}})}s.deleteShader(N),s.deleteShader(R),C=new ss(s,_),b=xg(s,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,lg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=R,this}var Cg=0,Gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xl(t),e.set(t,n)),n}},Xl=class{constructor(t){this.id=Cg++,this.code=t,this.usedTimes=0}};function Pg(i,t,e,n,s,r,o){let a=new lo,l=new Gl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,v,D,U,F){let T=U.fog,O=F.geometry,I=b.isMeshStandardMaterial?U.environment:null,V=(b.isMeshStandardMaterial?e:t).get(b.envMap||I),B=V&&V.mapping===ko?V.image.height:null,j=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,tt=K!==void 0?K.length:0,Mt=0;O.morphAttributes.position!==void 0&&(Mt=1),O.morphAttributes.normal!==void 0&&(Mt=2),O.morphAttributes.color!==void 0&&(Mt=3);let Dt,W,nt,mt;if(j){let oe=yn[j];Dt=oe.vertexShader,W=oe.fragmentShader}else Dt=b.vertexShader,W=b.fragmentShader,l.update(b),nt=l.getVertexShaderID(b),mt=l.getFragmentShaderID(b);let lt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Bt=F.isInstancedMesh===!0,Ft=F.isBatchedMesh===!0,Qt=!!b.map,Q=!!b.matcap,ot=!!V,L=!!b.aoMap,Ct=!!b.lightMap,st=!!b.bumpMap,St=!!b.normalMap,ct=!!b.displacementMap,Ut=!!b.emissiveMap,yt=!!b.metalnessMap,A=!!b.roughnessMap,M=b.anisotropy>0,G=b.clearcoat>0,Z=b.dispersion>0,et=b.iridescence>0,J=b.sheen>0,wt=b.transmission>0,ft=M&&!!b.anisotropyMap,vt=G&&!!b.clearcoatMap,Jt=G&&!!b.clearcoatNormalMap,rt=G&&!!b.clearcoatRoughnessMap,bt=et&&!!b.iridescenceMap,Nt=et&&!!b.iridescenceThicknessMap,Ot=J&&!!b.sheenColorMap,Et=J&&!!b.sheenRoughnessMap,$t=!!b.specularMap,Xt=!!b.specularColorMap,de=!!b.specularIntensityMap,z=wt&&!!b.transmissionMap,pt=wt&&!!b.thicknessMap,Y=!!b.gradientMap,$=!!b.alphaMap,_t=b.alphaTest>0,gt=!!b.alphaHash,kt=!!b.extensions,be=si;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(be=i.toneMapping);let ze={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:Dt,fragmentShader:W,defines:b.defines,customVertexShaderID:nt,customFragmentShaderID:mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&F._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,instancingMorph:Bt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:xs,alphaToCoverage:!!b.alphaToCoverage,map:Qt,matcap:Q,envMap:ot,envMapMode:ot&&V.mapping,envMapCubeUVHeight:B,aoMap:L,lightMap:Ct,bumpMap:st,normalMap:St,displacementMap:d&&ct,emissiveMap:Ut,normalMapObjectSpace:St&&b.normalMapType===Yd,normalMapTangentSpace:St&&b.normalMapType===Ic,metalnessMap:yt,roughnessMap:A,anisotropy:M,anisotropyMap:ft,clearcoat:G,clearcoatMap:vt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:rt,dispersion:Z,iridescence:et,iridescenceMap:bt,iridescenceThicknessMap:Nt,sheen:J,sheenColorMap:Ot,sheenRoughnessMap:Et,specularMap:$t,specularColorMap:Xt,specularIntensityMap:de,transmission:wt,transmissionMap:z,thicknessMap:pt,gradientMap:Y,opaque:b.transparent===!1&&b.blending===es&&b.alphaToCoverage===!1,alphaMap:$,alphaTest:_t,alphaHash:gt,combine:b.combine,mapUv:Qt&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:Ct&&_(b.lightMap.channel),bumpMapUv:st&&_(b.bumpMap.channel),normalMapUv:St&&_(b.normalMap.channel),displacementMapUv:ct&&_(b.displacementMap.channel),emissiveMapUv:Ut&&_(b.emissiveMap.channel),metalnessMapUv:yt&&_(b.metalnessMap.channel),roughnessMapUv:A&&_(b.roughnessMap.channel),anisotropyMapUv:ft&&_(b.anisotropyMap.channel),clearcoatMapUv:vt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(b.sheenRoughnessMap.channel),specularMapUv:$t&&_(b.specularMap.channel),specularColorMapUv:Xt&&_(b.specularColorMap.channel),specularIntensityMapUv:de&&_(b.specularIntensityMap.channel),transmissionMapUv:z&&_(b.transmissionMap.channel),thicknessMapUv:pt&&_(b.thicknessMap.channel),alphaMapUv:$&&_(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(St||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Qt||$),fog:!!T,useFog:b.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Mt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:Qt&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===ae,decodeVideoTextureEmissive:Ut&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sn,flipSided:b.side===Ge,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:kt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&b.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function f(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)v.push(D),v.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(S(v,b),y(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function S(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function y(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let v=g[b.type],D;if(v){let U=yn[v];D=vf.clone(U.uniforms)}else D=b.uniforms;return D}function N(b,v){let D;for(let U=0,F=h.length;U<F;U++){let T=h[U];if(T.cacheKey===v){D=T,++D.usedTimes;break}}return D===void 0&&(D=new Rg(i,v,b,r),h.push(D)),D}function R(b){if(--b.usedTimes===0){let v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:N,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:C}}function Ig(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Lg),n.length>1&&n.sort(d||Yh),s.length>1&&s.sort(d||Yh)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Dg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Zh,i.set(n,[o])):s>=r.length?(o=new Zh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Wt};break;case"SpotLight":e={position:new P,direction:new P,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Fg=0;function Og(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Bg(i){let t=new Ug,e=Ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new re,o=new re;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,S=0,y=0,x=0,N=0,R=0,w=0;c.sort(Og);for(let b=0,v=c.length;b<v;b++){let D=c[b],U=D.color,F=D.intensity,T=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=U.r*F,u+=U.g*F,d+=U.b*F;else if(D.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(D.sh.coefficients[I],F);w++}else if(D.isDirectionalLight){let I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,B=e.get(D);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=D.shadow.matrix,S++}n.directional[p]=I,p++}else if(D.isSpotLight){let I=t.get(D);I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(U).multiplyScalar(F),I.distance=T,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,n.spot[_]=I;let V=D.shadow;if(D.map&&(n.spotLightMap[N]=D.map,N++,V.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[_]=V.matrix,D.castShadow){let B=e.get(D);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=O,x++}_++}else if(D.isRectAreaLight){let I=t.get(D);I.color.copy(U).multiplyScalar(F),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=I,m++}else if(D.isPointLight){let I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),I.distance=D.distance,I.decay=D.decay,D.castShadow){let V=D.shadow,B=e.get(D);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=I,g++}else if(D.isHemisphereLight){let I=t.get(D);I.skyColor.copy(D.color).multiplyScalar(F),I.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[f]=I,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==N||C.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=N,C.numLightProbes=w,n.version=Fg++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let y=c[f];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Jh(i){let t=new Bg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Jh(i),t.set(s,[a])):r>=o.length?(a=new Jh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ql=class extends En{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yl=class extends En{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vg(i,t,e){let n=new qs,s=new it,r=new it,o=new ce,a=new ql({depthPacking:qd}),l=new Yl,c={},h=e.maxTextureSize,u={[ri]:Ge,[Ge]:ri,[sn]:sn},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:kg,fragmentShader:Hg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let f=this.type;this.render=function(R,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let b=i.getRenderTarget(),v=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ii),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let F=f!==Fn&&this.type===Fn,T=f===Fn&&this.type!==Fn;for(let O=0,I=R.length;O<I;O++){let V=R[O],B=V.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let j=B.getFrameExtents();if(s.multiply(j),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,B.mapSize.y=r.y)),B.map===null||F===!0||T===!0){let tt=this.type!==Fn?{minFilter:rn,magFilter:rn}:{};B.map!==null&&B.map.dispose(),B.map=new Wn(s.x,s.y,tt),B.map.texture.name=V.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let K=B.getViewportCount();for(let tt=0;tt<K;tt++){let Mt=B.getViewport(tt);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),U.viewport(o),B.updateMatrices(V,tt),n=B.getFrustum(),x(w,C,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Fn&&S(B,C),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,v,D)};function S(R,w){let C=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Wn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,C,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,C,p,_,null)}function y(R,w,C,b){let v=null,D=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)v=D;else if(v=C.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let U=v.uuid,F=w.uuid,T=c[U];T===void 0&&(T={},c[U]=T);let O=T[F];O===void 0&&(O=v.clone(),T[F]=O,w.addEventListener("dispose",N)),v=O}if(v.visible=w.visible,v.wireframe=w.wireframe,b===Fn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let U=i.properties.get(v);U.light=C}return v}function x(R,w,C,b,v){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===Fn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);let F=t.update(R),T=R.material;if(Array.isArray(T)){let O=F.groups;for(let I=0,V=O.length;I<V;I++){let B=O[I],j=T[B.materialIndex];if(j&&j.visible){let K=y(R,j,b,v);R.onBeforeShadow(i,R,w,C,F,K,B),i.renderBufferDirect(C,null,F,K,R,B),R.onAfterShadow(i,R,w,C,F,K,B)}}}else if(T.visible){let O=y(R,T,b,v);R.onBeforeShadow(i,R,w,C,F,O,null),i.renderBufferDirect(C,null,F,O,R,null),R.onAfterShadow(i,R,w,C,F,O,null)}}let U=R.children;for(let F=0,T=U.length;F<T;F++)x(U[F],w,C,b,v)}function N(R){R.target.removeEventListener("dispose",N);for(let C in c){let b=c[C],v=R.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}var Wg={[Ka]:$a,[ja]:el,[Qa]:nl,[rs]:tl,[$a]:Ka,[el]:ja,[nl]:Qa,[tl]:rs};function Gg(i,t){function e(){let z=!1,pt=new ce,Y=null,$=new ce(0,0,0,0);return{setMask:function(_t){Y!==_t&&!z&&(i.colorMask(_t,_t,_t,_t),Y=_t)},setLocked:function(_t){z=_t},setClear:function(_t,gt,kt,be,ze){ze===!0&&(_t*=be,gt*=be,kt*=be),pt.set(_t,gt,kt,be),$.equals(pt)===!1&&(i.clearColor(_t,gt,kt,be),$.copy(pt))},reset:function(){z=!1,Y=null,$.set(-1,0,0,0)}}}function n(){let z=!1,pt=!1,Y=null,$=null,_t=null;return{setReversed:function(gt){if(pt!==gt){let kt=t.get("EXT_clip_control");pt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let be=_t;_t=null,this.setClear(be)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?lt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(gt){Y!==gt&&!z&&(i.depthMask(gt),Y=gt)},setFunc:function(gt){if(pt&&(gt=Wg[gt]),$!==gt){switch(gt){case Ka:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case tl:i.depthFunc(i.GEQUAL);break;case el:i.depthFunc(i.GREATER);break;case nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=gt}},setLocked:function(gt){z=gt},setClear:function(gt){_t!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),_t=gt)},reset:function(){z=!1,Y=null,$=null,_t=null,pt=!1}}}function s(){let z=!1,pt=null,Y=null,$=null,_t=null,gt=null,kt=null,be=null,ze=null;return{setTest:function(oe){z||(oe?lt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(oe){pt!==oe&&!z&&(i.stencilMask(oe),pt=oe)},setFunc:function(oe,cn,Cn){(Y!==oe||$!==cn||_t!==Cn)&&(i.stencilFunc(oe,cn,Cn),Y=oe,$=cn,_t=Cn)},setOp:function(oe,cn,Cn){(gt!==oe||kt!==cn||be!==Cn)&&(i.stencilOp(oe,cn,Cn),gt=oe,kt=cn,be=Cn)},setLocked:function(oe){z=oe},setClear:function(oe){ze!==oe&&(i.clearStencil(oe),ze=oe)},reset:function(){z=!1,pt=null,Y=null,$=null,_t=null,gt=null,kt=null,be=null,ze=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,S=null,y=null,x=null,N=null,R=null,w=new Wt(0,0,0),C=0,b=!1,v=null,D=null,U=null,F=null,T=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,V=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),I=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),I=V>=2);let j=null,K={},tt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Dt=new ce().fromArray(tt),W=new ce().fromArray(Mt);function nt(z,pt,Y,$){let _t=new Uint8Array(4),gt=i.createTexture();i.bindTexture(z,gt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Y;kt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(pt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return gt}let mt={};mt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(rs),st(!1),St(Qc),lt(i.CULL_FACE),L(ii);function lt(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function It(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Bt(z,pt){return u[z]!==pt?(i.bindFramebuffer(z,pt),u[z]=pt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ft(z,pt){let Y=p,$=!1;if(z){Y=d.get(pt),Y===void 0&&(Y=[],d.set(pt,Y));let _t=z.textures;if(Y.length!==_t.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,kt=_t.length;gt<kt;gt++)Y[gt]=i.COLOR_ATTACHMENT0+gt;Y.length=_t.length,$=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,$=!0);$&&i.drawBuffers(Y)}function Qt(z){return g!==z?(i.useProgram(z),g=z,!0):!1}let Q={[vi]:i.FUNC_ADD,[yd]:i.FUNC_SUBTRACT,[vd]:i.FUNC_REVERSE_SUBTRACT};Q[Md]=i.MIN,Q[Sd]=i.MAX;let ot={[bd]:i.ZERO,[Ed]:i.ONE,[wd]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[Id]:i.SRC_ALPHA_SATURATE,[Cd]:i.DST_COLOR,[Ad]:i.DST_ALPHA,[Td]:i.ONE_MINUS_SRC_COLOR,[Ja]:i.ONE_MINUS_SRC_ALPHA,[Pd]:i.ONE_MINUS_DST_COLOR,[Rd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Ud]:i.CONSTANT_ALPHA,[Nd]:i.ONE_MINUS_CONSTANT_ALPHA};function L(z,pt,Y,$,_t,gt,kt,be,ze,oe){if(z===ii){_===!0&&(It(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),z!==_d){if(z!==m||oe!==b){if((f!==vi||x!==vi)&&(i.blendEquation(i.FUNC_ADD),f=vi,x=vi),oe)switch(z){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,y=null,N=null,R=null,w.set(0,0,0),C=0,m=z,b=oe}return}_t=_t||pt,gt=gt||Y,kt=kt||$,(pt!==f||_t!==x)&&(i.blendEquationSeparate(Q[pt],Q[_t]),f=pt,x=_t),(Y!==S||$!==y||gt!==N||kt!==R)&&(i.blendFuncSeparate(ot[Y],ot[$],ot[gt],ot[kt]),S=Y,y=$,N=gt,R=kt),(be.equals(w)===!1||ze!==C)&&(i.blendColor(be.r,be.g,be.b,ze),w.copy(be),C=ze),m=z,b=!1}function Ct(z,pt){z.side===sn?It(i.CULL_FACE):lt(i.CULL_FACE);let Y=z.side===Ge;pt&&(Y=!Y),st(Y),z.blending===es&&z.transparent===!1?L(ii):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let $=z.stencilWrite;a.setTest($),$&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ut(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(z){v!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),v=z)}function St(z){z!==gd?(lt(i.CULL_FACE),z!==D&&(z===Qc?i.cullFace(i.BACK):z===xd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),D=z}function ct(z){z!==U&&(I&&i.lineWidth(z),U=z)}function Ut(z,pt,Y){z?(lt(i.POLYGON_OFFSET_FILL),(F!==pt||T!==Y)&&(i.polygonOffset(pt,Y),F=pt,T=Y)):It(i.POLYGON_OFFSET_FILL)}function yt(z){z?lt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function A(z){z===void 0&&(z=i.TEXTURE0+O-1),j!==z&&(i.activeTexture(z),j=z)}function M(z,pt,Y){Y===void 0&&(j===null?Y=i.TEXTURE0+O-1:Y=j);let $=K[Y];$===void 0&&($={type:void 0,texture:void 0},K[Y]=$),($.type!==z||$.texture!==pt)&&(j!==Y&&(i.activeTexture(Y),j=Y),i.bindTexture(z,pt||mt[z]),$.type=z,$.texture=pt)}function G(){let z=K[j];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(z){Dt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Dt.copy(z))}function Et(z){W.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),W.copy(z))}function $t(z,pt){let Y=c.get(pt);Y===void 0&&(Y=new WeakMap,c.set(pt,Y));let $=Y.get(z);$===void 0&&($=i.getUniformBlockIndex(pt,z.name),Y.set(z,$))}function Xt(z,pt){let $=c.get(pt).get(z);l.get(pt)!==$&&(i.uniformBlockBinding(pt,$,z.__bindingPointIndex),l.set(pt,$))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,K={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,S=null,y=null,x=null,N=null,R=null,w=new Wt(0,0,0),C=0,b=!1,v=null,D=null,U=null,F=null,T=null,Dt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:It,bindFramebuffer:Bt,drawBuffers:Ft,useProgram:Qt,setBlending:L,setMaterial:Ct,setFlipSided:st,setCullFace:St,setLineWidth:ct,setPolygonOffset:Ut,setScissorTest:yt,activeTexture:A,bindTexture:M,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:bt,texImage3D:Nt,updateUBOMapping:$t,uniformBlockBinding:Xt,texStorage2D:Jt,texStorage3D:rt,texSubImage2D:J,texSubImage3D:wt,compressedTexSubImage2D:ft,compressedTexSubImage3D:vt,scissor:Ot,viewport:Et,reset:de}}function Kh(i,t,e,n){let s=Xg(n);switch(e){case xu:return i*t;case yu:return i*t;case vu:return i*t*2;case Ac:return i*t/s.components*s.byteLength;case Rc:return i*t/s.components*s.byteLength;case Mu:return i*t*2/s.components*s.byteLength;case Cc:return i*t*2/s.components*s.byteLength;case _u:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case Pc:return i*t*4/s.components*s.byteLength;case Jr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $r:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:case cl:return Math.max(i,16)*Math.max(t,8)/4;case ol:case ll:return Math.max(i,8)*Math.max(t,8)/2;case hl:case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qr:case Al:case Rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Su:case Cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xg(i){switch(i){case Vn:case pu:return{byteLength:1,components:1};case Xs:case mu:case nr:return{byteLength:2,components:1};case wc:case Tc:return{byteLength:2,components:4};case Ei:case Ec:case Sn:return{byteLength:4,components:1};case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):so("canvas")}function _(A,M,G){let Z=1,et=yt(A);if((et.width>G||et.height>G)&&(Z=G/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor(Z*et.width),wt=Math.floor(Z*et.height);u===void 0&&(u=g(J,wt));let ft=M?g(J,wt):u;return ft.width=J,ft.height=wt,ft.getContext("2d").drawImage(A,0,0,J,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+wt+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,M,G,Z,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=M;if(M===i.RED&&(G===i.FLOAT&&(J=i.R32F),G===i.HALF_FLOAT&&(J=i.R16F),G===i.UNSIGNED_BYTE&&(J=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.R8UI),G===i.UNSIGNED_SHORT&&(J=i.R16UI),G===i.UNSIGNED_INT&&(J=i.R32UI),G===i.BYTE&&(J=i.R8I),G===i.SHORT&&(J=i.R16I),G===i.INT&&(J=i.R32I)),M===i.RG&&(G===i.FLOAT&&(J=i.RG32F),G===i.HALF_FLOAT&&(J=i.RG16F),G===i.UNSIGNED_BYTE&&(J=i.RG8)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RG8UI),G===i.UNSIGNED_SHORT&&(J=i.RG16UI),G===i.UNSIGNED_INT&&(J=i.RG32UI),G===i.BYTE&&(J=i.RG8I),G===i.SHORT&&(J=i.RG16I),G===i.INT&&(J=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGB8UI),G===i.UNSIGNED_SHORT&&(J=i.RGB16UI),G===i.UNSIGNED_INT&&(J=i.RGB32UI),G===i.BYTE&&(J=i.RGB8I),G===i.SHORT&&(J=i.RGB16I),G===i.INT&&(J=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),G===i.UNSIGNED_INT&&(J=i.RGBA32UI),G===i.BYTE&&(J=i.RGBA8I),G===i.SHORT&&(J=i.RGBA16I),G===i.INT&&(J=i.RGBA32I)),M===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),M===i.RGBA){let wt=et?Ho:te.getTransfer(Z);G===i.FLOAT&&(J=i.RGBA32F),G===i.HALF_FLOAT&&(J=i.RGBA16F),G===i.UNSIGNED_BYTE&&(J=wt===ae?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(A,M){let G;return A?M===null||M===Ei||M===ls?G=i.DEPTH24_STENCIL8:M===Sn?G=i.DEPTH32F_STENCIL8:M===Xs&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ei||M===ls?G=i.DEPTH_COMPONENT24:M===Sn?G=i.DEPTH_COMPONENT32F:M===Xs&&(G=i.DEPTH_COMPONENT16),G}function N(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==rn&&A.minFilter!==Mn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){let M=A.target;M.removeEventListener("dispose",R),C(M),M.isVideoTexture&&h.delete(M)}function w(A){let M=A.target;M.removeEventListener("dispose",w),v(M)}function C(A){let M=n.get(A);if(M.__webglInit===void 0)return;let G=A.source,Z=d.get(G);if(Z){let et=Z[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(A),Object.keys(Z).length===0&&d.delete(G)}n.remove(A)}function b(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let G=A.source,Z=d.get(G);delete Z[M.__cacheKey],o.memory.textures--}function v(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let et=0;et<M.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(M.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=A.textures;for(let Z=0,et=G.length;Z<et;Z++){let J=n.get(G[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(A)}let D=0;function U(){D=0}function F(){let A=D;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function T(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function O(A,M){let G=n.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(G,A,M);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function I(A,M){let G=n.get(A);if(A.version>0&&G.__version!==A.version){W(G,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function V(A,M){let G=n.get(A);if(A.version>0&&G.__version!==A.version){W(G,A,M);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function B(A,M){let G=n.get(A);if(A.version>0&&G.__version!==A.version){nt(G,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}let j={[Gs]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[rl]:i.MIRRORED_REPEAT},K={[rn]:i.NEAREST,[Gd]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},tt={[Zd]:i.NEVER,[tf]:i.ALWAYS,[Jd]:i.LESS,[bu]:i.LEQUAL,[Kd]:i.EQUAL,[Qd]:i.GEQUAL,[$d]:i.GREATER,[jd]:i.NOTEQUAL};function Mt(A,M){if(M.type===Sn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Mn||M.magFilter===ua||M.magFilter===mr||M.magFilter===bi||M.minFilter===Mn||M.minFilter===ua||M.minFilter===mr||M.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,j[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,j[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,j[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,K[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===rn||M.minFilter!==mr&&M.minFilter!==bi||M.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Dt(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));let Z=M.source,et=d.get(Z);et===void 0&&(et={},d.set(Z,et));let J=T(M);if(J!==A.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[J].usedTimes++;let wt=et[A.__cacheKey];wt!==void 0&&(et[A.__cacheKey].usedTimes--,wt.usedTimes===0&&b(M)),A.__cacheKey=J,A.__webglTexture=et[J].texture}return G}function W(A,M,G){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);let et=Dt(A,M),J=M.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+G);let wt=n.get(J);if(J.version!==wt.__version||et===!0){e.activeTexture(i.TEXTURE0+G);let ft=te.getPrimaries(te.workingColorSpace),vt=M.colorSpace===ni?null:te.getPrimaries(M.colorSpace),Jt=M.colorSpace===ni||ft===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let rt=_(M.image,!1,s.maxTextureSize);rt=Ut(M,rt);let bt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type),Ot=y(M.internalFormat,bt,Nt,M.colorSpace,M.isVideoTexture);Mt(Z,M);let Et,$t=M.mipmaps,Xt=M.isVideoTexture!==!0,de=wt.__version===void 0||et===!0,z=J.dataReady,pt=N(M,rt);if(M.isDepthTexture)Ot=x(M.format===cs,M.type),de&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Ot,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,rt.width,rt.height,0,bt,Nt,null));else if(M.isDataTexture)if($t.length>0){Xt&&de&&e.texStorage2D(i.TEXTURE_2D,pt,Ot,$t[0].width,$t[0].height);for(let Y=0,$=$t.length;Y<$;Y++)Et=$t[Y],Xt?z&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Nt,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Ot,Et.width,Et.height,0,bt,Nt,Et.data);M.generateMipmaps=!1}else Xt?(de&&e.texStorage2D(i.TEXTURE_2D,pt,Ot,rt.width,rt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,bt,Nt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,rt.width,rt.height,0,bt,Nt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ot,$t[0].width,$t[0].height,rt.depth);for(let Y=0,$=$t.length;Y<$;Y++)if(Et=$t[Y],M.format!==pn)if(bt!==null)if(Xt){if(z)if(M.layerUpdates.size>0){let _t=Kh(Et.width,Et.height,M.format,M.type);for(let gt of M.layerUpdates){let kt=Et.data.subarray(gt*_t/Et.data.BYTES_PER_ELEMENT,(gt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,gt,Et.width,Et.height,1,bt,kt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,rt.depth,bt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ot,Et.width,Et.height,rt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,rt.depth,bt,Nt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ot,Et.width,Et.height,rt.depth,0,bt,Nt,Et.data)}else{Xt&&de&&e.texStorage2D(i.TEXTURE_2D,pt,Ot,$t[0].width,$t[0].height);for(let Y=0,$=$t.length;Y<$;Y++)Et=$t[Y],M.format!==pn?bt!==null?Xt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Ot,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?z&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,bt,Nt,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Ot,Et.width,Et.height,0,bt,Nt,Et.data)}else if(M.isDataArrayTexture)if(Xt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ot,rt.width,rt.height,rt.depth),z)if(M.layerUpdates.size>0){let Y=Kh(rt.width,rt.height,M.format,M.type);for(let $ of M.layerUpdates){let _t=rt.data.subarray($*Y/rt.data.BYTES_PER_ELEMENT,($+1)*Y/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,rt.width,rt.height,1,bt,Nt,_t)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,bt,Nt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,rt.width,rt.height,rt.depth,0,bt,Nt,rt.data);else if(M.isData3DTexture)Xt?(de&&e.texStorage3D(i.TEXTURE_3D,pt,Ot,rt.width,rt.height,rt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,bt,Nt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,rt.width,rt.height,rt.depth,0,bt,Nt,rt.data);else if(M.isFramebufferTexture){if(de)if(Xt)e.texStorage2D(i.TEXTURE_2D,pt,Ot,rt.width,rt.height);else{let Y=rt.width,$=rt.height;for(let _t=0;_t<pt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ot,Y,$,0,bt,Nt,null),Y>>=1,$>>=1}}else if($t.length>0){if(Xt&&de){let Y=yt($t[0]);e.texStorage2D(i.TEXTURE_2D,pt,Ot,Y.width,Y.height)}for(let Y=0,$=$t.length;Y<$;Y++)Et=$t[Y],Xt?z&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,bt,Nt,Et):e.texImage2D(i.TEXTURE_2D,Y,Ot,bt,Nt,Et);M.generateMipmaps=!1}else if(Xt){if(de){let Y=yt(rt);e.texStorage2D(i.TEXTURE_2D,pt,Ot,Y.width,Y.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Nt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,bt,Nt,rt);m(M)&&f(Z),wt.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function nt(A,M,G){if(M.image.length!==6)return;let Z=Dt(A,M),et=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let J=n.get(et);if(et.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+G);let wt=te.getPrimaries(te.workingColorSpace),ft=M.colorSpace===ni?null:te.getPrimaries(M.colorSpace),vt=M.colorSpace===ni||wt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Jt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,bt=[];for(let $=0;$<6;$++)!Jt&&!rt?bt[$]=_(M.image[$],!0,s.maxCubemapSize):bt[$]=rt?M.image[$].image:M.image[$],bt[$]=Ut(M,bt[$]);let Nt=bt[0],Ot=r.convert(M.format,M.colorSpace),Et=r.convert(M.type),$t=y(M.internalFormat,Ot,Et,M.colorSpace),Xt=M.isVideoTexture!==!0,de=J.__version===void 0||Z===!0,z=et.dataReady,pt=N(M,Nt);Mt(i.TEXTURE_CUBE_MAP,M);let Y;if(Jt){Xt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,$t,Nt.width,Nt.height);for(let $=0;$<6;$++){Y=bt[$].mipmaps;for(let _t=0;_t<Y.length;_t++){let gt=Y[_t];M.format!==pn?Ot!==null?Xt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,0,0,gt.width,gt.height,Ot,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,$t,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,0,0,gt.width,gt.height,Ot,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,$t,gt.width,gt.height,0,Ot,Et,gt.data)}}}else{if(Y=M.mipmaps,Xt&&de){Y.length>0&&pt++;let $=yt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,$t,$.width,$.height)}for(let $=0;$<6;$++)if(rt){Xt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,bt[$].width,bt[$].height,Ot,Et,bt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$t,bt[$].width,bt[$].height,0,Ot,Et,bt[$].data);for(let _t=0;_t<Y.length;_t++){let kt=Y[_t].image[$].image;Xt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,0,0,kt.width,kt.height,Ot,Et,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,$t,kt.width,kt.height,0,Ot,Et,kt.data)}}else{Xt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ot,Et,bt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$t,Ot,Et,bt[$]);for(let _t=0;_t<Y.length;_t++){let gt=Y[_t];Xt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,0,0,Ot,Et,gt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,$t,Ot,Et,gt.image[$])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),J.__version=et.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function mt(A,M,G,Z,et,J){let wt=r.convert(G.format,G.colorSpace),ft=r.convert(G.type),vt=y(G.internalFormat,wt,ft,G.colorSpace),Jt=n.get(M),rt=n.get(G);if(rt.__renderTarget=M,!Jt.__hasExternalTextures){let bt=Math.max(1,M.width>>J),Nt=Math.max(1,M.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,vt,bt,Nt,M.depth,0,wt,ft,null):e.texImage2D(et,J,vt,bt,Nt,0,wt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),St(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,rt.__webglTexture,0,st(M)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,rt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let Z=M.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,J=x(M.stencilBuffer,et),wt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=st(M);St(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,J,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,A)}else{let Z=M.textures;for(let et=0;et<Z.length;et++){let J=Z[et],wt=r.convert(J.format,J.colorSpace),ft=r.convert(J.type),vt=y(J.internalFormat,wt,ft,J.colorSpace),Jt=st(M);G&&St(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,vt,M.width,M.height):St(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,vt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,vt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);let et=Z.__webglTexture,J=st(M);if(M.depthTexture.format===ns)St(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(M.depthTexture.format===cs)St(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Bt(A){let M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){let et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");It(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),lt(M.__webglDepthbuffer[Z],A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),lt(M.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(A,M,G){let Z=n.get(A);M!==void 0&&mt(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Bt(A)}function Qt(A){let M=A.texture,G=n.get(A),Z=n.get(M);A.addEventListener("dispose",w);let et=A.textures,J=A.isWebGLCubeRenderTarget===!0,wt=et.length>1;if(wt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ft]=[];for(let vt=0;vt<M.mipmaps.length;vt++)G.__webglFramebuffer[ft][vt]=i.createFramebuffer()}else G.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)G.__webglFramebuffer[ft]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ft=0,vt=et.length;ft<vt;ft++){let Jt=n.get(et[ft]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&St(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){let vt=et[ft];G.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);let Jt=r.convert(vt.format,vt.colorSpace),rt=r.convert(vt.type),bt=y(vt.internalFormat,Jt,rt,vt.colorSpace,A.isXRRenderTarget===!0),Nt=st(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,bt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)mt(G.__webglFramebuffer[ft][vt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,vt);else mt(G.__webglFramebuffer[ft],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(M)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ft=0,vt=et.length;ft<vt;ft++){let Jt=et[ft],rt=n.get(Jt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Mt(i.TEXTURE_2D,Jt),mt(G.__webglFramebuffer,A,Jt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(Jt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Z.__webglTexture),Mt(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)mt(G.__webglFramebuffer[vt],A,M,i.COLOR_ATTACHMENT0,ft,vt);else mt(G.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,ft,0);m(M)&&f(ft),e.unbindTexture()}A.depthBuffer&&Bt(A)}function Q(A){let M=A.textures;for(let G=0,Z=M.length;G<Z;G++){let et=M[G];if(m(et)){let J=S(A),wt=n.get(et).__webglTexture;e.bindTexture(J,wt),f(J),e.unbindTexture()}}}let ot=[],L=[];function Ct(A){if(A.samples>0){if(St(A)===!1){let M=A.textures,G=A.width,Z=A.height,et=i.COLOR_BUFFER_BIT,J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(A),ft=M.length>1;if(ft)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);let Jt=n.get(M[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,et,i.NEAREST),l===!0&&(ot.length=0,L.length=0,ot.push(i.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ot.push(J),L.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[vt]);let Jt=n.get(M[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function st(A){return Math.min(s.maxSamples,A.samples)}function St(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ct(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ut(A,M){let G=A.colorSpace,Z=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==xs&&G!==ni&&(te.getTransfer(G)===ae?(Z!==pn||et!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=I,this.setTexture3D=V,this.setTextureCube=B,this.rebindTextures=Ft,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=St}function Yg(i,t){function e(n,s=ni){let r,o=te.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return i.BYTE;if(n===mu)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===Ec)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===nr)return i.HALF_FLOAT;if(n===xu)return i.ALPHA;if(n===_u)return i.RGB;if(n===pn)return i.RGBA;if(n===yu)return i.LUMINANCE;if(n===vu)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===Ac)return i.RED;if(n===Rc)return i.RED_INTEGER;if(n===Mu)return i.RG;if(n===Cc)return i.RG_INTEGER;if(n===Pc)return i.RGBA_INTEGER;if(n===Jr||n===Kr||n===$r||n===jr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===al||n===ll||n===cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===ul||n===dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hl||n===ul)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===El||n===wl||n===Tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===Al||n===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Su||n===Cl||n===Pl||n===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Zl=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Zt=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zg={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new $e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new wn({vertexShader:Jg,fragmentShader:Kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kl=class extends oi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,_=new Jl,m=e.getContextAttributes(),f=null,S=null,y=[],x=[],N=new it,R=null,w=new We;w.viewport=new ce;let C=new We;C.viewport=new ce;let b=[w,C],v=new Zl,D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let nt=y[W];return nt===void 0&&(nt=new ks,y[W]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(W){let nt=y[W];return nt===void 0&&(nt=new ks,y[W]=nt),nt.getGripSpace()},this.getHand=function(W){let nt=y[W];return nt===void 0&&(nt=new ks,y[W]=nt),nt.getHandSpace()};function F(W){let nt=x.indexOf(W.inputSource);if(nt===-1)return;let mt=y[nt];mt!==void 0&&(mt.update(W.inputSource,W.frame,c||o),mt.dispatchEvent({type:W.type,data:W.inputSource}))}function T(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",T),s.removeEventListener("inputsourceschange",O);for(let W=0;W<y.length;W++){let nt=x[W];nt!==null&&(x[W]=null,y[W].disconnect(nt))}D=null,U=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,S=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",T),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){let nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Wn(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,mt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?cs:ns,mt=m.stencil?ls:Ei);let It={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Wn(d.textureWidth,d.textureHeight,{format:pn,type:Vn,depthTexture:new mo(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Dt.setContext(s),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(W){for(let nt=0;nt<W.removed.length;nt++){let mt=W.removed[nt],lt=x.indexOf(mt);lt>=0&&(x[lt]=null,y[lt].disconnect(mt))}for(let nt=0;nt<W.added.length;nt++){let mt=W.added[nt],lt=x.indexOf(mt);if(lt===-1){for(let Bt=0;Bt<y.length;Bt++)if(Bt>=x.length){x.push(mt),lt=Bt;break}else if(x[Bt]===null){x[Bt]=mt,lt=Bt;break}if(lt===-1)break}let It=y[lt];It&&It.connect(mt)}}let I=new P,V=new P;function B(W,nt,mt){I.setFromMatrixPosition(nt.matrixWorld),V.setFromMatrixPosition(mt.matrixWorld);let lt=I.distanceTo(V),It=nt.projectionMatrix.elements,Bt=mt.projectionMatrix.elements,Ft=It[14]/(It[10]-1),Qt=It[14]/(It[10]+1),Q=(It[9]+1)/It[5],ot=(It[9]-1)/It[5],L=(It[8]-1)/It[0],Ct=(Bt[8]+1)/Bt[0],st=Ft*L,St=Ft*Ct,ct=lt/(-L+Ct),Ut=ct*-L;if(nt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ut),W.translateZ(ct),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),It[10]===-1)W.projectionMatrix.copy(nt.projectionMatrix),W.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let yt=Ft+ct,A=Qt+ct,M=st-Ut,G=St+(lt-Ut),Z=Q*Qt/A*yt,et=ot*Qt/A*yt;W.projectionMatrix.makePerspective(M,G,Z,et,yt,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function j(W,nt){nt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(nt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let nt=W.near,mt=W.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),v.near=C.near=w.near=nt,v.far=C.far=w.far=mt,(D!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,U=v.far),w.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,v.layers.mask=w.layers.mask|C.layers.mask;let lt=W.parent,It=v.cameras;j(v,lt);for(let Bt=0;Bt<It.length;Bt++)j(It[Bt],lt);It.length===2?B(v,w,C):v.projectionMatrix.copy(w.projectionMatrix),K(W,v,lt)};function K(W,nt,mt){mt===null?W.matrix.copy(nt.matrixWorld):(W.matrix.copy(mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(nt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(nt.projectionMatrix),W.projectionMatrixInverse.copy(nt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ul*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let tt=null;function Mt(W,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){let mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let lt=!1;mt.length!==v.cameras.length&&(v.cameras.length=0,lt=!0);for(let Bt=0;Bt<mt.length;Bt++){let Ft=mt[Bt],Qt=null;if(p!==null)Qt=p.getViewport(Ft);else{let ot=u.getViewSubImage(d,Ft);Qt=ot.viewport,Bt===0&&(t.setRenderTargetTextures(S,ot.colorTexture,d.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(S))}let Q=b[Bt];Q===void 0&&(Q=new We,Q.layers.enable(Bt),Q.viewport=new ce,b[Bt]=Q),Q.matrix.fromArray(Ft.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ft.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Bt===0&&(v.matrix.copy(Q.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),lt===!0&&v.cameras.push(Q)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){let Bt=u.getDepthInformation(mt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let mt=0;mt<y.length;mt++){let lt=x[mt],It=y[mt];lt!==null&&It!==void 0&&It.update(lt,nt,c||o)}tt&&tt(W,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let Dt=new Ru;Dt.setAnimationLoop(Mt),this.setAnimationLoop=function(W){tt=W},this.dispose=function(){}}},_i=new mn,$g=new re;function jg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Au(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ge&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ge&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),y=S.envMap,x=S.envMapRotation;y&&(m.envMap.value=y,_i.copy(x),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(_i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ge&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let x=y.program;n.uniformBlockBinding(S,x)}function c(S,y){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));let N=y.program;n.updateUBOMapping(S,N);let R=t.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function h(S){let y=u();S.__bindingPointIndex=y;let x=i.createBuffer(),N=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,N,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let y=s[S.id],x=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,w=x.length;R<w;R++){let C=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,v=C.length;b<v;b++){let D=C[b];if(p(D,R,b,N)===!0){let U=D.__offset,F=Array.isArray(D.value)?D.value:[D.value],T=0;for(let O=0;O<F.length;O++){let I=F[O],V=_(I);typeof I=="number"||typeof I=="boolean"?(D.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,U+T,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=0,D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=0,D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=0):(I.toArray(D.__data,T),T+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,y,x,N){let R=S.value,w=y+"_"+x;if(N[w]===void 0)return typeof R=="number"||typeof R=="boolean"?N[w]=R:N[w]=R.clone(),!0;{let C=N[w];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return N[w]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(S){let y=S.uniforms,x=0,N=16;for(let w=0,C=y.length;w<C;w++){let b=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,D=b.length;v<D;v++){let U=b[v],F=Array.isArray(U.value)?U.value:[U.value];for(let T=0,O=F.length;T<O;T++){let I=F[T],V=_(I),B=x%N,j=B%V.boundary,K=B+j;x+=j,K!==0&&N-K<V.storage&&(x+=N-K),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=V.storage}}}let R=x%N;return R>0&&(x+=N-R),S.__size=x,S.__cache={},this}function _(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var go=class{constructor(t={}){let{canvas:e=nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=si,this.toneMappingExposure=1;let x=this,N=!1,R=0,w=0,C=null,b=-1,v=null,D=new ce,U=new ce,F=null,T=new Wt(0),O=0,I=e.width,V=e.height,B=1,j=null,K=null,tt=new ce(0,0,I,V),Mt=new ce(0,0,I,V),Dt=!1,W=new qs,nt=!1,mt=!1,lt=new re,It=new re,Bt=new P,Ft=new ce,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function ot(){return C===null?B:1}let L=n;function Ct(E,k){return e.getContext(E,k)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",gt,!1),L===null){let k="webgl2";if(L=Ct(k,E),L===null)throw Ct(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,St,ct,Ut,yt,A,M,G,Z,et,J,wt,ft,vt,Jt,rt,bt,Nt,Ot,Et,$t,Xt,de,z;function pt(){st=new m0(L),st.init(),Xt=new Yg(L,st),St=new c0(L,st,t,Xt),ct=new Gg(L,st),St.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Ut=new _0(L),yt=new Ig,A=new qg(L,st,ct,yt,St,Xt,Ut),M=new u0(x),G=new p0(x),Z=new wf(L),de=new a0(L,Z),et=new g0(L,Z,Ut,de),J=new v0(L,et,Z,Ut),Ot=new y0(L,St,A),rt=new h0(yt),wt=new Pg(x,M,G,st,St,de,rt),ft=new jg(x,yt),vt=new Dg,Jt=new zg(st),Nt=new o0(x,M,G,ct,J,p,l),bt=new Vg(x,J,St),z=new Qg(L,Ut,St,ct),Et=new l0(L,st,Ut),$t=new x0(L,st,Ut),Ut.programs=wt.programs,x.capabilities=St,x.extensions=st,x.properties=yt,x.renderLists=vt,x.shadowMap=bt,x.state=ct,x.info=Ut}pt();let Y=new Kl(x,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(I,V,!1))},this.getSize=function(E){return E.set(I,V)},this.setSize=function(E,k,X=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,V=k,e.width=Math.floor(E*B),e.height=Math.floor(k*B),X===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(I*B,V*B).floor()},this.setDrawingBufferSize=function(E,k,X){I=E,V=k,B=X,e.width=Math.floor(E*X),e.height=Math.floor(k*X),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(tt)},this.setViewport=function(E,k,X,q){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,k,X,q),ct.viewport(D.copy(tt).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(Mt)},this.setScissor=function(E,k,X,q){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,k,X,q),ct.scissor(U.copy(Mt).multiplyScalar(B).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(E){ct.setScissorTest(Dt=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(E=!0,k=!0,X=!0){let q=0;if(E){let H=!1;if(C!==null){let at=C.texture.format;H=at===Pc||at===Cc||at===Rc}if(H){let at=C.texture.type,xt=at===Vn||at===Ei||at===Xs||at===ls||at===wc||at===Tc,Tt=Nt.getClearColor(),At=Nt.getClearAlpha(),zt=Tt.r,Ht=Tt.g,Rt=Tt.b;xt?(g[0]=zt,g[1]=Ht,g[2]=Rt,g[3]=At,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=zt,_[1]=Ht,_[2]=Rt,_[3]=At,L.clearBufferiv(L.COLOR,0,_))}else q|=L.COLOR_BUFFER_BIT}k&&(q|=L.DEPTH_BUFFER_BIT),X&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),vt.dispose(),Jt.dispose(),yt.dispose(),M.dispose(),G.dispose(),J.dispose(),de.dispose(),z.dispose(),wt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Xc),Y.removeEventListener("sessionend",qc),di.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let E=Ut.autoReset,k=bt.enabled,X=bt.autoUpdate,q=bt.needsUpdate,H=bt.type;pt(),Ut.autoReset=E,bt.enabled=k,bt.autoUpdate=X,bt.needsUpdate=q,bt.type=H}function gt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function kt(E){let k=E.target;k.removeEventListener("dispose",kt),be(k)}function be(E){ze(E),yt.remove(E)}function ze(E){let k=yt.get(E).programs;k!==void 0&&(k.forEach(function(X){wt.releaseProgram(X)}),E.isShaderMaterial&&wt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,X,q,H,at){k===null&&(k=Qt);let xt=H.isMesh&&H.matrixWorld.determinant()<0,Tt=fd(E,k,X,q,H);ct.setMaterial(q,xt);let At=X.index,zt=1;if(q.wireframe===!0){if(At=et.getWireframeAttribute(X),At===void 0)return;zt=2}let Ht=X.drawRange,Rt=X.attributes.position,ee=Ht.start*zt,fe=(Ht.start+Ht.count)*zt;at!==null&&(ee=Math.max(ee,at.start*zt),fe=Math.min(fe,(at.start+at.count)*zt)),At!==null?(ee=Math.max(ee,0),fe=Math.min(fe,At.count)):Rt!=null&&(ee=Math.max(ee,0),fe=Math.min(fe,Rt.count));let me=fe-ee;if(me<0||me===1/0)return;de.setup(H,q,Tt,X,At);let Je,ie=Et;if(At!==null&&(Je=Z.get(At),ie=$t,ie.setIndex(Je)),H.isMesh)q.wireframe===!0?(ct.setLineWidth(q.wireframeLinewidth*ot()),ie.setMode(L.LINES)):ie.setMode(L.TRIANGLES);else if(H.isLine){let Pt=q.linewidth;Pt===void 0&&(Pt=1),ct.setLineWidth(Pt*ot()),H.isLineSegments?ie.setMode(L.LINES):H.isLineLoop?ie.setMode(L.LINE_LOOP):ie.setMode(L.LINE_STRIP)}else H.isPoints?ie.setMode(L.POINTS):H.isSprite&&ie.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ie.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ie.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Pt=H._multiDrawStarts,Pn=H._multiDrawCounts,se=H._multiDrawCount,hn=At?Z.get(At).bytesPerElement:1,Di=yt.get(q).currentProgram.getUniforms();for(let tn=0;tn<se;tn++)Di.setValue(L,"_gl_DrawID",tn),ie.render(Pt[tn]/hn,Pn[tn])}else if(H.isInstancedMesh)ie.renderInstances(ee,me,H.count);else if(X.isInstancedBufferGeometry){let Pt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Pn=Math.min(X.instanceCount,Pt);ie.renderInstances(ee,me,Pn)}else ie.render(ee,me)};function oe(E,k,X){E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=Ge,E.needsUpdate=!0,pr(E,k,X),E.side=ri,E.needsUpdate=!0,pr(E,k,X),E.side=sn):pr(E,k,X)}this.compile=function(E,k,X=null){X===null&&(X=E),f=Jt.get(X),f.init(k),y.push(f),X.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),E!==X&&E.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();let q=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let at=H.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){let Tt=at[xt];oe(Tt,X,H),q.add(Tt)}else oe(at,X,H),q.add(at)}),y.pop(),f=null,q},this.compileAsync=function(E,k,X=null){let q=this.compile(E,k,X);return new Promise(H=>{function at(){if(q.forEach(function(xt){yt.get(xt).currentProgram.isReady()&&q.delete(xt)}),q.size===0){H(E);return}setTimeout(at,10)}st.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let cn=null;function Cn(E){cn&&cn(E)}function Xc(){di.stop()}function qc(){di.start()}let di=new Ru;di.setAnimationLoop(Cn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(E){cn=E,Y.setAnimationLoop(E),E===null?di.stop():di.start()},Y.addEventListener("sessionstart",Xc),Y.addEventListener("sessionend",qc),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,C),f=Jt.get(E,y.length),f.init(k),y.push(f),It.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),W.setFromProjectionMatrix(It),mt=this.localClippingEnabled,nt=rt.init(this.clippingPlanes,mt),m=vt.get(E,S.length),m.init(),S.push(m),Y.enabled===!0&&Y.isPresenting===!0){let at=x.xr.getDepthSensingMesh();at!==null&&ha(at,k,-1/0,x.sortObjects)}ha(E,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,K),Q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Q&&Nt.addToRenderList(m,E),this.info.render.frame++,nt===!0&&rt.beginShadows();let X=f.state.shadowsArray;bt.render(X,E,k),nt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,H=m.transmissive;if(f.setupLights(),k.isArrayCamera){let at=k.cameras;if(H.length>0)for(let xt=0,Tt=at.length;xt<Tt;xt++){let At=at[xt];Zc(q,H,E,At)}Q&&Nt.render(E);for(let xt=0,Tt=at.length;xt<Tt;xt++){let At=at[xt];Yc(m,E,At,At.viewport)}}else H.length>0&&Zc(q,H,E,k),Q&&Nt.render(E),Yc(m,E,k);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,k),de.resetDefaultState(),b=-1,v=null,y.pop(),y.length>0?(f=y[y.length-1],nt===!0&&rt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ha(E,k,X,q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){q&&Ft.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);let xt=J.update(E),Tt=E.material;Tt.visible&&m.push(E,xt,Tt,X,Ft.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){let xt=J.update(E),Tt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ft.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ft.copy(xt.boundingSphere.center)),Ft.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray(Tt)){let At=xt.groups;for(let zt=0,Ht=At.length;zt<Ht;zt++){let Rt=At[zt],ee=Tt[Rt.materialIndex];ee&&ee.visible&&m.push(E,xt,ee,X,Ft.z,Rt)}}else Tt.visible&&m.push(E,xt,Tt,X,Ft.z,null)}}let at=E.children;for(let xt=0,Tt=at.length;xt<Tt;xt++)ha(at[xt],k,X,q)}function Yc(E,k,X,q){let H=E.opaque,at=E.transmissive,xt=E.transparent;f.setupLightsView(X),nt===!0&&rt.setGlobalState(x.clippingPlanes,X),q&&ct.viewport(D.copy(q)),H.length>0&&fr(H,k,X),at.length>0&&fr(at,k,X),xt.length>0&&fr(xt,k,X),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Zc(E,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new Wn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?nr:Vn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let at=f.state.transmissionRenderTarget[q.id],xt=q.viewport||D;at.setSize(xt.z,xt.w);let Tt=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(T),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Nt.render(X);let At=x.toneMapping;x.toneMapping=si;let zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),nt===!0&&rt.setGlobalState(x.clippingPlanes,q),fr(E,X,q),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Rt=0,ee=k.length;Rt<ee;Rt++){let fe=k[Rt],me=fe.object,Je=fe.geometry,ie=fe.material,Pt=fe.group;if(ie.side===sn&&me.layers.test(q.layers)){let Pn=ie.side;ie.side=Ge,ie.needsUpdate=!0,Jc(me,X,q,Je,ie,Pt),ie.side=Pn,ie.needsUpdate=!0,Ht=!0}}Ht===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}x.setRenderTarget(Tt),x.setClearColor(T,O),zt!==void 0&&(q.viewport=zt),x.toneMapping=At}function fr(E,k,X){let q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,at=E.length;H<at;H++){let xt=E[H],Tt=xt.object,At=xt.geometry,zt=q===null?xt.material:q,Ht=xt.group;Tt.layers.test(X.layers)&&Jc(Tt,k,X,At,zt,Ht)}}function Jc(E,k,X,q,H,at){E.onBeforeRender(x,k,X,q,H,at),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(x,k,X,q,E,at),H.transparent===!0&&H.side===sn&&H.forceSinglePass===!1?(H.side=Ge,H.needsUpdate=!0,x.renderBufferDirect(X,k,q,H,E,at),H.side=ri,H.needsUpdate=!0,x.renderBufferDirect(X,k,q,H,E,at),H.side=sn):x.renderBufferDirect(X,k,q,H,E,at),E.onAfterRender(x,k,X,q,H,at)}function pr(E,k,X){k.isScene!==!0&&(k=Qt);let q=yt.get(E),H=f.state.lights,at=f.state.shadowsArray,xt=H.state.version,Tt=wt.getParameters(E,H.state,at,k,X),At=wt.getProgramCacheKey(Tt),zt=q.programs;q.environment=E.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(E.isMeshStandardMaterial?G:M).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",kt),zt=new Map,q.programs=zt);let Ht=zt.get(At);if(Ht!==void 0){if(q.currentProgram===Ht&&q.lightsStateVersion===xt)return $c(E,Tt),Ht}else Tt.uniforms=wt.getUniforms(E),E.onBeforeCompile(Tt,x),Ht=wt.acquireProgram(Tt,At),zt.set(At,Ht),q.uniforms=Tt.uniforms;let Rt=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=rt.uniform),$c(E,Tt),q.needsLights=md(E),q.lightsStateVersion=xt,q.needsLights&&(Rt.ambientLightColor.value=H.state.ambient,Rt.lightProbe.value=H.state.probe,Rt.directionalLights.value=H.state.directional,Rt.directionalLightShadows.value=H.state.directionalShadow,Rt.spotLights.value=H.state.spot,Rt.spotLightShadows.value=H.state.spotShadow,Rt.rectAreaLights.value=H.state.rectArea,Rt.ltc_1.value=H.state.rectAreaLTC1,Rt.ltc_2.value=H.state.rectAreaLTC2,Rt.pointLights.value=H.state.point,Rt.pointLightShadows.value=H.state.pointShadow,Rt.hemisphereLights.value=H.state.hemi,Rt.directionalShadowMap.value=H.state.directionalShadowMap,Rt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Rt.spotShadowMap.value=H.state.spotShadowMap,Rt.spotLightMatrix.value=H.state.spotLightMatrix,Rt.spotLightMap.value=H.state.spotLightMap,Rt.pointShadowMap.value=H.state.pointShadowMap,Rt.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Ht,q.uniformsList=null,Ht}function Kc(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=ss.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function $c(E,k){let X=yt.get(E);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function fd(E,k,X,q,H){k.isScene!==!0&&(k=Qt),A.resetTextureUnits();let at=k.fog,xt=q.isMeshStandardMaterial?k.environment:null,Tt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xs,At=(q.isMeshStandardMaterial?G:M).get(q.envMap||xt),zt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ht=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Rt=!!X.morphAttributes.position,ee=!!X.morphAttributes.normal,fe=!!X.morphAttributes.color,me=si;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(me=x.toneMapping);let Je=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=Je!==void 0?Je.length:0,Pt=yt.get(q),Pn=f.state.lights;if(nt===!0&&(mt===!0||E!==v)){let on=E===v&&q.id===b;rt.setState(q,E,on)}let se=!1;q.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Pn.state.version||Pt.outputColorSpace!==Tt||H.isBatchedMesh&&Pt.batching===!1||!H.isBatchedMesh&&Pt.batching===!0||H.isBatchedMesh&&Pt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Pt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Pt.instancing===!1||!H.isInstancedMesh&&Pt.instancing===!0||H.isSkinnedMesh&&Pt.skinning===!1||!H.isSkinnedMesh&&Pt.skinning===!0||H.isInstancedMesh&&Pt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Pt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Pt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Pt.instancingMorph===!1&&H.morphTexture!==null||Pt.envMap!==At||q.fog===!0&&Pt.fog!==at||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==zt||Pt.vertexTangents!==Ht||Pt.morphTargets!==Rt||Pt.morphNormals!==ee||Pt.morphColors!==fe||Pt.toneMapping!==me||Pt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Pt.__version=q.version);let hn=Pt.currentProgram;se===!0&&(hn=pr(q,k,H));let Di=!1,tn=!1,ws=!1,ge=hn.getUniforms(),_n=Pt.uniforms;if(ct.useProgram(hn.program)&&(Di=!0,tn=!0,ws=!0),q.id!==b&&(b=q.id,tn=!0),Di||v!==E){ct.buffers.depth.getReversed()?(lt.copy(E.projectionMatrix),rf(lt),of(lt),ge.setValue(L,"projectionMatrix",lt)):ge.setValue(L,"projectionMatrix",E.projectionMatrix),ge.setValue(L,"viewMatrix",E.matrixWorldInverse);let Zn=ge.map.cameraPosition;Zn!==void 0&&Zn.setValue(L,Bt.setFromMatrixPosition(E.matrixWorld)),St.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ge.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,tn=!0,ws=!0)}if(H.isSkinnedMesh){ge.setOptional(L,H,"bindMatrix"),ge.setOptional(L,H,"bindMatrixInverse");let on=H.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ge.setValue(L,"boneTexture",on.boneTexture,A))}H.isBatchedMesh&&(ge.setOptional(L,H,"batchingTexture"),ge.setValue(L,"batchingTexture",H._matricesTexture,A),ge.setOptional(L,H,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",H._indirectTexture,A),ge.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",H._colorsTexture,A));let Ts=X.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&Ot.update(H,X,hn),(tn||Pt.receiveShadow!==H.receiveShadow)&&(Pt.receiveShadow=H.receiveShadow,ge.setValue(L,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(_n.envMap.value=At,_n.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(_n.envMapIntensity.value=k.environmentIntensity),tn&&(ge.setValue(L,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&pd(_n,ws),at&&q.fog===!0&&ft.refreshFogUniforms(_n,at),ft.refreshMaterialUniforms(_n,q,B,V,f.state.transmissionRenderTarget[E.id]),ss.upload(L,Kc(Pt),_n,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ss.upload(L,Kc(Pt),_n,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ge.setValue(L,"center",H.center),ge.setValue(L,"modelViewMatrix",H.modelViewMatrix),ge.setValue(L,"normalMatrix",H.normalMatrix),ge.setValue(L,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let on=q.uniformsGroups;for(let Zn=0,Jn=on.length;Zn<Jn;Zn++){let jc=on[Zn];z.update(jc,hn),z.bind(jc,hn)}}return hn}function pd(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function md(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,k,X){yt.get(E.texture).__webglTexture=k,yt.get(E.depthTexture).__webglTexture=X;let q=yt.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){let X=yt.get(E);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,X=0){C=E,R=k,w=X;let q=!0,H=null,at=!1,xt=!1;if(E){let At=yt.get(E);if(At.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(At.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(At.__hasExternalTextures)A.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Rt=E.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&yt.has(Rt)&&(E.width!==Rt.image.width||E.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(xt=!0);let Ht=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[k])?H=Ht[k][X]:H=Ht[k],at=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?H=yt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?H=Ht[X]:H=Ht,D.copy(E.viewport),U.copy(E.scissor),F=E.scissorTest}else D.copy(tt).multiplyScalar(B).floor(),U.copy(Mt).multiplyScalar(B).floor(),F=Dt;if(ct.bindFramebuffer(L.FRAMEBUFFER,H)&&q&&ct.drawBuffers(E,H),ct.viewport(D),ct.scissor(U),ct.setScissorTest(F),at){let At=yt.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,At.__webglTexture,X)}else if(xt){let At=yt.get(E.texture),zt=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.__webglTexture,X||0,zt)}b=-1},this.readRenderTargetPixels=function(E,k,X,q,H,at,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){ct.bindFramebuffer(L.FRAMEBUFFER,Tt);try{let At=E.texture,zt=At.format,Ht=At.type;if(!St.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-q&&X>=0&&X<=E.height-H&&L.readPixels(k,X,q,H,Xt.convert(zt),Xt.convert(Ht),at)}finally{let At=C!==null?yt.get(C).__webglFramebuffer:null;ct.bindFramebuffer(L.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(E,k,X,q,H,at,xt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){let At=E.texture,zt=At.format,Ht=At.type;if(!St.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-q&&X>=0&&X<=E.height-H){ct.bindFramebuffer(L.FRAMEBUFFER,Tt);let Rt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.bufferData(L.PIXEL_PACK_BUFFER,at.byteLength,L.STREAM_READ),L.readPixels(k,X,q,H,Xt.convert(zt),Xt.convert(Ht),0);let ee=C!==null?yt.get(C).__webglFramebuffer:null;ct.bindFramebuffer(L.FRAMEBUFFER,ee);let fe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await sf(L,fe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,at),L.deleteBuffer(Rt),L.deleteSync(fe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,X=0){E.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);let q=Math.pow(2,-X),H=Math.floor(E.image.width*q),at=Math.floor(E.image.height*q),xt=k!==null?k.x:0,Tt=k!==null?k.y:0;A.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,xt,Tt,H,at),ct.unbindTexture()},this.copyTextureToTexture=function(E,k,X=null,q=null,H=0){E.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],k=arguments[2],H=arguments[3]||0,X=null);let at,xt,Tt,At,zt,Ht,Rt,ee,fe,me=E.isCompressedTexture?E.mipmaps[H]:E.image;X!==null?(at=X.max.x-X.min.x,xt=X.max.y-X.min.y,Tt=X.isBox3?X.max.z-X.min.z:1,At=X.min.x,zt=X.min.y,Ht=X.isBox3?X.min.z:0):(at=me.width,xt=me.height,Tt=me.depth||1,At=0,zt=0,Ht=0),q!==null?(Rt=q.x,ee=q.y,fe=q.z):(Rt=0,ee=0,fe=0);let Je=Xt.convert(k.format),ie=Xt.convert(k.type),Pt;k.isData3DTexture?(A.setTexture3D(k,0),Pt=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),Pt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),Pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);let Pn=L.getParameter(L.UNPACK_ROW_LENGTH),se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hn=L.getParameter(L.UNPACK_SKIP_PIXELS),Di=L.getParameter(L.UNPACK_SKIP_ROWS),tn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht);let ws=E.isDataArrayTexture||E.isData3DTexture,ge=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let _n=yt.get(E),Ts=yt.get(k),on=yt.get(_n.__renderTarget),Zn=yt.get(Ts.__renderTarget);ct.bindFramebuffer(L.READ_FRAMEBUFFER,on.__webglFramebuffer),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Jn=0;Jn<Tt;Jn++)ws&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(E).__webglTexture,H,Ht+Jn),E.isDepthTexture?(ge&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.get(k).__webglTexture,H,fe+Jn),L.blitFramebuffer(At,zt,at,xt,Rt,ee,at,xt,L.DEPTH_BUFFER_BIT,L.NEAREST)):ge?L.copyTexSubImage3D(Pt,H,Rt,ee,fe+Jn,At,zt,at,xt):L.copyTexSubImage2D(Pt,H,Rt,ee,fe+Jn,At,zt,at,xt);ct.bindFramebuffer(L.READ_FRAMEBUFFER,null),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ge?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Pt,H,Rt,ee,fe,at,xt,Tt,Je,ie,me.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Pt,H,Rt,ee,fe,at,xt,Tt,Je,me.data):L.texSubImage3D(Pt,H,Rt,ee,fe,at,xt,Tt,Je,ie,me):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,Rt,ee,at,xt,Je,ie,me.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,Rt,ee,me.width,me.height,Je,me.data):L.texSubImage2D(L.TEXTURE_2D,H,Rt,ee,at,xt,Je,ie,me);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Di),L.pixelStorei(L.UNPACK_SKIP_IMAGES,tn),H===0&&k.generateMipmaps&&L.generateMipmap(Pt),ct.unbindTexture()},this.copyTextureToTexture3D=function(E,k,X=null,q=null,H=0){return E.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,E=arguments[2],k=arguments[3],H=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,X,q,H)},this.initRenderTarget=function(E){yt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ct.unbindTexture()},this.resetState=function(){R=0,w=0,C=null,ct.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var xo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ds=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},$l=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dl,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xe=new P,_o=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ys=class extends En{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zi,Is=new P,Ji=new P,Ki=new P,$i=new it,Ls=new it,Du=new re,Fr=new P,Ds=new P,Or=new P,$h=new it,ka=new it,jh=new it,yo=class extends Oe{constructor(t=new Ys){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $l(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new _o(n,3,0,!1)),Zi.setAttribute("uv",new _o(n,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),Du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Ki.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Br(Fr.set(-.5,-.5,0),Ki,o,Ji,s,r),Br(Ds.set(.5,-.5,0),Ki,o,Ji,s,r),Br(Or.set(.5,.5,0),Ki,o,Ji,s,r),$h.set(0,0),ka.set(1,0),jh.set(1,1);let a=t.ray.intersectTriangle(Fr,Ds,Or,!1,Is);if(a===null&&(Br(Ds.set(-.5,.5,0),Ki,o,Ji,s,r),ka.set(0,1),a=t.ray.intersectTriangle(Fr,Or,Ds,!1,Is),a===null))return;let l=t.ray.origin.distanceTo(Is);l<t.near||l>t.far||e.push({distance:l,point:Is.clone(),uv:Bn.getInterpolation(Is,Fr,Ds,Or,$h,ka,jh,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Br(i,t,e,n,s,r){$i.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ls.x=r*$i.x-s*$i.y,Ls.y=s*$i.x+r*$i.y):Ls.copy($i),i.copy(t),i.x+=Ls.x,i.y+=Ls.y,i.applyMatrix4(Du)}var jl=class extends $e{constructor(t=null,e=1,n=1,s,r,o,a,l,c=rn,h=rn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vo=class extends Ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ji=new re,Qh=new re,zr=[],tu=new Gn,tx=new re,Us=new ht,Ns=new ai,Mo=class extends ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),tu.copy(t.boundingBox).applyMatrix4(ji),this.boundingBox.union(tu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Ns.copy(t.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),t.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),Qh.multiplyMatrices(n,ji),Us.matrixWorld=Qh,Us.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){let l=zr[o];l.instanceId=r,l.object=this,e.push(l)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jl(new Float32Array(s*this.count),s,this.count,Ac,Sn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var li=class extends En{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},So=new P,bo=new P,eu=new re,Fs=new ao,kr=new ai,Ha=new P,nu=new P,Ql=class extends Oe{constructor(t=new Ee,e=new li){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)So.fromBufferAttribute(e,s-1),bo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=So.distanceTo(bo);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;eu.copy(s).invert(),Fs.copy(t.ray).applyMatrix4(eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=h.getX(_),S=h.getX(_+1),y=Hr(this,t,Fs,l,f,S);y&&e.push(y)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=Hr(this,t,Fs,l,_,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=Hr(this,t,Fs,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){let _=Hr(this,t,Fs,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(So.fromBufferAttribute(o,s),bo.fromBufferAttribute(o,r),e.distanceSqToSegment(So,bo,Ha,nu)>n)return;Ha.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ha);if(!(l<t.near||l>t.far))return{distance:l,point:nu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var iu=new P,su=new P,wi=class extends Ql{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)iu.fromBufferAttribute(e,s),su.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+iu.distanceTo(su);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var fs=class extends $e{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new it:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],o=[],a=new P,l=new re;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Fe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Fe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Zs=class extends ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},tc=class extends Zs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Dc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Vr=new P,Va=new Dc,Wa=new Dc,Ga=new Dc,ps=class extends ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Vr.subVectors(s[0],s[1]).add(s[0]),c=Vr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Vr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Va.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Wa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Ga.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ga.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Va.calc(l),Wa.calc(l),Ga.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ru(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ex(i,t){let e=1-i;return e*e*t}function nx(i,t){return 2*(1-i)*i*t}function ix(i,t){return i*i*t}function Hs(i,t,e,n){return ex(i,t)+nx(i,e)+ix(i,n)}function sx(i,t){let e=1-i;return e*e*e*t}function rx(i,t){let e=1-i;return 3*e*e*i*t}function ox(i,t){return 3*(1-i)*i*i*t}function ax(i,t){return i*i*i*t}function Vs(i,t,e,n,s){return sx(i,t)+rx(i,e)+ox(i,n)+ax(i,s)}var Eo=class extends ln{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ec=class extends ln{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y),Vs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wo=class extends ln{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nc=class extends ln{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends ln{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ao=class extends ln{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y),Hs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ru(a,l.x,c.x,h.x,u.x),ru(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},Co=Object.freeze({__proto__:null,ArcCurve:tc,CatmullRomCurve3:ps,CubicBezierCurve:Eo,CubicBezierCurve3:ec,EllipseCurve:Zs,LineCurve:wo,LineCurve3:nc,QuadraticBezierCurve:To,QuadraticBezierCurve3:Ao,SplineCurve:Ro}),ic=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Co[s.type]().fromJSON(s))}return this}},Js=class extends ic{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new wo(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new To(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Eo(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ro(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Zs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},sc=class i extends Ee{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Fe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new P,d=new it,p=new P,g=new P,_=new P,m=0,f=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,f=t[S+1].y-t[S].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=e;S++){let y=n+S*h*s,x=Math.sin(y),N=Math.cos(y);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*x,u.y=t[R].y,u.z=t[R].x*N,o.push(u.x,u.y,u.z),d.x=S/e,d.y=R/(t.length-1),a.push(d.x,d.y);let w=l[3*R+0]*x,C=l[3*R+1],b=l[3*R+0]*N;c.push(w,C,b)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){let x=y+S*t.length,N=x,R=x+t.length,w=x+t.length+1,C=x+1;r.push(N,R,C),r.push(w,C,R)}this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ci=class i extends sc{constructor(t=1,e=1,n=4,s=8){let r=new Js;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Xn=class i extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new P,h=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},he=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],m=n/2,f=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(p,2));function S(){let x=new P,N=new P,R=0,w=(e-t)/n;for(let C=0;C<=r;C++){let b=[],v=C/r,D=v*(e-t)+t;for(let U=0;U<=s;U++){let F=U/s,T=F*l+a,O=Math.sin(T),I=Math.cos(T);N.x=D*O,N.y=-v*n+m,N.z=D*I,u.push(N.x,N.y,N.z),x.set(O,w,I).normalize(),d.push(x.x,x.y,x.z),p.push(F,1-v),b.push(g++)}_.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){let v=_[b][C],D=_[b+1][C],U=_[b+1][C+1],F=_[b][C+1];(t>0||b!==0)&&(h.push(v,D,F),R+=3),(e>0||b!==r-1)&&(h.push(D,U,F),R+=3)}c.addGroup(f,R,0),f+=R}function y(x){let N=g,R=new it,w=new P,C=0,b=x===!0?t:e,v=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;let D=g;for(let U=0;U<=s;U++){let T=U/s*l+a,O=Math.cos(T),I=Math.sin(T);w.x=b*I,w.y=m*v,w.z=b*O,u.push(w.x,w.y,w.z),d.push(0,v,0),R.x=O*.5+.5,R.y=I*.5*v+.5,p.push(R.x,R.y),g++}for(let U=0;U<s;U++){let F=N+U,T=D+U;x===!0?h.push(T,T+1,F):h.push(T+1,T,F),C+=3}c.addGroup(f,C,x===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ks=class i extends he{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rc=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let y=new P,x=new P,N=new P;for(let R=0;R<e.length;R+=3)p(e[R+0],y),p(e[R+1],x),p(e[R+2],N),l(y,x,N,S)}function l(S,y,x,N){let R=N+1,w=[];for(let C=0;C<=R;C++){w[C]=[];let b=S.clone().lerp(x,C/R),v=y.clone().lerp(x,C/R),D=R-C;for(let U=0;U<=D;U++)U===0&&C===R?w[C][U]=b:w[C][U]=b.clone().lerp(v,U/D)}for(let C=0;C<R;C++)for(let b=0;b<2*(R-C)-1;b++){let v=Math.floor(b/2);b%2===0?(d(w[C][v+1]),d(w[C+1][v]),d(w[C][v])):(d(w[C][v+1]),d(w[C+1][v+1]),d(w[C+1][v]))}}function c(S){let y=new P;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(S),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let S=new P;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let x=m(S)/2/Math.PI+.5,N=f(S)/Math.PI+.5;o.push(x,1-N)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){let y=o[S+0],x=o[S+2],N=o[S+4],R=Math.max(y,x,N),w=Math.min(y,x,N);R>.9&&w<.1&&(y<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),N<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,y){let x=S*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){let S=new P,y=new P,x=new P,N=new P,R=new it,w=new it,C=new it;for(let b=0,v=0;b<r.length;b+=9,v+=6){S.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),R.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),N.copy(S).add(y).add(x).divideScalar(3);let D=m(N);_(R,v+0,S,D),_(w,v+2,y,D),_(C,v+4,x,D)}}function _(S,y,x,N){N<0&&S.x===1&&(o[y]=S.x-1),x.x===0&&x.z===0&&(o[y]=N/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Wr=new P,Gr=new P,Xa=new P,Xr=new Bn,Ti=class extends Ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(to*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:f}=Xr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Xr.getNormal(Xa),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){let y=(S+1)%3,x=u[S],N=u[y],R=Xr[h[S]],w=Xr[h[y]],C=`${x}_${N}`,b=`${N}_${x}`;b in d&&d[b]?(Xa.dot(d[b].normal)<=r&&(p.push(R.x,R.y,R.z),p.push(w.x,w.y,w.z)),d[b]=null):C in d||(d[C]={index0:c[S],index1:c[y],normal:Xa.clone()})}}for(let g in d)if(d[g]){let{index0:_,index1:m}=d[g];Wr.fromBufferAttribute(a,_),Gr.fromBufferAttribute(a,m),p.push(Wr.x,Wr.y,Wr.z),p.push(Gr.x,Gr.y,Gr.z)}this.setAttribute("position",new Gt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},$s=class extends Js{constructor(t){super(t),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Js().fromJSON(s))}return this}},lx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Uu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=fx(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return js(r,o,e,a,l,p,0),o}};function Uu(i,t,e,n,s){let r,o;if(s===Ex(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ou(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ou(r,i[r],i[r+1],o);return o&&Wo(o,o.next)&&(tr(o),o=o.next),o}function Ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wo(e,e.next)||Se(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function js(i,t,e,n,s,r,o){if(!i)return;!o&&r&&_x(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?hx(i,n,s,r):cx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),tr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ux(Ai(i),t,e),js(i,t,e,n,s,r,2)):o===2&&dx(i,t,e,n,s,r):js(Ai(i),t,e,n,s,r,1);break}}}function cx(i){let t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&ts(s,a,r,l,o,c,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=oc(p,g,t,e,n),S=oc(_,m,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=f&&x&&x.z<=S;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ts(a,h,l,u,c,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ts(a,h,l,u,c,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ts(a,h,l,u,c,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ts(a,h,l,u,c,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ux(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Wo(s,r)&&Nu(s,n,n.next,r)&&Qs(s,r)&&Qs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),tr(n),tr(n.next),n=i=r),n=n.next}while(n!==i);return Ai(n)}function dx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mx(o,a)){let l=Fu(o,a);o=Ai(o,o.next),l=Ai(l,l.next),js(o,t,e,n,s,r,0),js(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fx(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Uu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(vx(c));for(s.sort(px),r=0;r<s.length;r++)e=mx(s[r],e);return e}function px(i,t){return i.x-t.x}function mx(i,t){let e=gx(i,t);if(!e)return t;let n=Fu(e,i);return Ai(n,n.next),Ai(e,e.next)}function gx(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ts(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Qs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&xx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function xx(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function _x(i,t,e,n){let s=i;do s.z===0&&(s.z=oc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yx(s)}function yx(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function oc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function vx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ts(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Mx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sx(i,t)&&(Qs(i,t)&&Qs(t,i)&&bx(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Wo(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wo(i,t){return i.x===t.x&&i.y===t.y}function Nu(i,t,e,n){let s=Yr(Se(i,t,e)),r=Yr(Se(i,t,n)),o=Yr(Se(e,n,i)),a=Yr(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&qr(i,e,t)||r===0&&qr(i,n,t)||o===0&&qr(e,i,n)||a===0&&qr(e,t,n))}function qr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yr(i){return i>0?1:i<0?-1:0}function Sx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qs(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function bx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fu(i,t){let e=new ac(i.i,i.x,i.y),n=new ac(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ou(i,t,e,n){let s=new ac(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ac(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ex(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ws=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];au(t),lu(n,t);let o=t.length;e.forEach(au);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,lu(n,e[l]);let a=lx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function au(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function lu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Po=class i extends Ee{constructor(t=new $s([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Gt(s,3)),this.setAttribute("uv",new Gt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:wx,y,x=!1,N,R,w,C;f&&(y=f.getSpacedPoints(h),x=!0,d=!1,N=f.computeFrenetFrames(h,!1),R=new P,w=new P,C=new P),d||(m=0,p=0,g=0,_=0);let b=a.extractPoints(c),v=b.shape,D=b.holes;if(!Ws.isClockWise(v)){v=v.reverse();for(let Q=0,ot=D.length;Q<ot;Q++){let L=D[Q];Ws.isClockWise(L)&&(D[Q]=L.reverse())}}let F=Ws.triangulateShape(v,D),T=v;for(let Q=0,ot=D.length;Q<ot;Q++){let L=D[Q];v=v.concat(L)}function O(Q,ot,L){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ot,L)}let I=v.length,V=F.length;function B(Q,ot,L){let Ct,st,St,ct=Q.x-ot.x,Ut=Q.y-ot.y,yt=L.x-Q.x,A=L.y-Q.y,M=ct*ct+Ut*Ut,G=ct*A-Ut*yt;if(Math.abs(G)>Number.EPSILON){let Z=Math.sqrt(M),et=Math.sqrt(yt*yt+A*A),J=ot.x-Ut/Z,wt=ot.y+ct/Z,ft=L.x-A/et,vt=L.y+yt/et,Jt=((ft-J)*A-(vt-wt)*yt)/(ct*A-Ut*yt);Ct=J+ct*Jt-Q.x,st=wt+Ut*Jt-Q.y;let rt=Ct*Ct+st*st;if(rt<=2)return new it(Ct,st);St=Math.sqrt(rt/2)}else{let Z=!1;ct>Number.EPSILON?yt>Number.EPSILON&&(Z=!0):ct<-Number.EPSILON?yt<-Number.EPSILON&&(Z=!0):Math.sign(Ut)===Math.sign(A)&&(Z=!0),Z?(Ct=-Ut,st=ct,St=Math.sqrt(M)):(Ct=ct,st=Ut,St=Math.sqrt(M/2))}return new it(Ct/St,st/St)}let j=[];for(let Q=0,ot=T.length,L=ot-1,Ct=Q+1;Q<ot;Q++,L++,Ct++)L===ot&&(L=0),Ct===ot&&(Ct=0),j[Q]=B(T[Q],T[L],T[Ct]);let K=[],tt,Mt=j.concat();for(let Q=0,ot=D.length;Q<ot;Q++){let L=D[Q];tt=[];for(let Ct=0,st=L.length,St=st-1,ct=Ct+1;Ct<st;Ct++,St++,ct++)St===st&&(St=0),ct===st&&(ct=0),tt[Ct]=B(L[Ct],L[St],L[ct]);K.push(tt),Mt=Mt.concat(tt)}for(let Q=0;Q<m;Q++){let ot=Q/m,L=p*Math.cos(ot*Math.PI/2),Ct=g*Math.sin(ot*Math.PI/2)+_;for(let st=0,St=T.length;st<St;st++){let ct=O(T[st],j[st],Ct);lt(ct.x,ct.y,-L)}for(let st=0,St=D.length;st<St;st++){let ct=D[st];tt=K[st];for(let Ut=0,yt=ct.length;Ut<yt;Ut++){let A=O(ct[Ut],tt[Ut],Ct);lt(A.x,A.y,-L)}}}let Dt=g+_;for(let Q=0;Q<I;Q++){let ot=d?O(v[Q],Mt[Q],Dt):v[Q];x?(w.copy(N.normals[0]).multiplyScalar(ot.x),R.copy(N.binormals[0]).multiplyScalar(ot.y),C.copy(y[0]).add(w).add(R),lt(C.x,C.y,C.z)):lt(ot.x,ot.y,0)}for(let Q=1;Q<=h;Q++)for(let ot=0;ot<I;ot++){let L=d?O(v[ot],Mt[ot],Dt):v[ot];x?(w.copy(N.normals[Q]).multiplyScalar(L.x),R.copy(N.binormals[Q]).multiplyScalar(L.y),C.copy(y[Q]).add(w).add(R),lt(C.x,C.y,C.z)):lt(L.x,L.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){let ot=Q/m,L=p*Math.cos(ot*Math.PI/2),Ct=g*Math.sin(ot*Math.PI/2)+_;for(let st=0,St=T.length;st<St;st++){let ct=O(T[st],j[st],Ct);lt(ct.x,ct.y,u+L)}for(let st=0,St=D.length;st<St;st++){let ct=D[st];tt=K[st];for(let Ut=0,yt=ct.length;Ut<yt;Ut++){let A=O(ct[Ut],tt[Ut],Ct);x?lt(A.x,A.y+y[h-1].y,y[h-1].x+L):lt(A.x,A.y,u+L)}}}W(),nt();function W(){let Q=s.length/3;if(d){let ot=0,L=I*ot;for(let Ct=0;Ct<V;Ct++){let st=F[Ct];It(st[2]+L,st[1]+L,st[0]+L)}ot=h+m*2,L=I*ot;for(let Ct=0;Ct<V;Ct++){let st=F[Ct];It(st[0]+L,st[1]+L,st[2]+L)}}else{for(let ot=0;ot<V;ot++){let L=F[ot];It(L[2],L[1],L[0])}for(let ot=0;ot<V;ot++){let L=F[ot];It(L[0]+I*h,L[1]+I*h,L[2]+I*h)}}n.addGroup(Q,s.length/3-Q,0)}function nt(){let Q=s.length/3,ot=0;mt(T,ot),ot+=T.length;for(let L=0,Ct=D.length;L<Ct;L++){let st=D[L];mt(st,ot),ot+=st.length}n.addGroup(Q,s.length/3-Q,1)}function mt(Q,ot){let L=Q.length;for(;--L>=0;){let Ct=L,st=L-1;st<0&&(st=Q.length-1);for(let St=0,ct=h+m*2;St<ct;St++){let Ut=I*St,yt=I*(St+1),A=ot+Ct+Ut,M=ot+st+Ut,G=ot+st+yt,Z=ot+Ct+yt;Bt(A,M,G,Z)}}}function lt(Q,ot,L){l.push(Q),l.push(ot),l.push(L)}function It(Q,ot,L){Ft(Q),Ft(ot),Ft(L);let Ct=s.length/3,st=S.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);Qt(st[0]),Qt(st[1]),Qt(st[2])}function Bt(Q,ot,L,Ct){Ft(Q),Ft(ot),Ft(Ct),Ft(ot),Ft(L),Ft(Ct);let st=s.length/3,St=S.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);Qt(St[0]),Qt(St[1]),Qt(St[3]),Qt(St[1]),Qt(St[2]),Qt(St[3])}function Ft(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Qt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Tx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Co[s.type]().fromJSON(s)),new i(n,t.options)}},wx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new it(r,o),new it(a,l),new it(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new it(o,1-l),new it(c,1-u),new it(d,1-g),new it(_,1-f)]:[new it(a,1-l),new it(h,1-u),new it(p,1-g),new it(m,1-f)]}};function Tx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Io=class i extends rc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Lo=class i extends Ee{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,p=new P,g=new it;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let f=0;f<n;f++){let S=f+m,y=S,x=S+n+1,N=S+n+2,R=S+1;a.push(y,x,R),a.push(x,N,R)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var jt=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let S=[],y=f/n,x=0;f===0&&o===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let N=0;N<=e;N++){let R=N/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-y),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let y=h[f][S+1],x=h[f][S],N=h[f+1][S],R=h[f+1][S+1];(f!==0||o>0)&&p.push(y,x,R),(f!==n-1||l<Math.PI)&&p.push(x,N,R)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ms=class i extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,S=(s+1)*p+g;o.push(_,m,S),o.push(m,f,S)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Do=class i extends Ee{constructor(t=new Ao(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new it,h=new P,u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(p,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),S(),f()}function m(y){h=t.getPointAt(y/e,h);let x=o.normals[y],N=o.binormals[y];for(let R=0;R<=s;R++){let w=R/s*Math.PI*2,C=Math.sin(w),b=-Math.cos(w);l.x=b*x.x+C*N.x,l.y=b*x.y+C*N.y,l.z=b*x.z+C*N.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){let N=(s+1)*(y-1)+(x-1),R=(s+1)*y+(x-1),w=(s+1)*y+x,C=(s+1)*(y-1)+x;g.push(N,R,C),g.push(R,w,C)}}function S(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ue=class extends En{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Uo=class extends En{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Zr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ax(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lc=class extends gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nh,endingEnd:nh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ih:r=t,a=2*e-n;break;case sh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ih:o=t,l=2*n-e;break;case sh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let N=0;N!==a;++N)r[N]=f*o[h+N]+S*o[c+N]+y*o[l+N]+x*o[u+N];return r}},cc=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},hc=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zr(e,this.TimeBufferType),this.values=Zr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zr(t.times,Array),values:Zr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case no:e=this.InterpolantFactoryMethodDiscrete;break;case Ll:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return Ll;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ax(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ll;var Ri=class extends gn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=no;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var uc=class extends gn{};uc.prototype.ValueTypeName="color";var dc=class extends gn{};dc.prototype.ValueTypeName="number";var fc=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)bn.slerpFlat(r,0,o,c-a,o,c,l);return r}},No=class extends gn{InterpolantFactoryMethodLinear(t){return new fc(this.times,this.values,this.getValueSize(),t)}};No.prototype.ValueTypeName="quaternion";No.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends gn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=no;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends gn{};pc.prototype.ValueTypeName="vector";var mc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Rx=new mc,gc=class{constructor(t){this.manager=t!==void 0?t:Rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};gc.DEFAULT_MATERIAL_NAME="__DEFAULT";var er=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Fo=class extends er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},qa=new re,cu=new P,hu=new P,Oo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(cu),hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hu),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var uu=new re,Os=new P,Ya=new P,xc=class extends Oo{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Os.setFromMatrixPosition(t.matrixWorld),n.position.copy(Os),Ya.copy(n.position),Ya.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ya),n.updateMatrixWorld(),s.makeTranslation(-Os.x,-Os.y,-Os.z),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu)}},Bo=class extends er{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},_c=class extends Oo{constructor(){super(new po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zo=class extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new _c}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Uc="\\[\\]\\.:\\/",Cx=new RegExp("["+Uc+"]","g"),Nc="[^"+Uc+"]",Px="[^"+Uc.replace("\\.","")+"]",Ix=/((?:WC+[\/:])*)/.source.replace("WC",Nc),Lx=/(WCOD+)?/.source.replace("WCOD",Px),Dx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),Ux=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),Nx=new RegExp("^"+Ix+Lx+Dx+Ux+"$"),Fx=["material","materials","bones","map"],yc=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cx,"")}static parseTrackName(t){let e=Nx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=yc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);var Go=class extends ds{constructor(){super();let t=new Re;t.deleteAttribute("uv");let e=new ue({side:Ge}),n=new ue,s=new Bo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ht(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ht(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new ht(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new ht(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ht(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new ht(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new ht(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new ht(t,ys(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let p=new ht(t,ys(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let g=new ht(t,ys(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new ht(t,ys(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new ht(t,ys(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let f=new ht(t,ys(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ys(i){let t=new je;return t.color.setScalar(i),t}var ut=Math.PI,ne=ut*2,ve=(i,t,e)=>Math.max(t,Math.min(e,i)),ir=(i,t,e)=>i+(t-i)*e,xe=(i,t)=>1-Math.exp(-i*t),Ie=i=>(i=ve(i,0,1),i*i*(3-2*i)),qn=(i,t)=>i+Math.random()*(t-i),Qe=(i,t)=>{let e=(i-t)%ne;return e>ut&&(e-=ne),e<-ut&&(e+=ne),e},Ye=i=>({x:Math.sin(i),z:Math.cos(i)});var Xo=class{constructor(){this.solids=[],this.ramps=[]}box(t,e,n,s,r,o,a={}){let l=Object.assign({type:"box",on:!0,vy:0,delta:null,rotDelta:0,min:{x:t-s/2,y:e-r/2,z:n-o/2},max:{x:t+s/2,y:e+r/2,z:n+o/2}},a);return this.solids.push(l),l}cyl(t,e,n,s,r,o={}){let a=Object.assign({type:"cyl",on:!0,vy:0,delta:null,rotDelta:0,x:t,z:e,r:n,min:{x:t-n,y:s,z:e-n},max:{x:t+n,y:r,z:e+n}},o);return this.solids.push(a),a}ramp(t,e,n,s,r,o,a,l){let c=r==="x"?e-t:s-n,h=(l-a)/c,u=Math.hypot(h,1),d={x:0,y:1/u,z:0};d[r]=-o*h/u;let p={type:"ramp",on:!0,x0:t,x1:e,z0:n,z1:s,axis:r,dir:o,lo:a,hi:l,n:d};return this.ramps.push(p),p}moveSolid(t,e,n,s,r){t.min.x+=e,t.max.x+=e,t.min.y+=n,t.max.y+=n,t.min.z+=s,t.max.z+=s,t.type==="cyl"&&(t.x+=e,t.z+=s),t.delta={x:e,y:n,z:s},t.vy=r?n/r:0}};function hi(i,t,e,n,s,r){if(!i.on||e+r<=i.min.y||e>=i.max.y)return!1;if(i.type==="box")return t+s>i.min.x&&t-s<i.max.x&&n+s>i.min.z&&n-s<i.max.z;let o=t-i.x,a=n-i.z,l=i.r+s;return o*o+a*a<l*l}function qo(i,t,e){if(t<i.x0||t>i.x1||e<i.z0||e>i.z1)return null;let n=i.axis==="x"?t:e,s=i.axis==="x"?i.x0:i.z0,r=i.axis==="x"?i.x1:i.z1,o=(n-s)/(r-s);return i.dir<0&&(o=1-o),i.lo+(i.hi-i.lo)*o}function Bu(i,t,e){for(let n of i.solids)if(hi(n,t.pos.x,e+.001,t.pos.z,t.R,t.H))return!1;return!0}function Ou(i,t,e,n,s,r){i.pos[e]+=n;for(let o of t.solids){if(o.type!=="box"||!hi(o,i.pos.x,i.pos.y,i.pos.z,i.R,i.H))continue;let a=o.max.y-i.pos.y;if(s&&a>0&&a<=.42&&Bu(t,i,o.max.y)){i.pos.y=o.max.y;continue}let l=Math.sign(n);l===0&&(l=i.pos[e]<(o.min[e]+o.max[e])/2?1:-1),i.pos[e]=l>0?o.min[e]-i.R-1e-4:o.max[e]+i.R+1e-4,Math.sign(i.vel[e])===l&&(i.vel[e]=0),r.wall={x:e==="x"?-l:0,z:e==="z"?-l:0,s:o}}}function Ox(i,t,e,n){for(let s of t.solids){if(s.type!=="cyl"||!hi(s,i.pos.x,i.pos.y,i.pos.z,i.R,i.H))continue;let r=s.max.y-i.pos.y;if(e&&r>0&&r<=.42&&Bu(t,i,s.max.y)){i.pos.y=s.max.y;continue}let o=i.pos.x-s.x,a=i.pos.z-s.z,l=Math.hypot(o,a);l<1e-5&&(o=1,a=0,l=1);let c=o/l,h=a/l,u=s.r+i.R+1e-4;i.pos.x=s.x+c*u,i.pos.z=s.z+h*u;let d=i.vel.x*c+i.vel.z*h;d<0&&(i.vel.x-=c*d,i.vel.z-=h*d),n.wall={x:c,z:h,s}}}function Bx(i,t,e,n){let s=i.pos.y;i.pos.y+=e;for(let r of t.solids)hi(r,i.pos.x,i.pos.y,i.pos.z,i.R,i.H)&&(s+i.H*.5>=(r.min.y+r.max.y)/2||s>=r.max.y-.05?(i.pos.y=r.max.y,i.vel.y<=r.vy+.01&&(i.onGround=!0,i.ground=r,i.groundN=null,i.vel.y=0)):(i.pos.y=r.min.y-i.H,i.vel.y>0&&(i.vel.y=0),n.head=r));for(let r of t.ramps){let o=qo(r,i.pos.x,i.pos.z);o!==null&&i.pos.y<=o&&i.pos.y>o-1.2&&i.vel.y<=.01&&(i.pos.y=o,i.onGround=!0,i.ground=r,i.groundN=r.n,i.vel.y=0)}}function Fc(i,t,e,n,s=0){let r=null;for(let o of i.solids){if(!o.on||o.max.y>e+.01)continue;let a;if(o.type==="box")a=t+s>o.min.x&&t-s<o.max.x&&n+s>o.min.z&&n-s<o.max.z;else{let l=t-o.x,c=n-o.z,h=o.r+s;a=l*l+c*c<h*h}a&&(!r||o.max.y>r.y)&&(r={y:o.max.y,s:o,n:null})}for(let o of i.ramps){let a=qo(o,t,n);a!==null&&a<=e+.05&&(!r||a>r.y)&&(r={y:a,s:o,n:o.n})}return r}function sr(i,t,e,n){let s={wall:null,head:null},r=i.pos.x,o=i.pos.z;i.onGround=!1,i.ground=null,i.groundN=null,Ou(i,t,"x",i.vel.x*e,n,s),Ou(i,t,"z",i.vel.z*e,n,s),Ox(i,t,n,s);for(let a of t.ramps){let l=qo(a,i.pos.x,i.pos.z);if(l!==null)if(i.pos.y<l-.42-.05){let c=qo(a,r,o);i.pos.y+i.H>a.lo+.05&&(c===null||i.pos.y<c-.42-.05)&&(i.pos.x=r,i.pos.z=o,i.vel.x=0,i.vel.z=0)}else i.pos.y<l&&n&&(i.pos.y=l)}if(Bx(i,t,i.vel.y*e,s),!i.onGround&&n&&i.vel.y<=.01){let a=Fc(t,i.pos.x,i.pos.y,i.pos.z,i.R*.6);a&&i.pos.y-a.y<.45&&(i.pos.y=a.y,i.onGround=!0,i.ground=a.s,i.groundN=a.n,i.vel.y=0)}return s}function zu(i,t,e,n){let s=n;for(let r of i.solids){if(!r.on||r.noCam)continue;let o=0,a=s,l=!0;for(let c of["x","y","z"]){if(Math.abs(e[c])<1e-9){if(t[c]<r.min[c]||t[c]>r.max[c]){l=!1;break}continue}let h=(r.min[c]-t[c])/e[c],u=(r.max[c]-t[c])/e[c];if(h>u){let d=h;h=u,u=d}if(h>o&&(o=h),u<a&&(a=u),o>a){l=!1;break}}l&&o>0&&o<s&&(s=o)}return s}var vs=new re,zx=new bn,kx=new P,ku=new Wt,Yo=class{constructor(t){this.max=700,this.mesh=new Mo(new Io(1,1),new Uo({color:16777215,emissive:6710886}),this.max),this.mesh.instanceMatrix.setUsage(Eu),this.mesh.frustumCulled=!1,vs.makeScale(0,0,0);for(let n=0;n<this.max;n++)this.mesh.setMatrixAt(n,vs),this.mesh.setColorAt(n,ku.set(16777215));t.add(this.mesh),this.ps=Array.from({length:this.max},()=>({life:0,max:1,pos:new P,vel:new P,s0:0,s1:0,grav:0,drag:0})),this.next=0;let e=new Lo(.8,1,56);e.rotateX(-Math.PI/2),this.rings=[];for(let n=0;n<8;n++){let s=new ht(e,new je({color:16777215,transparent:!0,opacity:0,depthWrite:!1,side:sn}));s.visible=!1,t.add(s),this.rings.push({m:s,life:0,max:1,size:1})}this.ri=0}spawn(t,e,n,s,r,o,a,l,c,h,u=0,d=2){let p=this.next;this.next=(p+1)%this.max;let g=this.ps[p];g.pos.set(t,e,n),g.vel.set(s,r,o),g.life=g.max=a,g.s0=l,g.s1=c,g.grav=u,g.drag=d,this.mesh.setColorAt(p,ku.set(h)),this.mesh.instanceColor.needsUpdate=!0}dust(t,e,n,s=6,r=2,o=.22,a=16052198){for(let l=0;l<s;l++){let c=Math.random()*Math.PI*2,h=r*(.5+Math.random()*.7);this.spawn(t+Math.cos(c)*.2,e+.08,n+Math.sin(c)*.2,Math.cos(c)*h,.5+Math.random()*1.2,Math.sin(c)*h,.45+Math.random()*.3,o*(.7+Math.random()*.6),0,a,-1.5,3)}}burst(t,e,n,s,r,o,a=.12,l=.6,c=6){for(let h=0;h<s;h++){let u=Math.random()*2-1,d=Math.random()*Math.PI*2,p=Math.sqrt(1-u*u),g=r*(.4+Math.random()*.8);this.spawn(t,e,n,Math.cos(d)*p*g,u*g+r*.3,Math.sin(d)*p*g,l*(.6+Math.random()*.6),a,0,o,c,1.5)}}sparkle(t,e,n,s=10,r=16769126){this.burst(t,e,n,s,4,r,.09,.5,2)}debris(t,e,n,s,r){for(let o=0;o<s;o++){let a=Math.random()*Math.PI*2,l=2+Math.random()*4;this.spawn(t+(Math.random()-.5)*.8,e+(Math.random()-.5)*.8,n+(Math.random()-.5)*.8,Math.cos(a)*l,4+Math.random()*6,Math.sin(a)*l,.8+Math.random()*.4,.17,.12,r,26,.5)}}ring(t,e,n,s=3,r=16777215,o=.45){let a=this.rings[this.ri];this.ri=(this.ri+1)%this.rings.length,a.m.position.set(t,e+.06,n),a.m.material.color.set(r),a.life=a.max=o,a.size=s,a.m.visible=!0}update(t){for(let e=0;e<this.max;e++){let n=this.ps[e];if(n.life<=0)continue;if(n.life-=t,n.life<=0){vs.makeScale(0,0,0),this.mesh.setMatrixAt(e,vs);continue}n.vel.y-=n.grav*t,n.vel.multiplyScalar(Math.exp(-n.drag*t)),n.pos.addScaledVector(n.vel,t);let s=1-n.life/n.max,r=Math.max(1e-4,(n.s0+(n.s1-n.s0)*s)*Math.sin(Math.min(1,s*5)*Math.PI/2));vs.compose(n.pos,zx,kx.set(r,r,r)),this.mesh.setMatrixAt(e,vs)}this.mesh.instanceMatrix.needsUpdate=!0;for(let e of this.rings){if(e.life<=0)continue;e.life-=t;let n=1-Math.max(0,e.life)/e.max,s=1-(1-n)*(1-n);e.m.scale.setScalar(e.size*(.25+.75*s)),e.m.material.opacity=(1-n)*.85,e.life<=0&&(e.m.visible=!1)}}};var Le=null,Pi=null,Oc=null,Ms=!1;try{Ms=localStorage.getItem("hoplab-muted")==="1"}catch{}function Ii(){if(!Le){let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Le=new i,Pi=Le.createGain(),Pi.gain.value=Ms?0:.5;let t=Le.createDynamicsCompressor();Pi.connect(t),t.connect(Le.destination),Oc=Le.createBuffer(1,Le.sampleRate,Le.sampleRate);let e=Oc.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1}Le.state==="suspended"&&Le.resume()}var Ss=()=>Ms;function Vu(i){Ms=i,Pi&&(Pi.gain.value=i?0:.5);try{localStorage.setItem("hoplab-muted",i?"1":"0")}catch{}}function Kt(i,t,e,n="triangle",s=.15,r=0){if(!Le||Ms)return;let o=Le.currentTime+r,a=Le.createOscillator(),l=Le.createGain();a.type=n,a.frequency.setValueAtTime(i,o),t&&t!==i&&a.frequency.exponentialRampToValueAtTime(t,o+e),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(s,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l),l.connect(Pi),a.start(o),a.stop(o+e+.05)}function Be(i,t,e,n=.2,s=1,r=0,o="bandpass"){if(!Le||Ms)return;let a=Le.currentTime+r,l=Le.createBufferSource(),c=Le.createBiquadFilter(),h=Le.createGain();l.buffer=Oc,c.type=o,c.Q.value=s,c.frequency.setValueAtTime(t,a),e&&c.frequency.exponentialRampToValueAtTime(e,a+i),h.gain.setValueAtTime(n,a),h.gain.exponentialRampToValueAtTime(1e-4,a+i),l.connect(c),c.connect(h),h.connect(Pi),l.start(a,Math.random()*.5),l.stop(a+i+.05)}var Hu=0,Zo={jump(i=1){let t=[0,300,370,440][i]||300;Kt(t,t*2.1,.14,"square",.04),Kt(t*1.5,t*3,.12,"triangle",.08),i===3&&Kt(t*2,t*4,.22,"triangle",.06,.06)},bigJump(){Kt(220,880,.3,"triangle",.12),Be(.25,800,3e3,.05,1)},land(i=.5){Be(.07+i*.07,420,120,.1+i*.25,.8,0,"lowpass")},step(){let i=performance.now();i-Hu<90||(Hu=i,Be(.04,900+Math.random()*300,300,.05,1.2))},skid(){Be(.28,2600,900,.07,3)},spin(){Be(.25,600,2600,.08,2)},spinJump(){Kt(330,990,.25,"triangle",.09),Be(.4,500,3500,.07,3),[1319,1568,1976].forEach((i,t)=>Kt(i,i,.08,"sine",.03,.08+t*.06))},twirl(){Be(.5,1800,700,.08,4),Kt(880,660,.3,"sine",.04)},pound(){Kt(700,150,.22,"triangle",.08)},poundLand(){Be(.35,300,60,.6,.7,0,"lowpass"),Kt(110,45,.3,"sine",.35)},dive(){Be(.18,1200,3e3,.06,1.5),Kt(500,300,.12,"triangle",.05)},capThrow(){Be(.3,900,3e3,.07,4),Kt(900,1300,.08,"sine",.04)},capCatch(){Kt(1200,1600,.06,"sine",.05)},capBounce(){Kt(400,1100,.16,"square",.04),Kt(800,1800,.12,"triangle",.06,.03)},wallJump(){Kt(350,800,.12,"square",.04),Be(.08,2e3,800,.08,1)},grab(){Be(.06,1500,600,.1,1.5)},coin(){Kt(988,988,.07,"square",.05),Kt(1319,1319,.35,"square",.05,.07)},boing(){Kt(180,720,.35,"sine",.2),Kt(360,1440,.25,"triangle",.06)},block(){Kt(160,120,.1,"square",.07),Be(.08,500,200,.15,1)},brick(){Be(.3,1500,300,.35,.8),Kt(200,80,.15,"square",.05)},capture(){[523,659,784,1047].forEach((i,t)=>Kt(i,i*1.01,.12,"triangle",.08,t*.05)),Be(.4,400,3e3,.05,2)},release(){Kt(800,300,.18,"triangle",.08)},ouch(){Kt(500,200,.25,"square",.06)},stomp(){Kt(300,600,.08,"square",.05),Be(.1,600,200,.2,1)},checkpoint(){[659,784,988,1319].forEach((i,t)=>Kt(i,i,.14,"square",.04,t*.08))},pipe(){[0,1,2].forEach(i=>Kt(420-i*80,320-i*70,.08,"square",.05,i*.09))},moon(){[523,659,784,1047,784,1047,1319].forEach((i,t)=>{Kt(i,i,.22,"triangle",.1,t*.11),Kt(i*2,i*2,.18,"sine",.035,t*.11)})},moonAppear(){[784,988,1175,1568].forEach((i,t)=>Kt(i,i,.12,"sine",.08,t*.06))},tick(i){let t=i?1400:1e3;Kt(t,t,.05,"square",.04)},zap(){Be(.25,3e3,6e3,.06,5),Kt(80,160,.3,"sawtooth",.04)},stack(){Kt(600,900,.1,"square",.05)},hop(){Kt(250,500,.08,"triangle",.06)},croak(){Kt(150,90,.18,"sawtooth",.05)},love(){[880,1109,1319].forEach((i,t)=>Kt(i,i,.18,"sine",.08,t*.1))}};function Wu(){let i=h=>document.getElementById(h),t=i("toast"),e=i("banner"),n=i("bannerName"),s=i("prompt"),r=i("timer"),o=null,a=null,l=0,c=h=>{h.classList.remove("bump"),h.offsetWidth,h.classList.add("bump")};return{toast(h){t.textContent=h,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")},setMoons(h,u){i("moonCount").textContent=h+" / "+u,h&&c(i("moonPill"))},setCoins(h){i("coinCount").textContent=h,c(i("coinPill"))},banner(h){n.textContent=h,e.hidden=!1,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),clearTimeout(l),l=setTimeout(()=>{e.hidden=!0},2700)},prompt(h){h!==o&&(o=h,s.hidden=!h,s.textContent=h||"")},timer(h){let u=h==null?null:Math.ceil(h);u!==a&&(a=u,r.hidden=u===null,u!==null&&(r.textContent=u,r.classList.toggle("warn",u<=3),c(r)))}}}var Gu=["Space"],Xu=["ShiftLeft","ShiftRight","KeyC"],qu=["KeyE","KeyJ","KeyF"],Jo=(i,t=.18)=>Math.abs(i)<t?0:(i-Math.sign(i)*t)/(1-t);function Yu(i,t,e){let n={mx:0,my:0,camDX:0,camDY:0,padRX:0,padRY:0,jump:!1,crouch:!1,cap:!1,locked:!1},s=new Set,r={jump:!1,crouch:!1,cap:!1},o={x:0,y:0,jump:!1,crouch:!1,cap:!1},a={},l=!1,c=0,h=null,u=0,d=U=>{Ii(),e(U)};addEventListener("keydown",U=>{if(U.code==="KeyH"||U.code==="Slash"||U.code==="Escape"&&!n.locked){U.repeat||d("menu");return}i.paused||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(U.code)&&U.preventDefault(),!U.repeat&&(s.add(U.code),Gu.includes(U.code)&&(r.jump=!0,d("jump")),Xu.includes(U.code)&&(r.crouch=!0,d("crouch")),qu.includes(U.code)&&(r.cap=!0,d("cap")),U.code==="KeyQ"&&d("spin"),U.code==="KeyR"&&d("restart"),U.code==="KeyM"&&d("mute")))}),addEventListener("keyup",U=>{s.delete(U.code),Gu.includes(U.code)&&(r.jump=!1),Xu.includes(U.code)&&(r.crouch=!1),qu.includes(U.code)&&(r.cap=!1)}),addEventListener("blur",()=>{s.clear(),r.jump=r.crouch=r.cap=!1,l=!1});let p=null,g=0,_=0;t.addEventListener("pointerdown",U=>{if(Ii(),!i.paused){if(U.pointerType==="mouse"){if(n.locked){U.button===0&&(l=!0,d("cap"));return}if(t.requestPointerLock)try{let F=t.requestPointerLock();F&&F.catch&&F.catch(()=>{})}catch{}}p===null&&(p=U.pointerId,t.setPointerCapture(U.pointerId),g=U.clientX,_=U.clientY)}}),t.addEventListener("pointermove",U=>{if(U.pointerId!==p||n.locked)return;let F=U.pointerType==="touch"?1.6:1;n.camDX+=(U.clientX-g)*F,n.camDY+=(U.clientY-_)*F,g=U.clientX,_=U.clientY});let m=U=>{U.pointerId===p&&(p=null),U.button===0&&(l=!1)};t.addEventListener("pointerup",m),t.addEventListener("pointercancel",m),addEventListener("mouseup",U=>{U.button===0&&(l=!1)}),addEventListener("mousemove",U=>{n.locked&&(n.camDX+=U.movementX,n.camDY+=U.movementY)}),document.addEventListener("pointerlockchange",()=>{n.locked=document.pointerLockElement===t,i.onLockChange&&i.onLockChange(n.locked)}),t.addEventListener("contextmenu",U=>U.preventDefault());function f(U,F){let T=document.getElementById(U);T.addEventListener("pointerdown",I=>{I.preventDefault(),T.setPointerCapture(I.pointerId),o[F]=!0,T.classList.add("on"),d(F)});let O=()=>{o[F]=!1,T.classList.remove("on")};T.addEventListener("pointerup",O),T.addEventListener("pointercancel",O),T.addEventListener("contextmenu",I=>I.preventDefault())}f("bJump","jump"),f("bCrouch","crouch"),f("bCap","cap");let S=document.getElementById("stickZone"),y=document.getElementById("stick"),x=document.getElementById("knob"),N=document.getElementById("stickHint"),R=null,w=0,C=0;function b(U){let F=U.clientX-w,T=U.clientY-C,O=Math.hypot(F,T),I=50;O>I&&(F*=I/O,T*=I/O),x.style.transform="translate("+F+"px,"+T+"px)",o.x=F/I,o.y=-T/I}S.addEventListener("pointerdown",U=>{Ii(),R===null&&(R=U.pointerId,S.setPointerCapture(U.pointerId),w=U.clientX,C=U.clientY,y.style.left=w+"px",y.style.top=C+"px",y.style.display="block",N.style.display="none",b(U))}),S.addEventListener("pointermove",U=>{U.pointerId===R&&b(U)});let v=U=>{U.pointerId===R&&(R=null,o.x=o.y=0,y.style.display="none",x.style.transform="")};S.addEventListener("pointerup",v),S.addEventListener("pointercancel",v);function D(U=1/60){let F=0,T=0,O=!1,I=!1,V=!1;n.padRX=n.padRY=0;let B=navigator.getGamepads?navigator.getGamepads():[],j=null;for(let W of B)if(W&&W.connected){j=W;break}if(j){let W=mt=>!!(j.buttons[mt]&&j.buttons[mt].pressed);F=Jo(j.axes[0]||0),T=-Jo(j.axes[1]||0),n.padRX=Jo(j.axes[2]||0),n.padRY=Jo(j.axes[3]||0),W(12)&&(T=1),W(13)&&(T=-1),W(14)&&(F=-1),W(15)&&(F=1),O=W(0)||W(1),V=W(2)||W(3),I=W(4)||W(5)||W(6)||W(7);let nt={jump:O,cap:V,crouch:I,restart:W(8),menu:W(9),spin:W(10)||W(11)};for(let mt in nt)nt[mt]&&!a[mt]&&(i.paused?(mt==="menu"||mt==="jump")&&d("menu"):d(mt)),a[mt]=nt[mt]}let K=W=>s.has(W)?1:0,tt=K("KeyD")+K("ArrowRight")-K("KeyA")-K("ArrowLeft")+o.x+F,Mt=K("KeyW")+K("ArrowUp")-K("KeyS")-K("ArrowDown")+o.y+T,Dt=Math.hypot(tt,Mt);if(Dt>1&&(tt/=Dt,Mt/=Dt),n.mx=tt,n.my=Mt,Math.hypot(tt,Mt)>.6){let W=Math.atan2(tt,Mt);if(h!==null){let nt=W-h;nt>Math.PI&&(nt-=Math.PI*2),nt<-Math.PI&&(nt+=Math.PI*2),nt&&Math.sign(nt)!==Math.sign(c)&&Math.abs(c)>.5&&(c*=.3),c+=nt}h=W}else h=null;c*=Math.exp(-1*U),u-=U,Math.abs(c)>4.8&&u<=0&&(c=0,u=.5,i.paused||d("spin")),n.jump=r.jump||o.jump||O,n.crouch=r.crouch||o.crouch||I,n.cap=r.cap||o.cap||V||l}return{st:n,poll:D,keys:s}}var Bc=.82,Hx=["pitch","roll","y","spine","headX","headY","lArmX","lArmZ","lElbow","rArmX","rArmZ","rElbow","lLegX","lLegZ","lKnee","rLegX","rLegZ","rKnee"],zc={pitch:0,roll:0,y:0,spine:0,headX:0,headY:0,lArmX:.05,lArmZ:.14,lElbow:.3,rArmX:.05,rArmZ:.14,rElbow:.3,lLegX:0,lLegZ:.03,lKnee:.08,rLegX:0,rLegZ:.03,rKnee:.08},Lt=(i,t={})=>new ue({color:i,roughness:.5,metalness:0,...t});function Ae(i,t,e,n=0,s=0,r=0){let o=new ht(i,t);return o.position.set(n,s,r),o.castShadow=!0,e.add(o),o}function rr(i=!0){let t=new Zt,e=Lt(16764735,{roughness:.42}),n=Lt(14702171,{roughness:.5});if(Ae(new he(.47,.49,.06,36),e,t),Ae(new he(.28,.31,.32,32),e,t,0,.18,0),Ae(new jt(.28,32,12,0,ne,0,ut/2),e,t,0,.34,0).scale.y=.6,Ae(new he(.316,.316,.08,32),n,t,0,.07,0),i){let s=Lt(16777215,{roughness:.2}),r=Lt(1318970,{roughness:.2});for(let o of[-1,1]){let a=Ae(new jt(.07,16,12),s,t,o*.1,.22,.27);a.scale.set(.85,1.3,.5),Ae(new jt(.035,10,8),r,a,0,-.01,.07).scale.set(1,1,.6)}}return t}var Ko=class{constructor(){let t=Lt(2275492,{roughness:.62}),e=Lt(13039082,{roughness:.65}),n=Lt(16777215,{roughness:.4}),s=Lt(2832999,{roughness:.32}),r=Lt(16777215,{roughness:.18}),o=Lt(1318970,{roughness:.2}),a=Lt(16748451,{roughness:.8});this.root=new Zt,this.squashG=new Zt,this.root.add(this.squashG),this.pivot=new Zt,this.pivot.position.y=Bc,this.pivot.rotation.order="YXZ",this.squashG.add(this.pivot);let l=new Zt;l.position.y=-Bc,this.pivot.add(l);let c=this.hips=new Zt;c.position.y=.69,l.add(c),Ae(new jt(.24,24,16),t,c,0,.02,0).scale.set(1.08,.85,.95);let h=this.spine=new Zt;c.add(h),Ae(new ci(.255,.22,8,20),t,h,0,.25,0),Ae(new jt(.2,20,14),e,h,0,.2,.1).scale.set(1,1.1,.72);let u=this.head=new Zt;u.position.y=.5,h.add(u),Ae(new jt(.31,32,22),t,u,0,.22,0),this.eyes=[];for(let d of[-1,1]){let p=new Zt;p.position.set(d*.11,.27,.255),p.rotation.y=d*.25,u.add(p),Ae(new jt(.085,18,14),r,p).scale.set(.8,1.3,.55),Ae(new jt(.046,14,10),o,p,0,-.005,.04).scale.set(.9,1.3,.6),Ae(new jt(.014,8,6),r,p,d*.012,.03,.07),this.eyes.push(p),Ae(new jt(.06,12,8),a,u,d*.2,.13,.22).scale.set(1,.6,.4)}this.hat=rr(!0),this.hat.position.set(0,.38,-.02),this.hat.rotation.x=-.14,this.hat.scale.setScalar(.78),u.add(this.hat),this.arms={},this.legs={};for(let[d,p]of[["l",1],["r",-1]]){let g=new Zt;g.position.set(p*.3,.4,0),g.rotation.order="ZXY",h.add(g),Ae(new ci(.072,.15,6,12),t,g,0,-.11,0);let _=new Zt;_.position.y=-.23,g.add(_),Ae(new ci(.066,.12,6,12),t,_,0,-.09,0),Ae(new jt(.105,16,12),n,_,0,-.21,.01).scale.set(1,1.05,.9),this.arms[d]={sh:g,el:_};let m=new Zt;m.position.set(p*.13,-.03,0),m.rotation.order="ZXY",c.add(m),Ae(new ci(.088,.15,6,12),t,m,0,-.13,0);let f=new Zt;f.position.y=-.28,m.add(f),Ae(new ci(.08,.13,6,12),t,f,0,-.11,0);let S=new Zt;S.position.y=-.27,f.add(S),Ae(new jt(.13,18,12),s,S,0,-.03,.07).scale.set(.95,.62,1.45),this.legs[d]={hip:m,kn:f,ft:S}}this.cur={...zc},this.tgt={...zc},this.fp=0,this.fy=0,this.phase=0,this.stepSign=!0,this.rollVis=0,this.sq=0,this.sqv=0,this.yaw=0,this.blinkT=2,this.blink=0,this.spinA=0,this.hatPop=0,this.onStep=null}apply(){let t=this.cur,e=this.arms,n=this.legs;this.pivot.position.y=Bc+t.y,this.pivot.rotation.set(t.pitch+this.fp,this.fy,t.roll),this.spine.rotation.x=t.spine,this.head.rotation.set(t.headX,t.headY,0),e.l.sh.rotation.set(-t.lArmX,0,t.lArmZ),e.l.el.rotation.x=-t.lElbow,e.r.sh.rotation.set(-t.rArmX,0,-t.rArmZ),e.r.el.rotation.x=-t.rElbow,n.l.hip.rotation.set(-t.lLegX,0,t.lLegZ),n.l.kn.rotation.x=t.lKnee,n.l.ft.rotation.x=(t.lLegX-t.lKnee)*.8,n.r.hip.rotation.set(-t.rLegX,0,-t.rLegZ),n.r.kn.rotation.x=t.rKnee,n.r.ft.rotation.x=(t.rLegX-t.rKnee)*.8;let s=this.sq;this.squashG.scale.set(1+s*.45,1-s,1+s*.45)}animate(t,e,n,s){let r=this.tgt;Object.assign(r,zc);let o=14,a=null,l=null,c=t.state,h=t.hs,u=t.vel.y,d=ve(h/9.5,0,1),p=(x=1)=>{r.lLegX=r.rLegX=1.5*x,r.lKnee=r.rKnee=2.3*x,r.lArmX=r.rArmX=1*x,r.lElbow=r.rElbow=2*x,r.lArmZ=r.rArmZ=.35,r.spine=.5*x,r.headX=.3*x},g=(x=1)=>{r.y=-.3*x,r.lLegX=r.rLegX=1.1*x,r.lKnee=r.rKnee=2*x,r.pitch=.22*x,r.spine=.25*x,r.lArmX=r.rArmX=.5*x,r.lElbow=r.rElbow=1.2*x,r.headX=-.2*x},_=()=>{r.lArmZ=r.rArmZ=1.35,r.lArmX=r.rArmX=.35,r.lElbow=r.rElbow=.25,r.lLegZ=r.rLegZ=.35,r.lLegX=.3,r.rLegX=-.2,r.lKnee=.5,r.rKnee=.4,r.headX=-.15},m=()=>{let x=Math.sin(n*13)*.12;r.lArmZ=.95+x,r.rArmZ=.95-x,r.lArmX=r.rArmX=.5,r.lElbow=r.rElbow=.6,r.lLegX=.4,r.lKnee=.7,r.rLegX=-.1,r.rKnee=.45,r.headX=.15};switch(c){case"ground":{if(h>.4){let x=.95+d*.85;this.phase+=h*e/x*ut;let N=Math.sin(this.phase),R=Math.cos(this.phase),w=.35+.75*d;r.lLegX=N*w,r.rLegX=-N*w,r.lKnee=.15+Math.max(0,R)*(.5+d),r.rKnee=.15+Math.max(0,-R)*(.5+d),r.lArmX=-N*w*.85,r.rArmX=N*w*.85,r.lElbow=r.rElbow=.5+.7*d,r.lArmZ=r.rArmZ=.18,r.pitch=.08+.2*d,r.spine=.05*d,r.headX=-.12*d,r.y=(Math.abs(R)*.07-.035)*(.4+d),r.roll=ve(-t.turnRate*.05*d,-.4,.4),r.headY=ve(t.turnRate*.05,-.5,.5);let C=N>=0;C!==this.stepSign&&(this.stepSign=C,this.onStep&&this.onStep(d)),o=20}else{let x=Math.sin(n*2.4);r.y=x*.008,r.spine=.03+x*.02,r.lArmZ=r.rArmZ=.16+x*.03,r.headY=Math.sin(n*.6)*.28,r.headX=Math.sin(n*.37)*.07,r.lLegZ=r.rLegZ=.06,o=10}if(t.spinBuf>0&&(l=Ie(1-t.spinBuf/.45)*ne,r.lArmZ=r.rArmZ=1.2,r.lArmX=r.rArmX=.2),t.landT<.16){let x=1-t.landT/.16;r.lKnee+=.9*x,r.rKnee+=.9*x,r.lLegX+=.45*x,r.rLegX+=.45*x,r.y-=.13*x,r.lArmZ+=.45*x,r.rArmZ+=.45*x,o=30}break}case"crouch":{if(g(1),h>.3){this.phase+=h*e*3;let x=Math.sin(this.phase);r.lLegX+=x*.3,r.rLegX-=x*.3}o=18;break}case"skid":{let x=Math.sin(n*28)*.25;r.pitch=-.42,r.y=-.08,r.lLegX=.75,r.lKnee=.25,r.rLegX=.35,r.rKnee=.55,r.lArmX=1.1+x,r.rArmX=1.1-x,r.lArmZ=r.rArmZ=.75,r.headX=.2,o=22;break}case"air":case"launch":case"gpjump":case"capbounce":{if(o=12,c==="launch")l=Ie(t.flipT/.7)*ne*2,r.lArmX=r.rArmX=2.6,r.lArmZ=r.rArmZ=.75,r.lElbow=r.rElbow=.2,r.lLegX=.2,r.rLegX=-.1,r.lKnee=r.rKnee=.35,u<-2&&m();else if(c==="capbounce")l=Ie(t.flipT/.5)*ne,_(),r.lArmX=r.rArmX=1.2;else if(c==="gpjump")l=Ie(t.flipT/.55)*ne,r.lArmX=r.rArmX=2.85,r.lArmZ=r.rArmZ=.45,r.lElbow=r.rElbow=.08,r.lLegX=r.rLegX=.05,r.lKnee=r.rKnee=.1,r.headX=-.2,u<-4&&m();else if(t.anim==="triple"){let x=t.flipT/.62;x<1?(p(1),a=Ie(x)*ne,o=24):(_(),u<-6&&m())}else u>1?t.jumpCount===2?(_(),r.lArmX=r.rArmX=.7,r.lLegX=.8,r.lKnee=1,r.rLegX=-.45,r.rKnee=.7,r.spine=-.1):(r.rArmX=2.65,r.rArmZ=.5,r.rElbow=.3,r.lArmX=-.5,r.lArmZ=.45,r.lElbow=.5,r.lLegX=.95,r.lKnee=1.45,r.rLegX=-.25,r.rKnee=.5,r.pitch=.06,r.headX=-.15):m();break}case"twirl":case"spinjump":{this.spinA+=e*ne*(c==="twirl"?3.4:2.4),l=this.spinA,r.lArmZ=r.rArmZ=1.45,r.lArmX=r.rArmX=.25,r.lElbow=r.rElbow=.15,r.lLegX=.2,r.rLegX=.05,r.lKnee=.35,r.rKnee=.2,r.lLegZ=r.rLegZ=.02,r.headX=-.1,r.y=.04,o=20;break}case"longjump":r.pitch=1.2,r.y=.1,r.lArmX=r.rArmX=2.9,r.lArmZ=r.rArmZ=.25,r.lElbow=r.rElbow=.15,r.lLegX=-.2,r.rLegX=-.45,r.lKnee=.55,r.rKnee=.3,r.headX=-.9,o=16;break;case"dive":r.pitch=1.45,r.lArmX=r.rArmX=3,r.lArmZ=r.rArmZ=.18,r.lElbow=r.rElbow=.05,r.lLegX=r.rLegX=-.3,r.lKnee=r.rKnee=.2,r.lLegZ=r.rLegZ=.12,r.headX=-1,o=18;break;case"diveSlide":r.pitch=1.52,r.y=-.52,r.lArmX=r.rArmX=3,r.lArmZ=r.rArmZ=.3,r.lElbow=r.rElbow=.1,r.lLegX=r.rLegX=-.25,r.lKnee=.6,r.rKnee=.3,r.headX=-1.1,o=18;break;case"backflip":{let x=t.flipT/.72;x<1?(p(.9),a=-Ie(x)*ne,o=22):(_(),u<-4&&m());break}case"sideflip":{let x=t.flipT/.62;l=Ie(x)*ne*t.sideDir,_(),r.lArmX=r.rArmX=.2,r.lLegZ=.55,r.rLegX=.7,r.rKnee=1.3,r.roll=.15*t.sideDir,x>1&&u<-4&&m(),o=18;break}case"gpWind":{p(1),a=Ie(t.t/.24)*ne,o=30;break}case"gpFall":p(.85),r.spine=.2,r.lArmX=r.rArmX=.2,r.lArmZ=r.rArmZ=.75,r.lElbow=r.rElbow=1.6,r.lKnee=r.rKnee=2.2,o=26;break;case"gpLand":g(1.1),r.lArmZ=r.rArmZ=1.3,r.lArmX=r.rArmX=.2,r.lElbow=r.rElbow=.3,o=26;break;case"roll":p(1),r.y=-.36,this.rollVis+=t.rollSpeed*e*2.6,a=this.rollVis,o=30;break;case"wall":r.pitch=-.1,r.rArmX=2.6,r.rArmZ=.3,r.rElbow=.5,r.lArmX=.4,r.lArmZ=.95,r.lElbow=.4,r.lLegX=.6,r.lKnee=1,r.rLegX=.1,r.rKnee=.3,r.headX=.25,o=18;break;case"ledge":{let x=t.shimmy?Math.sin(n*12)*.18:0;r.lArmX=2.95+x,r.rArmX=2.95-x,r.lArmZ=r.rArmZ=.22,r.lElbow=r.rElbow=.25,r.lLegX=.2-x,r.lKnee=.35,r.rLegX=-.05+x,r.rKnee=.2,r.pitch=.05,r.headX=-.3,r.y=Math.sin(n*3)*.01,o=18;break}case"climb":{let x=ve(t.t/.3,0,1);r.lArmX=r.rArmX=ir(2.9,.4,x),r.lElbow=r.rElbow=ir(.3,1.2,Math.sin(x*ut)),r.lLegX=1.4*Math.sin(x*ut),r.lKnee=1.8*Math.sin(x*ut),r.rLegX=.3,r.rKnee=.6,r.pitch=.5*Math.sin(x*ut),o=26;break}case"hurt":{let x=Math.sin(n*22)*.35;r.pitch=-.55,r.lArmZ=1.2+x,r.rArmZ=1.2-x,r.lArmX=r.rArmX=1.4,r.lLegX=.6,r.lKnee=.9,r.rLegX=.3,r.rKnee=.6,r.headX=-.3,o=18;break}case"moonGet":{let x=t.t;x<.45&&(l=Ie(x/.45)*ne),r.lArmX=r.rArmX=2.5,r.lArmZ=r.rArmZ=.95,r.lElbow=r.rElbow=.15,r.lLegZ=r.rLegZ=.18,r.headX=-.3,r.spine=-.12,r.y=.03,o=16;break}default:break}if(t.throwT<.22&&["ground","air","crouch","launch","sideflip","capbounce"].includes(c)){let x=t.throwT/.22;r.rArmX=ir(-1.1,1.9,Ie(x)),r.rArmZ=ir(1,.4,x),r.rElbow=.25,r.spine+=Math.sin(x*ut)*.15,c!=="ground"&&c!=="crouch"&&l===null&&(l=Ie(x)*ne),o=Math.max(o,28)}let f=xe(o,e);for(let x of Hx)this.cur[x]+=(r[x]-this.cur[x])*f;a!==null?this.fp=a:(this.fp=Qe(this.fp,0),this.fp*=1-xe(16,e)),l!==null?this.fy=l:(this.fy=Qe(this.fy,0),this.fy*=1-xe(16,e)),t.squash&&(this.sqv+=t.squash*9,t.squash=0),this.sqv+=(-260*this.sq-15*this.sqv)*e,this.sq=ve(this.sq+this.sqv*e,-.35,.55),this.blinkT-=e,this.blinkT<0&&(this.blink=.13,this.blinkT=2+Math.random()*3.5),this.blink-=e;let S=this.blink>0?.12:1;for(let x of this.eyes)x.scale.y=S;this.hatPop=Math.max(0,this.hatPop-e*3.5);let y=this.hatPop;this.hat.scale.set(.78*(1+Math.sin(y*ut*3)*y*.35),.78*(1-Math.sin(y*ut*3)*y*.3),.78*(1+Math.sin(y*ut*3)*y*.35)),this.yaw+=Qe(t.facing,this.yaw)*xe(c==="ground"?26:40,e),this.root.rotation.y=this.yaw,this.apply()}};var Me={G:34,FALL:34,RUN:9.5,ACC:40,DEC:44,R:.36,H:1.6,JB:.14},Zu=[0,11.5,13.5,17],Ju=new Set(["ground","crouch","skid","gpLand","roll","diveSlide"]),Vx=new Set(["air","longjump","backflip","sideflip","capbounce","gpjump","launch","twirl","spinjump"]),Wx=new Set(["air","backflip","sideflip","capbounce","gpjump","launch","longjump","twirl","spinjump"]),Gx=new Set(["air","backflip","sideflip","capbounce","gpjump","launch","longjump"]),Ku=new Set(["air","longjump","backflip","sideflip","dive","gpjump","capbounce","launch","twirl","spinjump"]),kc=new Set(["capture","pipe","moonGet","ledge","climb"]);function $u(i,t){return{pos:i.clone(),vel:new P,facing:t,state:"air",t:0,flipT:0,g:Me.G,R:Me.R,H:Me.H,onGround:!1,ground:null,groundN:null,coyote:0,chain:0,jumpCount:0,lastJump:"",anim:"",variable:!1,capThrown:!1,capBounced:!1,diveUsed:!1,wallN:null,skidDir:0,sideDir:1,rollSpeed:0,squash:0,ledge:null,ledgeCD:0,climb:null,capture:null,captureCD:0,invuln:0,throwT:9,hs:0,turnRate:0,landT:9,jumpBuf:0,crouchBuf:0,capBuf:0,spinBuf:0,crouchTap:0,twirlUsed:!1,pipe:null,shimmy:0,airT:0}}function ju(i){let t=i.P,e=i.input.st,n=T=>{t.state=T,t.t=0};function s(T,O,I,V){let B=T-t.vel.x,j=O-t.vel.z,K=Math.hypot(B,j),tt=I*V;K<=tt?(t.vel.x=T,t.vel.z=O):(t.vel.x+=B/K*tt,t.vel.z+=j/K*tt)}function r(T,O,I){let V=Qe(T,t.facing),B=O*I;t.facing+=Math.abs(V)<B?V:Math.sign(V)*B}function o(T){T==="jump"&&(t.jumpBuf=Me.JB),T==="crouch"&&(t.crouchBuf=.12,t.crouchTap=.3),T==="cap"&&(t.capBuf=.12),T==="spin"&&(t.spinBuf=.45)}function a(T,O,I,V,B){t.vel.y=T,n(O),t.flipT=0,t.onGround=!1,t.ground=null,t.coyote=0,t.jumpBuf=0,t.crouchBuf=0,t.variable=V,t.lastJump=B||"",t.anim="",t.squash-=.28,I&&i.hud.toast(I),i.fx.dust(t.pos.x,t.pos.y,t.pos.z,5,1.6,.2)}function l(T){t.vel.y=T,n("launch"),t.flipT=0,t.variable=!1,t.onGround=!1,t.ground=null,t.coyote=0,t.capThrown=!1,t.capBounced=!1,t.diveUsed=!1,t.jumpCount=0,t.lastJump="",t.anim="",t.jumpBuf=0,t.squash-=.35}function c(T){t.vel.y=T,n("air"),t.flipT=0,t.variable=!0,t.onGround=!1,t.ground=null,t.capThrown=!1,t.diveUsed=!1,t.lastJump="",t.anim="",t.jumpCount=1,t.squash-=.25}function h(){t.vel.y=13.5,n("capbounce"),t.flipT=0,t.variable=!1,t.capBounced=!0,t.diveUsed=!1,t.capThrown=!1,t.twirlUsed=!1,t.squash-=.3,i.hud.toast("Cap jump"),i.sfx.capBounce(),i.fx.sparkle(t.pos.x,t.pos.y+.6,t.pos.z,12,16773800)}function u(T,O="Roll"){t.capBuf=0,t.crouchTap=0,i.W&&(t.facing=Math.atan2(i.W.x,i.W.z)),t.rollSpeed=T,n("roll"),i.hud.toast(O),i.sfx.spin(),i.fx.dust(t.pos.x,t.pos.y,t.pos.z,6,2.5,.22)}function d(){let T=t.spinBuf>0;return i.cap.throw(T?"spin":"normal")?(t.capBuf=0,t.throwT=0,T&&(t.spinBuf=0,i.hud.toast("Spin throw")),!0):!1}function p(){i.W&&(t.facing=Math.atan2(i.W.x,i.W.z));let T=Ye(t.facing);t.vel.set(T.x*13,7,T.z*13),n("dive"),t.diveUsed=!0,t.variable=!1,t.anim="",i.hud.toast("Dive"),i.sfx.dive()}function g(T,O){if(t.invuln>0||kc.has(t.state)||t.state==="hurt")return;let I=t.pos.x-T,V=t.pos.z-O,B=Math.hypot(I,V)||1;I/=B,V/=B,t.vel.set(I*7,8,V*7),t.facing=Math.atan2(-I,-V),n("hurt"),t.invuln=1.6,t.onGround=!1,t.ground=null,t.variable=!1,i.sfx.ouch(),i.camRig.addShake(.25),i.hud.toast("Ouch!")}function _(T){t.capture&&S(!0);let O=T||i.spawn;t.pos.copy(O.pos),t.vel.set(0,0,0),t.facing=O.facing,n("air"),t.R=Me.R,t.H=Me.H,t.ledge=null,t.pipe=null,t.invuln=0,i.cap.reset(),i.camRig.snap(O.facing+ut)}function m(){n("moonGet"),t.vel.set(0,0,0),t.facing=i.camRig.yaw,t.ledge=null,t.climb=null}function f(T){return t.captureCD>0||kc.has(t.state)?!1:(n("capture"),t.capture=T,t.pos.copy(T.pos),t.vel.set(0,0,0),t.facing=T.facing,t.R=T.R,t.H=T.H,t.onGround=!1,t.ground=null,t.ledge=null,i.cap.reset(),T.onCapture(i),i.fx.burst(T.pos.x,T.pos.y+T.H*.6,T.pos.z,26,5,16769658,.11,.6,3),i.sfx.capture(),i.hud.toast(T.name),!0)}function S(T){let O=t.capture;if(!O)return;t.capture=null;let I=O.release(i)||0;t.R=Me.R,t.H=Me.H,n("air"),t.variable=!1,t.onGround=!1,t.ground=null,t.pos.y+=I;let V=Ye(t.facing);O.releaseVel?t.vel.copy(O.releaseVel):t.vel.set(-V.x*3,10,-V.z*3),t.captureCD=.8,t.capThrown=!1,t.diveUsed=!1,t.jumpCount=0,T||(i.sfx.release(),i.fx.burst(t.pos.x,t.pos.y+.8,t.pos.z,16,4,16769658,.1,.5,3))}function y(T){let O=t.crouchBuf>0;t.coyote=.1,t.g=Me.G,t.crouchBuf=0,t.airT=0;let I=i.W,V=t.state,B=t.hs,j=t.groundN;if((V==="ground"||V==="skid")&&t.jumpBuf>0&&t.spinBuf>0&&!e.crouch){t.spinBuf=0,t.jumpCount=0,a(14+B*.05,"spinjump","Spin jump",!1),i.sfx.spinJump();return}if(V==="gpLand"){if(s(0,0,80,T),t.jumpBuf>0){a(18,"gpjump","Ground pound jump",!1),i.sfx.bigJump();return}if(t.capBuf>0){u(15,"Ground pound roll");return}t.t>.25&&n(e.crouch?"crouch":"ground");return}if(V==="diveSlide"){if(s(0,0,12,T),t.jumpBuf>0||t.capBuf>0){t.capBuf=0;let tt=Ye(t.facing),Mt=Math.max(B,5);t.vel.x=tt.x*Mt,t.vel.z=tt.z*Mt,a(10,"air","Roll out",!1),i.sfx.jump(1);return}B<1&&t.t>.3&&n("ground");return}if(V==="roll"){t.capBuf>0&&(t.capBuf=0,t.rollSpeed=Math.min(t.rollSpeed+5,22),t.t=0,i.hud.toast("Roll boost"),i.sfx.spin(),i.fx.dust(t.pos.x,t.pos.y,t.pos.z,8,3,.25)),I&&r(Math.atan2(I.x,I.z),3.2,T);let tt=5;if(j){let Dt=Ye(t.facing),W=Dt.x*j.x+Dt.z*j.z;t.rollSpeed+=W*60*T,W>.05&&(tt=0)}t.rollSpeed=ve(t.rollSpeed-tt*T,0,26);let Mt=Ye(t.facing);if(t.vel.x=Mt.x*t.rollSpeed,t.vel.z=Mt.z*t.rollSpeed,t.jumpBuf>0){a(10.5,"air","Roll jump",!0),i.sfx.jump(2);return}(t.t>.6&&!e.crouch||t.rollSpeed<3)&&n(e.crouch?"crouch":"ground");return}if(V==="skid"){if(s(0,0,55,T),t.jumpBuf>0){t.sideDir=Qe(t.skidDir,t.facing)>0?1:-1,t.facing=t.skidDir;let tt=Ye(t.facing);t.vel.x=tt.x*4.5,t.vel.z=tt.z*4.5,a(17,"sideflip","Side flip",!1),i.sfx.jump(3);return}(t.t>.32||B<.5)&&(t.facing=t.skidDir,n("ground"));return}let K=t.ground&&t.ground.pipe;if(O&&K&&K.link&&Math.hypot(t.pos.x-K.x,t.pos.z-K.z)<.9){C(K);return}if(e.crouch){V!=="crouch"&&n("crouch");let tt=I?I.x*2.8*I.mag:0,Mt=I?I.z*2.8*I.mag:0;if(s(tt,Mt,B>3?14:30,T),I&&B<3&&r(Math.atan2(I.x,I.z),10,T),t.jumpBuf>0){let Dt=Ye(t.facing);if(B>3.5){let W=ve(B*1.3,14,17);t.vel.x=Dt.x*W,t.vel.z=Dt.z*W,a(8.5,"longjump","Long jump",!1),i.sfx.jump(2)}else t.vel.x=-Dt.x*2.8,t.vel.z=-Dt.z*2.8,a(18.5,"backflip","Backflip",!1),i.sfx.jump(3);return}t.capBuf>0&&u(Math.max(B,13));return}if(V==="crouch"&&n("ground"),t.capBuf>0&&t.crouchTap>0){u(Math.max(B,13));return}if(I&&B>5.5&&t.spinBuf<=0&&(t.vel.x*I.x+t.vel.z*I.z)/B<-.6){t.skidDir=Math.atan2(I.x,I.z),n("skid"),i.sfx.skid();return}if(I){r(Math.atan2(I.x,I.z),B>7?7.5:B>3?13:24,T);let tt=Ye(t.facing),Mt=Me.RUN*I.mag;j&&(Mt*=1-Math.max(0,-(tt.x*j.x+tt.z*j.z))*.8);let Dt=B<3?70:Me.ACC,W=B<Mt?Math.min(Mt,B+Dt*T):Math.max(Mt,B-Me.DEC*T);t.vel.x=tt.x*W,t.vel.z=tt.z*W}else s(0,0,Me.DEC,T);if(t.jumpBuf>0){let tt=t.chain>0&&B>3?t.jumpCount+1:1;tt>3&&(tt=1),tt===3&&B<6&&(tt=2),t.jumpCount=tt,a(Zu[tt]+B*.08,"air",["","","Double jump","Triple jump"][tt],!0,tt===3?"triple":"chain"),t.anim=tt===3?"triple":"",i.sfx.jump(tt);return}t.capBuf>0&&d()}function x(T){let O=i.W,I=t.state,V=t.hs;if(t.g=Me.G,t.airT+=T,I==="gpWind"){if(t.vel.set(0,0,0),t.g=0,t.capBuf>0&&!t.diveUsed){t.capBuf=0,p();return}t.t>=.26&&(n("gpFall"),t.vel.y=-32,i.sfx.pound());return}if(I==="gpFall"){t.vel.x=0,t.vel.z=0,t.g=0,t.vel.y=-32,t.capBuf>0&&!t.diveUsed&&(t.capBuf=0,p());return}if(I==="hurt"){s(0,0,4,T);return}if(I==="wall"){let K=t.wallN;if(t.g=Me.G*.45,t.vel.y<-4&&(t.vel.y=-4),t.vel.x=-K.x*1.5,t.vel.z=-K.z*1.5,t.jumpBuf>0){t.facing=Math.atan2(K.x,K.z),t.vel.x=K.x*8,t.vel.z=K.z*8,a(14,"air","Wall jump",!1),t.jumpCount=0,t.diveUsed=!1,t.capThrown=!1,t.twirlUsed=!1,i.sfx.wallJump(),i.fx.dust(t.pos.x-K.x*.3,t.pos.y+.8,t.pos.z-K.z*.3,6,2,.2);return}(t.crouchBuf>0||O&&O.x*K.x+O.z*K.z>.5)&&(t.crouchBuf=0,n("air"),t.vel.x=K.x*2,t.vel.z=K.z*2,t.variable=!1);return}let B=22;if(I==="longjump"?(B=6,t.g=26):I==="dive"?(B=5,t.g=28):I==="backflip"||I==="sideflip"?B=12:I==="launch"?B=16:I==="twirl"?(B=20,t.g=t.vel.y>0?Me.G:Me.G*.3,t.vel.y<-2.5&&(t.vel.y=-2.5),t.t>.65&&(n("air"),t.variable=!1)):I==="spinjump"&&(B=18,t.g=t.vel.y>0?Me.G*.85:Me.G*.4,t.vel.y<-9&&(t.vel.y=-9)),t.variable&&t.vel.y>0&&!e.jump?t.g=Me.G*2.5:(I==="air"||I==="launch"||I==="capbounce")&&Math.abs(t.vel.y)<2.5&&(t.g=Me.G*.7),O){let K=Math.max(Me.RUN,V)*O.mag;s(O.x*K,O.z*K,B,T)}else(I==="air"||I==="capbounce"||I==="gpjump"||I==="launch")&&s(0,0,3,T);let j=Math.hypot(t.vel.x,t.vel.z);if(I==="longjump"||I==="dive"?j>1&&(t.facing=Math.atan2(t.vel.x,t.vel.z)):I!=="backflip"&&O&&r(Math.atan2(O.x,O.z),7,T),I==="air"&&t.coyote>0&&t.jumpBuf>0&&t.vel.y<=0){a(Zu[1],"air","",!0,"chain"),t.jumpCount=1,i.sfx.jump(1);return}if(t.spinBuf>0&&!t.twirlUsed&&Gx.has(I)){t.capBuf>0&&!t.capThrown&&d()&&(t.capThrown=!0),t.spinBuf=0,t.twirlUsed=!0,n("twirl"),t.variable=!1,t.anim="",t.vel.y<4&&(t.vel.y=4),i.hud.toast("Twirl"),i.sfx.twirl();return}if(t.crouchBuf>0&&I!=="dive"){t.crouchBuf=0,n("gpWind"),t.vel.set(0,0,0),t.variable=!1,i.hud.toast("Ground pound"),i.sfx.spin();return}t.capBuf>0&&!t.capThrown&&I!=="dive"&&d()&&(t.capThrown=!0,t.vel.y<1.5&&(t.vel.y=1.5))}function N(T){let O=T.s;if(O.type!=="box"||O.noLedge||O.delta||!i.W||i.W.x*-T.x+i.W.z*-T.z<.3)return!1;let I=O.max.y,V=t.pos.y+1.6;if(V<I||V-I>.55)return!1;let B=t.pos.x-T.x*(t.R*2+.25),j=t.pos.z-T.z*(t.R*2+.25);for(let K of i.world.solids)if(hi(K,B,I+.02,j,t.R,t.H))return!1;return n("ledge"),t.ledge={s:O,n:{x:T.x,z:T.z},top:I},t.pos.y=I-1.6,t.vel.set(0,0,0),t.facing=Math.atan2(-T.x,-T.z),t.capThrown=!1,t.diveUsed=!1,t.jumpCount=0,t.squash+=.12,i.sfx.grab(),!0}function R(T){let O=t.ledge,I=O.n,V=i.W;if(t.vel.set(0,0,0),t.shimmy=0,!O.s.on){n("air");return}if(!(t.t<.12)){if(t.jumpBuf>0){t.jumpBuf=0,n("climb");let B=t.R*2+.2;t.climb={x0:t.pos.x,z0:t.pos.z,y0:t.pos.y,x1:t.pos.x-I.x*B,z1:t.pos.z-I.z*B,y1:O.top},i.sfx.jump(1);return}if(t.crouchBuf>0||V&&V.x*I.x+V.z*I.z>.6){t.crouchBuf=0,n("air"),t.vel.set(I.x*2,0,I.z*2),t.ledgeCD=.4,t.variable=!1;return}if(V){let B=-I.z,j=I.x,K=V.x*B+V.z*j;if(Math.abs(K)>.35){let tt=2.8*Math.sign(K)*T,Mt=t.pos.x+B*tt,Dt=t.pos.z+j*tt,W=O.s;(Math.abs(B)>.5?Mt>W.min.x+.1&&Mt<W.max.x-.1:Dt>W.min.z+.1&&Dt<W.max.z-.1)&&(t.pos.x=Mt,t.pos.z=Dt,t.shimmy=Math.sign(K))}}}}function w(){let T=t.climb,O=Math.min(1,t.t/.3),I=Ie(O/.7),V=Ie((O-.4)/.6);t.pos.y=T.y0+(T.y1-T.y0)*I,t.pos.x=T.x0+(T.x1-T.x0)*V,t.pos.z=T.z0+(T.z1-T.z0)*V,O>=1&&(t.pos.y=T.y1,n("ground"),t.onGround=!0,t.ground=t.ledge.s,t.vel.set(0,0,0),t.ledge=null,t.climb=null,t.landT=0,t.squash+=.15)}function C(T){n("pipe"),t.pipe={from:T,to:T.link,phase:"down"},t.pos.x=T.x,t.pos.z=T.z,t.vel.set(0,0,0),i.sfx.pipe()}function b(){let T=t.pipe;if(T.phase==="down")t.pos.y=T.from.top-Ie(t.t/.55)*1.9,t.t>=.75&&(t.pos.set(T.to.x,T.to.top-1.9,T.to.z),T.phase="up",t.t=0,i.camRig.snap(t.facing+ut),i.sfx.pipe());else if(t.pos.y=T.to.top-1.9+Ie(t.t/.45)*1.9,t.t>=.45){t.pos.y=T.to.top,t.pipe=null,n("air"),t.variable=!1,t.ground=null;let O=Ye(t.facing);t.vel.set(O.x*1.5,10,O.z*1.5)}}function v(T){let O=t.state,I=t.ground;if(t.capThrown=!1,t.capBounced=!1,t.diveUsed=!1,t.twirlUsed=!1,t.landT=0,O==="gpFall"){let V=I&&I.pipe;if(V&&V.link&&Math.hypot(t.pos.x-V.x,t.pos.z-V.z)<.9){i.fx.ring(t.pos.x,t.pos.y,t.pos.z,2.2,16777215,.35),i.camRig.addShake(.2),C(V),t.t=.15;return}if(I&&I.onPound&&I.onPound(i,t)==="break"){n("gpFall"),t.onGround=!1,t.ground=null,t.vel.y=-32;return}n("gpLand"),t.squash+=.6,i.fx.ring(t.pos.x,t.pos.y,t.pos.z,3.4,16777215,.5),i.fx.dust(t.pos.x,t.pos.y,t.pos.z,14,5,.32),i.camRig.addShake(.35),i.sfx.poundLand()}else if(O==="dive")n("diveSlide"),t.squash+=.2,i.fx.dust(t.pos.x,t.pos.y,t.pos.z,8,2.5,.24),i.sfx.land(.6);else{t.chain=t.lastJump==="chain"?.2:0,t.lastJump!=="chain"&&(t.jumpCount=0);let V=ve(T/34,0,1);t.squash+=.12+V*.4,n(e.crouch?"crouch":"ground"),T>6&&i.fx.dust(t.pos.x,t.pos.y,t.pos.z,Math.round(4+V*8),1.5+V*3,.22),i.sfx.land(V)}t.lastJump="",t.anim="",I&&I.onLand&&I.onLand(i,t,O)}function D(T){if(T.delta&&(t.pos.x+=T.delta.x,t.pos.y+=T.delta.y,t.pos.z+=T.delta.z),T.rotDelta){let O=T.rotDelta,I=Math.cos(O),V=Math.sin(O),B=t.pos.x-T.x,j=t.pos.z-T.z;t.pos.x=T.x+B*I+j*V,t.pos.z=T.z-B*V+j*I,t.facing+=O}}function U(T){t.vel.y-=t.g*T,t.vel.y<-Me.FALL&&(t.vel.y=-Me.FALL);let O=Ju.has(t.state),I=t.vel.y,V=sr(t,i.world,T,O);V.head&&V.head.onBump&&V.head.onBump(i,t),!(!t.onGround&&V.wall&&Wx.has(t.state)&&t.vel.y<=0&&t.ledgeCD<=0&&N(V.wall))&&(t.state==="wall"?!V.wall&&!t.onGround&&(n("air"),t.variable=!1):V.wall&&Vx.has(t.state)&&!t.onGround&&t.vel.y<4&&i.W&&i.W.x*-V.wall.x+i.W.z*-V.wall.z>.35&&V.wall.s.max.y-t.pos.y>1.2&&!V.wall.s.noWall&&(n("wall"),t.wallN={x:V.wall.x,z:V.wall.z},t.facing=Math.atan2(-V.wall.x,-V.wall.z),t.vel.y<0&&(t.vel.y*=.3),i.sfx.grab()),t.onGround&&!O?v(-I):!t.onGround&&O&&(n("air"),t.variable=!1,t.lastJump="",t.anim=""),t.onGround&&t.ground&&t.ground.onStand&&t.ground.onStand(i,t))}function F(T){t.t+=T,t.flipT+=T,t.chain-=T,t.coyote-=T,t.invuln-=T,t.throwT+=T,t.landT+=T,t.captureCD-=T,t.ledgeCD-=T,t.ground&&(t.onGround||t.state==="capture")&&D(t.ground),t.hs=Math.hypot(t.vel.x,t.vel.z);let O=t.facing;switch(t.state){case"capture":t.crouchBuf>0&&t.capture.canRelease?(t.crouchBuf=0,S()):t.capture.control(i,T);break;case"pipe":b();break;case"moonGet":t.t>2.1&&n(t.onGround?"ground":"air");break;case"ledge":R(T);break;case"climb":w();break;default:Ju.has(t.state)?y(T):x(T),kc.has(t.state)||U(T)}t.jumpBuf=Math.max(0,t.jumpBuf-T),t.crouchBuf=Math.max(0,t.crouchBuf-T),t.capBuf=Math.max(0,t.capBuf-T),t.spinBuf=Math.max(0,t.spinBuf-T),t.crouchTap=Math.max(0,t.crouchTap-T),t.turnRate+=(Qe(t.facing,O)/T-t.turnRate)*.15,t.pos.y<-20&&_()}return{press:o,step:F,respawn:_,launch:l,bounceOff:c,capBounce:h,hurt:g,moonGet:m,startCapture:f,endCapture:S,setState:n}}var Xx=.2,qx=.55;function Qu(i){let t=n=>i.world.solids.some(s=>!s.capPass&&hi(s,n.x,n.y-.15,n.z,.25,.3));return{active:!1,mode:"normal",phase:"out",t:0,pos:new P,vel:new P,start:new P,dir:{x:0,z:1},dist:5,orbitA:0,squash:0,spin:0,bonk:0,throw(n="normal"){let s=i.P;if(this.active)return!1;let r=Ye(s.facing);return this.active=!0,this.mode=n,this.t=0,this.squash=1,n==="spin"?(this.phase="orbit",this.orbitA=s.facing,this.pos.set(s.pos.x+r.x*.5,s.pos.y+.9,s.pos.z+r.z*.5)):(this.phase="out",this.dir=r,this.dist=4.6+ve(s.vel.x*r.x+s.vel.z*r.z,0,15)*.12,this.start.set(s.pos.x+r.x*.55,s.pos.y+1,s.pos.z+r.z*.55),this.pos.copy(this.start)),i.sfx.capThrow(),i.fx.burst(this.pos.x,this.pos.y,this.pos.z,6,3,16777215,.07,.25,0),!0},reset(){this.active=!1},goBack(){this.phase="back",this.t=0;let n=i.P,s=n.pos.x-this.pos.x,r=n.pos.z-this.pos.z,o=Math.hypot(s,r)||1,a=Math.random()<.5?-1:1;this.vel.set(-r/o*5*a,3.5,s/o*5*a)},update(n){if(!this.active)return;let s=i.P;if(this.t+=n,this.phase==="out"){let o=Math.min(1,this.t/Xx),a=1-Math.pow(1-o,3),l=this.start.x+this.dir.x*this.dist*a,c=this.start.z+this.dir.z*this.dist*a,h=this.pos.clone();this.pos.x=l,this.pos.z=c,t(this.pos)?(this.pos.copy(h),this.bonk=1,this.phase="hover",this.t=.25,i.sfx.block(),i.fx.burst(this.pos.x,this.pos.y,this.pos.z,8,3,16773800,.08,.3,0)):o>=1&&(this.phase="hover",this.t=0)}else if(this.phase==="hover")this.t>(i.input.st.cap?1.5:.55)&&this.goBack();else if(this.phase==="orbit"){let o=Math.min(1,this.t/.12)*2.3;this.orbitA+=n*15,this.pos.set(s.pos.x+Math.sin(this.orbitA)*o,s.pos.y+.9,s.pos.z+Math.cos(this.orbitA)*o),this.t>qx&&this.goBack()}else{let o=s.pos.x-this.pos.x,a=s.pos.y+s.H*.8-this.pos.y,l=s.pos.z-this.pos.z,c=Math.hypot(o,a,l);if(c<.75){this.active=!1,i.sfx.capCatch(),i.char.hatPop=1,i.fx.sparkle(s.pos.x,s.pos.y+s.H,s.pos.z,6,16777215);return}let h=Math.min(42,12+this.t*90),u=xe(9+this.t*20,n);this.vel.x+=(o/c*h-this.vel.x)*u,this.vel.y+=(a/c*h-this.vel.y)*u,this.vel.z+=(l/c*h-this.vel.z)*u,this.pos.addScaledVector(this.vel,n)}if(this.phase!=="back"){for(let o of i.captures)if(o.canCapture()&&o.capDist(this.pos)<o.R+.55&&i.player.startCapture(o))return}for(let o of i.objects)o.capHit&&o.capHit(i,this.pos);(this.phase==="hover"||this.phase==="out"&&this.t>.06)&&!s.onGround&&!s.capBounced&&Ku.has(s.state)&&Math.hypot(s.pos.x-this.pos.x,s.pos.y+.75-this.pos.y,s.pos.z-this.pos.z)<1.25&&(i.player.capBounce(),this.squash=1.2,this.goBack())},render(n,s,r){if(n.visible=this.active,!this.active)return;let o=this.phase==="hover"?16:this.phase==="orbit"?34:30;this.spin+=o*s,this.squash=Math.max(0,this.squash-s*4),this.bonk=Math.max(0,this.bonk-s*4);let a=Math.sin(this.squash*Math.PI*2.5)*this.squash*.35;n.position.copy(this.pos),this.phase==="hover"&&(n.position.y+=Math.sin(r*7)*.07),n.rotation.set(Math.sin(r*9)*(this.phase==="hover"?.18:.08)+this.bonk*.5,this.spin,Math.cos(r*7)*.1);let l=.8;n.scale.set(l*(1+a),l*(1-a*1.2),l*(1+a)),this.trailT=(this.trailT||0)-s,this.trailT<=0&&this.phase!=="hover"&&(this.trailT=.025,i.fx.spawn(this.pos.x,this.pos.y,this.pos.z,0,.3,0,.28,.1,0,16774856,0,2))}}}var Yx=new Set(["wall","backflip","ledge","climb","moonGet","pipe","skid"]),Zx=new Set(["ledge","wall","climb","pipe","moonGet"]),$o=class{constructor(t,e){this.cam=t,this.G=e,this.yaw=0,this.pitch=.3,this.cur=10,this.lastManual=-1e9,this.target=new P,this.look=new P,this.groundY=0,this.shakeAmt=0,this.fovK=0,this.snapNext=!0,this._d=new P}snap(t){this.snapNext=!0,t!==void 0&&(this.yaw=t)}addShake(t){this.shakeAmt=Math.max(this.shakeAmt,t)}applyInput(t,e){let n=this.G.input.st;(n.camDX||n.camDY)&&(this.yaw-=n.camDX*.0026,this.pitch=ve(this.pitch+n.camDY*.0022,-.25,1.25),n.camDX=n.camDY=0,this.lastManual=e),(n.padRX||n.padRY)&&(this.yaw-=n.padRX*2.8*t,this.pitch=ve(this.pitch+n.padRY*1.8*t,-.25,1.25),this.lastManual=e)}update(t,e){let n=this.G.P,s=n.hs;e-this.lastManual>1400&&s>3&&!Yx.has(n.state)&&(this.yaw+=Qe(n.facing+ut,this.yaw)*xe(.9*ve(s/9,0,1.4),t)),n.onGround||Zx.has(n.state)||n.state==="capture"&&n.onGround?this.groundY=n.pos.y:n.pos.y<this.groundY?this.groundY=n.pos.y:n.pos.y>this.groundY+3.2&&(this.groundY=n.pos.y-3.2);let r=this.groundY+1.5,o=xe(2.5,t);if(this.look.x+=(n.vel.x*.16-this.look.x)*o,this.look.z+=(n.vel.z*.16-this.look.z)*o,this.snapNext)this.groundY=n.pos.y,this.target.set(n.pos.x,n.pos.y+1.5,n.pos.z),this.look.set(0,0,0);else{let g=xe(9,t);this.target.x+=(n.pos.x+this.look.x-this.target.x)*g,this.target.z+=(n.pos.z+this.look.z-this.target.z)*g,this.target.y+=(r-this.target.y)*xe(n.vel.y<-14?9:4.5,t)}let a=(this.cam.aspect<1?12.5:10.5)+ve(s-10,0,12)*.15,l=this._d.set(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)),c=zu(this.G.world,this.target,l,a+.5),h=Math.max(1.6,Math.min(a,c-.45));this.snapNext?this.cur=h:this.cur+=(h-this.cur)*xe(h<this.cur?22:3,t),this.snapNext=!1;let u=this.cam;if(u.position.copy(this.target).addScaledVector(l,this.cur),u.position.y<.35&&(u.position.y=.35),this.shakeAmt>.001){let g=this.shakeAmt*.6;u.position.x+=(Math.random()-.5)*g,u.position.y+=(Math.random()-.5)*g,u.position.z+=(Math.random()-.5)*g,this.shakeAmt*=Math.exp(-8*t)}u.lookAt(this.target);let d=u.aspect<1?70:58;this.fovK+=(ve((s-10)*.7,0,10)-this.fovK)*xe(3,t);let p=d+this.fovK;Math.abs(u.fov-p)>.01&&(u.fov=p,u.updateProjectionMatrix())}};function Rn(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new fs(n);return s.colorSpace=Ve,s.anisotropy=8,s}var bs=null;function Jx(){return bs||(bs=Rn(256,256,i=>{i.fillStyle="#ffffff",i.fillRect(0,0,256,256),i.fillStyle="#f0f0f0",i.fillRect(0,0,128,128),i.fillRect(128,128,128,128),i.strokeStyle="rgba(0,0,0,0.07)",i.lineWidth=1;for(let t=32;t<256;t+=32)i.beginPath(),i.moveTo(t+.5,0),i.lineTo(t+.5,256),i.moveTo(0,t+.5),i.lineTo(256,t+.5),i.stroke();i.strokeStyle="rgba(0,0,0,0.22)",i.lineWidth=3;for(let t of[1.5,129.5])i.beginPath(),i.moveTo(t,0),i.lineTo(t,256),i.moveTo(0,t),i.lineTo(256,t),i.stroke()}),bs.wrapS=bs.wrapT=Gs,bs)}var Hc=new Map;function or(i){return Hc.has(i)||Hc.set(i,new ue({color:i,map:Jx(),roughness:.82,metalness:0})),Hc.get(i)}function jo(i,t,e,n,s=.5){let r=i.attributes.position,o=i.attributes.normal,a=i.attributes.uv;for(let l=0;l<r.count;l++){let c=r.getX(l)+t,h=r.getY(l)+e,u=r.getZ(l)+n,d=Math.abs(o.getX(l)),p=Math.abs(o.getY(l)),g,_;p>.5?(g=c,_=u):d>.5?(g=u,_=h):(g=c,_=h),a.setXY(l,g*s,_*s)}return a.needsUpdate=!0,i}function ed(i,t=[],e="#ff8a3d"){return Rn(512,288,(n,s,r)=>{n.fillStyle="#1d2a44",td(n,0,0,s,r,28),n.fill(),n.fillStyle=e,td(n,14,14,s-28,62,18),n.fill(),n.fillStyle="#1d2a44",n.font='700 40px Fredoka, "Segoe UI", sans-serif',n.textBaseline="middle",n.fillText(i,32,46,s-64),n.fillStyle="#eef3ff",n.font='500 29px Fredoka, "Segoe UI", sans-serif',t.forEach((o,a)=>n.fillText(o,32,116+a*42,s-64))})}function td(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var Kx=()=>new ue({color:16763955,metalness:.45,roughness:.28,emissive:11565056,emissiveIntensity:.45}),_e=i=>(i.castShadow=!0,i.receiveShadow=!0,i),Qo=null,nd=null;function rd(){Qo||(Qo=new he(.34,.34,.08,28),Qo.rotateX(ut/2),nd=Kx());let i=new ht(Qo,nd);return i.castShadow=!0,i}var ui=class{constructor(t,e,n,s){this.mesh=rd(),this.mesh.position.set(e,n,s),t.scene.add(this.mesh),this.pos=this.mesh.position,this.got=!1,this.phase=Math.random()*ne,t.objects.push(this)}update(t,e){if(this.got)return;let n=e.P,s=n.pos.x-this.pos.x,r=n.pos.y+n.H*.5-this.pos.y,o=n.pos.z-this.pos.z;s*s+o*o<.8&&Math.abs(r)<n.H*.5+.35&&this.collect(e)}capHit(t,e){!this.got&&e.distanceToSquared(this.pos)<.85&&this.collect(t)}collect(t){this.got=!0,this.mesh.visible=!1,t.addCoins(1),t.sfx.coin(),t.fx.sparkle(this.pos.x,this.pos.y,this.pos.z,10)}render(t,e){this.got||(this.mesh.rotation.y=e*3.2+this.phase)}},ta=class{constructor(t){this.G=t,this.list=[],t.objects.push(this)}pop(t,e,n){let s=rd();s.position.set(t,e,n),this.G.scene.add(s),this.list.push({m:s,vy:11,t:0}),this.G.addCoins(1),this.G.sfx.coin()}render(t){for(let e=this.list.length-1;e>=0;e--){let n=this.list[e];n.t+=t,n.vy-=30*t,n.m.position.y+=n.vy*t,n.m.rotation.y+=t*20,n.t>.55&&(this.G.fx.sparkle(n.m.position.x,n.m.position.y,n.m.position.z,8),this.G.scene.remove(n.m),this.list.splice(e,1))}}},Vc=null,id=null;function $x(){let i=new $s,t=.5,e=.35*ut,n=1.65*ut;for(let c=0;c<=32;c++){let h=e+(n-e)*c/32,u=Math.cos(h)*t,d=Math.sin(h)*t;c?i.lineTo(u,d):i.moveTo(u,d)}let s=.2667,r=.4467,o=264.9*ut/180,a=95.1*ut/180;for(let c=0;c<=32;c++){let h=o+(a-o)*c/32;i.lineTo(s+Math.cos(h)*r,Math.sin(h)*r)}let l=new Po(i,{depth:.14,bevelEnabled:!0,bevelThickness:.07,bevelSize:.05,bevelSegments:4,curveSegments:24});return l.center(),l}function jx(){return id||(id=Rn(128,128,i=>{let t=i.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.35,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,128,128)}))}var Ne=class{constructor(t,e,n,s,r,o={}){Vc=Vc||$x();let a=o.color||16765503;this.group=new Zt,this.group.position.set(e,n,s);let l=new ht(Vc,new ue({color:a,metalness:.55,roughness:.25,emissive:a,emissiveIntensity:.28}));l.scale.setScalar(1.5),l.rotation.z=-.35,l.castShadow=!0,this.spinner=new Zt,this.spinner.add(l),this.group.add(this.spinner);let c=new yo(new Ys({map:jx(),color:a,transparent:!0,depthWrite:!1,blending:eo,opacity:.75}));c.scale.setScalar(2.6),this.group.add(c),t.scene.add(this.group),this.base=new P(e,n,s),this.name=r,this.got=!1,this.hidden=!!o.hidden,this.group.visible=!this.hidden,this.appear=0,this.from=null,this.flyT=0,t.moons.push(this),t.objects.push(this)}reveal(t,e){this.hidden&&(this.hidden=!1,this.group.visible=!0,this.appear=1e-4,this.from=(e||this.base).clone(),t.sfx.moonAppear(),t.hud.toast("A Power Moon appeared!"),t.fx.sparkle(this.from.x,this.from.y,this.from.z,20,16774048))}update(t,e){if(this.got||this.hidden||this.appear>0&&this.appear<1)return;let n=e.P,s=this.group.position;Math.hypot(n.pos.x-s.x,n.pos.y+n.H*.5-s.y,n.pos.z-s.z)<1.3&&n.state!=="pipe"&&(this.got=!0,this.flyT=0,e.onMoon(this))}render(t,e,n){if(this.hidden||!this.group.visible)return;let s=this.group.position;if(this.got){this.flyT+=t;let r=n.P,o=xe(10,t);s.x+=(r.pos.x-s.x)*o,s.y+=(r.pos.y+2.5+Math.sin(this.flyT*6)*.08-s.y)*o,s.z+=(r.pos.z-s.z)*o,this.spinner.rotation.y+=t*(6+this.flyT*10),this.flyT>1.85&&(n.fx.sparkle(s.x,s.y,s.z,24,16774048),this.group.visible=!1);return}if(this.appear>0&&this.appear<1){this.appear=Math.min(1,this.appear+t/.9);let r=Ie(this.appear);s.lerpVectors(this.from,this.base,r),s.y+=Math.sin(r*ut)*2,this.spinner.rotation.y+=t*12;return}s.set(this.base.x,this.base.y+Math.sin(e*2+this.base.x)*.12,this.base.z),this.spinner.rotation.y=e*1.6}},Li=class{constructor(t,e,n,s,r={}){this.power=r.power||21;let o=n+.4,a=1.15;this.solid=t.world.cyl(e,s,a,n+.1,o,{noWall:!0,noLedge:!0,onLand:(p,g,_)=>this.bounce(p,g,_),onStand:(p,g)=>this.bounce(p,g,"ground")}),this.group=new Zt,this.group.position.set(e,n,s),t.scene.add(this.group);let l=Lt(4173396,{roughness:.7}),c=Lt(r.color||16743362,{roughness:.55}),h=Lt(16769357,{roughness:.5}),u=_e(new ht(new he(.2,.3,.2,14),l));u.position.y=.1,this.group.add(u);for(let p=0;p<3;p++){let g=_e(new ht(new jt(.35,12,8),l)),_=p/3*ne+.4;g.position.set(Math.cos(_)*.55,.1,Math.sin(_)*.55),g.scale.set(1.3,.25,.7),g.rotation.y=-_,this.group.add(g)}this.head=new Zt,this.head.position.y=.15,this.group.add(this.head);let d=_e(new ht(new he(.62,.66,.25,28),h));d.position.y=.12,this.head.add(d);for(let p=0;p<9;p++){let g=p/9*ne,_=_e(new ht(new jt(.42,16,10),c));_.position.set(Math.cos(g)*.85,.08,Math.sin(g)*.85),_.scale.set(1.25,.28,.7),_.rotation.y=-g,this.head.add(_)}this.squish=0,this.phase=Math.random()*ne,t.objects.push(this)}bounce(t,e,n){let s=n==="gpFall"||e.jumpBuf>0||t.input.st.jump;t.player.launch(this.power+(n==="gpFall"?5:s?3:0)),this.squish=1,t.sfx.boing(),t.fx.burst(this.solid.x,this.solid.max.y,this.solid.z,12,4,16752594,.11,.6,6)}render(t,e){this.squish=Math.max(0,this.squish-t*2.2);let n=this.squish,s=Math.sin((1-n)*ut*4)*n*.45;this.head.scale.set(1+s*.5,1-s,1+s*.5),this.head.rotation.y=Math.sin(e*.7+this.phase)*.15}},ea=class{constructor(t,e,n,s,r=21){this.power=r,this.solid=t.world.cyl(e,s,.75,n,n+.41,{noWall:!0,noLedge:!0,onLand:(c,h,u)=>this.bounce(c,h,u),onStand:(c,h)=>this.bounce(c,h,"ground")}),this.group=new Zt,this.group.position.set(e,n,s),this.group.scale.y=.55,t.scene.add(this.group);let o=Lt(15222604,{roughness:.4}),a=Lt(13160152,{metalness:.8,roughness:.3}),l=_e(new ht(new he(.75,.8,.2,28),o));l.position.y=.1,this.group.add(l),this.coil=new Zt,this.coil.position.y=.2,this.group.add(this.coil);for(let c=0;c<4;c++){let h=_e(new ht(new ms(.45,.06,8,24),a));h.rotation.x=ut/2,h.position.y=.08+c*.11,this.coil.add(h)}this.top=_e(new ht(new he(.75,.75,.16,28),o)),this.top.position.y=.67,this.group.add(this.top),this.squish=0,t.objects.push(this)}bounce(t,e,n){t.player.launch(this.power+(n==="gpFall"?5:e.jumpBuf>0||t.input.st.jump?3:0)),this.squish=1,t.sfx.boing()}render(t){this.squish=Math.max(0,this.squish-t*2.5);let e=Math.sin((1-this.squish)*ut*5)*this.squish*.5;this.coil.scale.y=1-e,this.top.position.y=.2+.47*(1-e)}};function Wc(i){return Rn(128,128,t=>{if(i==="brick"){t.fillStyle="#c4622d",t.fillRect(0,0,128,128),t.fillStyle="#7a3416";for(let n=0;n<4;n++){t.fillRect(0,n*32,128,3);let s=n%2?0:32;for(let r=s;r<128;r+=64)t.fillRect(r,n*32,3,32)}t.strokeStyle="#7a3416",t.lineWidth=6,t.strokeRect(0,0,128,128);return}let e=i==="used";t.fillStyle=e?"#9b6a3c":"#ffbf1f",t.fillRect(0,0,128,128),t.strokeStyle=e?"#5c3a1d":"#b86e00",t.lineWidth=8,t.strokeRect(4,4,120,120),t.fillStyle=e?"#5c3a1d":"#b86e00";for(let[n,s]of[[16,16],[112,16],[16,112],[112,112]])t.beginPath(),t.arc(n,s,6,0,ne),t.fill();e||(t.font='700 84px Fredoka, "Segoe UI", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#b86e00",t.fillText("?",68,70),t.fillStyle="#ffffff",t.fillText("?",64,66))})}var sd=null,Gc=()=>sd||(sd={q:new ue({map:Wc("q"),roughness:.45,emissive:3351040,emissiveIntensity:.25}),used:new ue({map:Wc("used"),roughness:.7}),brick:new ue({map:Wc("brick"),roughness:.8})}),Es=class{constructor(t,e,n,s,r=1){this.solid=t.world.box(e,n,s,1,1,1,{noLedge:!0,onBump:o=>this.hit(o)}),this.mesh=_e(new ht(new Re(1,1,1),Gc().q)),this.mesh.position.set(e,n,s),t.scene.add(this.mesh),this.y=n,this.coins=r,this.bump=0,this.cd=0,t.objects.push(this)}hit(t){this.cd>0||(this.cd=.2,this.bump=1,t.sfx.block(),!(this.coins<=0)&&(this.coins--,t.popCoins.pop(this.mesh.position.x,this.y+.8,this.mesh.position.z),this.coins===0&&(this.mesh.material=Gc().used)))}update(t){this.cd-=t}render(t){this.bump=Math.max(0,this.bump-t*6),this.mesh.position.y=this.y+Math.sin(this.bump*ut)*.28}},ar=class{constructor(t,e,n,s,r=null){this.solid=t.world.box(e,n,s,1,1,1,{noLedge:!0,onBump:o=>this.smash(o),onPound:o=>this.smash(o)}),this.mesh=_e(new ht(new Re(1,1,1),Gc().brick)),this.mesh.position.set(e,n,s),t.scene.add(this.mesh),this.moon=r}smash(t){if(!this.solid.on)return null;this.solid.on=!1,this.mesh.visible=!1;let e=this.mesh.position;return t.fx.debris(e.x,e.y,e.z,14,12870189),t.sfx.brick(),t.camRig.addShake(.12),this.moon&&this.moon.reveal(t,e),"break"}},na=class{constructor(t,e,n,s,r){this.solid=t.world.cyl(e,s,.42,n-.2,n+1.1,{noLedge:!0,noWall:!0,onPound:u=>this.pound(u)}),this.group=new Zt,this.group.position.set(e,n,s),t.scene.add(this.group);let o=Lt(11565637,{roughness:.8}),a=Lt(10134450,{metalness:.7,roughness:.35}),l=_e(new ht(new he(.38,.42,1.3,20),o));l.position.y=.45,this.group.add(l);let c=_e(new ht(new he(.44,.44,.16,20),a));c.position.y=1.08,this.group.add(c);let h=_e(new ht(new he(.75,.85,.1,24),Lt(7031338,{roughness:.9})));h.position.y=.05,t.scene.add(h),h.position.set(e,n+.05,s),this.y0=n,this.moon=r,this.done=!1,this.sink=0,t.objects.push(this)}pound(t){return this.done||(this.done=!0,t.camRig.addShake(.3),t.fx.dust(this.solid.x,this.y0,this.solid.z,10,3,.3),this.moon&&this.moon.reveal(t,new P(this.solid.x,this.y0+1.2,this.solid.z))),null}update(t,e){if(!this.done||this.sink>=1)return;let n=this.sink;this.sink=Math.min(1,this.sink+t/.2),e.world.moveSolid(this.solid,0,-(this.sink-n)*1,0,t)}render(){this.group.position.y=this.y0-this.sink*1}},ia=class{constructor(t,e,n,s,r,o=10){this.G=t,this.duration=o,this.timer=0,this.active=!1,this.lastTick=0,t.world.box(e,n+.08,s,1.4,.16,1.4,{noLedge:!0}),this.button=t.world.box(e,n+.16+.15,s,1,.3,1,{noLedge:!0,noWall:!0,onStand:()=>this.press(),onLand:()=>this.press()});let a=Rn(128,128,h=>{h.fillStyle="#2f6bff",h.fillRect(0,0,128,128),h.font='700 92px Fredoka, "Segoe UI", sans-serif',h.textAlign="center",h.textBaseline="middle",h.fillStyle="#ffffff",h.fillText("P",64,68)}),l=_e(new ht(new Re(1.4,.16,1.4),Lt(10134450,{metalness:.6,roughness:.4})));l.position.set(e,n+.08,s),t.scene.add(l),this.btnMesh=_e(new ht(new Re(1,.3,1),[Lt(3107839),Lt(3107839),new ue({map:a,roughness:.4}),Lt(3107839),Lt(3107839),Lt(3107839)])),this.btnMesh.position.set(e,n+.31,s),t.scene.add(this.btnMesh),this.btnY=n+.31;let c=new ue({color:5213183,roughness:.3,transparent:!0,opacity:.85,emissive:1718937,emissiveIntensity:.4});this.mat=c,this.blocks=r.map(([h,u,d,p,g,_])=>{let m=t.world.box(h,u,d,p,g,_,{on:!1}),f=_e(new ht(new Re(p,g,_),c));f.position.set(h,u,d),f.visible=!1,t.scene.add(f);let S=new wi(new Ti(f.geometry),new li({color:16777215,transparent:!0,opacity:.6}));return f.add(S),{s:m,m:f}}),t.objects.push(this)}press(){if(!this.active){this.active=!0,this.timer=this.duration,this.lastTick=Math.ceil(this.duration),this.button.max.y=this.button.min.y+.08;for(let t of this.blocks)t.s.on=!0,t.m.visible=!0;this.G.sfx.block(),this.G.sfx.moonAppear(),this.G.hud.toast("Go go go!")}}update(t,e){if(!this.active)return;this.timer-=t;let n=Math.ceil(this.timer);if(n<this.lastTick&&n>0&&(this.lastTick=n,e.sfx.tick(n<=3)),this.timer<=0){this.active=!1,this.button.max.y=this.button.min.y+.3;for(let s of this.blocks)s.s.on=!1,s.m.visible=!1;e.hud.timer(null)}else e.hud.timer(this.timer)}render(t,e){if(this.btnMesh.scale.y=this.active?.3:1,this.btnMesh.position.y=this.btnY-(this.active?.1:0),this.active){let n=this.timer<3&&Math.sin(e*24)>0;for(let s of this.blocks)s.m.visible=!n}}},Yn=class{constructor(t,e,n,s,r,o){this.pos=new P(e,n,s),this.name=r,this.facing=o,this.on=!1,this.group=new Zt,this.group.position.set(e,n,s),t.scene.add(this.group);let a=_e(new ht(new he(.06,.06,3,10),Lt(14541802,{metalness:.6,roughness:.3})));a.position.y=1.5,this.group.add(a);let l=_e(new ht(new jt(.14,14,10),Lt(16764735,{metalness:.6,roughness:.3})));l.position.y=3.05,this.group.add(l);let c=_e(new ht(new he(.45,.55,.2,20),Lt(5989752)));c.position.y=.1,this.group.add(c),this.flagMat=Lt(9410987,{roughness:.6,side:sn});let h=new Tn(1.1,.7,8,1);h.translate(.55,0,0),this.flag=new ht(h,this.flagMat),this.flag.castShadow=!0,this.flag.position.set(.06,1,0),this.group.add(this.flag),this.flagY=1,this.fp=h.attributes.position.array.slice(),t.checkpoints.push(this),t.objects.push(this)}activate(t){t.spawn={pos:this.pos.clone().add(new P(Math.sin(this.facing)*1.4,0,Math.cos(this.facing)*1.4)),facing:this.facing},!this.on&&(this.on=!0,this.flagMat.color.set(16764735),t.sfx.checkpoint(),t.hud.toast("Checkpoint: "+this.name),t.fx.sparkle(this.pos.x,this.pos.y+2.6,this.pos.z,16))}update(t,e){let n=e.P;Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z)<.9&&Math.abs(n.pos.y-this.pos.y)<2.5&&(!this.on||e.spawnFlag!==this)&&(this.activate(e),e.spawnFlag=this)}capHit(t,e){Math.hypot(e.x-this.pos.x,e.z-this.pos.z)<.8&&e.y>this.pos.y&&e.y<this.pos.y+3.2&&(!this.on||t.spawnFlag!==this)&&(this.activate(t),t.spawnFlag=this)}render(t,e){this.flagY+=((this.on?2.6:1)-this.flagY)*xe(4,t),this.flag.position.y=this.flagY;let n=this.flag.geometry.attributes.position;for(let s=0;s<n.count;s++){let r=this.fp[s*3];n.setZ(s,Math.sin(e*6-r*4)*.1*r)}n.needsUpdate=!0}},lr=class{constructor(t,e,n,s,r=1.3){this.x=e,this.z=s,this.top=n+r,this.link=null,this.solid=t.world.cyl(e,s,.98,n,this.top,{pipe:this,noLedge:!0});let o=Lt(2732874,{roughness:.35}),a=new je({color:333578}),l=_e(new ht(new he(.86,.86,r-.35,28),o));l.position.set(e,n+(r-.35)/2,s);let c=_e(new ht(new he(.98,.98,.38,28),o));c.position.set(e,this.top-.19,s);let h=new ht(new Xn(.78,28),a);h.rotation.x=-ut/2,h.position.set(e,this.top+.005,s),t.scene.add(l,c,h)}},cr=class{constructor(t,e,n,s,r,o=8376831,a=0){this.a=e.clone(),this.b=n.clone(),this.period=r,this.time=a*r,this.c=e.clone(),this.solid=t.world.box(e.x,e.y,e.z,s.x,s.y,s.z,{noLedge:!0});let l=jo(new Re(s.x,s.y,s.z),0,0,0);this.mesh=_e(new ht(l,or(o))),this.mesh.position.copy(e),t.scene.add(this.mesh);let c=new wi(new Ti(l),new li({color:1911364,transparent:!0,opacity:.25}));this.mesh.add(c),t.objects.push(this),this.update(0,t)}update(t,e){this.time+=t;let n=(1-Math.cos(this.time/this.period*ne))/2,s=this.a.x+(this.b.x-this.a.x)*n,r=this.a.y+(this.b.y-this.a.y)*n,o=this.a.z+(this.b.z-this.a.z)*n;e.world.moveSolid(this.solid,s-this.c.x,r-this.c.y,o-this.c.z,t),this.c.set(s,r,o)}render(){this.mesh.position.copy(this.c)}},sa=class{constructor(t,e,n,s,r,o){this.speed=o,this.angle=0,this.solid=t.world.cyl(e,s,r,n-.5,n,{noLedge:!0}),this.group=new Zt,this.group.position.set(e,n,s),t.scene.add(this.group);let a=_e(new ht(new he(r,r,.5,40),Lt(16753226,{roughness:.6})));a.position.y=-.25,this.group.add(a);for(let h=0;h<4;h++){let u=new ht(new Re(r*2-.2,.02,.3),Lt(16774102));u.position.y=.005,u.rotation.y=h*ut/4,u.receiveShadow=!0,this.group.add(u)}let l=_e(new ht(new he(.35,.35,.08,20),Lt(1911364)));l.position.y=.04,this.group.add(l);let c=_e(new ht(new he(.25,.25,n-.5,14),Lt(10134450,{metalness:.6,roughness:.4})));c.position.set(e,(n-.5)/2,s),t.scene.add(c),t.world.cyl(e,s,.25,0,n-.5,{noLedge:!0}),t.objects.push(this)}update(t){this.solid.rotDelta=this.speed*t,this.angle+=this.solid.rotDelta}render(){this.group.rotation.y=this.angle}},we=class{constructor(t,e,n,s,r,o,a=[],l){let c=new Zt;c.position.set(e,n,s),c.rotation.y=r,t.scene.add(c);let h=Lt(5989752,{roughness:.6});for(let p of[-1.05,1.05]){let g=_e(new ht(new he(.07,.07,1.6,10),h));g.position.set(p,.8,-.03),c.add(g)}let u=new ht(new Tn(2.6,1.46),new ue({map:ed(o,a,l),roughness:.6}));u.position.y=1.85,u.castShadow=!0,c.add(u);let d=new ht(new Tn(2.6,1.46),Lt(1911364));d.rotation.y=ut,d.position.set(0,1.85,-.01),c.add(d)}},ra=class{constructor(t,e,n,s,r){this.g=new Zt,this.g.position.set(e,n,s),this.speed=.4+Math.random()*.4,t.scene.add(this.g);let o=new ue({color:16777215,roughness:1,emissive:16777215,emissiveIntensity:.25});for(let a=0;a<5;a++){let l=new ht(new jt(r*(.6+Math.random()*.5),16,12),o);l.position.set((a-2)*r*.8,Math.random()*r*.4,(Math.random()-.5)*r*.6),l.scale.y=.65,this.g.add(l)}t.objects.push(this)}render(t){this.g.position.x+=this.speed*t,this.g.position.x>120&&(this.g.position.x=-120)}};var De=(i,t,e,n=0,s=0,r=0)=>{let o=new ht(i,t);return o.position.set(n,s,r),o.castShadow=!0,e.add(o),o};function od(i,t,e,n,s=.12,r=.6){let o=new Zt;return o.position.set(t,e,n),i.add(o),De(new jt(s,16,12),Lt(16777215,{roughness:.2}),o).scale.set(.8,1.15,.7),De(new jt(s*.5,12,10),Lt(1318970,{roughness:.2}),o,0,0,s*r),o}var hr=class{constructor(t,e,n,s,r){this.pos=new P(e,n,s),this.home=this.pos.clone(),this.vel=new P,this.facing=qn(0,ne),this.R=.5,this.H=1,this.name=r,this.captured=!1,this.stun=0,this.canRelease=!0,this.onGround=!1,this.ground=null,this.groundN=null,this.group=new Zt,t.scene.add(this.group),this.sq=0,this.sqv=0,t.captures.push(this)}addHat(t,e=.75){this.hat=rr(!0),this.hat.position.y=t,this.hat.scale.setScalar(e),this.hat.visible=!1,this.group.add(this.hat)}canCapture(){return!this.captured&&this.stun<=0}capDist(t){return Math.hypot(t.x-this.pos.x,t.y-(this.pos.y+this.H*.55),t.z-this.pos.z)}onCapture(){this.captured=!0,this.hat&&(this.hat.visible=!0)}release(t){return this.captured=!1,this.hat&&(this.hat.visible=!1),this.pos.copy(t.P.pos),this.facing=t.P.facing,this.vel.set(0,0,0),this.stun=1.2,this.H*.4}spring(t){this.sqv+=(-240*this.sq-14*this.sqv)*t,this.sq=ve(this.sq+this.sqv*t,-.4,.5)}freeFall(t,e){this.vel.y-=32*t,this.vel.y<-30&&(this.vel.y=-30);let n=this.onGround;sr(this,e.world,t,n),this.onGround&&!n&&(this.sqv+=2.5)}};function ad(i,t,e,n,s,r){let o=i.P,a=i.W,l=a?a.x*e*a.mag:0,c=a?a.z*e*a.mag:0,h=xe(o.onGround?n:s,t);o.vel.x+=(l-o.vel.x)*h,o.vel.z+=(c-o.vel.z)*h,a&&(o.facing+=Qe(Math.atan2(a.x,a.z),o.facing)*xe(14,t)),o.vel.y-=r*t,o.vel.y<-32&&(o.vel.y=-32);let u=o.onGround,d=o.vel.y;return sr(o,i.world,t,u),o.hs=Math.hypot(o.vel.x,o.vel.z),{landed:o.onGround&&!u,vy0:d}}var oa=class extends hr{constructor(t,e,n,s){super(t,e,n,s,"Captured: Frog"),this.R=.48,this.H=.95,this.hopT=qn(1,3);let r=Lt(4834394,{roughness:.5}),o=Lt(15333288,{roughness:.6}),a=Lt(3115581,{roughness:.6});this.body=new Zt,this.group.add(this.body),De(new jt(.5,28,20),r,this.body,0,.42,0).scale.set(1,.72,1.12),De(new jt(.38,20,14),o,this.body,0,.36,.2).scale.set(1,.7,.9);for(let l of[-1,1])De(new jt(.17,16,12),r,this.body,l*.22,.78,.18),od(this.body,l*.22,.82,.26,.12,.7),De(new jt(.22,14,10),a,this.body,l*.4,.2,-.25).scale.set(.7,.6,1.4),De(new jt(.1,10,8),a,this.body,l*.26,.08,.38).scale.set(1.3,.5,1);this.legs=this.body.children.filter((l,c)=>c>0&&l.position.z===-.25),this.addHat(.92,.7),this.croakT=qn(2,6)}update(t,e){if(!this.captured){if(this.stun-=t,this.onGround&&(this.vel.x*=Math.exp(-8*t),this.vel.z*=Math.exp(-8*t),this.hopT-=t,this.hopT<=0)){this.hopT=qn(1.2,3.2);let n=this.home.x-this.pos.x,s=this.home.z-this.pos.z;this.facing=Math.hypot(n,s)>3?Math.atan2(n,s):this.facing+qn(-1.4,1.4);let r=Ye(this.facing);this.vel.set(r.x*2.4,6,r.z*2.4),this.sqv-=3}this.croakT-=t,this.croakT<0&&(this.croakT=qn(4,9),this.pos.distanceTo(e.P.pos)<10&&e.sfx.croak()),this.freeFall(t,e)}}control(t,e){let n=t.P,s=t.input.st;n.onGround&&n.jumpBuf>0?(n.jumpBuf=0,n.vel.y=21.5,n.onGround=!1,this.sqv-=6,this.bigJump=!0,t.sfx.bigJump(),t.sfx.croak(),t.fx.dust(n.pos.x,n.pos.y,n.pos.z,10,3,.25),t.hud.toast("Frog jump")):n.onGround&&t.W&&(n.vel.y=5.2,this.sqv-=2,this.bigJump=!1,t.sfx.hop());let r=32;this.bigJump&&n.vel.y>0&&!s.jump&&(r=60);let o=ad(t,e,7,10,7,r);o.landed&&(this.sqv+=2+ve(-o.vy0/10,0,3),t.sfx.land(.3),-o.vy0>10&&t.fx.dust(n.pos.x,n.pos.y,n.pos.z,8,2.5,.25)),this.pos.copy(n.pos),this.facing=n.facing,this.onGround=n.onGround}render(t,e,n){let s=n.P,r=this.captured?s.pos:this.pos,o=this.captured?s.vel.y:this.vel.y,a=this.captured?s.onGround:this.onGround;this.group.position.copy(r),this.group.rotation.y=this.captured?n.char.yaw:this.facing,this.spring(t),this.body.scale.set(1+this.sq*.4,1-this.sq,1+this.sq*.4);let l=a?0:ve(o/15,-1,1);this.body.rotation.x=-l*.25;for(let c of this.legs)c.scale.z=1.4+Math.max(0,l)*1.4,c.position.y=.2-Math.max(0,l)*.12}};function ld(i,t=!1){let e=Lt(10181167,{roughness:.6}),n=Lt(15848096,{roughness:.7}),s=Lt(4925974,{roughness:.6}),r=Lt(1905160),o=new Zt;i.add(o),De(new he(.22,.27,.32,18),n,o,0,.24,0),De(new jt(.5,28,18),e,o,0,.58,0).scale.set(1.05,.72,1.05),De(new jt(.42,24,14,0,ne,ut/2,ut/2),n,o,0,.56,.02).scale.set(1.08,.5,1.08);for(let l of[-1,1]){od(o,l*.15,.6,.39,.11,.6);let c=De(new Re(.2,.05,.05),r,o,l*.16,.76,.42);c.rotation.z=t?l*.25:-l*.35,De(new Ks(.035,.08,6),Lt(16777215),o,l*.1,.42,.42).rotation.x=ut}let a=[];for(let l of[-1,1]){let c=De(new jt(.16,14,10),s,i,l*.17,.08,.04);c.scale.set(1,.55,1.4),a.push(c)}if(t){let l=Lt(16736162,{roughness:.4});for(let c of[-1,1])De(new Ks(.14,.26,12),l,o,c*.13,.98,-.05).rotation.z=c*ut/2;De(new jt(.07,10,8),l,o,0,.98,-.05)}return{body:o,feet:a}}var ur=class i extends hr{constructor(t,e,n,s,r){super(t,e,n,s,"Captured: Goomba"),this.R=.45,this.H=.9,this.pen=r,this.stack=[],this.stacked=!1,this.squished=0,this.walk=Math.random()*ne,this.target=null,this.retarget=0,this.sway=new it;let o=ld(this.group);this.body=o.body,this.feet=o.feet,this.addHat(.98,.72)}canCapture(){return super.canCapture()&&!this.stacked&&this.squished<=0}capDist(t){let e=t.y-Math.min(Math.max(t.y,this.pos.y+.3),this.pos.y+this.H-.2);return Math.hypot(t.x-this.pos.x,e,t.z-this.pos.z)}setStack(t){this.stack=t,this.H=.9*(1+t.length)}update(t,e){if(this.captured||this.stacked)return;if(this.squished>0){this.squished-=t,this.squished<=0&&(this.pos.copy(this.home),this.vel.set(0,0,0),this.group.visible=!0,this.group.scale.set(1,1,1),e.fx.sparkle(this.pos.x,this.pos.y+.5,this.pos.z,10,16777215));return}this.stun-=t;let n=e.P,s=n.pos.x-this.pos.x,r=n.pos.z-this.pos.z,o=Math.hypot(s,r),a=n.capture instanceof i,l=1/(1+this.stack.length*.35),c,h,u=1.5*l;if(!a&&n.state!=="capture"&&n.state!=="moonGet"&&o<7&&o>.01&&this.stun<=0&&Math.abs(n.pos.y-this.pos.y)<2)c=s/o,h=r/o,u=3.3*l;else{if(this.retarget-=t,!this.target||this.retarget<=0){let m=qn(0,ne),f=Math.sqrt(Math.random())*this.pen.r;this.target={x:this.pen.x+Math.cos(m)*f,z:this.pen.z+Math.sin(m)*f},this.retarget=qn(2.5,5)}let p=this.target.x-this.pos.x,g=this.target.z-this.pos.z,_=Math.hypot(p,g);_<.5?(c=0,h=0):(c=p/_,h=g/_)}if(Math.hypot(this.pos.x-this.pen.x,this.pos.z-this.pen.z)>this.pen.r+2){let p=this.pen.x-this.pos.x,g=this.pen.z-this.pos.z,_=Math.hypot(p,g);c=p/_,h=g/_,u=2.2}(c||h)&&(this.facing+=Qe(Math.atan2(c,h),this.facing)*xe(6,t));let d=xe(this.onGround?8:2,t);this.vel.x+=(c*u-this.vel.x)*d,this.vel.z+=(h*u-this.vel.z)*d,this.freeFall(t,e),this.walk+=Math.hypot(this.vel.x,this.vel.z)*t*4,n.state!=="capture"&&this.stun<=0&&n.state!=="moonGet"&&Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z)<this.R+n.R+.05&&n.pos.y<this.pos.y+this.H&&n.pos.y+n.H>this.pos.y&&(n.vel.y<-1&&n.pos.y>this.pos.y+this.H*.45?this.stomp(e):["roll","dive","diveSlide","gpFall"].includes(n.state)?this.stomp(e,!0):e.player.hurt(this.pos.x,this.pos.z))}stomp(t,e){if(this.stack.length){let n=this.stack[0];n.stacked=!1,n.setStack(this.stack.slice(1)),n.pos.copy(this.pos),n.facing=this.facing,n.vel.set(0,0,0),n.stun=.6,n.target=null,this.setStack([])}this.squished=5,t.sfx.stomp(),t.fx.dust(this.pos.x,this.pos.y,this.pos.z,8,2.5,.25),t.popCoins.pop(this.pos.x,this.pos.y+.6,this.pos.z),e||t.player.bounceOff(t.input.st.jump?15:11)}control(t,e){let n=t.P,s=t.input.st;n.onGround&&n.jumpBuf>0&&(n.jumpBuf=0,n.vel.y=10.5,n.onGround=!1,this.sqv-=3,t.sfx.hop());let r=n.vel.y>0&&!s.jump?60:32,o=ad(t,e,5.5-this.stack.length*.3,12,6,r);if(o.vy0<0)for(let a of t.captures){if(!(a instanceof i)||a===this||a.captured||a.stacked||a.squished>0)continue;let l=a.pos.y+a.H;if(n.pos.y<=l+.15&&n.pos.y>=l-.55&&Math.hypot(n.pos.x-a.pos.x,n.pos.z-a.pos.z)<.9){this.addToStack(a,t);break}}o.landed&&(this.sqv+=2,t.sfx.land(.25)),this.walk+=n.hs*e*4,this.pos.copy(n.pos),this.facing=n.facing}addToStack(t,e){let n=e.P,s=[t,...t.stack];t.setStack([]);for(let r of s)r.stacked=!0;this.setStack(this.stack.concat(s)),n.pos.y=t.pos.y,n.pos.x=t.pos.x,n.pos.z=t.pos.z,n.H=this.H,n.vel.y=7,e.sfx.stack(),e.hud.toast("Goomba tower \xD7"+(this.stack.length+1)),e.fx.sparkle(n.pos.x,n.pos.y+n.H,n.pos.z,10,16773800)}release(t){return super.release(t),this.setStack(this.stack),this.target=null,this.retarget=1.5,this.H}render(t,e,n){if(this.squished>0){this.group.scale.y=Math.max(.15,this.group.scale.y-t*12),this.squished<4.4&&(this.group.visible=!1);return}if(this.stacked)return;let s=n.P,r=this.captured,o=r?s.pos:this.pos,a=r?s.hs:Math.hypot(this.vel.x,this.vel.z);this.spring(t);let l=this.stack.length,c=r?s.vel.x:this.vel.x,h=r?s.vel.z:this.vel.z;this.sway.x+=(-c*.02-this.sway.x)*xe(5,t),this.sway.y+=(-h*.02-this.sway.y)*xe(5,t);let u=r?n.char.yaw:this.facing;this.stack.forEach((d,p)=>{let g=l-1-p;d.group.position.set(o.x+this.sway.x*g*g*.5,o.y+.9*g,o.z+this.sway.y*g*g*.5),d.group.rotation.set(0,u,0),d.group.visible=!0,d.walkAnim(this.walk+g,a)}),this.group.position.set(o.x+this.sway.x*l*l*.5,o.y+.9*l,o.z+this.sway.y*l*l*.5),this.group.rotation.y=u,this.body.scale.set(1+this.sq*.4,1-this.sq,1+this.sq*.4),this.walkAnim(this.walk,a)}walkAnim(t,e){let n=ve(e/4,0,1);this.feet[0].position.z=.04+Math.sin(t)*.16*n,this.feet[1].position.z=.04-Math.sin(t)*.16*n,this.feet[0].position.y=.08+Math.max(0,Math.cos(t))*.08*n,this.feet[1].position.y=.08+Math.max(0,-Math.cos(t))*.08*n,this.body.rotation.z=Math.sin(t)*.08*n}},aa=class{constructor(t,e,n,s,r,o=0){this.pos=new P(e,n,s),this.moon=r,this.done=!1,this.facing=o,this.hintT=0,this.group=new Zt,this.group.position.copy(this.pos),this.group.rotation.y=o,t.scene.add(this.group),this.m=ld(this.group,!0),t.objects.push(this)}update(t,e){if(this.done)return;let n=e.P,s=Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z);if(n.capture instanceof ur&&s<1.5&&n.pos.y+n.H>=this.pos.y+.4&&n.pos.y<this.pos.y+1){this.done=!0,e.sfx.love();for(let r=0;r<3;r++)e.fx.burst(this.pos.x,this.pos.y+1.2,this.pos.z,10,3,16736162,.14,1,-1);e.hud.toast("Goombette is smitten!"),this.moon.reveal(e,this.pos.clone().add(new P(0,1.4,0)))}}render(t,e,n){let s=n.P,r=Math.atan2(s.pos.x-this.pos.x,s.pos.z-this.pos.z);this.facing+=Qe(r,this.facing)*xe(3,t),this.group.rotation.y=this.facing,this.m.body.position.y=Math.abs(Math.sin(e*(this.done?9:2)))*(this.done?.15:.03)}},dr=class extends hr{constructor(t,e,n,s,r,o){super(t,e,n,s,"Captured: Spark pylon"),this.R=.6,this.H=2.6,this.canRelease=!1,this.curve=r,this.len=r.getLength(),this.endFacing=o;let a=(()=>{let l=document.createElement("canvas");l.width=16,l.height=128;let c=l.getContext("2d");for(let u=0;u<8;u++)c.fillStyle=u%2?"#1d2a44":"#ffcf3f",c.fillRect(0,u*16,16,16);let h=new fs(l);return h.colorSpace=Ve,h})();De(new he(.55,.65,.3,20),Lt(5989752),this.group,0,.15,0),De(new he(.16,.2,2.1,14),new ue({map:a,roughness:.5}),this.group,0,1.3,0),this.orbMat=new ue({color:9365759,emissive:3852543,emissiveIntensity:1.2,roughness:.2}),this.orb=De(new jt(.42,24,16),this.orbMat,this.group,0,2.6,0);for(let l=0;l<3;l++){let c=De(new ms(.55,.03,8,32),Lt(16764735,{metalness:.6,roughness:.3}),this.group,0,2.6,0);c.rotation.x=l*ut/3}this.addHat(3.05,.6),this.group.position.copy(this.pos),this.ball=new ht(new jt(.5,20,14),new je({color:12580095})),this.ball.visible=!1,t.scene.add(this.ball),t.world.cyl(e,s,.3,n,n+2.2,{noLedge:!0,noWall:!0}),this.s=0,this.zapT=0}capDist(t){let e=t.y-Math.min(Math.max(t.y,this.pos.y+.4),this.pos.y+2.9);return Math.hypot(t.x-this.pos.x,e,t.z-this.pos.z)}onCapture(t){super.onCapture(),this.s=0,t.sfx.zap(),this.ball.visible=!0}release(t){this.captured=!1,this.hat.visible=!1,this.stun=1.5,this.ball.visible=!1;let e=Ye(this.endFacing);return this.releaseVel=new P(e.x*2,11,e.z*2),t.P.facing=this.endFacing,0}update(t){this.captured||(this.stun-=t)}control(t,e){let n=t.P;this.s+=30*e;let s=Math.min(1,this.s/this.len),r=this.curve.getPointAt(s),o=this.curve.getTangentAt(s);n.pos.copy(r),n.vel.set(o.x*30,o.y*30,o.z*30),n.hs=30,n.facing=Math.atan2(o.x,o.z),this.zapT-=e,this.zapT<=0&&(this.zapT=.03,t.fx.burst(r.x,r.y,r.z,2,3,10481919,.08,.3,0)),s>=1&&(t.sfx.zap(),t.player.endCapture())}render(t,e,n){this.orbMat.emissiveIntensity=1+Math.sin(e*8)*.3,this.captured&&(this.ball.position.copy(n.P.pos),this.ball.scale.setScalar(.9+Math.sin(e*40)*.15))}};function cd(i,t){let e=new Do(t,80,.05,6,!1),n=new ht(e,new ue({color:2832999,emissive:3852543,emissiveIntensity:.25,roughness:.4}));return i.scene.add(n),n}var Yt={floor:13225686,wall:15264752,white:16052714,orange:16751186,yellow:16765286,pink:16744372,purple:10980346,blue:8373503,green:9428090,teal:6280132,red:16739179,grey:11186880},Ze={gold:16765503,cyan:6283519,pink:16744392,orange:16752703,green:8257418,purple:12884991,red:16739179};function pe(i,t,e,n,s,r,o,a,l={}){let c=e+r/2,h=i.world.box(t,c,n,s,r,o,l),u=jo(new Re(s,r,o),t,c,n),d=new ht(u,or(a));return d.position.set(t,c,n),d.castShadow=!l.noShadow,d.receiveShadow=!0,l.noEdges||d.add(new wi(new Ti(u),Qx())),i.scene.add(d),h.mesh=d,h}var hd=null,Qx=()=>hd||(hd=new li({color:1911364,transparent:!0,opacity:.22}));function la(i,t,e,n){for(let s=0;s<n;s++){let r=n===1?0:s/(n-1);new ui(i,t[0]+(e[0]-t[0])*r,t[1]+(e[1]-t[1])*r,t[2]+(e[2]-t[2])*r)}}function ud(i,t,e,n,s,r){for(let o=0;o<r;o++){let a=o/r*ne;new ui(i,t+Math.cos(a)*s,e,n+Math.sin(a)*s)}}function t_(i,t,e,n,s){for(let r=0;r<n;r++){let o=(r+1)/(n+1);new ui(i,t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o+Math.sin(o*ut)*s,t[2]+(e[2]-t[2])*o)}}function xn(i,t,e,n,s,r){let o=Rn(64,64,l=>{l.fillStyle="#ffffff",l.fillRect(0,0,64,64),l.strokeStyle="rgba(0,0,0,0.25)",l.lineWidth=6,l.strokeRect(0,0,64,64)}),a=new ht(new Tn(n,s),new ue({color:r,map:o,roughness:.9,transparent:!0,opacity:.45,polygonOffset:!0,polygonOffsetFactor:-2}));a.rotation.x=-ut/2,a.position.set(t,.005,e),a.receiveShadow=!0,i.scene.add(a)}function dd(i){let t=i.world;pe(i,0,-2,0,164,2,164,Yt.floor,{noEdges:!0,noShadow:!0,noCam:!0});for(let[f,S,y,x]of[[0,-82,164,2],[0,82,164,2],[-82,0,2,164],[82,0,2,164]])pe(i,f,0,S,y,8,x,Yt.wall,{noLedge:!0,noShadow:!0,noEdges:!0});for(let f=0;f<10;f++)new ra(i,-110+f*24,34+Math.random()*14,-70+Math.random()*140,3+Math.random()*2.5);xn(i,0,6,16,14,Yt.yellow),new we(i,0,0,-1,0,"HOP LAB \xB7 DEV ROOM",["Every station has a Power Moon.","Press ? for moves and warps."],"#ffd166"),ud(i,0,.8,4,2.6,10),new Yn(i,4,0,12,"Plaza",ut),new Es(i,-6,3.5,5,1),new Es(i,-5,3.5,5,5),new Es(i,-4,3.5,5,1),new we(i,-5,0,7.5,0,"? BLOCKS",["Jump into them from below.","The middle one has 5 coins."],"#ffd166");let e=new Ne(i,9,1.4,5,"Brick Breaker",{hidden:!0,color:Ze.orange});for(let f of[8,9,10])for(let S of[4,5,6])new ar(i,f,.5,S,f===9&&S===5?e:null);new ar(i,9,1.5,5),new we(i,9,0,8,0,"BRICKS",["Ground pound the top brick","and keep pounding through."],"#ff9a52");let n=new Ne(i,-9,2.2,13,"Pound the Post",{hidden:!0,color:Ze.green});new na(i,-9,0,13,n),new we(i,-9,0,15.5,0,"POST",["Ground pound it flat."],"#8fdc7a"),xn(i,-12.5,-18,18,8,Yt.orange),pe(i,-18,0,-18,3.5,1.6,3.5,Yt.white),pe(i,-12.5,0,-18,3.5,2.5,3.5,Yt.yellow),pe(i,-7,0,-18,3.5,4.2,3.5,Yt.orange),new ui(i,-18,2.4,-18),new ui(i,-12.5,3.3,-18),new Ne(i,-7,5.3,-18,"Triple Jump Tier",{color:Ze.gold}),new we(i,-12.5,0,-13.2,0,"JUMP CHAIN",["1.6m \xB7 2.5m \xB7 4.2m","Run and jump as you land, 3 times."],"#ff9a52"),new Yn(i,-2,0,-12,"Jump Tiers",ut),xn(i,4,-21,5,26,Yt.blue),pe(i,4,0,-9,3,1,2,Yt.white),pe(i,4,0,-14,3,2,8,Yt.blue),pe(i,4,0,-28.5,3,2,6,Yt.blue),t_(i,[4,2.8,-18],[4,2.8,-25.5],5,1.4),new Ne(i,4,3.4,-29.5,"Long Jump Gap",{color:Ze.cyan}),new we(i,7,0,-9,-ut/6,"LONG JUMP \xB7 7.5m",["Run, hold Crouch, then Jump."],"#7fc4ff"),xn(i,18,-15,6,7,Yt.purple),pe(i,18,0,-16,2.2,4.6,2.2,Yt.purple),new Ne(i,18,5.8,-16,"Backflip Pillar",{color:Ze.purple}),new we(i,18,0,-12.2,0,"BACKFLIP \xB7 4.6m",["Stand still, hold Crouch, Jump."],"#a78bfa"),xn(i,14,0,5,18,Yt.blue);let s=[];for(let f=0;f<8;f++){let S=1.1*(f+1);s.push([14,S-.25,6-f*1.7,2,.5,1.3])}s.push([14,9.9-.25,-7.8,2.6,.5,2.6]),new ia(i,14,0,8.5,s,9),new Ne(i,14,11.1,-7.8,"Timed Staircase",{color:Ze.cyan}),new we(i,17,0,10,-ut/5,"P SWITCH",["Step on it. 9 seconds to climb!"],"#7fc4ff"),xn(i,-29.3,0,8,10,Yt.orange),pe(i,-31.7,0,0,1.4,14,7,Yt.orange),pe(i,-26.9,0,0,1.4,14,7,Yt.orange),new Ne(i,-29.3,13,0,"Chimney Climb",{color:Ze.orange}),la(i,[-29.3,3,0],[-29.3,9,0],4),new we(i,-24,0,4.5,-ut/2.4,"WALL JUMP \xB7 14m",["Slide down a wall, then Jump.","Hold toward each wall."],"#ff9a52"),new Yn(i,-22,0,-4,"West Wing",-ut/2),xn(i,-30,-14,8,14,Yt.teal),pe(i,-30,0,-13.5,6,3,3,Yt.teal),pe(i,-30,0,-16.5,6,5.5,3,Yt.white),pe(i,-30,0,-19.5,6,8,3,Yt.teal),new Ne(i,-30,9.3,-19.5,"Ledge Ladder",{color:Ze.green}),new we(i,-25,0,-9.5,-ut/4,"LEDGE GRAB",["Jump at a ledge and hold toward it.","Jump to climb, move to shimmy."],"#5fd3c4"),pe(i,-44,0,-40,5,20,5,Yt.grey);let r=new lr(i,-14,0,14,1.3),o=new lr(i,-44,20,-40,1);r.link=o,o.link=r,new Ne(i,-44,21.6,-42,"Pipe Dream Lookout",{color:Ze.red}),new Yn(i,-42.6,20,-38.6,"Lookout",ut/4),new we(i,-14,0,17,0,"WARP PIPE",["Crouch on it, or ground","pound onto it."],"#8fdc7a");let a=new ht(new Xn(5,48),new ue({color:4175848,roughness:.15,metalness:.1,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-3}));a.rotation.x=-ut/2,a.position.set(-22,.01,24),a.receiveShadow=!0,i.scene.add(a);for(let f=0;f<5;f++){let S=f/5*ne,y=new ht(new Xn(.7,20,.3,ne-.6),new ue({color:5620830}));y.rotation.x=-ut/2,y.position.set(-22+Math.cos(S)*3,.02,24+Math.sin(S)*3),i.scene.add(y)}new oa(i,-22,0,24),pe(i,-31,0,31,8,6.5,8,Yt.green),new Ne(i,-31,7.7,31,"Frog Leap",{color:Ze.green}),new we(i,-16,0,19,-ut/4,"FROG \xB7 6.5m cliff",["Throw your cap at the frog.","Jump for a huge leap."],"#8fdc7a"),xn(i,0,32,14,12,Yt.red);let l={x:0,z:32,r:5};for(let[f,S]of[[-3,30],[2,29],[3.5,34],[-2,35],[0,32]])new ur(i,f,0,S,l);pe(i,0,0,40.5,4,3,3,Yt.pink);let c=new Ne(i,0,1.4,36.6,"Goomba Tower",{hidden:!0,color:Ze.pink});new aa(i,0,3,39.6,c,ut),ud(i,0,.8,32,6.5,8),new we(i,9,0,27,-ut/4,"GOOMBA TOWER",["Capture one, then land on others","to stack. Reach the one on top!"],"#ff6b6b"),new Yn(i,10,0,22,"Capture Yard",0),pe(i,36,0,0,6,14,6,Yt.grey);let h=new P(20,2.6,26),u=new P(36,16.6,0),d=new ps([h,new P(25,9,19),new P(31,15.5,8),u]);cd(i,d);let p=new ps(d.points.slice().reverse());new dr(i,20,0,26,d,Math.atan2(u.x-31,u.z-8)),new dr(i,36,14,0,p,Math.atan2(-5,7)),new Ne(i,34,15.4,-1.8,"Electric Express",{color:Ze.cyan}),new we(i,17.5,0,24,ut/3,"SPARK PYLON",["Throw your cap at the orb","to ride the wire."],"#7fc4ff"),xn(i,24,16,6,16,Yt.yellow),pe(i,24,0,9.5,3,1,2,Yt.white),pe(i,24,0,13,4,2,4,Yt.yellow),pe(i,24,4.9,21.5,3.5,.6,3.5,Yt.yellow),new Ne(i,24,6.7,21.5,"Cap Jump Float",{color:Ze.gold}),new we(i,27.5,0,8,-ut/5,"CAP JUMP",["Jump, throw your cap,","then jump into it again."],"#ffd166"),new Yn(i,26,0,2,"East Wing",ut/2),xn(i,33,-11,16,12,Yt.pink),new Li(i,28,0,-8,{power:23}),pe(i,34,0,-8,4,6,4,Yt.pink),new Li(i,34,6,-8,{power:23,color:11635967}),pe(i,40,0,-14,4,12,4,Yt.purple),new Ne(i,40,13.3,-14,"Flower Garden Summit",{color:Ze.pink}),new Li(i,28,0,-14,{power:15,color:16757575}),new Li(i,31,0,-16,{power:12,color:16739179}),la(i,[28,3,-8],[28,7,-8],3),new we(i,25,0,-5,-ut/3,"JUMP FLOWERS",["Land on one to launch.","Jump or pound for extra height."],"#ff7fb4"),xn(i,46,26,26,20,Yt.blue),new ea(i,35.5,0,20,21),pe(i,40,0,20,4,6,4,Yt.blue),new cr(i,new P(45.5,5.75,20),new P(52,5.75,20),{x:3,y:.5,z:3},3.6,Yt.yellow),new sa(i,57,6,20,2.5,1.1),new cr(i,new P(57,5.75,26.5),new P(57,11.75,26.5),{x:3,y:.5,z:3},4.6,Yt.green),pe(i,57,0,33,4,13,4,Yt.blue),new Ne(i,57,14.3,33,"Platform Hopper",{color:Ze.purple}),la(i,[46,7,20],[51,7,20],3),new we(i,33,0,16.5,-ut/4,"PLATFORMS",["Spring up, then ride the","mover, spinner and lift."],"#7fc4ff"),t.ramp(-18,-10,42,58,"z",1,0,6);let g=new Ee,_=[-18,0,42,-10,0,42,-10,6,58,-18,6,58,-18,0,58,-10,0,58];g.setAttribute("position",new Gt(_,3)),g.setIndex([0,2,1,0,3,2,0,4,3,1,2,5,4,5,2,4,2,3]),g.setAttribute("uv",new Gt([-9,21,-5,21,-5,29,-9,29,-9,29,-5,29],2)),g=g.toNonIndexed(),g.computeVertexNormals();let m=new ht(g,or(Yt.orange));m.castShadow=!0,m.receiveShadow=!0,i.scene.add(m),pe(i,-14,0,62,8,6,8,Yt.orange),la(i,[-14,1,44],[-14,5.5,56],7),new we(i,-6.5,0,40,-ut/5,"ROLL RAMP",["Climb up, then hold Crouch","and press Cap to roll down."],"#ff9a52"),i.stations=[["Plaza",0,0,10,ut],["Jump chain",-12.5,0,-11,ut],["Long jump",4,0,-5,ut],["Backflip",18,0,-10.5,ut],["P switch",14,0,11,ut],["Wall jump",-23,0,0,-ut/2],["Ledge grab",-30,0,-8,ut],["Warp pipe",-14,0,18,ut],["Frog",-17,0,20,-ut/4],["Goomba tower",0,0,24,0],["Spark pylon",17,0,23,ut/3],["Cap jump",24,0,5,0],["Jump flowers",24,0,-4,ut/2],["Platforms",32,0,20,ut/2],["Roll ramp",-14,0,36,0]].map(([f,S,y,x,N])=>({name:f,pos:new P(S,y,x),facing:N}))}var ca={pos:new P(0,0,10),facing:ut},e_=1/120;async function n_(){if(!document.createElement("canvas").getContext("webgl2"))throw new Error("This browser doesn\u2019t support WebGL 2, which the game needs.");try{await Promise.race([document.fonts.load("700 40px Fredoka"),new Promise(w=>setTimeout(w,1500))])}catch{}let i=document.getElementById("c"),t=new go({canvas:i,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.toneMapping=bc,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Mc;let e=new ds;e.background=Rn(2,256,w=>{let C=w.createLinearGradient(0,0,0,256);C.addColorStop(0,"#4ea8f5"),C.addColorStop(.55,"#9fd4ff"),C.addColorStop(1,"#e4f4ff"),w.fillStyle=C,w.fillRect(0,0,2,256)}),e.fog=new xo(13625855,70,190);let n=new us(t);e.environment=n.fromScene(new Go,.04).texture,e.environmentIntensity=.45,e.add(new Fo(14939135,10129274,1.1));let s=new zo(16773336,2.6);s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.bias=-4e-4,s.shadow.normalBias=.03,Object.assign(s.shadow.camera,{left:-28,right:28,top:28,bottom:-28,near:1,far:120}),e.add(s,s.target);let r=new We(58,1,.1,400),o={scene:e,world:new Xo,fx:new Yo(e),sfx:Zo,hud:Wu(),objects:[],captures:[],moons:[],checkpoints:[],spawn:ca,spawnFlag:null,coins:0,moonsGot:0,time:0,paused:!0,W:null};o.input=Yu(o,i,d),o.P=$u(ca.pos,ca.facing),o.char=new Ko,e.add(o.char.root),o.capMesh=rr(!0),o.capMesh.visible=!1,e.add(o.capMesh),o.cap=Qu(o),o.camRig=new $o(r,o),o.player=ju(o),o.popCoins=new ta(o),o.addCoins=w=>{o.coins+=w,o.hud.setCoins(o.coins)},o.onMoon=w=>{o.P.capture&&o.player.endCapture(!0),o.moonsGot++,o.player.moonGet(w),o.hud.setMoons(o.moonsGot,o.moons.length),o.hud.banner(w.name),Zo.moon();let C=w.group.position;o.fx.sparkle(C.x,C.y,C.z,30,16774048),o.moonsGot===o.moons.length&&setTimeout(()=>o.hud.toast("Every moon found! Nice moves."),2600)},dd(o),o.hud.setMoons(0,o.moons.length),o.char.onStep=w=>{Zo.step(),w>.75&&o.fx.dust(o.P.pos.x,o.P.pos.y,o.P.pos.z,1,.6,.14)};let a=new ht(new Xn(.45,32),new je({color:0,transparent:!0,opacity:.28,depthWrite:!1}));a.rotation.x=-ut/2,e.add(a);let l=document.getElementById("help"),c=document.getElementById("lockHint"),h=()=>document.body.classList.contains("touch");function u(w){o.paused=w,l.hidden=!w,w?(document.pointerLockElement&&document.exitPointerLock(),document.getElementById("play").focus()):(o.P.jumpBuf=o.P.crouchBuf=o.P.capBuf=0,c.hidden=h()||o.input.st.locked)}function d(w){if(w==="menu"){u(!o.paused);return}if(!o.paused){if(w==="restart"){o.player.respawn();return}if(w==="mute"){g();return}o.player.press(w)}}o.onLockChange=w=>{c.hidden=w||o.paused||h()};let p=document.getElementById("muteBtn");function g(){Vu(!Ss()),p.setAttribute("aria-pressed",String(Ss())),p.classList.toggle("muted",Ss())}p.classList.toggle("muted",Ss()),p.setAttribute("aria-pressed",String(Ss())),p.addEventListener("click",()=>{Ii(),g(),p.blur()}),document.getElementById("helpBtn").addEventListener("click",()=>u(!0)),document.getElementById("play").addEventListener("click",()=>{if(Ii(),u(!1),!h()&&i.requestPointerLock)try{let w=i.requestPointerLock();w&&w.catch&&w.catch(()=>{})}catch{}});for(let w of document.querySelectorAll("[data-tab]"))w.addEventListener("click",()=>{for(let C of document.querySelectorAll("[data-tab]"))C.setAttribute("aria-selected",String(C===w));for(let C of document.querySelectorAll("[data-panel]"))C.hidden=C.dataset.panel!==w.dataset.tab});let _=document.getElementById("warpList");for(let w of o.stations){let C=document.createElement("button");C.className="warp",C.textContent=w.name,C.addEventListener("click",()=>{o.player.respawn(w),u(!1)}),_.appendChild(C)}matchMedia("(pointer: coarse)").matches&&document.body.classList.add("touch"),addEventListener("touchstart",()=>document.body.classList.add("touch"),{once:!0,passive:!0});function m(){let w=innerWidth,C=innerHeight;t.setSize(w,C,!1),r.aspect=w/C,r.updateProjectionMatrix()}addEventListener("resize",m),m();let f=o.P,S=performance.now(),y=0;function x(){let w=o.input.st,C=o.camRig.yaw,b=-Math.sin(C),v=-Math.cos(C),D=Math.cos(C),U=-Math.sin(C),F=Math.hypot(w.mx,w.my),T=D*w.mx+b*w.my,O=U*w.mx+v*w.my;o.W=F>.15?{x:T/F,z:O/F,mag:Math.min(1,F)}:null}function N(){let w=f.state;if(w==="capture")return f.capture.canRelease?"Crouch to release":"";if(w==="ledge")return"Jump to climb \xB7 Crouch to let go";if(w==="crouch")return f.hs>3.5?"Jump: long jump \xB7 Cap: roll":"Jump: backflip \xB7 Cap: roll";if(w==="roll")return"Cap to speed up \xB7 Jump to roll jump";if(f.onGround&&f.ground&&f.ground.pipe)return"Crouch or ground pound to enter the pipe";if(w==="ground"||w==="air"){for(let C of o.captures)if(C.canCapture()&&C.pos.distanceTo(f.pos)<4.5)return"Throw your cap to capture"}return""}function R(w){requestAnimationFrame(R);let C=Math.min(.05,(w-S)/1e3);if(S=w,o.time+=C,o.input.poll(C),o.camRig.applyInput(C,w),x(),!o.paused){let F=Math.max(1,Math.ceil(C/e_-1e-6)),T=C/F;for(let O=0;O<F;O++){for(let I of o.objects)I.update&&I.update(T,o);for(let I of o.captures)I.update(T,o);o.player.step(T),o.cap.update(T)}}let b=o.paused?0:C,v=o.char;v.root.position.copy(f.pos),v.root.visible=f.state!=="capture"&&!(f.invuln>0&&Math.sin(o.time*40)>0),v.hat.visible=!o.cap.active&&f.state!=="capture",v.animate(f,b,o.time,o.camRig.yaw),o.cap.render(o.capMesh,b,o.time);for(let F of o.objects)F.render&&F.render(b,o.time,o);for(let F of o.captures)F.render(b,o.time,o);if(y-=b,y<=0&&["skid","diveSlide","roll"].includes(f.state)&&f.hs>2&&(y=.05,o.fx.dust(f.pos.x,f.pos.y,f.pos.z,1,1,.2)),y<=0&&(f.state==="twirl"||f.state==="spinjump")){y=.03;let F=o.time*20;o.fx.spawn(f.pos.x+Math.sin(F)*.8,f.pos.y+.9,f.pos.z+Math.cos(F)*.8,0,-.5,0,.35,.1,0,12580095,0,1)}y<=0&&f.state==="wall"&&(y=.08,o.fx.dust(f.pos.x-f.wallN.x*.35,f.pos.y+1.2,f.pos.z-f.wallN.z*.35,1,.4,.12)),o.fx.update(b);let D=Fc(o.world,f.pos.x,f.pos.y+.05,f.pos.z,0);if(a.visible=!!D&&f.state!=="pipe"&&f.state!=="capture",D){let F=Math.max(.3,1-(f.pos.y-D.y)*.07);a.position.set(f.pos.x,D.y+.03,f.pos.z),a.scale.setScalar(F)}o.camRig.update(C,w);let U=o.camRig.target;s.position.set(Math.round(U.x)+20,U.y+36,Math.round(U.z)+12),s.target.position.set(Math.round(U.x),U.y,Math.round(U.z)),o.hud.prompt(o.paused?"":N()),t.render(e,r)}o.camRig.snap(ca.facing+ut),document.getElementById("loading").remove(),u(!0),requestAnimationFrame(R),new URLSearchParams(location.search).has("debug")&&(o.renderNow=(w=1/60)=>{o.char.animate(f,w,o.time,o.camRig.yaw),o.camRig.update(w,performance.now()),t.render(e,r)},window.HL=o)}n_().catch(i=>{console.error(i),window.hoplabFail&&window.hoplabFail(i&&i.message?i.message:String(i))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
