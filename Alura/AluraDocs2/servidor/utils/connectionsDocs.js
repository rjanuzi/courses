const connectionsDocs = {};

function addConnection({ docName, userName }) {
  let currentUserList = connectionsDocs[docName];

  if (currentUserList) {
    if (!currentUserList.includes(userName)) {
      currentUserList.push(userName);
    }
  } else {
    connectionsDocs[docName] = [userName];
  }

  return connectionsDocs[docName];
}

function removeConnection(docName, userName) {
  let currentUserList = connectionsDocs[docName];

  if (currentUserList) {
    connectionsDocs[docName] = currentUserList.filter(
      (user) => user != userName
    );
  }

  return connectionsDocs[docName];
}

export { addConnection, removeConnection };
