import { User_icon } from "../Utils/Links";

const commentsData = [
  {
    name: "Vinit prajapati",
    text: "Lorem ipsum dolor sit amet.",
    replies: [],
  },
  {
    name: "Vinit prajapati",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "Vinit prajapati",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "Vinit prajapati",
            text: "Lorem ipsum dolor sit amet.",
            replies: [
              {
                name: "Vinit prajapati",
                text: "Lorem ipsum dolor sit amet.",
                replies: [
                  {
                    name: "Vinit prajapati",
                    text: "Lorem ipsum dolor sit amet.",
                    replies: [
                      {
                        name: "Vinit prajapati",
                        text: "Lorem ipsum dolor sit amet.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Vinit prajapati",
        text: "Lorem ipsum dolor sit amet.",
        replies: [],
      },
      {
        name: "Vinit prajapati",
        text: "Lorem ipsum dolor sit amet.",
        replies: [],
      },
    ],
  },
  {
    name: "Vinit prajapati",
    text: "Lorem ipsum dolor sit amet.",
    replies: [],
  },
  {
    name: "Vinit prajapati",
    text: "Lorem ipsum dolor sit amet.",
    replies: [],
  },
  {
    name: "Vinit prajapati",
    text: "Lorem ipsum dolor sit amet.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text} = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-12 h-12" alt="user" src={User_icon}></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        {/* i will have to use recursion for replies for more comments */}
      </div>
    </div>
  );
};

const CommentsList = ({ comments}) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l-2 border-l-gray-300 ml-5">
      <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
