import './navbar.css';

const NavBar = () => {
  return (
    <>
      <div className="navbar flex flex-col relative mb-5 ">
        <div className="logo-title flex justify-between w-full  ">
          <p>
            <i className="bi bi-list text-3xl"></i>
          </p>
          <p className="text-2xl">NueWear</p>
          <div className="about flex gap-10 text-[18px]">
            <p>About</p>
            <p>FAQs</p>
            <p>
              <i className="bi bi-person-circle absolute text-3xl -top-1 "></i>
            </p>
          </div>
        </div>
        <div className=" flex gap-10 items-center w-full  ">
          <div className="drop-down p-2 bg-gray-100 rounded-3xl text-gray-500">
            <select name="categories" id="categories" className="px-10">
              <option value="" disabled selected>
                Categories
              </option>
              <option value="men">Men</option>
            </select>
          </div>
          <div className="drop-down p-2 bg-gray-100 rounded-3xl text-gray-500">
            <select name="categories" id="categories" className="px-10">
              <option value="" disabled>
                New Products
              </option>
              <option value="men">Men</option>
            </select>
          </div>
          <div className="search p-3 relative">
            <input
              type="text"
              placeholder="Search"
              className="p-2 w-80 bg-gray-100 rounded-3xl"
            />
            <i class="bi bi-search absolute right-8 bottom-5 "></i>
          </div>
          <button className="border-2 border-gray-300 p-3 h-13 rounded-3xl w-30">
            <p>Men</p>
          </button>
          <button className="border-2 border-gray-300 p-3 h-13 rounded-3xl w-30">
            <p>Women</p>
          </button>
          <button className="border-2 border-gray-300 p-3 h-13 rounded-3xl w-30">
            <p>Children</p>
          </button>
          <button className="border-2 border-gray-300 p-3 h-13 rounded-3xl w-30">
            <p>Brands</p>
          </button>
        </div>
      </div>
    </>
  );
};
export default NavBar;
