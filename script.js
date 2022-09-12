const saveBtn = document.querySelector("#saveBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const usernameContainer = document.querySelector(".usernameContainer");

const refreshPage = () => {
  sessionStorage.setItem("reloaded", "true");
  window.location.reload();
}

const deleteRefreshSession = () => {
  const reloaded = sessionStorage.getItem('reloaded');

  if(reloaded) {
    sessionStorage.removeItem('reloaded')
  }
}

const setUsername = () => {
  saveBtn.addEventListener("click", () => {
    const username = document.querySelector("#username").value;
    const usernameAlreadyExists = localStorage.getItem('username');

    if(!usernameAlreadyExists) {
      localStorage.setItem('username', username.substring(20, 0));
      refreshPage();
      deleteRefreshSession();
    } else {
      console.log('username already exists!');
    }
  });
}

const getUsername = () => {
  const usernameAlreadyExists = localStorage.getItem('username');

  if(usernameAlreadyExists) {
    usernameContainer.textContent = `Congratulações, ${usernameAlreadyExists}!`;
  }
}

const deleteUsername = () => {
  const usernameAlreadyExists = localStorage.getItem('username');

  deleteBtn.addEventListener('click', () => {
    if(usernameAlreadyExists) {
      localStorage.removeItem('username');
      refreshPage();
      deleteRefreshSession();
    }
  })
}

setUsername();
getUsername();
deleteUsername();




