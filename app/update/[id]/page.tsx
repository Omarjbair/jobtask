import { redirect } from "next/navigation";

const updatePost = async (formData: FormData) => {
    "use server";

    const id = formData.get('id') || '';
    const title = formData.get('title') || '';
    const body = formData.get('textArea') || '';
    
    if (!id || !title || !body) {
        throw new Error('All fields are required.');
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
    });

    if (!response.ok) {
        throw new Error('Failed to update the post.');
    }

    redirect(`/`);
}
const UpdatePage = ({ params:{ id }}: {params:{ id : string}}) => {
    return (
        <div className="container center">
            <h1 className="form-heading">Update Post</h1>
            <form action={updatePost}>
                <input type="hidden" name="id" value={id}/>
                <div className="form-input">
                    <label htmlFor="title">Title:</label>
                    <input placeholder="enter the title" id="title" type="text" name="title" required/>
                </div>
                <div className="form-input">
                    <label htmlFor="textArea">Body</label>
                    <textarea placeholder="enter the body" id="textArea" name="textArea" required/>
                </div>
                <button style={{padding: "10px 15px"}} className="update-button" type="submit">Update Post</button>
            </form>
        </div>
    );
};

export default UpdatePage;
