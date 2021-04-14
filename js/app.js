$(function () {
  // Sort lists
  $(".sortable-ul").sortable({
    cancel: ".not-move",
  });
  $(".sortable-ul li > ul")
    .sortable({
      connectWith: ".sortable-ul li > ul",
      handle: ".col-card",
      placeholder: "card-placeholder",
      forcePlaceholderSize: true,
      // start: function (event, ui) {
      //   var start_pos = ui.item.index();
      //   ui.item.data("col-title", start_pos);
      // },
      // update: function (event, ui) {
      //   var start_pos = ui.item.data("col-title");
      //   var end_pos = ui.item.index();
      // },
    })
    .disableSelection();

  // Modals
  $(".create-task-link").magnificPopup({
    type: "inline",
    midClick: true,
    mainClass: "mfp-fade",
  });
  $(".create-column-link").magnificPopup({
    type: "inline",
    midClick: true,
    mainClass: "mfp-fade",
  });
  $(".info-link").magnificPopup({
    type: "inline",
    midClick: true,
    mainClass: "mfp-fade",
  });
  $(".modal-close").click(function (e) {
    e.preventDefault();
    $.magnificPopup.close();
    $("form").trigger("reset");
    $(".btn-select").html(usersArray[0]);
    myEditor.setData("");
  });

  // Text Editor
  ClassicEditor.create(document.querySelector("#descr"), {
    toolbar: {
      items: ["bold", "italic", "underline"],
    },
  })
    .then((editor) => {
      // console.log( 'Editor was initialized', editor );
      myEditor = editor;
    })
    .catch((error) => {
      console.error(error);
    });

  // Datepicker
  $("#date").datepicker({
    dateFormat: "dd.mm.yy",
    minDate: new Date(),
  });

  // Add New Column
  $("#add-new-col").submit(function (e) {
    e.preventDefault();
    $.magnificPopup.close();

    let col_name = $("#col-name").val();
    let new_col = $("<li class='col'></li>");

    $("#last-col").before(new_col);
    new_col.append(
      `<div class="col-title">${col_name}</div><ul class='ui-sortable'></ul>`
    );

    $(".sortable-ul li > ul").sortable({
      connectWith: [new_col.children("ul"), ".sortable-ul li > ul"],
      handle: ".col-card",
      placeholder: "card-placeholder",
      forcePlaceholderSize: true,
    });

    $("#add-new-col").trigger("reset");
  });

  // Add New Task
  $(".add-task").click(function (e) {
    e.preventDefault();
    $.magnificPopup.close();

    let name = $("#name").val();
    let descr = myEditor.getData();
    let date = $("#date").val();
    let time = $("#time").val();
    let author = $(".users-select li").html();

    var projects = [
      "<div class='card-project pr-x'>Project X</div>",
      "<div class='card-project pr-y'>Project Y</div>",
      "<div class='card-project pr-z'>Project Z</div>",
    ];
    var index = Math.floor(Math.random() * projects.length); //project random value index

    $(".col-card").each(function () {
      number = $(".col-card").index(this) + 1;
    }); //number of new task (BM-xxx)

    var todo = `<li><div class='col-card'><div class='card-title'>${name}</div><div class='card-about'>`;
    if (date != "") {
      todo = todo + `<p class='until'>Until ${date}</p>`;
    }
    if (time != "") {
      todo = todo + `<p class='time'>${time}</p></div>`;
    }
    todo = todo + projects[index];
    if (descr != "") {
      todo = todo + `<div class='description'><span>Description</span><p>${descr}</p></div>`;
    }
    todo = todo + `<div class='card-bottom'><div class='bm'>BM-${number}</div>`;
    if (author != "") {
      todo = todo + `<div class='ava'><p>${author}</p></div></div>`;
    }
    todo = todo + "</div></li>";

    $("#todo > ul > li:first-of-type").before(todo);

    $("#add-new-task").trigger("reset");
  });

  // Card info
  $(".ui-sortable").on("dblclick", ".col-card", function () {
    let bm_task = $(this).find(".bm").text();
    let title = $(this).find(".card-title").text();
    let descr = $(this).find(".description").text();
    let until = $(this).find(".until").text();
    let time = $(this).find(".time").text();
    let user = $(this).find(".ava").html();

    $("#info-modal").find(".bm").text(bm_task);
    $("#info-modal").find(".card-title").text(title);
    $("#info-modal").find(".description").html(descr);
    $("#info-modal").find(".until").text(until);
    $("#info-modal").find(".time").text(time);
    $("#info-modal").find(".ava").html(user);

    $(".info-link").click();
  });
});

// Users Select
var usersArray = [];
$("select option").each(function () {
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  if (img) {
    var item =
      '<li><img src="' +
      img +
      '" alt="" value="' +
      value +
      '"/><span>' +
      text +
      "</span></li>";
  } else {
    var item = "<li><span>" + text + "</span></li>";
  }
  usersArray.push(item);
});

$("#users-list").html(usersArray);
$(".btn-select").html(usersArray[0]);

$("#users-list li").click(function (e) {
  e.preventDefault();
  var img = $(this).find("img").attr("src");
  var value = $(this).find("img").attr("value");
  var text = this.innerText;

  if (img) {
    var item =
      '<li><img src="' + img + '" alt="" /><span>' + text + "</span></li>";
  } else {
    var item = "<li><span>" + text + "</span></li>";
  }
  $(".btn-select").html(item);
  $(".btn-select").attr("value", value);
  $(".users-lay").toggle();
  $(".users-select").toggleClass("active");
});

$(".btn-select").click(function (e) {
  e.preventDefault();
  $(".users-lay").toggle();
  $(".users-select").toggleClass("active");
});
