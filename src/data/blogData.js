

export const blogData = [
    {
        title: "Using ChatCPT for blogs",
        subtitle: "Efficiently producing better content",
        previewText: "Achieving your blog goals becomes much easier when you pair your writing with ChatGPT because it creates a great structure...",
        // THIS NEEDS TO BE AN OBJECT WITH LINK AND ALT TEXT
        coverImage: {
            src: "Derek-Lord-Smiling-Small.jpg",
            alt: "Derek smiling all happy like"
        },
        paragraphs: [
            <p key="0">this is a paragraph</p>,
            <p key="1">this is another paragraph</p>,
            <p key="2">this is the third paragraph</p>
        ],
        imagesOrCharts: [
            {
                src: "Derek-Lord-Smiling-Small.jpg",
                alt: "Derek smiling all happy like"
            }
        ],
        categories: [
            "AI",
            "Blogging",
            "Productivity"
        ],
        date: new Date("2022-03-25")
    }
]
