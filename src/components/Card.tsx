
import img from "../assets/poke.jpeg";
interface CardProps {
    name: string;
    url: string;
    }
const Card = ({ name, url }: CardProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href={url}>
        <img className="rounded-t-lg w-full" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">
            {name}
          </h5>
        </a>
      </div>
    </div>
  );
};

export default Card;
