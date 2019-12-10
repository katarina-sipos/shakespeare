function fillIn() {
  var url = new URL(location.href);
  var noteName = url.searchParams.get("name");
  var noteData = url.searchParams.get("data");
  $("#form1").focus();
  $("#form1").val(noteName);
  $("#form7").focus();
  $("#form7").val(noteData);
}
