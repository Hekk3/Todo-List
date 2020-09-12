const btnAddGroup = document.querySelector('.add-group');

const createGroup = () => {
	// create elements
	const group = document.createElement('div'); // create the group
	const addListBtn = document.createElement('div'); // create button inside the group
	const groupBtnDelete = document.createElement('div'); // create button for delete the group
	const inputNameGroup = document.querySelector('.add-name-group').value; // get value from input
	const allGroups = document.querySelector('.side-bar-content'); // all groups in "side-bar-content"
	const nameGroup = document.createElement('p');
	const listHide = document.createElement('div');

	// add classes for elements
	group.classList.add('group-style');
	addListBtn.classList.add('add-list-btn');
	groupBtnDelete.classList.add('group-style-btn-delete');
	nameGroup.classList.add('name-group');
	listHide.classList.add('list-hide');


	// add groups in the localStorage
	let groupsArray = [];

	// but at the beginning, we add the groups in the array
	groupsArray.push(group);


	// add name for group
	inputNameGroup === "" ? nameGroup.textContent = 'group' : nameGroup.textContent = inputNameGroup ;


	// add content for a button - addListBtn
	addListBtn.textContent = 'add List'


	// add elements to anoter elements
	allGroups.append(group);
	group.prepend(addListBtn);
	group.prepend(nameGroup);
	group.prepend(groupBtnDelete);
	group.prepend(listHide);


	// add lists
	addListBtn.addEventListener('click', () => {
		createList(group, listHide, groupBtnDelete);
	});


	// delete group
	groupBtnDelete.addEventListener('click', () => {
		group.classList.add('group-delete-anim');

		setTimeout(() => group.remove(), 300);
	});
};

const createList = (group, listHide, groupBtnDelete) => {
	const list = document.createElement('div');
	const inputNameList = document.createElement('input');
	const btnListDelete = document.createElement('div');

	// add name list on default.
	inputNameList.value = "List";


	// this is a check. We check, if we have an elements, where is a class -- list-hide-active, we remove it;
	for (let i = 0; i < group.childNodes.length; i++) {
		group.childNodes[i].classList.remove('list-hide-active');
	}


	// add class for list and etc
	list.classList.add('list-style');
	inputNameList.classList.add('input-list');
	btnListDelete.classList.add('btn-list-delete');

	// add atribute
	inputNameList.setAttribute('maxlength', 20);


	// add the list in the group
	group.append(list);
	// add inputName for list
	list.append(inputNameList);
	list.append(btnListDelete);


	// hide list
	listHide.addEventListener('click', () => {
		list.classList.toggle('list-hide-active');
	});


	// Delete list
	btnListDelete.addEventListener('click', () => {
		list.classList.add('list-delete-anim');

		setTimeout(() => list.remove(), 300);
	});


	// Create content in the list with task inside;
	createListContent(list, btnListDelete, groupBtnDelete);
};

const createListContent = (list, btnListDelete, groupBtnDelete) => {
	const	tasksBody = document.querySelector('.tasks'),
			taskContainer = document.createElement('div'),
			taskContainerPanel = document.createElement('div');


	taskContainer.classList.add('task-container');
	taskContainerPanel.classList.add('task-container__panel')


	tasksBody.append(taskContainer);
	taskContainer.append(taskContainerPanel);


	// hide taskContainer
	list.addEventListener('click', () => {
		const allTasks = document.querySelectorAll('.task-container');


		for (let i = 0; i < allTasks.length; i++) {
			allTasks[i].classList.remove('task-container_active');
		}


		taskContainer.classList.add('task-container_active');
	});


	// remove taskContainer
	btnListDelete.addEventListener('click', () => {
		taskContainer.remove();
	});

	groupBtnDelete.addEventListener('click', () => {
		taskContainer.remove();
	});

};


btnAddGroup.addEventListener('click', (e) => {
	createGroup(e);
});