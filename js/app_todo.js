document.querySelector('.todo-list-add-btn-1').addEventListener('click', function(){
    var todoListItem = document.querySelector('.todo-list');
    var todoListInput = document.querySelector('.todo-list-input');
    var item = todoListInput.value;

    if (item) {

        html = "<li><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox' />" + item + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i></li>";

        todoListItem.insertAdjacentHTML('beforeend', html);

        todoListInput.value  = "";
        }
});
