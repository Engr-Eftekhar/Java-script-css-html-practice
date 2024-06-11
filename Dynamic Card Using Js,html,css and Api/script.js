// dummy data
// const posts = [
//     {
//         title: " this is title1",
//         body: " this is body1"
//     },
//     {
//         title: "this is title2",
//         body: "this is body2"
//     },
//     {
//         title:"this is title3",
//         body: "this is body3"
//     },
//     {
//         title:"this is title4",
//         body: " this is body4"
//     },

// ];

/* <div class="post">
            <h4 class="post-title">Post title</h4>

            <p class="post-body">Post Description 1</p>


        </div> */


        // fetchdata
        const fetchData = async (config) => {
            try{
                const res = await axios(config);
            return res.data;
            }catch (error){
                throw Error ("data is not fetched");
            }
        };
        

        

// Selection
 const postsElement= document.querySelector(".posts");

 const loadAllData = async () => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) =>{
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = 
        `<h4 class="post-title">${post.title}</h4>

            <p class="post-body">${post.body}</p>`; 
            postsElement.appendChild(postElement);
    });
 };
 loadAllData();

