import test from './test'

export function fetchUser(id) {
  return fetch(`https://swapi.dev/api/people/${id}/`)
    .then(response => response.json())
    .then(data => {
      const { name } = data;
      return name;
    })
}

function ProfileTimeline(props) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // fetchPosts(props.character).then(p => setPosts(p));
    axios.get(`https://swapi.dev/api/people/${props.character}/`)
      .then(response => response.json())
      .then(data => {
        const { starships } = data.data;
        return starships;
      })
      .then(starships => setPosts(starships));
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


const rootElement = document.getElementById("root");
render(<ProfilePage />, rootElement);

let fiberRoot = rootElement._reactRootContainer._internalRoot;
console.log('fiberRoot', fiberRoot);
let hostRootFiberNode = fiberRoot.current;
console.log('initial hostRoot', hostRootFiberNode);

//first child of hostRoot is ProfilePage 
let profilePageRoot = hostRootFiberNode.child;
console.log('profilePageRoot', profilePageRoot);
