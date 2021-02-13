import React, {
  useState,
  useEffect
} from "react";
import ReactDOM, { render } from "react-dom";
import { fetchUser, fetchPosts } from "./fakeApi";
import { findNodeByComponentName, Utils } from "react-fiber-traverse";


function ProfilePage() {
  const [user, setUser] = useState(null);
  const [character, setCharacter] = useState(1);

  useEffect(() => {
    fetchUser(character).then(u => setUser(u));
  }, [character]);

  if (user === null) {
    return <p>Loading profile...</p>;
  }
  return (
    <>
      <h1>{user}</h1>
      <ProfileTimeline user={user} character={character} />
      <button onClick={() => setCharacter(character + 1)}>Change Character</button>
    </>
  );
}

function ProfileTimeline(props) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts(props.character).then(p => setPosts(p));
  }, [props.character]);

  if (posts === null) {
    return <h2>Loading posts...</h2>;
  }
  return (
    <>
      {posts.length === 1 ? <h5>{props.user} has been seen on {posts.length} starship</h5> : <h5>{props.user} has been seen on {posts.length} starships</h5>}
      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>{post}</li>
        ))}
      </ul>
    </>
  );
}


// const rootElement = document.getElementById("root");
// render(<ProfilePage />, rootElement);

// let fiberRoot = rootElement._reactRootContainer._internalRoot;
// console.log('fiberRoot', fiberRoot);
// let hostRootFiberNode = fiberRoot.current;
// let hostRootFiberNodeSibling = fiberRoot.current;
// let hostRootFiberNodeChild = fiberRoot.current;
// console.log('initial hostRoot', hostRootFiberNode);

// //first child of hostRoot is ProfilePage 
// let profilePageRoot = hostRootFiberNode.child;
// console.log('profilePageRoot', profilePageRoot);

// while (hostRootFiberNodeSibling) {
//   hostRootFiberNodeSibling = hostRootFiberNodeSibling.sibling;
//   console.log('hostroot in sibling loop', hostRootFiberNodeSibling);
// }

// while (hostRootFiberNodeChild) {
//   hostRootFiberNodeChild = hostRootFiberNodeChild.child;
//   console.log('hostroot in child loop', hostRootFiberNodeChild);
// }


// ReactDOM.createRoot(rootElement).render(
//   <ProfilePage />
// );





