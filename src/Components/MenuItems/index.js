// Menu Item component with scroll handling
const MenuItems = ({ openSideBar, items, level = 1, numberPrefix = "" }) => (
  <ul style={{ paddingLeft: 0, marginTop: 0 }}>
    {items.map((item, index) => {
      const currentNumber = numberPrefix
        ? `${numberPrefix}.${index + 1}`
        : `${index + 1}`;
      const hasChildren = item.children && item.children.length > 0;

      const handleScroll = (id) => {
        openSideBar(false);
        const section = document.getElementById(id);
        if (section) {
          const offset = 75;
          const sectionPosition =
            section.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
          });
        }
      };

      return (
        <li
          className="menu-list"
          key={index}
          data-level={level}
          data-number={currentNumber}
        >
          <div
            onClick={() => handleScroll(item.id)}
            style={{
              paddingLeft:
                level === 1 ? 0 : level === 2 ? 14 : level === 3 ? 30 : 45,
              cursor: "pointer",
              textAlign: "left",
              marginTop: level === 1 ? 15 : 5,
              fontSize: 18,
              color: level === 1 ? "#d54101" : "black",
            }}
          >
            {item.title}
          </div>
          {hasChildren && (
            <MenuItems
              openSideBar={openSideBar}
              items={item.children}
              level={level + 1}
              numberPrefix={currentNumber}
            />
          )}
        </li>
      );
    })}
  </ul>
);

export default MenuItems;
