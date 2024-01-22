import Link from "next/link";

export default async function PostsPage({ searchParams }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();

  // search specific user posts: http://localhost:3000/posts?user=10
  if (searchParams.user) {
    posts = posts.filter((post) => post.userID == searchParams.user);
  }

  if (searchParams.sort) {
    posts.reverse();
  }

  return (
    <div>
      <h2>My Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title} ({post.userId})
            </Link>
          </div>
        );
      })}
    </div>
  );
}
