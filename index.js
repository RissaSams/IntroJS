document.addEventListener("DOMContentLoaded", function() {
    const createList = document.getElementById("createList");

    createList.addEventListener("click", function () {
        let creatListName = promt("Enter a name");

        const taskListName = document.getElementById("TaskLisName");
        taskListName.innerText = createListName
        
    })

})

    

