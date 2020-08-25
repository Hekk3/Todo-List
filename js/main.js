const btnAddGroup = document.querySelector('.add-group');
const allGroups = document.querySelector('.side-bar-content'); // all groups in "side-bar-content"


let createGroup = (e) => {
	const group = document.createElement('div'); // create the a group
	const groupBtn = document.createElement('div'); // create button inside group


	group.classList.add('group-style');
	groupBtn.classList.add('group-style-btn');


	allGroups.append(group);
	group.prepend(groupBtn);

	groupBtn.addEventListener('click', () => {
		const list = document.createElement('div');


		list.classList.add('list-style');


		group.append(list);
	});
};


btnAddGroup.addEventListener('click', (e) => {
	createGroup(e);
});