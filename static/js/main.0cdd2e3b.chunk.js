(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{22:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),i=a.n(c),s=(a(30),a(16)),o=a(4),l=a(5),d=a(7),u=a(6),j=(a(22),a(13)),b=a(3),h=a(2),m=a.n(h),p=a(8),O=a(14),f="user",x=function(e){return localStorage.setItem(f,JSON.stringify(e))},v=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},g=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(f));null===t&&(t={}),v(t)(e)}))},k=function(e){return new Promise((function(t){x(Object(s.a)(Object(s.a)({},{name:"",email:"",image:"",description:""}),e)),v("OK")(t)}))},S=function(e){return new Promise((function(t){x(Object(s.a)({},e)),v("OK")(t)}))},U=a(0),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsx)("div",{className:"loading",children:"Carregando..."})}}]),a}(n.Component),N=y,w=(a(33),a.p+"static/media/gif-play-music.186b278b.gif"),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onInputChange=function(t){var a=t.target,n=a.name,r="checkbox"===a.type?a.checked:a.value;e.setState(Object(O.a)({},n,r))},e.onInputLogin=Object(p.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.name,e.setState({loading:!0}),t.next=4,k({name:a});case 4:e.setState({redirect:!0,loading:!1});case 5:case"end":return t.stop()}}),t)}))),e.state={name:"",loading:!1,redirect:!1},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.redirect,n=e.loading;return a?Object(U.jsx)(b.a,{to:"/search"}):n?Object(U.jsx)(N,{}):Object(U.jsx)("div",{"data-testid":"page-login",className:"login",children:Object(U.jsxs)("div",{className:"login-container",children:[Object(U.jsx)("p",{children:"Mytunes"}),Object(U.jsx)("img",{src:w,alt:"gif escutando musica",className:"image-music"}),Object(U.jsx)("p",{children:"Sing in "}),Object(U.jsxs)("form",{children:[Object(U.jsx)("input",{type:"text",name:"name","data-testid":"login-name-input",value:t,onChange:this.onInputChange}),Object(U.jsx)("button",{type:"button","data-testid":"login-submit-button",disabled:t.length<=2,onClick:this.onInputLogin,children:"Entrar"})]})]})})}}]),a}(n.Component),I=(a(42),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).user=Object(p.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:a=t.sent,e.setState({user:a.name,loadingUser:!1});case 4:case"end":return t.stop()}}),t)}))),e.state={user:"",loadingUser:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.user()}},{key:"render",value:function(){var e=this.state,t=e.loadingUser,a=e.user;return t?Object(U.jsx)(N,{}):Object(U.jsx)("header",{"data-testid":"header-component",className:"header-container",children:Object(U.jsxs)("div",{className:"header-card",children:[Object(U.jsxs)("div",{className:"login-card",children:[Object(U.jsx)("h1",{children:"Mytunes"}),Object(U.jsxs)("div",{children:[Object(U.jsx)("span",{children:"Bem vindo: "}),Object(U.jsx)("span",{"data-testid":"header-user-name",children:a})]})]}),Object(U.jsxs)("div",{className:"links-header",children:[Object(U.jsxs)(j.b,{to:"/search","data-testid":"link-to-search",className:"link-button",children:["Search"," "]}),Object(U.jsxs)(j.b,{to:"/favorites","data-testid":"link-to-favorites",className:"link-button",children:["Favorites"," "]}),Object(U.jsxs)(j.b,{to:"/profile","data-testid":"link-to-profile",className:"link-button",children:["Profile"," "]})]})]})})}}]),a}(n.Component)),P=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,r,c,i,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURI(t).replaceAll("%20","+"),n="https://itunes.apple.com/search?entity=album&term=".concat(a,"&attribute=allArtistTerm"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,i=c.results,s=i.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=P,E=(a(43),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onInputChange=function(t){var a=t.target,n=a.name,r="checkbox"===a.type?a.checked:a.value;e.setState(Object(O.a)({},n,r))},e.onSearchAlbuns=Object(p.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.nameSearch,e.setState({loadingSearch:!0,nameSaved:a}),t.next=4,F(a);case 4:n=t.sent,e.setState({loadingSearch:!1,allAlbums:n,nameSearch:""}),console.log(n);case 7:case"end":return t.stop()}}),t)}))),e.createAlbum=function(){var t=e.state,a=t.allAlbums,n=t.loadingSearch;return 0===a.length?Object(U.jsx)("h2",{children:"Nenhum \xe1lbum foi encontrado"}):n?Object(U.jsx)(N,{}):Object(U.jsx)("div",{children:Object(U.jsx)("div",{className:"container-albums",children:a.map((function(e){return Object(U.jsx)(j.b,{"data-testid":"link-to-album-".concat(e.collectionId),to:"/album/".concat(e.collectionId),children:Object(U.jsxs)("div",{className:"card-album",children:[Object(U.jsx)("p",{children:e.collectionName}),Object(U.jsx)("img",{src:e.artworkUrl100,alt:""})]})},e.collectionId)}))})})},e.state={nameSearch:"",nameSaved:"",loadingSearch:!1,allAlbums:[]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.nameSearch,a=e.loadingSearch,n=e.nameSaved;return a?Object(U.jsx)(N,{}):Object(U.jsxs)("div",{"data-testid":"page-search",children:[Object(U.jsx)(I,{}),Object(U.jsxs)("div",{className:"search-card",children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{type:"text","data-testid":"search-artist-input",name:"nameSearch",value:t,onChange:this.onInputChange}),Object(U.jsx)("button",{type:"submit","data-testid":"search-artist-button",disabled:t.length<=1,onClick:this.onSearchAlbuns,children:"Procurar"})]}),Object(U.jsx)("h1",{children:"Resultado de \xe1lbuns de: ".concat(n)}),Object(U.jsx)("div",{children:this.createAlbum()})]})]})}}]),a}(n.Component)),T=a(15),A="favorite_songs";JSON.parse(localStorage.getItem(A))||localStorage.setItem(A,JSON.stringify([]));var M=function(){return JSON.parse(localStorage.getItem(A))},D=function(e){return localStorage.setItem(A,JSON.stringify(e))},J=function(e){return function(t){setTimeout((function(){t(e)}),500)}},q=function(){return new Promise((function(e){var t=M();J(t)(e)}))},K=function(e){return new Promise((function(t){if(e){var a=M();D([].concat(Object(T.a)(a),[e]))}J("OK")(t)}))},z=function(e){return new Promise((function(t){var a=M();D(a.filter((function(t){return t.trackId!==e.trackId}))),J("OK")(t)}))},L=(a(44),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).addFavoriteSong=Object(p.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.track,e.setState({loadingFavorite:!0}),t.next=4,K(a);case 4:e.setState({checked:!0,loadingFavorite:!1});case 5:case"end":return t.stop()}}),t)}))),e.turnFavChecked=function(){e.setState({checked:!0})},e.turnChecked=Object(p.a)(m.a.mark((function t(){var a,n,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state.checked,n=e.props.track,!a){t.next=9;break}return e.setState({loadingFavorite:!0}),t.next=6,z(n);case 6:return r=e.props,c=r.callbackParent,"/favorites"===r.pathname&&c(),t.abrupt("return",e.setState({checked:!1,loadingFavorite:!1}));case 9:return t.next=11,e.addFavoriteSong();case 11:case"end":return t.stop()}}),t)}))),e.state={loadingFavorite:!1,checked:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.track;e.savedTracks.find((function(e){return e.trackName===t.trackName}))&&this.turnFavChecked()}},{key:"render",value:function(){var e=this.state,t=e.loadingFavorite,a=e.checked,n=this.props.track,r=n.trackName,c=n.previewUrl,i=n.trackId;return t?Object(U.jsx)(N,{}):Object(U.jsx)("div",{children:Object(U.jsxs)("div",{className:"track-example",children:[Object(U.jsx)("p",{children:r}),Object(U.jsxs)("audio",{"data-testid":"audio-component",src:c,controls:!0,children:[Object(U.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento"," ",Object(U.jsx)("code",{children:"audio"}),"."]}),Object(U.jsxs)("label",{htmlFor:r,children:["Favorita",Object(U.jsx)("input",{"data-testid":"checkbox-music-".concat(i),type:"checkbox",name:r,checked:a,id:r,onChange:this.turnChecked})]})]})})}}]),a}(n.Component));L.defaultProps={pathname:void 0,callbackParent:void 0};var B=L,R=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=R,Z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getMusicsId=Object(p.a)(m.a.mark((function t(){var a,n,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match.params.id,e.setState({loadingTracks:!0}),t.next=4,V(a);case 4:return n=t.sent,t.next=7,q();case 7:r=t.sent,e.setState({tracks:Object(T.a)(n),savedTracks:Object(T.a)(r),loadingTracks:!1}),c=e.state.tracks,console.log(c[0].artistName);case 11:case"end":return t.stop()}}),t)}))),e.state={tracks:[],savedTracks:[],loadingTracks:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMusicsId()}},{key:"render",value:function(){var e=this.state,t=e.tracks,a=e.loadingTracks,n=e.savedTracks;return 0===t.length||a?Object(U.jsx)(N,{}):Object(U.jsxs)("div",{"data-testid":"page-album",children:[Object(U.jsx)(I,{}),Object(U.jsxs)("div",{className:"card-music",children:[Object(U.jsxs)("div",{className:"card-artist",children:[Object(U.jsx)("div",{className:"card-image",children:Object(U.jsx)("img",{className:"image-artist",src:t[0].artworkUrl100,alt:""})}),Object(U.jsx)("h3",{"data-testid":"album-name",children:t[0].collectionName}),Object(U.jsx)("h4",{"data-testid":"artist-name",children:t[0].artistName})]},t[0].amgArtistId),Object(U.jsx)("div",{children:t.slice(1).map((function(e){return Object(U.jsx)(B,{track:e,savedTracks:n},e.trackId)}))})]})]})}}]),a}(n.Component),_=(a(45),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).allFavoriteSongs=Object(p.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loadingSongs:!0}),t.next=3,q();case 3:a=t.sent,e.setState({tracks:Object(T.a)(a),loadingSongs:!1});case 5:case"end":return t.stop()}}),t)}))),e.state={tracks:[],loadingSongs:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.allFavoriteSongs()}},{key:"render",value:function(){var e=this,t=this.state,a=t.loadingSongs,n=t.tracks,r=this.props.location.pathname;return a?Object(U.jsx)(N,{}):Object(U.jsxs)("div",{"data-testid":"page-favorites",className:"fav-container",children:[Object(U.jsx)(I,{}),Object(U.jsxs)("label",{htmlFor:"favorita",children:["Favorita",Object(U.jsx)("div",{id:"favorita",children:n.map((function(t){return Object(U.jsx)(B,{track:t,savedTracks:n,pathname:r,callbackParent:function(){return e.allFavoriteSongs()}},t.trackId)}))})]})]})}}]),a}(n.Component)),G=(a(46),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getUserProfile=Object(p.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:a=t.sent,e.setState({loadingProfile:!1,profile:a}),console.log(a);case 5:case"end":return t.stop()}}),t)}))),e.state={loadingProfile:!0,profile:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getUserProfile()}},{key:"render",value:function(){var e=this.state,t=e.loadingProfile,a=e.profile,n=a.name,r=a.image,c=a.description,i=a.email;return e.profile?t?Object(U.jsxs)("div",{children:[Object(U.jsx)(I,{}),Object(U.jsx)(N,{})]}):Object(U.jsxs)("div",{"data-testid":"page-profile",children:[Object(U.jsx)(I,{}),Object(U.jsxs)("div",{className:"profile-card",children:[Object(U.jsxs)("label",{htmlFor:"nameUser",children:["Nome",Object(U.jsx)("span",{children:n})]}),Object(U.jsxs)("label",{htmlFor:"email",children:["E-mail:",Object(U.jsx)("p",{children:i})]}),Object(U.jsxs)("label",{htmlFor:"description",children:["Descri\xe7\xe3o:",Object(U.jsx)("p",{id:"description",children:c})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("img",{"data-testid":"profile-image",src:r,alt:""}),Object(U.jsx)(j.b,{to:"/profile/edit",children:Object(U.jsx)("button",{type:"button",children:"Editar perfil"})})]})]})]}):Object(U.jsx)(N,{})}}]),a}(n.Component)),H=(a(47),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onInputChange=function(t){var a=t.target,n=a.name,r="checkbox"===a.type?a.checked:a.value;e.setState(Object(O.a)({},n,r))},e.getUserProfileEdit=Object(p.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:a=t.sent,e.setState({loadingPorfileEdit:!1,nameUser:a.name,emailUser:a.email,descriptionUser:a.description,imageUser:a.image});case 4:case"end":return t.stop()}}),t)}))),e.updateUserProfile=Object(p.a)(m.a.mark((function t(){var a,n,r,c,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.nameUser,r=a.emailUser,c=a.descriptionUser,i=a.imageUser,e.setState({loadingPorfileEdit:!0}),t.next=4,S({name:n,email:r,image:i,description:c});case 4:e.setState({loadingPorfileEdit:!1,redirect:!0});case 5:case"end":return t.stop()}}),t)}))),e.formValidation=function(){var t=e.state,a=t.nameUser,n=t.emailUser,r=t.descriptionUser,c=t.imageUser;return!(a&&r&&c)||!/^[a-z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(n)},e.state={loadingPorfileEdit:!0,nameUser:"",emailUser:"",descriptionUser:"",imageUser:"",redirect:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getUserProfileEdit()}},{key:"render",value:function(){var e=this.state,t=e.redirect,a=e.loadingPorfileEdit,n=e.nameUser,r=e.emailUser,c=e.descriptionUser,i=e.imageUser;return t?Object(U.jsx)(b.a,{to:"/profile"}):a?Object(U.jsxs)("div",{children:[Object(U.jsx)(I,{}),Object(U.jsx)(N,{})]}):Object(U.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(U.jsx)(I,{}),Object(U.jsxs)("form",{className:"profile-edit-card",children:[Object(U.jsxs)("label",{htmlFor:"nameUser",children:[Object(U.jsx)("p",{children:"Fique \xe0 vontade para usar seu nome social!"}),"Nome",Object(U.jsx)("input",{"data-testid":"edit-input-name",id:"nameUser",name:"nameUser",value:n,required:!0,type:"text",onChange:this.onInputChange})]}),Object(U.jsxs)("label",{htmlFor:"emailUser",children:["Email",Object(U.jsx)("input",{"data-testid":"edit-input-email",placeholder:"example@example.com",type:"email",required:!0,name:"emailUser",id:"emailUser",value:r,onChange:this.onInputChange})]}),Object(U.jsxs)("label",{htmlFor:"descriptionUser",children:["Descri\xe7\xe3o",Object(U.jsx)("textarea",{"data-testid":"edit-input-description",name:"descriptionUser",id:"descriptionUser",required:!0,cols:"20",rows:"10",value:c,onChange:this.onInputChange})]}),Object(U.jsxs)("label",{htmlFor:"imageUser",children:["Link imagem",Object(U.jsx)("input",{"data-testid":"edit-input-image",type:"text",name:"imageUser",required:!0,id:"imageeUser",value:i,onChange:this.onInputChange})]}),Object(U.jsx)("button",{type:"button",disabled:this.formValidation(),"data-testid":"edit-button-save",onClick:this.updateUserProfile,children:"Editar perfil"})]})]})}}]),a}(n.Component)),Q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsx)("div",{"data-testid":"page-not-found",children:"NotFound"})}}]),a}(n.Component),W=Q,X=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsx)(j.a,{children:Object(U.jsxs)(b.d,{children:[Object(U.jsx)(b.b,{exact:!0,path:"/mytunes",children:Object(U.jsx)(C,{})}),Object(U.jsx)(b.b,{path:"/search",children:Object(U.jsx)(E,{})}),Object(U.jsx)(b.b,{path:"/album/:id",render:function(e){return Object(U.jsx)(Z,Object(s.a)({},e))}}),Object(U.jsx)(b.b,{path:"/favorites",render:function(e){return Object(U.jsx)(_,Object(s.a)({},e))}}),Object(U.jsx)(b.b,{exact:!0,path:"/profile",children:Object(U.jsx)(G,{})}),Object(U.jsx)(b.b,{exact:!0,path:"/profile/edit",children:Object(U.jsx)(H,{})}),Object(U.jsx)(b.b,{path:"*",children:Object(U.jsx)(W,{})})]})})}}]),a}(r.a.Component),Y=X;i.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(Y,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.0cdd2e3b.chunk.js.map