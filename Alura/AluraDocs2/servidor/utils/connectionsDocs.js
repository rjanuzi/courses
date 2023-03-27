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

export default addConnection;
