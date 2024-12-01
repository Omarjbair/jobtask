import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
    "use server";

    const title = formData.get("title");
    const body = formData.get("body");

    if (!title || !body) {
        throw new Error("Both title and body are required.");
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
    });

    if (!response.ok) {
        throw new Error("Failed to create the post.");
    }

    redirect("/");
}

const CreatePostPage = () => {
    return (
        <div className="container center">
            <h1 className="form-heading">Create a New Post</h1>
            <form action={createPost} method="POST">
                <div className="form-input">
                    <label htmlFor="title">Title:</label>
                    <input placeholder="enter the title" type="text" id="title" name="title" required />
                </div>
                <div className="form-input">
                    <label htmlFor="body">Body:</label>
                    <textarea placeholder="enter the body" id="body" name="body" required />
                </div>
                <button className="create-button" type="submit" style={{marginTop: "5px"}}>
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default CreatePostPage;
