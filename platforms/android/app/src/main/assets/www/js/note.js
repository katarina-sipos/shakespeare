$(document).on("click", "#back", function() {
  dialogToggle();
});

function dialogToggle() {
  var lang = localStorage.getItem("language");
  var item = "cancel";
  item = item.concat(lang);
  var buttonCancel = localStorage.getItem(item);
  var changesMsg ="changesMsg";
  var changesTitle = "changesTitle";
  changesMsg = changesMsg.concat(lang);
  var msg = localStorage.getItem(changesMsg);
  changesTitle = changesTitle.concat(lang);
  var title = localStorage.getItem(changesTitle);
  navigator.notification.confirm(
    msg, 
    onConfirm,
    title,
    ["OK", buttonCancel]
  );
}
function onConfirm(buttonIndex) {
  if (buttonIndex == 1) {
    window.open("index.html");
  } else {
    return;
  }
}
