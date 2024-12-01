import Link from "next/link";
import { redirect } from "next/navigation";

export async function deletePost(formData: FormData) {
    "use server";

    const id = formData.get('id');

    if(!id){
        throw new Error('there is no id for the post');
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Failed to delete the post.');
    }

    redirect(`/`);
}

const DeletePage = ({ params: { id }}: { params:{id: string }}) => { 
    return (
        <div className="container deletePage">
            <h1 className="deletePageTitle">Are you sure you want to delete this post?</h1>
            <p className="warning-text">This action is permanent and cannot be undone.</p>
            <div className="deletePageButtons">
                <form action={deletePost} method="DELETE">
                    <input type="hidden" name="id" value={id} />
                    <button type="submit" className="delete-button" style={{padding: "10px 15px"}}>
                        Delete Post
                    </button>
                </form>
                <Link className="cancel-button" href="/">Cancel</Link>
            </div>
        </div>
    );
};

export default DeletePage;
