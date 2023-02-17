//bai_61 : useEffect with fake Chat App
const lessons = [
  {
    id: 1,
    name: "ReactJS là gì? Tại sao nên học ReactJS",
  },
  {
    id: 2,
    name: "SPA/MPA là gì",
  },
  {
    id: 3,
    name: "Arrow function",
  },
];

function Content() {
  const [lessonID, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonID}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonID}`, handleComment);
    };
  }, [lessonID]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonID === lesson.id ? "red" : "#333",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
