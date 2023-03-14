var date1 = new Date("2022-03-25");

export const blogData = [
    {
        title: "Using ChatCPT for blogs",
        subtitle: "Efficiently producing better content",
        previewText: "Achieving your blog goals becomes much easier when you pair your writing with ChatGPT because it creates a great structure...",
        coverImage: "Derek-Lord-Smiling-Small.jpg",
        paragraphs: [
            <p>this is a paragraph</p>,
            <p>this is another paragraph</p>,
            <p>this is the third paragraph</p>
        ],
        imagesOrCharts: [
            "Derek-Lord-Smiling-Small.jpg"
        ],
        categories: [
            "AI",
            "Blogging",
            "Productivity"
        ],
        date: `${date1.getDay()}/${date1.getMonth()}/${date1.getFullYear()}`
    },
    {
        title: "Here's another blog post",
        subtitle: "BOOM BOOM",
        previewText: "This looks like a nice place to put some text highlighting the blog post...",
        coverImage: "Derek-Lord-Smiling-Small.jpg",
        paragraphs: [
            <p>this is a paragraph</p>,
            <p>this is another paragraph</p>,
            <p>this is the third paragraph</p>
        ],
        imagesOrCharts: [
            "Derek-Lord-Smiling-Small.jpg"
        ],
        categories: [
            "Category",
            "Blogs",
            "Testing"
        ],
        date: Date("2023-03-14")
    }
]
