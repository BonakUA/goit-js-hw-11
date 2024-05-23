import{i as l,S as p}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m=n=>n.reduce((s,{tags:t,webformatURL:o,largeImageURL:e,likes:r,views:a,comments:d,downloads:f})=>s+`<li class="photo-container">
      <a href=${e} class="card-link js-card-link">
          <img class="photo" src="${o}" alt="${t}" >
      </a>
      <div class="info">
          <div class="info-item">
              <span class="title">Likes</span>
              <span class="info">${r}</span>
          </div>
          <div class="info-item">
              <span class="title">Views</span>
              <span class="info">${a}</span>
          </div>
          <div class="info-item">
              <span class="title">Comments</span>
              <span class="info">${d}</span>
          </div>
          <div class="info-item">
              <span class="title">Downloads</span>
              <span class="info">${f}</span>
          </div>
      </div>
  </li>
      `,""),h="43981018-e90bba841625934206eceb401",y="https://pixabay.com/api/",g=n=>{const s=new URLSearchParams({key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:21});return fetch(`${y}/?${s}`).then(t=>{if(!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()})},i=document.querySelector(".gallery"),L=document.querySelector(".form"),u=document.querySelector(".loader");let c;function v(n){n.preventDefault();const s=n.target.elements.text.value.trim();if(i.innerHTML="",s==="")return l.error({message:"Sorry, there are no images matching your search query. Please try again!"});i.innerHTML="",u.classList.remove("is-hidden"),g(s).then(t=>{if(t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}i.innerHTML=m(t.hits),c?c.refresh():c=new p(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(t=>console.log(t)).finally(()=>{n.target.reset(),u.classList.add("is-hidden")})}L.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
