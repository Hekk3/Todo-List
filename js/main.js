const btnAddGroup = document.querySelector('.add-group');
const allGroups = document.querySelector('.side-bar-content'); // all groups in "side-bar-content"


let createGroup = (e) => {
	// create elements
	const group = document.createElement('div'); // create the group
	const addListBtn = document.createElement('div'); // create button inside the group
	const groupBtnDelete = document.createElement('div'); // create button for delete the group
	const inputName = document.querySelector('.add-name-group').value; // get value from input
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
	inputName === "" ? nameGroup.textContent = 'group' : nameGroup.textContent = inputName ;


	// add content for a button - addListBtn
	addListBtn.textContent = 'add List'


	// add elements to anoter elements
	allGroups.append(group);
	group.prepend(addListBtn);
	group.prepend(nameGroup);
	group.prepend(groupBtnDelete);
	group.prepend(listHide);


	const addList = () => {
		const list = document.createElement('div');


		// this is a check. We check, if we have an elements, where is a class -- list-hide-active, we remove it;
		for (let i = 0; i < group.childNodes.length; i++) {
			group.childNodes[i].classList.remove('list-hide-active');
		}


		// add class for list
		list.classList.add('list-style');


		// add the list in the group
		group.append(list);


		// hide list
		listHide.addEventListener('click', () => {
			list.classList.toggle('list-hide-active');
		});
	}


	// add lists
	addListBtn.addEventListener('click', () => {
		addList();
	});


	// delete group
	groupBtnDelete.addEventListener('click', () => {
		group.classList.add('group-delete-anim');

		setTimeout(() => group.remove(), 300);
	});
};


btnAddGroup.addEventListener('click', (e) => {
	createGroup(e);
});