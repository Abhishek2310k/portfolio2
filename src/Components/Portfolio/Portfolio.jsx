import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"Face Recognition System",
        img:"https://imgs.search.brave.com/GPNkNLc0cX8JQ_ehPAlckaQj4CheHZzg6rV8e96oyxE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2VmL0ZhY2VfZGV0/ZWN0aW9uLmpwZw",
        desc:"It is a face Recognition system made using CNN, SVM, FaceNet, Deepface machine learning models. It is capable of marking the attendance of the complete batch with just 1 group photo. It detects individual faces from the group photo and recognises them and after recognition can mark the attendance of the individual on its own"
    },
    {
        id:2,
        title:"Data Visualisation",
        img:"https://imgs.search.brave.com/xtFM09viHRS5wr2SLGE4TXkg7HldmK_-lBJx3VyZmg4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBj/bWFnLmNvbS9pbWFn/ZXJ5L2FydGljbGVz/LzAyWGt0NXNwM2ZW/bDVyR1V0azNEWE1p/LTcuZml0X2xpbS52/MTU2OTQ4NTM0OS5q/cGc",
        desc:"It is a react APP made using mongoDB as data base and NodeJs for backend. It helps in visualising the data provided in a more presentable and graph form. This was created for an assignment for Black Coffer"
    }
];
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
