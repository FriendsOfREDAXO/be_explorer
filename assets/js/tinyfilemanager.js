function newfolder(e) {
  var t = document.getElementById("newfilename").value,
    n = document.querySelector('input[name="newfile"]:checked').value;
  null !== t && "" !== t && n && (window.location.hash = "#", window.location.search = "page=be_explorer/explorer&p=" + encodeURIComponent(e) + "&new=" + encodeURIComponent(t) + "&type=" + encodeURIComponent(n))
}

function rename(e, t) {
  var n = prompt("New name", t);
  null !== n && "" !== n && n != t && (window.location.search = "page=be_explorer/explorer&p=" + encodeURIComponent(e) + "&ren=" + encodeURIComponent(t) + "&to=" + encodeURIComponent(n))
}

function change_checkboxes(e, t) {
  for (var n = e.length - 1; n >= 0; n--) e[n].checked = "boolean" == typeof t ? t : !e[n].checked
}

function get_checkboxes() {
  for (var e = document.getElementsByName("file[]"), t = [], n = e.length - 1; n >= 0; n--)(e[n].type = "checkbox") && t.push(e[n]);
  return t
}

function select_all() {
  change_checkboxes(get_checkboxes(), !0)
}

function unselect_all() {
  change_checkboxes(get_checkboxes(), !1)
}

function invert_all() {
  change_checkboxes(get_checkboxes())
}

function mailto(e, t) {
  var n = new XMLHttpRequest,
    a = "path=" + e + "&file=" + t + "&type=mail&ajax=true";
  n.open("POST", "", !0), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onreadystatechange = function() {
    4 == n.readyState && 200 == n.status && alert(n.responseText)
  }, n.send(a)
}

function showSearch(e) {
  var t = new XMLHttpRequest,
    n = "path=" + e + "&type=search&ajax=true";
  t.open("POST", "", !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onreadystatechange = function() {
    4 == t.readyState && 200 == t.status && (window.searchObj = t.responseText, document.getElementById("searchresultWrapper").innerHTML = "", window.location.hash = "#searchResult")
  }, t.send(n)
}

function getSearchResult(e, t) {
  var n = [],
    a = [];
  return e.forEach(function(e) {
    "folder" === e.type ? (getSearchResult(e.items, t), e.name.toLowerCase().match(t) && n.push(e)) : "file" === e.type && e.name.toLowerCase().match(t) && a.push(e)
  }), {
    folders: n,
    files: a
  }
}

function checkbox_toggle() {
  var e = get_checkboxes();
  e.push(this), change_checkboxes(e)
}

function backup(e, t) {
  var n = new XMLHttpRequest,
    a = "path=" + e + "&file=" + t + "&type=backup&ajax=true";
  return n.open("POST", "", !0), n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onreadystatechange = function() {
    4 == n.readyState && 200 == n.status && alert(n.responseText)
  }, n.send(a), !1
}



// $(document).ready(function() {
// var codemirror = $(document.getElementById('codemirror-id-1')).next().find('CodeMirror');
// // var codemirror = $('.CodeMirror')[0];
// alert(codemirror);  
// });


function edit_save(e, t) {
  if( t == "codemirror" ) {
    var codemirror = $('.CodeMirror')[0].CodeMirror;  
    var n = codemirror.getValue();
  } else if (t == "nrl") {
    var n = document.getElementById("normal-editor").value;
  }
  if (n) {
    var a = document.createElement("form");
    a.setAttribute("method", "POST"), a.setAttribute("action", "");
    var o = document.createElement("textarea");
    o.setAttribute("type", "textarea"), o.setAttribute("name", "savedata");
    var c = document.createTextNode(n);
    o.appendChild(c), a.appendChild(o), document.body.appendChild(a), a.submit()
  }
}



  function init_php_file_tree() {
  if (document.getElementsByTagName) {
    for (var e = document.getElementsByTagName("LI"), t = 0; t < e.length; t++) {
      var n = e[t].className;
      if (n.indexOf("pft-directory") > -1)
        for (var a = e[t].childNodes, o = 0; o < a.length; o++) "A" == a[o].tagName && (a[o].onclick = function() {
          for (var e = this.nextSibling;;) {
            if (null == e) return !1;
            if ("UL" == e.tagName) {
              var t = "none" == e.style.display;
              return e.style.display = t ? "block" : "none", this.className = t ? "open" : "closed", !1
            }
            e = e.nextSibling
          }
          return !1
        }, a[o].className = n.indexOf("open") > -1 ? "open" : "closed"), "UL" == a[o].tagName && (a[o].style.display = n.indexOf("open") > -1 ? "block" : "none")
    }
    return !1
  }
}
$( document ).ready(function() {
  var searchEl = document.querySelector("input[name=be_explorer_search]"), timeout = null;
  // console.log(searchEl);
  searchEl.onkeyup = function(e) {
    clearTimeout(timeout);
    var t = JSON.parse(window.searchObj), n = document.querySelector("input[name=be_explorer_search]").value;
    timeout = setTimeout(function() {
      if (n.length >= 2) {
        var e = getSearchResult(t, n), a = "", o = "";
        e.folders.forEach(function(e) {
          a += '<li class="' + e.type + '"><a href="?page=be_explorer/explorer&p=' + e.path + '">' + e.name + "</a></li>"
        })
        e.files.forEach(function(e) {
          o += '<li class="' + e.type + '"><a href="?page=be_explorer/explorer&p=' + e.path + "&view=" + e.name + '">' + e.name + "</a></li>"
        })
        document.getElementById("searchresultWrapper").innerHTML = '<div class="model-wrapper">' + a + o + "</div>"
      }
    }, 500)
  }
});


window.onload = init_php_file_tree;
if (document.getElementById("file-tree-view")) {
  var tableViewHt = document.getElementById("main-table").offsetHeight - 2;
  document.getElementById("file-tree-view").setAttribute("style", "height:" + tableViewHt + "px")
};