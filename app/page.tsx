import Login from "@/components/Login";
import Navbar from "@/components/navbar";
import Table from "@/components/Table";
import Link from 'next/link';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getData = async ():Promise<Post[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data =  await res.json();
    return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Navbar/>
      <div className="container">
        <h1 className="heading">Welcome to blog posts</h1>
        <h2 className="sub-heading">Create, Read, Update, Delete Any post</h2>
        <button className="create-button">
          <Link href={'/create'}>
              create new post
          </Link>
        </button>
        <Table data={data} rowsPerPage={10}/>
      </div>
    </main>
  );
}
