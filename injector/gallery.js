// 照片墙主题
var article = document.getElementsByClassName("page-content")[0];
var markdown_body = document.createElement("div");
markdown_body.setAttribute("class", "markdown-body")

var card_columns = document.createElement("div");
card_columns.setAttribute("class", "card-columns")

for(const each of gallery || []) {
	var card = document.createElement("div");
	card.setAttribute("class", "card");

		var card_a = document.createElement("a");
		card_a.setAttribute("data-fancybox", "images")
		card_a.setAttribute("href", each.link)
		card_a.setAttribute("alt", "")
		card_a.setAttribute("title", "")
		card_a.setAttribute("style", "")
		card.appendChild(card_a)

		var card_img = document.createElement("img");
		card_img.setAttribute("class", "card-img-top")
		card_img.setAttribute("src", each.link)
		card_img.setAttribute("alt", "")
		card.appendChild(card_img)

		var card_div = document.createElement("div")
		card_div.setAttribute("class", "card-body")
			var card_div_h5 = document.createElement("h5")
			card_div_h5.setAttribute("class", "card-title")
			card_div_h5.textContent =  each.title

			var card_div_p = document.createElement("h5")
			card_div_p.setAttribute("class", "card-text")
			card_div_p.textContent =  each.intro

			card_div.appendChild(card_div_h5)
			card_div.appendChild(card_div_p)
		card.appendChild(card_div)

	card_columns.appendChild(card)
}

markdown_body.appendChild(card_columns)
article.appendChild(markdown_body)

/*
// 评论区
var comment = document.getElementsByClassName("article")[0];
comment.setAttribute("class", "comments")
comment.setAttribute("id", "comments")

if(gallery.comments.enable) {
  <article class="comments" id="comments">
    <% var type = '_partial/comments/' + theme.gallery.comments.type %>
    <%- partial(type) %>
  </article>
}
*/
