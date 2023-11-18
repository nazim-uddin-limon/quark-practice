const Posts = [
  {
    id: "post123",
    title: "Post title",
    content: "Post content",
    postImage: 'https://cdn.vectorstock.com/i/preview-1x/59/73/education-background-vector-6195973.jpg',
    likes: 0,
    Comments: [
      {
        commentId: "com123",
        comment: "Comment Text",
        userId: "user123",
        createdAt: new Date(),
      },
    ],
    author: {
      id: "user123",
      name: "Jhon Doe",
      avater:
        "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
    },
    createdAt: new Date(),
  },
  {
    id: "post1234",
    title: "Post title",
    content: "Post content",
    postImage: 'https://cdn.vectorstock.com/i/preview-1x/59/73/education-background-vector-6195973.jpg',
    likes: 0,
    Comments: [
      {
        commentId: "com123",
        comment: "Comment Text",
        userId: "user123",
        createdAt: new Date(),
      },
    ],
    author: {
      id: "user123",
      name: "Jhon Doe",
      avater:
        "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
    },
    createdAt: new Date(),
  },
];

export default Posts;
