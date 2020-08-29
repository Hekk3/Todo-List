const btnAddGroup = document.querySelector('.add-group');
const allGroups = document.querySelector('.side-bar-content'); // all groups in "side-bar-content"


let createGroup = (e) => {
	// create elements
	const group = document.createElement('div'); // create the group
	const groupBtn = document.createElement('div'); // create button inside the group
	const groupBtnDelete = document.createElement('div'); // create button for delete the group
	const inputName = document.querySelector('.add-name-group').value;
	const nameGroup = document.createElement('p');
	const listHide = document.createElement('div');

	// add classes for elements
	group.classList.add('group-style');
	groupBtn.classList.add('group-style-btn');
	groupBtnDelete.classList.add('group-style-btn-delete');
	nameGroup.classList.add('name-group');
	listHide.classList.add('list-hide');


	// add name for group
	inputName === "" ? nameGroup.textContent = 'group' : nameGroup.textContent = inputName ;


	// add elements to anoter elements
	allGroups.append(group);
	group.prepend(groupBtn);
	group.prepend(nameGroup);
	group.prepend(groupBtnDelete);
	group.prepend(listHide);


	const createList = () => {
		const list = document.createElement('div');

		list.classList.add('list-style');

		group.append(list);

		// hide list
		listHide.addEventListener('click', () => {

			list.classList.toggle('list-hide-active');
		});
	}


	// add lists
	groupBtn.addEventListener('click', () => {
		createList();
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