import "./CategoryList.scss";
import CategoryListItem from "./CategoryListItem";
import { v4 as uuidv4 } from "uuid";

function CategoryList() {
  return (
    <div className="category-list">
      <p className="category-list--title ellipsis noto">
        # Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio,
        repudiandae ipsa similique repellendus ullam vel, ad aut, inventore
        cumque nesciunt fugit deserunt cupiditate! Incidunt distinctio amet
        reprehenderit explicabo deserunt?
      </p>

      <ul className="list-wrapper flex">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <li className="list-item" key={uuidv4()}>
            <CategoryListItem />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
