import React, {useState} from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

// import './styles.scss';


export default ({
  activeItemId,
  onSelect,
  items
}) => {
  const [activeSubNav, setActiveSubNav] = useState({
    expanded: true,
    selectedId: activeItemId,
  });

  // Listen for parent prop changes and update state
  React.useEffect(() => {
    setActiveSubNav((originalSubNav) => ({
      expanded: originalSubNav.expanded,
      selectedId: activeItemId,
    }));
  }, [activeItemId]);

  function handleClick(itemId) {
    // call the callback if supplied
    onSelect.itemId;
  }

  function handleSubNavExpand(item) {
    if (activeSubNav.expanded) {
      const currentItemOrSubNavItemIsOpen =
        // either the parent item is expanded already
        item.itemId === activeSubNav.selectedId ||
        // or one of its expandable children is selected
        (item.subNav &&
          item.subNav.some(
            (_subNavItem) => _subNavItem.itemId === activeSubNav.selectedId
          )) ||
        false;

      setActiveSubNav({
        expanded:
          item.subNav && item.subNav.length > 0
            ? !currentItemOrSubNavItemIsOpen
            : false, // disable expansion value, if not expandable
        selectedId: item.itemId,
      });
    } else {
      setActiveSubNav({
        expanded: !!(item.subNav && item.subNav.length > 0), // expand if expandable
        selectedId: item.itemId,
      });
    }
  }
  console.log(items)

  return (
    <>
      {items.length > 0 && (
        <nav
          role="navigation"
          aria-label="side-navigation"
          className="side-navigation-panel"
        >
       {items.map((item) => {
            const ElemBefore = item.elemBefore;
            const isActiveTab =
              // item is expanded and
              activeSubNav.expanded &&
              // either the current expandable section is selected
              (item.itemId === activeSubNav.selectedId ||
                // or some item in the expandable section of the current item is selected or active
                (item.subNav &&
                  item.subNav.some(
                    (_subNavItem) =>
                      _subNavItem.itemId === activeSubNav.selectedId
                  )) ||
                false);

            return (
              <ul key={item.itemId} className="side-navigation-panel-select">
                <li className="side-navigation-panel-select-wrap">
                  <div
                    onClick={() => {
                      handleSubNavExpand(item);
                      handleClick(item.itemId);
                    }}
                    className={`side-navigation-panel-select-option hover:bg-gray-100 hover:text-gray-800 hover:border-pink-500 focus:outline-none ${
                      activeSubNav.selectedId === item.itemId
                        ? 'side-navigation-panel-select-option-selected'
                        : ''
                    }`}
                  >
                    <span className="side-navigation-panel-select-option-wrap">
                      {ElemBefore && <ElemBefore />}

                      <span className="side-navigation-panel-select-option-text">
                      <span>
                        {item.title}
                      </span>
                      </span>
                    </span>

                    {item.subNav &&
                      item.subNav.length > 0 &&
                      (isActiveTab ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />)}
                  </div>
                </li>
                

                {item.subNav && item.subNav.length > 0 && isActiveTab && (
                  <ul className="side-navigation-panel-select-inner">
                    {item.subNav.map((subNavItem) => {
                      return (
                        <li
                          key={subNavItem.itemId}
                          className="side-navigation-panel-select-inner-wrap"
                        >
                          <div
                            onClick={() => {
                              setActiveSubNav({
                                ...activeSubNav,
                                selectedId: subNavItem.itemId,
                              });
                              handleClick(subNavItem.itemId);
                            }}
                            className={`side-navigation-panel-select-inner-option hover:bg-gray-100 hover:text-gray-800 hover:border-pink-500 ${
                            activeSubNav.selectedId === subNavItem.itemId
                                 ? 'side-navigation-panel-select-inner-option-selected'
                                 : ''
                             } `}
                          >
                            <Link to={`posts/${subNavItem.itemId}`}>{subNavItem.title}</Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </ul>
            );
          })}
        </nav>
      )}
    </>
  );
};
