import{a as n,i as d,S as f}from"./assets/vendor-BBSqv8W6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const l=document.querySelector(".app-form"),c=document.querySelector(".gallery");l.addEventListener("submit",i=>{i.preventDefault(),c.innerHTML="";const r=l.elements.search.value;n.get("https://pixabay.com/api/",{params:{key:"49373653-d22f76e72713087fcf9bb4de1",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>{console.log(s);const o=s.data.hits;o.length===0?d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(o.forEach(e=>{console.log(e),c.innerHTML+=` 
                    <li class="gallery-item">
                        <a href="${e.largeImageURL}" class="image">
                        <img src="${e.webformatURL}" width="360" height="200" alt="${e.tags}"/>
                        </a>
                        <div class="content">
                            <div class="info">
                                <h5 class="key">Likes</h5>
                                <p class="value">${e.likes}</p>
                            </div>
                            <div class="info">
                                <h5 class="key">Views</h5>
                                <p class="value">${e.views}</p>
                            </div>
                            <div class="info">
                                <h5 class="key">Comments</h5>
                                <p class="value">${e.comments}</p>
                            </div>
                            <div class="info">
                                <h5 class="key">Downloads</h5>
                                <p class="value">${e.downloads}</p>
                            </div>
                        </div>
                    </li>`}),new f(".gallery a",{}).refresh())}).catch(s=>{console.error(s)})});
//# sourceMappingURL=index.js.map
