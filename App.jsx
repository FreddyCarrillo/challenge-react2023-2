import React, {useState} from 'react';

const menuConfig = [
  {
    title: 'Home',
  },
  {
    title: 'Services',
    subItems: ['Cooking', 'Cleaning'],
  },
  {
    title: 'Contact',
    subItems: ['Phone', 'Main'],
  },
];

export function App() {

  const nameButtonTemplate = {
    enabled: 'Hide',
    disabled: 'Expand',
  }

  const [activeRender, setActiveRender] = useState(false);
  const [dataRender, setDataRender] = useState([]);
  const [positionRender, setPositionRender] = useState();

  const handleButton = (position, nameButton) => {
    if(nameButton === nameButtonTemplate.enabled){
      setActiveRender(false);
    }else{
      setActiveRender(true);
      setPositionRender(position);
      setDataRender(menuConfig[position]);
    }
  }

  const renderSubMenu = (id) => {
    return (
      (activeRender && positionRender === id)
        &&
          <ul data-test-id={`ul-${dataRender.title.toLowerCase()}`}>
            {
              dataRender.subItems?.map((item, index)=>(
                <li key={index} data-test-id={`li-${dataRender.title.toLowerCase()}-${item.toLowerCase()}`}>{item}</li>
              ))
            }
          </ul>
    )
  }

  const renderNameButton = (id) => {
    return (activeRender && positionRender === id) ? nameButtonTemplate.enabled: nameButtonTemplate.disabled;
  }

  return (
    <div className="menu-wrapper">
      {
        menuConfig.map((menu, id)=>(
          <div key={id} data-test-id={`first-level-${menu.title.toLowerCase()}`}>
            {menu.title}
            {
              (menu.subItems)
                && 
                  <button data-test-id={`button-${menu.title.toLowerCase()}`} onClick={()=>{handleButton(id,renderNameButton(id))}}>
                    { renderNameButton(id) }
                  </button>
            }

            {
              renderSubMenu(id)
            }

          </div>
        ))
      }
    </div>
  );
}
