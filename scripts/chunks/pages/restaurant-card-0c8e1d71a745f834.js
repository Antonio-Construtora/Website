(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{6539:function(a,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/restaurant-card",function(){return e(5514)}])},5514:function(a,s,e){"use strict";e.r(s),e.d(s,{default:function(){return o}});var i=e(5893),t=e(7294),l=a=>{let{item:s}=a,[e,l]=(0,t.useState)(!1),[n,c]=(0,t.useState)(1);return(0,i.jsx)("div",{className:"col-xl-4 col-lg-6","data-aos":"flip-up","data-aos-delay":200,"data-aos-duration":300,children:(0,i.jsxs)("div",{className:"dish",children:[(0,i.jsx)("img",{alt:"food-dish",src:s.image}),(0,i.jsxs)("div",{className:"dish-foods",style:{display:e==s.id?"none":"block"},children:[(0,i.jsx)("h3",{children:s.title}),(0,i.jsxs)("div",{className:"dish-icon",children:[(0,i.jsxs)("div",{className:"cafa-button",children:[" ",s.tags.map((a,s)=>(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)("a",{href:"#",children:a})," "]},s))]}),(0,i.jsxs)("div",{className:"dish-icon end",children:[(0,i.jsx)("i",{className:"info fa-solid fa-circle-info",onClick:()=>l(e!=s.id&&s.id)}),(0,i.jsxs)("div",{className:"star",children:[" ",(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fa-solid fa-heart"})})]})]})]}),(0,i.jsxs)("div",{className:"price",children:[(0,i.jsxs)("h2",{children:["$",s.price]}),(0,i.jsxs)("div",{className:"qty-input",children:[(0,i.jsx)("button",{className:"qty-count qty-count--minus","data-action":"minus",type:"button",onClick:()=>c(n>1?n-1:1),children:"-"}),(0,i.jsx)("input",{className:"product-qty",type:"number",name:"product-qty",value:n,onChange:a=>c(Number(a.target.value))}),(0,i.jsx)("button",{className:"qty-count qty-count--add","data-action":"add",type:"button",onClick:()=>c(n+1),children:"+"})]})]}),(0,i.jsxs)("button",{className:"button-price",children:["Add to Basket",(0,i.jsx)("i",{className:"fa-solid fa-bag-shopping"})]})]}),(0,i.jsxs)("div",{className:"dish-info",style:{display:e==s.id?"block":"none"},children:[(0,i.jsx)("i",{className:"info2 fa-solid fa-xmark",onClick:()=>l(!1)}),(0,i.jsx)("h5",{children:s.title}),(0,i.jsxs)("div",{className:"cafa-button",children:[" ",s.tags.map((a,s)=>(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)("a",{href:"#",children:a})," "]},s))]}),(0,i.jsx)("p",{children:"In egestas erat imperdiet sed euismod nisi porta. Ultrices sagittis orci a scelerisque. Diam quam nulla porttitor."}),(0,i.jsxs)("ul",{className:"menu-dish",children:[(0,i.jsx)("li",{children:"Nulla porttitor massa id;"}),(0,i.jsx)("li",{children:"Aliquam vestibulum morbi;"}),(0,i.jsx)("li",{children:"Blandit donec adipiscing;"})]})]})]})},s.id)},n=a=>{let{items:s}=a,[e,n]=(0,t.useState)("breakfast");return(0,i.jsx)("section",{className:"tabs gap",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"tabs-img-back",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"Provides","data-aos":"fade-up","data-aos-delay":200,"data-aos-duration":300,children:[(0,i.jsxs)("div",{className:"nav nav-pills me-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical",children:[(0,i.jsx)("button",{id:"v-pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-home",type:"button",role:"tab","aria-controls":"v-pills-home","aria-selected":"true",className:"nav-link ".concat("breakfast"==e?"active":""),onClick:()=>n("breakfast"),children:"Breakfast"}),(0,i.jsx)("button",{id:"v-pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-profile",type:"button",role:"tab","aria-controls":"v-pills-profile","aria-selected":"false",className:"nav-link ".concat("lunch"==e?"active":""),onClick:()=>n("lunch"),children:"Lunch"}),(0,i.jsx)("button",{id:"v-pills-messages-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-messages",type:"button",role:"tab","aria-controls":"v-pills-messages","aria-selected":"false",className:"nav-link ".concat("dinner"==e?"active":""),onClick:()=>n("dinner"),children:"Dinner"})]}),(0,i.jsxs)("div",{className:"like-meal",children:[" ",(0,i.jsxs)("a",{href:"#",children:[(0,i.jsx)("i",{className:"fa-solid fa-heart"}),"Like Meals"]})]})]})}),(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"tab-content",id:"v-pills-tabContent",children:[(0,i.jsx)("div",{className:"tab-pane fade ".concat("breakfast"==e?"show active":""),id:"v-pills-home",role:"tabpanel","aria-labelledby":"v-pills-home-tab",children:(0,i.jsx)("div",{className:"row",children:s.map((a,s)=>s<=5&&a.category.includes("breakfast")&&(0,i.jsx)(l,{item:a},a.id))})}),(0,i.jsx)("div",{className:"tab-pane fade ".concat("lunch"==e?"show active":""),id:"v-pills-profile",role:"tabpanel","aria-labelledby":"v-pills-profile-tab",children:(0,i.jsx)("div",{className:"row",children:s.map((a,s)=>s<=5&&a.category.includes("lunch")&&(0,i.jsx)(l,{item:a},a.id))})}),(0,i.jsx)("div",{className:"tab-pane fade ".concat("dinner"==e?"show active":""),id:"v-pills-messages",role:"tabpanel","aria-labelledby":"v-pills-messages-tab",children:(0,i.jsx)("div",{className:"row",children:s.map((a,s)=>s<=5&&a.category.includes("dinner")&&(0,i.jsx)(l,{item:a},a.id))})})]})})]})})})})},c=e(4747),r=e(1664),d=e.n(r),o=()=>{let a=[{id:1,image:"/assets/img/dish-13.png",title:"Egg, kiwi and sauce chilli",tags:["breakfast","brunch"],price:39,quantity:1,category:["breakfast","lunch","dinner"]},{id:2,image:"/assets/img/dish-6.png",title:"Potatoes with pork and dried fruits",tags:["breakfast","brunch"],price:39,quantity:1,category:["breakfast","dinner"]},{id:3,image:"/assets/img/dish-5.png",title:"Rice with shrimps and kiwi",tags:["breakfast","brunch"],price:39,quantity:1,category:["breakfast","lunch"]},{id:7,image:"/assets/img/dish-7.png",title:"Fruits with rice chips",tags:["breakfast","brunch"],price:39,quantity:1,category:["breakfast","lunch"]},{id:8,image:"/assets/img/dish-10.png",title:"Vegetables with rice chips",tags:["breakfast","brunch"],price:39,quantity:1,category:["breakfast","lunch","dinner"]},{id:9,image:"/assets/img/dish-11.png",title:"Pork with vegetables and...",tags:["breakfast","brunch"],price:39,quantity:1,category:["breakfast","lunch"]},{id:4,image:"/assets/img/dish-1.png",title:"Spaghetti with mushrooms and...",tags:["breakfast","brunch","dinner"],price:39,quantity:1,category:["others"]},{id:5,image:"/assets/img/dish-2.png",title:"Veal meat, tomatoes and...",tags:["breakfast","brunch"],price:39,quantity:1,category:["others"]},{id:6,image:"/assets/img/dish-4.png",title:"Sliced pork, avocado and...",tags:["breakfast","brunch"],price:39,quantity:1,category:["others"]}];return(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("section",{className:"hero-section about gap",style:{backgroundImage:"url(assets/img/background-1.png)"},children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsx)("div",{className:"col-lg-6","data-aos":"fade-up","data-aos-delay":300,"data-aos-duration":400,children:(0,i.jsxs)("div",{className:"about-text",children:[(0,i.jsxs)("ul",{className:"crumbs d-flex",children:[(0,i.jsx)("li",{children:(0,i.jsx)(d(),{href:"/",children:"Home"})}),(0,i.jsx)("li",{children:(0,i.jsxs)(d(),{href:"/",children:[(0,i.jsx)("i",{className:"fa-solid fa-right-long"}),"Restaurants"]})}),(0,i.jsx)("li",{className:"two",children:(0,i.jsxs)(d(),{href:"/",children:[(0,i.jsx)("i",{className:"fa-solid fa-right-long"}),"The Wilmington"]})})]}),(0,i.jsxs)("div",{className:"logo-detail",children:[(0,i.jsx)("img",{alt:"logo",src:"assets/img/logos-2.jpg"}),(0,i.jsx)("h2",{children:"Kennington Lane Cafe"})]}),(0,i.jsxs)("div",{className:"rate",children:[(0,i.jsx)("span",{children:"Rate:"}),(0,i.jsxs)("div",{className:"star",children:[(0,i.jsx)("i",{className:"fa-solid fa-star"}),(0,i.jsx)("i",{className:"fa-solid fa-star"}),(0,i.jsx)("i",{className:"fa-solid fa-star"}),(0,i.jsx)("i",{className:"fa-solid fa-star"}),(0,i.jsx)("i",{className:"fa-regular fa-star-half-stroke"})]}),(0,i.jsx)("span",{children:"CUISINES:"}),(0,i.jsxs)("div",{className:"cafa-button",children:[" ",(0,i.jsx)("a",{href:"#",children:"american"})," ",(0,i.jsx)("a",{href:"#",children:"steakhouse"})," ",(0,i.jsx)("a",{href:"#",children:"seafood"})]}),(0,i.jsx)("span",{children:"FEATURES:"}),(0,i.jsx)("p",{children:"Lorem mollis aliquam ut porttitor. Nisl rhoncus mattis rhoncus urna neque. Pharetra sit amet aliquam id. Urna nec tincidunt praesent semper feugiat nibh."})]})]})}),(0,i.jsx)("div",{className:"col-lg-6","data-aos":"fade-up","data-aos-delay":400,"data-aos-duration":500,children:(0,i.jsxs)("div",{className:"about-img",children:[(0,i.jsx)("img",{alt:"man",src:"assets/img/restaurant-1.jpg"}),(0,i.jsxs)("div",{className:"hours",children:[(0,i.jsx)("i",{className:"fa-regular fa-clock"}),(0,i.jsxs)("h4",{children:["9am – 12pm",(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:"Hours"})]})]}),(0,i.jsxs)("div",{className:"hours two",children:[(0,i.jsx)("i",{className:"fa-solid fa-utensils"}),(0,i.jsxs)("h4",{children:["Breakfast, Lunch, Dinner",(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:"Meals"})]})]})]})})]})})}),(0,i.jsx)(n,{items:a}),(0,i.jsx)("section",{className:"lunch-section gap",style:{background:"#fcfcfc"},children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{"data-aos":"fade-up","data-aos-delay":300,"data-aos-duration":400,children:"See also category Lunch"}),(0,i.jsx)("div",{className:"row",children:a.map((a,s)=>a.category.includes("others")&&(0,i.jsx)(l,{item:a},a.id))})]})})]})}}},function(a){a.O(0,[944,747,774,888,179],function(){return a(a.s=6539)}),_N_E=a.O()}]);