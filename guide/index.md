---
layout: default
title: 가이드 글 보러가기
description: 각종 계산기·지식·인사이트 가이드 글을 모아 제공합니다.
permalink: /guide/
---

<h1>📘 가이드 글 보러가기</h1>
<p class="muted">계산기 공식, 생활·재테크 지식, 해설 가이드를 모두 모아 빠르게 찾아볼 수 있는 통합 가이드 페이지입니다.</p>

<input type="text" id="guide-search" placeholder="검색: 제목 또는 설명 입력" class="search-input">

<div id="tag-container" class="tag-container"></div>

<div class="sort-area">
  <select id="sort-select">
    <option value="latest">🆕 최신순</option>
    <option value="title">🔤 제목순</option>
  </select>
</div>

<div id="guide-sections"></div>

<style>
/* 그대로 사용 */
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  // 🔹 Jekyll에서 guide 카테고리 글 불러오기
  const guides = [
    {% for post in site.categories.guide %}
    {
      title: "{{ post.title | escape }}",
      url: "{{ post.url | relative_url }}",
      desc: "{{ post.description | default: post.excerpt | strip_html | strip_newlines | escape }}",
      // front matter에 tags: [..] 없으면 빈 배열
      tags: [{% for tag in post.tags %}"{{ tag }}"{% unless forloop.last %},{% endunless %}{% endfor %}],
      // section 이라는 필드를 쓰고 싶다면 각 글 front matter에 section: "건강", "부동산" 등 넣기
      category: "{{ post.section | default: '기타 가이드' }}",
      date: "{{ post.date | date_to_xmlschema }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  const tagSet = new Set();
  guides.forEach(g => g.tags.forEach(t => tagSet.add(t)));

  const tagContainer = document.getElementById("tag-container");
  tagSet.forEach(t => {
    const tagEl = document.createElement("span");
    tagEl.className = "tag";
    tagEl.textContent = "#" + t;
    tagEl.dataset.tag = t;
    tagContainer.appendChild(tagEl);
  });

  function renderSections(filteredGuides = guides) {
    const container = document.getElementById("guide-sections");
    container.innerHTML = "";

    const sectionMap = {};
    filteredGuides.forEach(g => {
      const c = g.category || "기타 가이드";
      if (!sectionMap[c]) sectionMap[c] = [];
      sectionMap[c].push(g);
    });

    Object.keys(sectionMap).forEach(category => {
      const secDiv = document.createElement("div");
      secDiv.innerHTML = `<h2 class="guide-section-title">${category}</h2>`;

      const grid = document.createElement("div");
      grid.className = "guide-grid";

      sectionMap[category].forEach(g => {
        const card = document.createElement("a");
        card.className = "guide-card";
        card.href = g.url;
        card.innerHTML = `
          <div class="guide-title">${g.title}</div>
          <div class="guide-desc">${g.desc}</div>
        `;
        grid.appendChild(card);
      });

      secDiv.appendChild(grid);
      container.appendChild(secDiv);
    });
  }

  // 초기 렌더
  renderSections();

  // 검색
  document.getElementById("guide-search").addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const filtered = guides.filter(g =>
      g.title.toLowerCase().includes(keyword) ||
      g.desc.toLowerCase().includes(keyword)
    );
    renderSections(filtered);
  });

  // 태그 필터
  tagContainer.addEventListener("click", function (e) {
    if (!e.target.classList.contains("tag")) return;
    e.target.classList.toggle("active");

    const activeTags = [...document.querySelectorAll(".tag.active")].map(t => t.dataset.tag);

    let filtered = guides;
    if (activeTags.length > 0) {
      filtered = guides.filter(g =>
        activeTags.every(t => g.tags.includes(t))
      );
    }
    renderSections(filtered);
  });

  // 정렬
  document.getElementById("sort-select").addEventListener("change", function () {
    let sorted = [...guides];
    if (this.value === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    renderSections(sorted);
  });
});
</script>
